#!/usr/bin/env python3
"""Push URLs to IndexNow so Bing (and DuckDuckGo, Yahoo, ChatGPT search),
Yandex, and Seznam recrawl them within minutes instead of weeks.

Google does not participate in IndexNow. For Google you still need
Search Console's URL Inspection tool.

Usage:
    # Push everything in the sitemap:
    python frontend/scripts/indexnow-push.py --all

    # Push specific URLs:
    python frontend/scripts/indexnow-push.py \\
        https://staybyrail.co.uk/journal/sixteen-days-in-japan-january-2025 \\
        https://staybyrail.co.uk/guides/tokyo

    # Dry run (print what would be sent, don't actually send):
    python frontend/scripts/indexnow-push.py --all --dry-run

The IndexNow key file must already be hosted at
https://staybyrail.co.uk/<KEY>.txt before calling this, or the push
will 4xx. The file is checked in under frontend/public/.
"""

import argparse
import json
import re
import sys
import urllib.request
from pathlib import Path

HOST = "staybyrail.co.uk"
BASE = f"https://{HOST}"
KEY = "8eeiO1yJ2pk0zg04PXZvZ2Zgovdll8ID"
KEY_URL = f"{BASE}/{KEY}.txt"
ENDPOINT = "https://api.indexnow.org/IndexNow"

REPO = Path(__file__).resolve().parents[2]
SITEMAP = REPO / "frontend" / "public" / "sitemap.xml"

# IndexNow accepts up to 10,000 URLs per POST, but chunking to a
# sensible size keeps errors recoverable.
CHUNK_SIZE = 1000


def urls_from_sitemap() -> list[str]:
    text = SITEMAP.read_text(encoding="utf-8")
    return re.findall(r"<loc>([^<]+)</loc>", text)


def post_batch(urls: list[str]) -> tuple[int, str]:
    body = json.dumps(
        {
            "host": HOST,
            "key": KEY,
            "keyLocation": KEY_URL,
            "urlList": urls,
        }
    ).encode("utf-8")
    req = urllib.request.Request(
        ENDPOINT,
        data=body,
        method="POST",
        headers={
            "Content-Type": "application/json; charset=utf-8",
            "User-Agent": "staybyrail-indexnow/1.0",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return resp.status, resp.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode("utf-8", "replace")
    except Exception as e:
        return 0, str(e)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    parser.add_argument("urls", nargs="*", help="URLs to push")
    parser.add_argument("--all", action="store_true", help="Push every URL in sitemap.xml")
    parser.add_argument("--dry-run", action="store_true", help="Print URLs without POSTing")
    args = parser.parse_args()

    if args.all:
        urls = urls_from_sitemap()
    else:
        urls = args.urls

    if not urls:
        parser.print_help()
        return 1

    # Every URL must be on the same host or IndexNow rejects the whole batch.
    for u in urls:
        if not u.startswith(BASE + "/") and u != BASE:
            print(f"skip (wrong host): {u}", file=sys.stderr)
            return 1

    print(f"IndexNow: pushing {len(urls)} URL(s) via key {KEY[:8]}...")
    if args.dry_run:
        for u in urls[:20]:
            print(f"  would push: {u}")
        if len(urls) > 20:
            print(f"  ... and {len(urls) - 20} more")
        return 0

    ok = 0
    for i in range(0, len(urls), CHUNK_SIZE):
        chunk = urls[i : i + CHUNK_SIZE]
        status, body = post_batch(chunk)
        label = f"batch {i // CHUNK_SIZE + 1} ({len(chunk)} URLs)"
        # IndexNow returns 200 OK or 202 Accepted on success.
        if status in (200, 202):
            print(f"  {label}: OK ({status})")
            ok += len(chunk)
        else:
            print(f"  {label}: FAIL ({status}) {body[:200]}")

    print(f"IndexNow: {ok}/{len(urls)} accepted")
    return 0 if ok == len(urls) else 2


if __name__ == "__main__":
    sys.exit(main())
