"""
Multi-source event aggregation: Ticketmaster, PredictHQ, Eventbrite.
Each source is optional — only queried if its API key is set in the environment.
Results are merged, deduplicated, sorted by date, and cached for 3 hours.
"""

import os
import time
from datetime import datetime

import requests
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).parent.parent / ".env")

from staybyrail.stations import LINES, get_stations

_events_cache: dict = {}  # key: "city|country" → {ts, data}
_EVENTS_TTL = 3 * 60 * 60  # 3 hours


def _get_city_coords(city):
    """Get approximate city centre by averaging all station coordinates."""
    city_key = city.lower().replace(" ", "_")
    city_data = LINES.get(city_key, {})
    if not city_data:
        return None, None
    # Grab first available line's stations
    first_line = next(iter(city_data), None)
    if not first_line:
        return None, None
    stations = get_stations(city_key, first_line, popular_only=False)
    if not stations:
        return None, None
    lats = [s["lat"] for s in stations]
    lons = [s["lon"] for s in stations]
    return sum(lats) / len(lats), sum(lons) / len(lons)


# ---- Source 1: Ticketmaster Discovery API ----

def _ticketmaster_events(city, country_code):
    tm_key = os.environ.get("TICKETMASTER_API_KEY", "")
    if not tm_key:
        return []

    params = {
        "apikey": tm_key,
        "city": city,
        "size": 10,
        "sort": "date,asc",
        "classificationName": "music,sports,arts,film,family,miscellaneous",
    }
    if country_code:
        params["countryCode"] = country_code

    try:
        resp = requests.get(
            "https://app.ticketmaster.com/discovery/v2/events.json",
            params=params,
            timeout=6,
        )
        raw = resp.json()
    except Exception:
        return []

    events = []
    for e in raw.get("_embedded", {}).get("events", []):
        start = e.get("dates", {}).get("start", {})
        venues = e.get("_embedded", {}).get("venues", [{}])
        cats = e.get("classifications", [{}])
        segment = cats[0].get("segment", {}).get("name", "") if cats else ""
        events.append({
            "name": e.get("name", ""),
            "date": start.get("localDate", ""),
            "time": start.get("localTime", ""),
            "venue": venues[0].get("name", "") if venues else "",
            "category": segment,
            "url": e.get("url", ""),
            "source": "Ticketmaster",
        })

    return events


# ---- Source 2: PredictHQ ----

def _predicthq_events(city, country_code):
    api_key = os.environ.get("PREDICTHQ_API_KEY", "")
    if not api_key:
        return []

    lat, lon = _get_city_coords(city)
    if lat is None:
        return []

    today = datetime.now().strftime("%Y-%m-%d")
    params = {
        "category": "concerts,festivals,performing-arts,sports,community,expos",
        "within": f"15km@{lat},{lon}",
        "start.gte": today,
        "sort": "start",
        "limit": 10,
    }
    headers = {
        "Authorization": f"Bearer {api_key}",
    }

    try:
        resp = requests.get(
            "https://api.predicthq.com/v1/events/",
            params=params,
            headers=headers,
            timeout=10,
        )
        resp.raise_for_status()
        data = resp.json()
    except Exception:
        return []

    events = []
    for e in data.get("results", []):
        # PredictHQ uses start_local for the local time string
        start_local = e.get("start_local", "") or ""
        # Extract venue from entities
        venue = ""
        for entity in e.get("entities", []):
            if entity.get("type") == "venue":
                venue = entity.get("name", "")
                break

        category = (e.get("category", "") or "").replace("-", " ").title()

        events.append({
            "name": e.get("title", ""),
            "date": start_local[:10],
            "time": start_local[11:16] if len(start_local) > 15 else "",
            "venue": venue,
            "category": category,
            "url": "",
            "source": "PredictHQ",
        })

    return events


# ---- Source 3: Eventbrite ----

def _eventbrite_events(city, country_code):
    api_key = os.environ.get("EVENTBRITE_API_KEY", "")
    if not api_key:
        return []

    headers = {
        "Authorization": f"Bearer {api_key}",
    }

    try:
        resp = requests.post(
            "https://www.eventbriteapi.com/v3/destination/search/",
            json={
                "event_search": {"q": city, "dates": ["current_future"]},
            },
            headers=headers,
            timeout=10,
        )
        resp.raise_for_status()
        data = resp.json()
    except Exception:
        return []

    events = []
    for e in data.get("events", {}).get("results", []):
        # Extract category from tags
        category = ""
        for tag in e.get("tags", []):
            if tag.get("prefix") == "EventbriteCategory":
                category = tag.get("display_name", "")
                break

        events.append({
            "name": e.get("name", ""),
            "date": e.get("start_date", ""),
            "time": e.get("start_time", ""),
            "venue": "",
            "category": category,
            "url": e.get("url", ""),
            "source": "Eventbrite",
        })

    return events


# ---- Merged endpoint ----

def get_events(city, country_code=""):
    """
    Fetch events from all configured sources, merge, deduplicate, and return.
    Results are cached in-memory for 3 hours.
    """
    cache_key = f"{city}|{country_code}".lower()
    cached = _events_cache.get(cache_key)
    if cached and time.time() - cached["ts"] < _EVENTS_TTL:
        return cached["data"]

    all_events = []
    sources_used = []

    for name, fn in [
        ("Ticketmaster", _ticketmaster_events),
        ("PredictHQ", _predicthq_events),
        ("Eventbrite", _eventbrite_events),
    ]:
        try:
            results = fn(city, country_code)
            if results:
                all_events.extend(results)
                sources_used.append(name)
        except Exception:
            pass

    # Deduplicate by normalised name + date
    seen = set()
    unique = []
    for ev in all_events:
        key = (ev["name"].lower().strip(), ev["date"])
        if key not in seen:
            seen.add(key)
            unique.append(ev)

    # Sort by date then time
    unique.sort(key=lambda e: (e.get("date", ""), e.get("time", "")))

    result = {
        "events": unique[:12],
        "sources": sources_used,
    }
    _events_cache[cache_key] = {"ts": time.time(), "data": result}
    return result
