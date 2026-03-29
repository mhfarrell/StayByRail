import os
from datetime import datetime, timedelta

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from hotelfinder.api import search_hotels_multi
from hotelfinder.filters import filter_hotels
from hotelfinder.stations import LINES, get_cities, get_lines, get_stations

load_dotenv()

app = FastAPI(title="StayByRail")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


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
    import hotelfinder.api as api_mod
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
    popular_only: bool = True,
    station: str | None = None,
):
    # Use per-request key if provided, otherwise fall back to server env
    api_key = request.headers.get("x-serpapi-key") or os.environ.get("SERPAPI_KEY", "")

    stations = get_stations(city, line, popular_only)
    if not stations:
        raise HTTPException(404, "City/line not found")

    if station:
        stations = [s for s in stations if s["name"].lower() == station.lower()]
        if not stations:
            # fall back to all stations for this line and try again
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

    seen_hotels = {}  # dedupe by name
    results_by_station = []

    for s in stations:
        query = f"hotels near {s['name']} Station {city.title()}"
        try:
            raw = search_hotels_multi(
                query=query,
                check_in=check_in,
                check_out=check_out,
                max_price=max_price,
                currency=currency,
                adults=adults,
                lat=s["lat"],
                lon=s["lon"],
                api_key_override=api_key,
            )
        except RuntimeError as e:
            raise HTTPException(500, str(e))
        except Exception as e:
            import traceback
            traceback.print_exc()
            raw = []

        filtered = filter_hotels(raw, s["lat"], s["lon"])

        station_hotels = []
        for h in filtered:
            name = h.get("name", "")
            if name in seen_hotels:
                continue
            seen_hotels[name] = True

            rate = h.get("rate_per_night", {})
            # Use extracted numeric values when available (more reliable)
            price_num = rate.get("extracted_lowest")
            price_str = rate.get("lowest") or ""
            # Also grab the before-taxes price for comparison
            before_tax_num = rate.get("extracted_before_taxes_fees")
            before_tax_str = rate.get("before_taxes_fees") or ""

            # Fallback: parse from string if no extracted value
            if price_num is None and price_str:
                cleaned = "".join(c for c in price_str if c.isdigit() or c == ".")
                try:
                    price_num = float(cleaned)
                except ValueError:
                    pass

            total_price = round(price_num * num_nights, 2) if price_num else None
            before_tax_total = round(before_tax_num * num_nights, 2) if before_tax_num else None

            source = h.get("_source", "google_hotels")

            station_hotels.append({
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
                "amenities": h.get("amenities", []),
                "has_fridge": h.get("has_fridge"),
                "walk_minutes": h.get("walk_minutes"),
                "distance_km": h.get("distance_km"),
                "images": h.get("images", []),
                "link": h.get("link"),
                "check_in_time": h.get("check_in_time"),
                "check_out_time": h.get("check_out_time"),
                "gps_coordinates": h.get("gps_coordinates", {}),
                "nearest_station": s["name"],
                "thumbnail": _best_thumbnail(h.get("images")),
            })

        if station_hotels:
            station_hotels.sort(key=lambda x: x["price_per_night"] or 9999)
            results_by_station.append({
                "station": s["name"],
                "popular": s["popular"],
                "hotels": station_hotels,
            })

    # Count results by source
    source_counts = {}
    for group in results_by_station:
        for h in group["hotels"]:
            src = h.get("source", "google_hotels")
            source_counts[src] = source_counts.get(src, 0) + 1

    return {
        "city": city,
        "line": line,
        "check_in": check_in,
        "check_out": check_out,
        "num_nights": num_nights,
        "adults": adults,
        "currency": currency,
        "max_price": max_price,
        "results": results_by_station,
        "total_hotels": sum(len(r["hotels"]) for r in results_by_station),
        "source_counts": source_counts,
    }
