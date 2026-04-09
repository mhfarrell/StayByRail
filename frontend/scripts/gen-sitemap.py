#!/usr/bin/env python3
"""Generate frontend/public/sitemap.xml from the data files.

Pulls real <lastmod> timestamps from:
  - cityGuides.js    (updatedAt: "YYYY-MM")
  - countries.js     (updatedAt: "YYYY-MM")
  - journal.js       (dateModified: "YYYY-MM-DD")
  - itineraries.js   (updatedAt: "YYYY-MM")
  - transportPasses.js (updatedAt: "YYYY-MM")

Station landing pages (/hotels-near/*) are emitted without <lastmod>
because we don't have a reliable per-station content date and Google
treats fake lastmod signals as trust-lowering.

Run from the repo root (or anywhere):
    python frontend/scripts/gen-sitemap.py

Writes frontend/public/sitemap.xml in place.
"""

import json
import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parents[2]
DATA = REPO / "frontend" / "src" / "data"
SITEMAP = REPO / "frontend" / "public" / "sitemap.xml"
BASE = "https://staybyrail.co.uk"


def parse_slug_and_field(js_path: Path, field_name: str) -> dict:
    """Extract {slug: field_value} from a JS data file.

    Uses regex to locate each `slug: "..."` pair, then for each slug
    searches the text range between it and the next slug for the
    first `<field_name>: "..."` match. This scopes each field lookup
    to its own entry so a missing field in one entry doesn't leak
    into the next.
    """
    text = js_path.read_text(encoding="utf-8")
    slugs = [(m.start(), m.group(1)) for m in re.finditer(r'slug:\s*"([^"]+)"', text)]
    field_re = re.compile(rf'{field_name}:\s*"([^"]+)"')

    result: dict = {}
    for i, (slug_pos, slug) in enumerate(slugs):
        end_pos = slugs[i + 1][0] if i + 1 < len(slugs) else len(text)
        m = field_re.search(text, slug_pos, end_pos)
        if m:
            result[slug] = m.group(1)
    return result


def normalize_lastmod(raw: str | None) -> str | None:
    """Normalise to YYYY-MM-DD. Rejects anything that doesn't look right."""
    if not raw:
        return None
    if re.match(r"^\d{4}-\d{2}$", raw):
        return raw + "-01"
    if re.match(r"^\d{4}-\d{2}-\d{2}$", raw):
        return raw
    return None


def url_entry(loc: str, changefreq: str, priority: str, lastmod: str | None = None) -> str:
    lines = ["  <url>", f"    <loc>{loc}</loc>"]
    if lastmod:
        lines.append(f"    <lastmod>{lastmod}</lastmod>")
    lines.append(f"    <changefreq>{changefreq}</changefreq>")
    lines.append(f"    <priority>{priority}</priority>")
    lines.append("  </url>")
    return "\n".join(lines)


# Static "always present" pages with no per-content date we can point at.
# Index pages get lastmod set dynamically from the newest child.
STATIC_PAGES = [
    ("/",                  "weekly",  "1.0"),
    ("/search",            "weekly",  "0.9"),
    ("/how-it-works",      "monthly", "0.8"),
    ("/coverage",          "monthly", "0.8"),
    ("/faq",               "monthly", "0.8"),
    ("/about",             "monthly", "0.7"),
    ("/contact",           "monthly", "0.6"),
    ("/privacy",           "yearly",  "0.4"),
    ("/terms",             "yearly",  "0.4"),
    ("/authors/matt-farrell", "monthly", "0.7"),
    ("/travel-guide",      "monthly", "0.8"),
    ("/train-times",       "monthly", "0.7"),
]

# Index pages — these get their lastmod set to the most recent child
INDEX_PAGES = {
    "/guides":      ("weekly",  "0.9"),
    "/countries":   ("monthly", "0.8"),
    "/journal":     ("weekly",  "0.9"),
    "/itineraries": ("monthly", "0.8"),
    "/passes":      ("monthly", "0.8"),
}


def latest(dates):
    valid = [d for d in dates if d]
    return max(valid) if valid else None


def build() -> str:
    # Parse all the content files
    guides = parse_slug_and_field(DATA / "cityGuides.js", "updatedAt")
    countries = parse_slug_and_field(DATA / "countries.js", "updatedAt")
    journal = parse_slug_and_field(DATA / "journal.js", "dateModified")
    itineraries = parse_slug_and_field(DATA / "itineraries.js", "updatedAt")
    passes = parse_slug_and_field(DATA / "transportPasses.js", "updatedAt")

    # Normalise all dates up front
    guides = {s: normalize_lastmod(d) for s, d in guides.items()}
    countries = {s: normalize_lastmod(d) for s, d in countries.items()}
    journal = {s: normalize_lastmod(d) for s, d in journal.items()}
    itineraries = {s: normalize_lastmod(d) for s, d in itineraries.items()}
    passes = {s: normalize_lastmod(d) for s, d in passes.items()}

    # Load stations.json — no per-station lastmod
    stations = json.loads((DATA / "stations.json").read_text(encoding="utf-8"))

    # Compute newest child date per index
    index_lastmod = {
        "/guides":      latest(guides.values()),
        "/countries":   latest(countries.values()),
        "/journal":     latest(journal.values()),
        "/itineraries": latest(itineraries.values()),
        "/passes":      latest(passes.values()),
    }

    out = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]

    # Static pages (no lastmod)
    for path, cf, pr in STATIC_PAGES:
        out.append(url_entry(BASE + path, cf, pr))

    # Index pages (lastmod = latest child)
    for path, (cf, pr) in INDEX_PAGES.items():
        out.append(url_entry(BASE + path, cf, pr, index_lastmod.get(path)))

    # City guides
    for slug in sorted(guides):
        out.append(url_entry(f"{BASE}/guides/{slug}", "weekly", "0.9", guides[slug]))

    # Country explainers
    for slug in sorted(countries):
        out.append(url_entry(f"{BASE}/countries/{slug}", "monthly", "0.8", countries[slug]))

    # Journal articles
    for slug in sorted(journal):
        out.append(url_entry(f"{BASE}/journal/{slug}", "monthly", "0.8", journal[slug]))

    # Itineraries
    for slug in sorted(itineraries):
        out.append(url_entry(f"{BASE}/itineraries/{slug}", "monthly", "0.7", itineraries[slug]))

    # Transport passes
    for slug in sorted(passes):
        out.append(url_entry(f"{BASE}/passes/{slug}", "monthly", "0.7", passes[slug]))

    # Station landing pages — no lastmod
    for s in sorted(stations, key=lambda x: x["slug"]):
        out.append(url_entry(f"{BASE}/hotels-near/{s['slug']}", "monthly", "0.6"))

    out.append("</urlset>")
    return "\n".join(out) + "\n"


def main():
    xml = build()
    SITEMAP.write_text(xml, encoding="utf-8", newline="\n")
    total = xml.count("<loc>")
    with_lm = xml.count("<lastmod>")
    print(f"wrote {total} URLs ({with_lm} with <lastmod>) to {SITEMAP}")


if __name__ == "__main__":
    main()
