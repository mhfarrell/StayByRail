import hashlib
import json
import os
import time
from pathlib import Path

import requests
from dotenv import load_dotenv

load_dotenv(Path(__file__).parent.parent / ".env")

CACHE_DIR = Path(__file__).parent.parent / ".cache"
CACHE_DIR.mkdir(exist_ok=True)
CACHE_TTL = 86400  # 24 hours

# Price buckets — searches within the same bucket share cached SerpAPI results,
# so a £80 search and a £95 search both hit the bucket-100 cache entry.
PRICE_BUCKETS = [75, 100, 150, 200, 300, 500]


def _price_bucket(max_price):
    """Round max_price up to the nearest cache-friendly bucket."""
    for b in PRICE_BUCKETS:
        if max_price <= b:
            return b
    return max_price


def _cache_key(params):
    raw = json.dumps(params, sort_keys=True)
    return hashlib.md5(raw.encode()).hexdigest()


def _get_cached(key):
    path = CACHE_DIR / f"{key}.json"
    if path.exists():
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            path.unlink(missing_ok=True)
            return None
        if time.time() - data.get("_ts", 0) < CACHE_TTL:
            return data.get("result")
        # Expired — clean up
        path.unlink(missing_ok=True)
    return None


def _set_cached(key, result):
    path = CACHE_DIR / f"{key}.json"
    path.write_text(
        json.dumps({"_ts": time.time(), "result": result}, ensure_ascii=False),
        encoding="utf-8",
    )


def _filter_by_price(properties, max_price, bucketed_price):
    """Post-filter results from a wider price bucket to the actual max_price."""
    if max_price >= bucketed_price:
        return properties
    result = []
    for p in properties:
        rate = p.get("rate_per_night", {})
        price = rate.get("extracted_lowest")
        # Keep hotels with unknown price (benefit of the doubt)
        if price is not None and price > max_price:
            continue
        result.append(p)
    return result


# ---------------------------------------------------------------------------
# Source 1: SerpAPI Google Hotels (aggregates Booking, Expedia, Agoda, etc.)
# ---------------------------------------------------------------------------

def _serpapi_search(query, check_in, check_out, max_price, currency, adults, sort_by=None, children=0, api_key_override=None):
    """Single SerpAPI Google Hotels search call with price-bucket caching."""
    api_key = api_key_override or os.environ.get("SERPAPI_KEY", "")
    if not api_key:
        return []

    bucketed_price = _price_bucket(max_price)

    params = {
        "engine": "google_hotels",
        "q": query,
        "check_in_date": check_in,
        "check_out_date": check_out,
        "currency": currency,
        "max_price": bucketed_price,
        "adults": adults,
        "hl": "en",
        "gl": "uk",
        "api_key": api_key,
    }
    if children > 0:
        # SerpAPI expects comma-separated ages; assume age 8 for each child
        params["children"] = ",".join(["8"] * children)
    if sort_by:
        params["sort_by"] = sort_by  # 3=lowest price, 8=highest rating, 13=most reviewed

    cache_key = _cache_key({k: v for k, v in params.items() if k != "api_key"})
    cached = _get_cached(cache_key)
    if cached is not None:
        return _filter_by_price(cached, max_price, bucketed_price)

    try:
        resp = requests.get(
            "https://serpapi.com/search.json", params=params, timeout=30
        )
        resp.raise_for_status()
        data = resp.json()
        properties = data.get("properties", [])
        # Tag each result with the source
        for p in properties:
            p["_source"] = "google_hotels"
        _set_cached(cache_key, properties)
        return _filter_by_price(properties, max_price, bucketed_price)
    except Exception:
        return []


def search_hotels(query, check_in, check_out, max_price=100, currency="GBP", adults=2, children=0, api_key_override=None):
    """
    Search Google Hotels via SerpAPI with multiple sort modes to maximize
    the number of unique results.
    """
    # Primary search (default relevance sort)
    results = _serpapi_search(query, check_in, check_out, max_price, currency, adults, children=children, api_key_override=api_key_override)

    # Skip price-sort if relevance returned nothing (saves an API call)
    if not results:
        return results

    # Secondary search: sort by lowest price to catch budget options missed by relevance
    price_sorted = _serpapi_search(
        query, check_in, check_out, max_price, currency, adults, sort_by=3, children=children, api_key_override=api_key_override
    )

    # Merge, deduplicating by name
    seen = {p.get("name") for p in results}
    for p in price_sorted:
        if p.get("name") not in seen:
            results.append(p)
            seen.add(p.get("name"))

    return results


# ---------------------------------------------------------------------------
# Source 1b: SearchAPI.io Google Hotels (separate quota from SerpAPI)
# ---------------------------------------------------------------------------

def _searchapi_search(query, check_in, check_out, max_price, currency, adults, sort_by=None, children=0):
    """Search Google Hotels via SearchAPI.io — same data, separate free quota."""
    api_key = os.environ.get("SEARCHAPI_KEY", "")
    if not api_key:
        return []

    bucketed_price = _price_bucket(max_price)

    params = {
        "engine": "google_hotels",
        "q": query,
        "check_in_date": check_in,
        "check_out_date": check_out,
        "currency": currency,
        "price_max": bucketed_price,
        "adults": adults,
        "hl": "en",
        "gl": "uk",
    }
    if children > 0:
        params["children"] = ",".join(["8"] * children)
    if sort_by:
        params["sort_by"] = sort_by

    cache_key = _cache_key({"searchapi": True, **params})
    cached = _get_cached(cache_key)
    if cached is not None:
        return _filter_by_price(cached, max_price, bucketed_price)

    try:
        resp = requests.get(
            "https://www.searchapi.io/api/v1/search",
            params={**params, "api_key": api_key},
            timeout=30,
        )
        resp.raise_for_status()
        data = resp.json()
        raw_properties = data.get("properties", [])

        # Normalise to SerpAPI format so downstream code works unchanged
        properties = []
        for p in raw_properties:
            price_info = p.get("price_per_night", {})
            properties.append({
                "name": p.get("name", ""),
                "type": p.get("type", ""),
                "hotel_class": p.get("hotel_class"),
                "overall_rating": p.get("rating"),
                "reviews": p.get("reviews"),
                "rate_per_night": {
                    "lowest": price_info.get("price", ""),
                    "extracted_lowest": price_info.get("extracted_price"),
                },
                "gps_coordinates": p.get("gps_coordinates", {}),
                "amenities": p.get("amenities", []),
                "images": p.get("images", []),
                "link": p.get("link", ""),
                "check_in_time": p.get("check_in_time"),
                "check_out_time": p.get("check_out_time"),
                "_source": "google_hotels",
            })

        _set_cached(cache_key, properties)
        return _filter_by_price(properties, max_price, bucketed_price)
    except Exception:
        return []


def get_property_details(property_token, check_in, check_out, currency="GBP", adults=2):
    """
    Fetch full property details from Google Hotels. The response includes
    `prices` from multiple booking sites (Booking.com, Expedia, Agoda, etc.)
    and detailed amenity lists.
    """
    api_key = os.environ.get("SERPAPI_KEY", "")
    if not api_key:
        return {}

    params = {
        "engine": "google_hotels",
        "property_token": property_token,
        "check_in_date": check_in,
        "check_out_date": check_out,
        "currency": currency,
        "adults": adults,
        "hl": "en",
        "gl": "uk",
        "api_key": api_key,
    }

    cache_key = _cache_key({k: v for k, v in params.items() if k != "api_key"})
    cached = _get_cached(cache_key)
    if cached is not None:
        return cached

    try:
        resp = requests.get(
            "https://serpapi.com/search.json", params=params, timeout=30
        )
        resp.raise_for_status()
        data = resp.json()
        _set_cached(cache_key, data)
        return data
    except Exception:
        return {}


# ---------------------------------------------------------------------------
# Source 2: Booking.com via RapidAPI (optional, needs RAPIDAPI_KEY)
# ---------------------------------------------------------------------------

def _booking_search(city, check_in, check_out, max_price_gbp, adults, lat, lon, children=0, rapidapi_key=None):
    """
    Search Booking.com via RapidAPI. Free tier: 500 requests/month.
    Set RAPIDAPI_KEY in .env to enable, or pass per-request.
    """
    api_key = rapidapi_key or os.environ.get("RAPIDAPI_KEY", "")
    if not api_key:
        return []

    cache_params = {
        "source": "booking",
        "lat": lat,
        "lon": lon,
        "check_in": check_in,
        "check_out": check_out,
        "max_price": max_price_gbp,
    }
    cache_key = _cache_key(cache_params)
    cached = _get_cached(cache_key)
    if cached is not None:
        return cached

    params = {
        "latitude": lat,
        "longitude": lon,
        "arrival_date": check_in,
        "departure_date": check_out,
        "adults": adults,
        "children_qty": children,
        "room_qty": 1,
        "units": "metric",
        "temperature_unit": "c",
        "languagecode": "en-us",
        "currency_code": "GBP",
        "price_max": max_price_gbp,
    }
    headers = {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    }

    try:
        resp = requests.get(
            "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates",
            params=params,
            headers=headers,
            timeout=30,
        )
        resp.raise_for_status()
        data = resp.json()
        hotels = data.get("result", [])
        # Normalize to our common format
        normalized = []
        for h in hotels:
            prop = h.get("property", {})
            price_info = prop.get("priceBreakdown", {})
            gross = price_info.get("grossPrice", {})
            normalized.append({
                "name": prop.get("name", ""),
                "type": prop.get("propertyClass", ""),
                "hotel_class": prop.get("propertyClass"),
                "overall_rating": prop.get("reviewScore"),
                "reviews": prop.get("reviewCount"),
                "rate_per_night": {
                    "lowest": f"£{gross.get('value', 0):.0f}" if gross.get("value") else "",
                },
                "gps_coordinates": {
                    "latitude": prop.get("latitude"),
                    "longitude": prop.get("longitude"),
                },
                "amenities": [],
                "images": [{"thumbnail": prop.get("photoUrls", [""])[0]}]
                    if prop.get("photoUrls") else [],
                "_source": "booking.com",
            })
        _set_cached(cache_key, normalized)
        return normalized
    except Exception:
        return []


# ---------------------------------------------------------------------------
# Source 3: Trip.com via RapidAPI (optional, needs RAPIDAPI_KEY)
# ---------------------------------------------------------------------------

def _tripadvisor_search(query, check_in, check_out, lat, lon, rapidapi_key=None):
    """
    Search TripAdvisor via RapidAPI for additional hotel options.
    Uses the same RAPIDAPI_KEY, or per-request override.
    """
    api_key = rapidapi_key or os.environ.get("RAPIDAPI_KEY", "")
    if not api_key:
        return []

    cache_params = {"source": "tripadvisor", "query": query, "check_in": check_in}
    cache_key = _cache_key(cache_params)
    cached = _get_cached(cache_key)
    if cached is not None:
        return cached

    params = {
        "query": query,
        "page": 1,
    }
    headers = {
        "X-RapidAPI-Key": api_key,
        "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
    }

    try:
        resp = requests.get(
            "https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels",
            params=params,
            headers=headers,
            timeout=30,
        )
        resp.raise_for_status()
        data = resp.json()
        hotels = data.get("data", {}).get("data", [])
        normalized = []
        for h in hotels:
            price_detail = h.get("priceForDisplay", "")
            normalized.append({
                "name": h.get("title", ""),
                "type": h.get("bubbleRating", {}).get("text", ""),
                "hotel_class": None,
                "overall_rating": h.get("bubbleRating", {}).get("rating"),
                "reviews": h.get("bubbleRating", {}).get("count"),
                "rate_per_night": {"lowest": price_detail},
                "gps_coordinates": {
                    "latitude": h.get("latitude"),
                    "longitude": h.get("longitude"),
                },
                "amenities": [],
                "images": [{"thumbnail": (h.get("cardPhotos") or [{}])[0].get("sizes", {}).get("urlTemplate", "").replace("{width}", "300").replace("{height}", "200")}]
                    if h.get("cardPhotos") else [],
                "_source": "tripadvisor",
            })
        _set_cached(cache_key, normalized)
        return normalized
    except Exception:
        return []


# ---------------------------------------------------------------------------
# Combined multi-source search
# ---------------------------------------------------------------------------

def search_hotels_multi(query, check_in, check_out, max_price=100, currency="GBP", adults=2, children=0, lat=None, lon=None, api_key_override=None, rapidapi_key_override=None):
    """
    Search all available sources and merge results.
    Uses SerpAPI + SearchAPI.io for Google Hotels, plus Booking.com and
    TripAdvisor via RapidAPI when configured.
    """
    all_results = []

    # Source 1a: Google Hotels via SerpAPI
    google = search_hotels(query, check_in, check_out, max_price, currency, adults, children=children, api_key_override=api_key_override)
    all_results.extend(google)

    # Source 1b: Google Hotels via SearchAPI.io (separate quota, deduped below)
    searchapi = _searchapi_search(query, check_in, check_out, max_price, currency, adults, children=children)
    seen_names = {p.get("name") for p in all_results}
    for p in searchapi:
        if p.get("name") not in seen_names:
            all_results.append(p)
            seen_names.add(p.get("name"))

    rapid_key = rapidapi_key_override or os.environ.get("RAPIDAPI_KEY", "")

    # Source 2: Booking.com via RapidAPI (if key set and we have coordinates)
    if lat and lon and rapid_key:
        booking = _booking_search("", check_in, check_out, max_price, adults, lat, lon, children=children, rapidapi_key=rapid_key)
        all_results.extend(booking)

    # Source 3: TripAdvisor via RapidAPI (if key set)
    if rapid_key:
        tripadvisor = _tripadvisor_search(query, check_in, check_out, lat, lon, rapidapi_key=rapid_key)
        all_results.extend(tripadvisor)

    return all_results
