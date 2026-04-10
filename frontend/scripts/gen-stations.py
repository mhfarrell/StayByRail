"""Generate frontend/src/data/stations.json from backend station data.

Run from repo root or frontend/ directory:
    python frontend/scripts/gen-stations.py

The output drives the programmatic /hotels-near/:slug landing pages.
Every popular station in the backend becomes one indexable page.
"""

import json
import re
import sys
import unicodedata
from pathlib import Path

# Make backend importable regardless of where the script is run from.
REPO_ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO_ROOT / "backend"))

from staybyrail.stations import LINES  # noqa: E402

CITY_DISPLAY = {
    "tokyo": "Tokyo", "osaka": "Osaka", "kyoto": "Kyoto", "hiroshima": "Hiroshima",
    "fukuoka": "Fukuoka", "sapporo": "Sapporo", "nagoya": "Nagoya", "yokohama": "Yokohama",
    "kobe": "Kobe", "nara": "Nara", "kanazawa": "Kanazawa", "sendai": "Sendai",
    "london": "London", "manchester": "Manchester", "birmingham": "Birmingham",
    "newcastle": "Newcastle", "liverpool": "Liverpool", "glasgow": "Glasgow",
    "edinburgh": "Edinburgh", "nottingham": "Nottingham", "sheffield": "Sheffield",
    "leeds": "Leeds", "cardiff": "Cardiff", "bristol": "Bristol", "brighton": "Brighton",
    "paris": "Paris", "lyon": "Lyon", "marseille": "Marseille", "nice": "Nice",
    "toulouse": "Toulouse", "bordeaux": "Bordeaux", "strasbourg": "Strasbourg",
    "berlin": "Berlin", "munich": "Munich", "hamburg": "Hamburg", "frankfurt": "Frankfurt",
    "cologne": "Cologne", "dusseldorf": "Dusseldorf", "stuttgart": "Stuttgart",
    "nuremberg": "Nuremberg",
    "madrid": "Madrid", "barcelona": "Barcelona", "valencia": "Valencia",
    "seville": "Seville", "bilbao": "Bilbao", "malaga": "Malaga",
    "palma_de_mallorca": "Palma de Mallorca",
    "bangkok": "Bangkok", "chiang_mai": "Chiang Mai", "phuket": "Phuket",
    "pattaya": "Pattaya", "krabi": "Krabi",
    "beijing": "Beijing", "shanghai": "Shanghai", "guangzhou": "Guangzhou",
    "shenzhen": "Shenzhen", "chengdu": "Chengdu", "xian": "Xi'an",
    "hangzhou": "Hangzhou",
    "hong_kong": "Hong Kong",
    "seoul": "Seoul", "busan": "Busan", "incheon": "Incheon",
    "daegu": "Daegu", "daejeon": "Daejeon",
    "new_york": "New York", "washington_dc": "Washington DC",
    "chicago": "Chicago", "boston": "Boston",
    "san_francisco": "San Francisco", "philadelphia": "Philadelphia",
}

CITY_COUNTRY = {
    **dict.fromkeys(["tokyo", "osaka", "kyoto", "hiroshima", "fukuoka", "sapporo",
                     "nagoya", "yokohama", "kobe", "nara", "kanazawa", "sendai"], "Japan"),
    **dict.fromkeys(["london", "manchester", "birmingham", "newcastle", "liverpool",
                     "glasgow", "edinburgh", "nottingham", "sheffield", "leeds",
                     "cardiff", "bristol", "brighton"], "United Kingdom"),
    **dict.fromkeys(["paris", "lyon", "marseille", "nice", "toulouse", "bordeaux",
                     "strasbourg"], "France"),
    **dict.fromkeys(["berlin", "munich", "hamburg", "frankfurt", "cologne",
                     "dusseldorf", "stuttgart", "nuremberg"], "Germany"),
    **dict.fromkeys(["madrid", "barcelona", "valencia", "seville", "bilbao", "malaga",
                     "palma_de_mallorca"], "Spain"),
    **dict.fromkeys(["bangkok", "chiang_mai", "phuket", "pattaya", "krabi"], "Thailand"),
    **dict.fromkeys(["beijing", "shanghai", "guangzhou", "shenzhen", "chengdu",
                     "xian", "hangzhou", "hong_kong"], "China"),
    **dict.fromkeys(["seoul", "busan", "incheon", "daegu", "daejeon"],
                    "South Korea"),
    **dict.fromkeys(["new_york", "washington_dc", "chicago", "boston",
                     "san_francisco", "philadelphia"], "United States"),
}


def slugify(text: str) -> str:
    text = unicodedata.normalize("NFKD", text)
    text = "".join(c for c in text if not unicodedata.combining(c))
    text = text.lower()
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def build():
    stations_by_key: dict = {}
    for city_key, city in LINES.items():
        city_display = CITY_DISPLAY.get(city_key, city_key.replace("_", " ").title())
        country = CITY_COUNTRY.get(city_key, "")
        for line_key, line in city.items():
            line_name = line.get("name", line_key)
            for s in line.get("stations", []):
                if not s.get("popular"):
                    continue
                key = f"{slugify(s['name'])}-{slugify(city_key)}"
                entry = stations_by_key.get(key)
                if entry is None:
                    entry = {
                        "slug": key,
                        "name": s["name"],
                        "city": city_key,
                        "cityDisplay": city_display,
                        "country": country,
                        "lat": s["lat"],
                        "lon": s["lon"],
                        "lines": [],
                        "lineKeys": [],
                    }
                    stations_by_key[key] = entry
                if line_key not in entry["lineKeys"]:
                    entry["lineKeys"].append(line_key)
                    entry["lines"].append(line_name)

    stations = sorted(stations_by_key.values(), key=lambda x: (x["city"], x["name"]))
    for s in stations:
        s["primaryLineKey"] = s["lineKeys"][0]
        del s["lineKeys"]
    return stations


def main():
    stations = build()
    out_path = REPO_ROOT / "frontend" / "src" / "data" / "stations.json"
    out_path.write_text(
        json.dumps(stations, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    cities = sorted({s["city"] for s in stations})
    print(f"wrote {len(stations)} stations across {len(cities)} cities to {out_path}")


if __name__ == "__main__":
    main()
