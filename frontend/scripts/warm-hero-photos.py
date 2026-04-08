"""Warm Wikimedia Commons thumbnail cache for curated city hero photos.

Wikimedia's thumbnail server generates non-standard widths (e.g. 1280px) on
demand. The first request from a non-Wikipedia referer often returns HTTP 429
("rate limited", really "not yet generated, try again"). After the first hit
the thumb is cached for ~30 days and subsequent requests return 200 fast.

Run this once after a deploy that adds new entries to cityHeroPhotos.js to
make sure the first real visitor doesn't see a 429:

    python frontend/scripts/warm-hero-photos.py

It's idempotent and safe to re-run. It does HEAD requests only (no image
download). Failures are logged but don't fail the script.
"""

import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
PHOTOS_FILE = REPO_ROOT / "frontend" / "src" / "data" / "cityHeroPhotos.js"


def main() -> int:
    if not PHOTOS_FILE.exists():
        print(f"missing: {PHOTOS_FILE}", file=sys.stderr)
        return 1

    content = PHOTOS_FILE.read_text(encoding="utf-8")
    urls = re.findall(r'src: "(https://upload\.wikimedia\.org[^"]+)"', content)
    if not urls:
        print("no Wikimedia Commons URLs found in cityHeroPhotos.js")
        return 0

    print(f"warming {len(urls)} thumbnail URLs ...")
    headers = {
        "User-Agent": "StayByRail-CacheWarmer/1.0 (matt@staybyrail.co.uk)",
        "Referer": "https://staybyrail.co.uk/",
        "Accept": "image/avif,image/webp,image/png,image/jpeg,*/*",
    }

    succeeded = 0
    for u in urls:
        # Two-pass: first request triggers generation, second confirms.
        for attempt in (1, 2):
            try:
                req = urllib.request.Request(u, headers=headers, method="HEAD")
                with urllib.request.urlopen(req, timeout=20) as r:
                    cl = r.headers.get("Content-Length", "?")
                    print(f"  OK  attempt {attempt}  {cl:>10s} bytes  ...{u[-60:]}")
                    succeeded += 1
                    break
            except urllib.error.HTTPError as e:
                if e.code == 429 and attempt == 1:
                    # 429 = thumb being generated, wait and retry
                    time.sleep(2)
                    continue
                print(f"  FAIL attempt {attempt}  HTTP {e.code}  ...{u[-60:]}")
                break
            except Exception as e:  # noqa: BLE001
                print(f"  FAIL attempt {attempt}  {e}  ...{u[-60:]}")
                break
        time.sleep(0.6)

    print(f"\n{succeeded}/{len(urls)} URLs warmed successfully")
    return 0 if succeeded == len(urls) else 1


if __name__ == "__main__":
    sys.exit(main())
