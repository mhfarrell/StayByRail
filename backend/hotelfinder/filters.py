import math
import re

FRIDGE_KEYWORDS = [
    "refrigerator", "fridge", "mini-fridge", "mini fridge", "minifridge",
    "kitchenette", "kitchen",
]

EXCLUDED_KEYWORDS = [
    "hostel", "capsule", "pod hotel", "dormitory", "dorm",
    "guest house", "guesthouse", "nine hours", "9h nine hours",
    "cabin hotel", "sleeping capsule", "backpacker",
]

# These are fine even if they match something above
ALLOWED_KEYWORDS = [
    "apartment", "aparthotel", "apart hotel", "serviced apartment",
    "residence", "flat",
]


def has_fridge(amenities):
    if not amenities:
        return None  # unknown
    text = " ".join(amenities).lower()
    return any(kw in text for kw in FRIDGE_KEYWORDS)


def is_excluded_type(hotel):
    name = (hotel.get("name") or "").lower()
    hotel_type = (hotel.get("type") or "").lower()
    description = (hotel.get("description") or "").lower()

    all_text = f"{name} {hotel_type} {description}"

    # Allow apartments/aparthotels even if other keywords match
    if any(kw in all_text for kw in ALLOWED_KEYWORDS):
        return False

    for text in [name, hotel_type, description]:
        for kw in EXCLUDED_KEYWORDS:
            if kw in text:
                return True
    return False


def haversine_km(lat1, lon1, lat2, lon2):
    R = 6371
    dlat = math.radians(lat2 - lat1)
    dlon = math.radians(lon2 - lon1)
    a = (
        math.sin(dlat / 2) ** 2
        + math.cos(math.radians(lat1))
        * math.cos(math.radians(lat2))
        * math.sin(dlon / 2) ** 2
    )
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c


def walk_minutes(km):
    return round(km / 0.08)  # ~80m per minute walking


def filter_hotels(hotels, station_lat, station_lon):
    results = []
    for hotel in hotels:
        if is_excluded_type(hotel):
            continue

        gps = hotel.get("gps_coordinates", {})
        dist_km = None
        walk_min = None
        if gps.get("latitude") and gps.get("longitude"):
            dist_km = haversine_km(
                station_lat, station_lon,
                gps["latitude"], gps["longitude"],
            )
            walk_min = walk_minutes(dist_km)

        amenities = hotel.get("amenities", [])
        fridge = has_fridge(amenities)

        results.append({
            **hotel,
            "distance_km": round(dist_km, 2) if dist_km else None,
            "walk_minutes": walk_min,
            "has_fridge": fridge,
        })

    return results
