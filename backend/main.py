import json
import os
import time
from datetime import datetime, timedelta
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from staybyrail.api import _cache_key, _get_cached, _set_cached, search_hotels_multi
from staybyrail.events import get_events as fetch_events
from staybyrail.filters import filter_hotels, haversine_km, is_excluded_type, has_fridge, walk_minutes
from staybyrail.stations import LINES, get_cities, get_lines, get_stations

load_dotenv()

app = FastAPI(title="StayByRail")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"ok": True}


class SettingsPayload(BaseModel):
    serpapi_key: str


@app.get("/api/settings")
def get_settings():
    key = os.environ.get("SERPAPI_KEY", "")
    if key and len(key) > 7:
        preview = key[:4] + "****..." + key[-3:]
    elif key:
        preview = "****"
    else:
        preview = ""
    return {"serpapi_key_set": bool(key), "serpapi_key_preview": preview}


@app.post("/api/settings")
def update_settings(payload: SettingsPayload):
    # In production, user keys are sent per-request via X-SerpAPI-Key header.
    # This endpoint is kept for backwards compat but only updates the server default.
    if payload.serpapi_key:
        os.environ["SERPAPI_KEY"] = payload.serpapi_key
    return {"ok": True, "serpapi_key_set": bool(os.environ.get("SERPAPI_KEY"))}


CITY_COUNTRIES = {
    # Japan
    "tokyo": "Japan", "osaka": "Japan", "kyoto": "Japan", "hiroshima": "Japan",
    "fukuoka": "Japan", "sapporo": "Japan", "nagoya": "Japan", "yokohama": "Japan",
    "kobe": "Japan", "nara": "Japan", "kanazawa": "Japan", "sendai": "Japan",
    # UK
    "london": "United Kingdom", "manchester": "United Kingdom", "birmingham": "United Kingdom",
    "newcastle": "United Kingdom", "liverpool": "United Kingdom", "glasgow": "United Kingdom",
    "edinburgh": "United Kingdom", "nottingham": "United Kingdom", "sheffield": "United Kingdom",
    "leeds": "United Kingdom", "cardiff": "United Kingdom", "bristol": "United Kingdom",
    "brighton": "United Kingdom",
    # France
    "paris": "France", "lyon": "France", "marseille": "France", "nice": "France",
    "toulouse": "France", "bordeaux": "France", "strasbourg": "France",
    # Germany
    "berlin": "Germany", "munich": "Germany", "hamburg": "Germany", "frankfurt": "Germany",
    "cologne": "Germany", "dusseldorf": "Germany", "stuttgart": "Germany", "nuremberg": "Germany",
    # Spain
    "madrid": "Spain", "barcelona": "Spain", "valencia": "Spain", "seville": "Spain",
    "bilbao": "Spain", "malaga": "Spain", "palma_de_mallorca": "Spain",
    # Thailand
    "bangkok": "Thailand", "chiang_mai": "Thailand", "phuket": "Thailand",
    "pattaya": "Thailand", "krabi": "Thailand",
    # China (including Hong Kong SAR)
    "beijing": "China", "shanghai": "China", "guangzhou": "China", "shenzhen": "China",
    "chengdu": "China", "xian": "China", "hangzhou": "China", "hong_kong": "China",
    # South Korea
    "seoul": "South Korea", "busan": "South Korea", "incheon": "South Korea",
    "daegu": "South Korea", "daejeon": "South Korea",
    # United States
    "new_york": "United States", "washington_dc": "United States", "chicago": "United States",
    "boston": "United States", "san_francisco": "United States", "philadelphia": "United States",
}


@app.get("/api/cities")
def list_cities():
    result = {}
    for city in get_cities():
        lines = get_lines(city)
        result[city] = {
            "lines": lines,
            "country": CITY_COUNTRIES.get(city, "Other"),
        }
    return result


@app.get("/api/debug")
def debug():
    import staybyrail.api as api_mod
    key = os.environ.get("SERPAPI_KEY", "")
    return {
        "key_set": bool(key),
        "key_len": len(key),
        "key_start": key[:8] if key else "",
        "cwd": os.getcwd(),
        "env_file_exists": os.path.exists(os.path.join(os.path.dirname(__file__), ".env")),
        "cache_dir": str(api_mod.CACHE_DIR),
        "cache_files": len(list(api_mod.CACHE_DIR.glob("*.json"))),
    }


@app.get("/api/sources")
def list_sources():
    """Show which hotel data sources are active based on configured API keys."""
    sources = [
        {
            "id": "google_hotels",
            "name": "Google Hotels",
            "description": "Aggregates Booking.com, Expedia, Hotels.com, Agoda, Trip.com & more",
            "active": bool(os.environ.get("SERPAPI_KEY")),
            "key_env": "SERPAPI_KEY",
        },
        {
            "id": "booking.com",
            "name": "Booking.com",
            "description": "Direct Booking.com search via RapidAPI",
            "active": bool(os.environ.get("RAPIDAPI_KEY")),
            "key_env": "RAPIDAPI_KEY",
        },
        {
            "id": "tripadvisor",
            "name": "TripAdvisor",
            "description": "TripAdvisor hotel search via RapidAPI",
            "active": bool(os.environ.get("RAPIDAPI_KEY")),
            "key_env": "RAPIDAPI_KEY",
        },
    ]
    return sources


@app.get("/api/key-status")
def key_status(request: Request):
    """Check if API keys are valid / have remaining quota."""
    import requests as http

    serp_key = request.headers.get("x-serpapi-key") or os.environ.get("SERPAPI_KEY", "")
    rapid_key = request.headers.get("x-rapidapi-key") or os.environ.get("RAPIDAPI_KEY", "")

    result = {"serpapi": {"configured": False}, "rapidapi": {"configured": False}}

    # Check SerpAPI: their /account endpoint returns searches_remaining
    if serp_key:
        result["serpapi"]["configured"] = True
        try:
            resp = http.get(
                "https://serpapi.com/account.json",
                params={"api_key": serp_key},
                timeout=5,
            )
            if resp.status_code == 200:
                data = resp.json()
                remaining = data.get("total_searches_left", 0)
                plan = data.get("plan_name", "")
                result["serpapi"]["valid"] = True
                result["serpapi"]["remaining"] = remaining
                result["serpapi"]["plan"] = plan
            else:
                result["serpapi"]["valid"] = False
                result["serpapi"]["error"] = "Invalid key"
        except Exception:
            result["serpapi"]["valid"] = None
            result["serpapi"]["error"] = "Could not reach SerpAPI"

    # Check RapidAPI: hit a lightweight endpoint to see if the key works
    if rapid_key:
        result["rapidapi"]["configured"] = True
        try:
            resp = http.get(
                "https://booking-com15.p.rapidapi.com/api/v1/meta/getExchangeRates",
                params={"base_currency": "GBP"},
                headers={
                    "X-RapidAPI-Key": rapid_key,
                    "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
                },
                timeout=5,
            )
            if resp.status_code == 200:
                result["rapidapi"]["valid"] = True
            elif resp.status_code == 429:
                result["rapidapi"]["valid"] = True
                result["rapidapi"]["rate_limited"] = True
                result["rapidapi"]["error"] = "Rate limit reached"
            elif resp.status_code == 401:
                result["rapidapi"]["valid"] = False
                result["rapidapi"]["error"] = "Invalid key"
            else:
                # 403 (not subscribed to this test API), 4xx, 5xx — key reached
                # RapidAPI gateway so it is a real key; subscription is tested at search time
                result["rapidapi"]["valid"] = True
        except Exception:
            result["rapidapi"]["valid"] = None
            result["rapidapi"]["error"] = "Could not reach RapidAPI"

    return result


# ---- Live train departures ----

_departures_cache: dict = {}
_DEPARTURES_TTL = 120  # 2 minutes


@app.get("/api/departures")
def get_departures(station: str, country: str = ""):
    """Live departures for a station. Supports UK (National Rail) and Japan (ODPT)."""
    import requests as http

    cache_key = f"{station}|{country}".lower()
    cached = _departures_cache.get(cache_key)
    if cached and time.time() - cached["ts"] < _DEPARTURES_TTL:
        return cached["data"]

    departures = []
    source = ""

    country_lower = country.lower()

    # ---- UK: National Rail Darwin (Huxley2 proxy or direct) ----
    if country_lower in ("gb", "uk", "united kingdom"):
        nr_key = os.environ.get("NATIONALRAIL_API_KEY", "")
        if nr_key:
            try:
                resp = http.get(
                    f"https://huxley2.azurewebsites.net/departures/{station}",
                    params={"accessToken": nr_key, "expand": "true"},
                    timeout=8,
                )
                data = resp.json()
                for svc in (data.get("trainServices") or [])[:12]:
                    departures.append({
                        "time": svc.get("std", ""),
                        "expected": svc.get("etd", ""),
                        "destination": svc.get("destination", [{}])[0].get("locationName", ""),
                        "platform": svc.get("platform", ""),
                        "operator": svc.get("operator", ""),
                        "status": svc.get("etd", "On time"),
                    })
                source = "National Rail"
            except Exception:
                pass

    # ---- Japan (Tokyo): ODPT API ----
    elif country_lower in ("jp", "japan"):
        odpt_key = os.environ.get("ODPT_API_KEY", "")
        if odpt_key:
            try:
                # Search station timetable by station name
                resp = http.get(
                    "https://api.odpt.org/api/v4/odpt:StationTimetable",
                    params={
                        "odpt:station": f"odpt.Station:JR-East.{station.replace(' ', '')}",
                        "acl:consumerKey": odpt_key,
                    },
                    timeout=8,
                )
                timetables = resp.json()
                if timetables:
                    # Get current time to find upcoming departures
                    from datetime import datetime as dt
                    now = dt.utcnow()
                    # Japan is UTC+9
                    jp_hour = (now.hour + 9) % 24
                    jp_min = now.minute
                    now_str = f"{jp_hour:02d}:{jp_min:02d}"

                    all_deps = []
                    for tt in timetables:
                        direction = (tt.get("odpt:railDirection", "") or "").split(".")[-1]
                        for obj in tt.get("odpt:stationTimetableObject", []):
                            dep_time = obj.get("odpt:departureTime", "")
                            if dep_time >= now_str:
                                train_type = (obj.get("odpt:trainType", "") or "").split(".")[-1]
                                dest_stations = obj.get("odpt:destinationStation", [])
                                dest = dest_stations[0].split(".")[-1] if dest_stations else direction
                                all_deps.append({
                                    "time": dep_time,
                                    "expected": dep_time,
                                    "destination": dest.replace(".", " "),
                                    "platform": "",
                                    "operator": "JR East",
                                    "status": train_type or "Local",
                                })
                    # Sort and take next 12
                    all_deps.sort(key=lambda x: x["time"])
                    departures = all_deps[:12]
                source = "ODPT"
            except Exception:
                pass

    result = {"departures": departures, "source": source, "station": station}
    _departures_cache[cache_key] = {"ts": time.time(), "data": result}
    return result


# ---- Events (multi-source: Ticketmaster, PredictHQ, Eventbrite) ----

@app.get("/api/events")
def get_events(city: str, country_code: str = ""):
    return fetch_events(city, country_code)


# ---- Tourist tips (user-submitted, stored in JSON file) ----
TIPS_FILE = Path(__file__).parent / "data" / "tips.json"
TIPS_FILE.parent.mkdir(exist_ok=True)

def _load_tips():
    if TIPS_FILE.exists():
        return json.loads(TIPS_FILE.read_text(encoding="utf-8"))
    return {}

def _save_tips(tips):
    TIPS_FILE.write_text(json.dumps(tips, ensure_ascii=False, indent=2), encoding="utf-8")


class TipPayload(BaseModel):
    city: str
    name: str
    tip: str


@app.get("/api/tips")
def get_tips(city: str):
    tips = _load_tips()
    return {"tips": tips.get(city.lower(), [])}


@app.post("/api/tips")
def submit_tip(payload: TipPayload):
    city_key = payload.city.lower().strip()
    name = payload.name.strip()[:50]
    tip = payload.tip.strip()[:500]
    if not city_key or not name or not tip:
        raise HTTPException(400, "city, name, and tip are required")
    tips = _load_tips()
    if city_key not in tips:
        tips[city_key] = []
    tips[city_key].append({
        "name": name,
        "tip": tip,
        "ts": datetime.now().isoformat(),
    })
    _save_tips(tips)
    return {"ok": True}


# ---- Station search (across all cities) ----

@app.get("/api/stations/search")
def search_stations(q: str):
    """Search for stations by name across all cities."""
    query = q.lower().strip()
    if len(query) < 2:
        return {"results": []}
    results = []
    for city_key, city_data in LINES.items():
        for line_key, line_data in city_data.items():
            for s in line_data.get("stations", []):
                if query in s["name"].lower():
                    results.append({
                        "station": s["name"],
                        "city": city_key,
                        "line": line_key,
                        "line_name": line_data.get("name", line_key),
                        "lat": s["lat"],
                        "lon": s["lon"],
                    })
    return {"results": results[:20]}


@app.get("/api/stations")
def list_stations(city: str, line: str, popular_only: bool = True):
    stations = get_stations(city, line, popular_only)
    if not stations:
        raise HTTPException(404, "City/line not found")
    return stations


def _best_thumbnail(images):
    """Pick the best image URL: prefer original_image from booking sites over Google proxy."""
    if not images:
        return None
    first = images[0] if images else {}
    # original_image is usually from the booking site directly (no referrer issues)
    original = first.get("original_image", "")
    thumb = first.get("thumbnail", "")
    # Prefer original unless it's also a Google proxy URL
    if original and "googleusercontent.com" not in original:
        return original
    return thumb or original or None


@app.get("/api/search")
def search(
    request: Request,
    city: str,
    line: str,
    check_in: str,
    check_out: str,
    max_price: int = 100,
    currency: str = "GBP",
    adults: int = 2,
    children: int = 0,
    popular_only: bool = True,
    station: str | None = None,
    stations_filter: str | None = Query(None, alias="stations"),
):
    # Use per-request keys if provided, otherwise fall back to server env
    api_key = request.headers.get("x-serpapi-key") or os.environ.get("SERPAPI_KEY", "")
    rapidapi_key = request.headers.get("x-rapidapi-key") or os.environ.get("RAPIDAPI_KEY", "")

    stations = get_stations(city, line, popular_only)
    if not stations:
        raise HTTPException(404, "City/line not found")

    if stations_filter:
        # Multi-station filter: comma-separated list
        wanted = {n.strip().lower() for n in stations_filter.split(",")}
        all_stations = get_stations(city, line, popular_only=False)
        stations = [s for s in all_stations if s["name"].lower() in wanted]
    elif station:
        stations = [s for s in stations if s["name"].lower() == station.lower()]
        if not stations:
            all_stations = get_stations(city, line, popular_only=False)
            stations = [s for s in all_stations if s["name"].lower() == station.lower()]
        if not stations:
            raise HTTPException(404, f"Station '{station}' not found")

    # Calculate number of nights for total price
    try:
        d_in = datetime.strptime(check_in, "%Y-%m-%d")
        d_out = datetime.strptime(check_out, "%Y-%m-%d")
        num_nights = (d_out - d_in).days
        if num_nights < 1:
            raise ValueError
    except ValueError:
        raise HTTPException(400, "Invalid dates. check_out must be after check_in.")

    # ---- Full-response cache (exact same search = zero API calls) ----
    search_cache_params = {
        "endpoint": "search_v2",
        "city": city.lower().strip(),
        "line": line.lower().strip(),
        "check_in": check_in,
        "check_out": check_out,
        "max_price": max_price,
        "currency": currency,
        "adults": adults,
        "children": children,
        "popular_only": popular_only,
        "station": (station or "").lower().strip(),
        "stations": (stations_filter or "").lower().strip(),
    }
    search_cache_key = _cache_key(search_cache_params)
    cached_response = _get_cached(search_cache_key)
    if cached_response is not None:
        cached_response["from_cache"] = True
        return cached_response

    # ---- Search a few anchor stations spread along the line, then assign by distance ----
    # Pick up to 3 anchors (start, middle, end) for good geographic coverage.
    # ~4-6 API calls instead of 20, with 60-80 unique hotels.
    if len(stations) <= 3:
        anchors = stations
    else:
        mid = len(stations) // 2
        anchors = [stations[0], stations[mid], stations[-1]]

    raw = []
    seen_raw = set()
    for anchor in anchors:
        query = f"hotels near {anchor['name']} Station {city.title()}"
        try:
            batch = search_hotels_multi(
                query=query,
                check_in=check_in,
                check_out=check_out,
                max_price=max_price,
                currency=currency,
                adults=adults,
                children=children,
                lat=anchor["lat"],
                lon=anchor["lon"],
                api_key_override=api_key,
                rapidapi_key_override=rapidapi_key,
            )
        except Exception:
            batch = []
        for h in batch:
            name = h.get("name", "")
            if name and name not in seen_raw:
                seen_raw.add(name)
                raw.append(h)

    # Assign each hotel to its nearest station and calculate distance
    station_buckets = {s["name"]: {"station": s, "hotels": []} for s in stations}
    seen_hotels = {}

    for h in raw:
        if is_excluded_type(h):
            continue

        name = h.get("name", "")
        if not name or name in seen_hotels:
            continue

        gps = h.get("gps_coordinates", {})
        lat = gps.get("latitude")
        lon = gps.get("longitude")
        if not lat or not lon:
            continue

        # Find nearest station on this line
        best_station = None
        best_dist = float("inf")
        for s in stations:
            d = haversine_km(lat, lon, s["lat"], s["lon"])
            if d < best_dist:
                best_dist = d
                best_station = s

        # Skip hotels more than 2km from any station
        if best_dist > 2.0:
            continue

        seen_hotels[name] = True
        walk_min = walk_minutes(best_dist)
        amenities = h.get("amenities", [])

        rate = h.get("rate_per_night", {})
        price_num = rate.get("extracted_lowest")
        price_str = rate.get("lowest") or ""
        before_tax_num = rate.get("extracted_before_taxes_fees")
        before_tax_str = rate.get("before_taxes_fees") or ""

        if price_num is None and price_str:
            cleaned = "".join(c for c in price_str if c.isdigit() or c == ".")
            try:
                price_num = float(cleaned)
            except ValueError:
                pass

        total_price = round(price_num * num_nights, 2) if price_num else None
        before_tax_total = round(before_tax_num * num_nights, 2) if before_tax_num else None
        source = h.get("_source", "google_hotels")

        station_buckets[best_station["name"]]["hotels"].append({
            "name": name,
            "type": h.get("type", ""),
            "source": source,
            "price_per_night": price_num,
            "price_per_night_str": price_str,
            "price_before_tax": before_tax_num,
            "price_before_tax_str": before_tax_str,
            "total_price": total_price,
            "total_price_str": f"£{total_price:.0f}" if total_price else None,
            "total_before_tax": before_tax_total,
            "total_before_tax_str": f"£{before_tax_total:.0f}" if before_tax_total else None,
            "num_nights": num_nights,
            "hotel_class": h.get("hotel_class"),
            "overall_rating": h.get("overall_rating"),
            "reviews": h.get("reviews"),
            "amenities": amenities,
            "has_fridge": has_fridge(amenities),
            "walk_minutes": walk_min,
            "distance_km": round(best_dist, 2),
            "images": h.get("images", []),
            "link": h.get("link"),
            "check_in_time": h.get("check_in_time"),
            "check_out_time": h.get("check_out_time"),
            "gps_coordinates": gps,
            "nearest_station": best_station["name"],
            "thumbnail": _best_thumbnail(h.get("images")),
        })

    # Build results grouped by station (preserve original station order)
    results_by_station = []
    for s in stations:
        bucket = station_buckets[s["name"]]
        hotels = bucket["hotels"]
        if hotels:
            hotels.sort(key=lambda x: x["price_per_night"] or 9999)
            results_by_station.append({
                "station": s["name"],
                "popular": s["popular"],
                "hotels": hotels,
            })

    # Count results by source
    source_counts = {}
    for group in results_by_station:
        for h in group["hotels"]:
            src = h.get("source", "google_hotels")
            source_counts[src] = source_counts.get(src, 0) + 1

    response = {
        "city": city,
        "line": line,
        "check_in": check_in,
        "check_out": check_out,
        "num_nights": num_nights,
        "adults": adults,
        "children": children,
        "currency": currency,
        "max_price": max_price,
        "results": results_by_station,
        "total_hotels": sum(len(r["hotels"]) for r in results_by_station),
        "source_counts": source_counts,
        "from_cache": False,
    }
    _set_cached(search_cache_key, response)
    return response
