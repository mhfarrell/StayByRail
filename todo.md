# StayByRail — Roadmap to re-applying for Booking.com / CJ

CJ's rejection flagged three things: **missing travel content**, **inadequate site design**, and **insufficient visitor traffic**. Design has been cleaned up. The other two need real work before re-applying.

This file is organised by ROI. Start at the top.

---

## What's left after the 2026-04-10 deploy

The site is now at **36 city guides / 10 journal articles / 5 itineraries / 5 transport passes / 2 country explainers / 822 sitemap URLs (63 with lastmod) covering 65 cities across 8 countries**. The 2026-04-09/10 sessions shipped: bundle-size fix (267 KB main chunk), full South Korea expansion (5 cities), Japan travel diary journal article with personal photos, journal article page magazine redesign, light theme as default with improved contrast, AdSense verification meta tag, sitemap `<lastmod>` enrichment via `gen-sitemap.py`, and IndexNow push script for Bing/Yandex/Seznam recrawl.

---

### Things only YOU (Matt) can do — not automatable

These all require a human with a browser, accounts, or a real voice:

- [ ] **Google Search Console** — verify site ownership, submit `https://staybyrail.co.uk/sitemap.xml`, then do URL Inspection > Request Indexing on your top 10 pages (homepage, /guides/tokyo, /journal/sixteen-days-in-japan-january-2025, /search, /guides/seoul, etc). Check back weekly for indexing coverage and Core Web Vitals.
- [ ] **Bing Webmaster Tools** — same: verify, submit sitemap. IndexNow already pushed 822 URLs so Bing should be fast.
- [ ] **Enable Cloudflare Crawler Hints** — Cloudflare dashboard > Speed > Optimization > toggle "Crawler Hints" on. This sends IndexNow pings automatically on every deploy so you don't need to run the script manually.
- [ ] **Lighthouse audit** — run `npx lighthouse https://staybyrail.co.uk --view` (and the same for /guides/tokyo, /search, /hotels-near/shinjuku-tokyo, /journal/sixteen-days-in-japan-january-2025). Fix anything red. Target: 90+ on all four scores.
- [ ] **Plausible / GA setup** — install analytics so you can prove non-zero organic traffic for 4+ weeks before re-applying to CJ. The `VITE_PLAUSIBLE_DOMAIN` env var is already wired up — just sign up, set the var, and rebuild.
- [ ] **Link building** — Reddit (r/JapanTravel, r/travel, r/london), Quora, Lonely Planet forums. Genuine helpful answers with a link only when it's the best answer. Need at least 3 external backlinks from non-spam sources.
- [ ] **Social** — Instagram station photos, X/Twitter thread per journal article, Pinterest pins for each guide. All manual.
- [ ] **Medium / Substack cross-posts** — republish journal articles with `rel=canonical` back to staybyrail.co.uk for extra reach.
- [ ] **Guest posts / blogger outreach** — email 10 travel bloggers per month, offer reciprocal links or guest posts.
- [ ] **Continue journal cadence** — one new article every 10-14 days. Next due ~2026-04-24. Write from personal experience when possible (like the Japan diary). Fresh angles only, no re-treads.

### Things that can be done programmatically (Claude can do these)

- [ ] **United States expansion** — 6 cities (NYC/DC/Chicago/Boston/SF/Philly). Backend station data, city guides, FAQs, country explainer, sitemap entries. Same shape as China/South Korea expansions.
- [ ] **More country explainers** — `/countries/japan`, `/countries/united-kingdom`, `/countries/france`, `/countries/germany`, `/countries/spain`, `/countries/thailand`. Infrastructure is built; each is a new entry in `countries.js` (~3,000 words) + sitemap regen. Two countries shipped so far: China and South Korea.
- [ ] **Real photography for remaining 28 city guides** — find and attribute Wikimedia Commons photos, add to `cityHeroPhotos.js`, run `warm-hero-photos.py`. Wikipedia fallback works fine in the meantime.
- [ ] **More journal articles** — Claude can draft these but they're better with your personal voice and real experience. Hybrid approach: you outline, Claude writes, you edit.
- [ ] **Lighthouse fixes** — once you run the audit and share the report, Claude can fix the code issues (image sizing, unused CSS, accessibility attributes, etc).
- [ ] **Deploy wrapper script** — a one-command `deploy.sh` that runs gen-sitemap > build with env vars > wrangler deploy > indexnow-push. Saves remembering the sequence.

### Re-application checklist (CJ / Booking.com)

- [ ] Plausible/GA shows non-zero organic traffic for 4+ weeks *(depends on GSC submission)*
- [ ] Lighthouse 90+ on top 3 pages
- [ ] Search Console shows pages indexed and impressions appearing
- [ ] At least 3 external backlinks from non-spam sources
- [ ] All CJ feedback bullets answered with "here's what we changed" evidence

### Already shipped (2026-04-09/10)

- [x] Bundle-size regression fixed — main chunk 267 KB (was 538 KB)
- [x] South Korea expansion — 5 cities, 49 station pages, 25 FAQs, country explainer
- [x] Japan travel diary journal article with personal photos + magazine redesign
- [x] Light theme default + contrast improvements
- [x] AdSense verification meta tag + ads.txt
- [x] Sitemap `<lastmod>` tags via `gen-sitemap.py` (822 URLs, 63 with lastmod)
- [x] IndexNow push script — 822 URLs pushed to Bing/Yandex/Seznam
- [x] IndexNow key file hosted at `/8eeiO1yJ2pk0zg04PXZvZ2Zgovdll8ID.txt`

---

## P0 — Do these first (highest ROI)

- [x] **Programmatic `/hotels-near/:station` landing pages** — 597 station pages across 52 cities, each with unique H1/meta/canonical, BreadcrumbList + TrainStation + GeoCoordinates JSON-LD, live hotel preview from the API, nearby-stations grid for internal linking, and back-link to the parent city guide. Sitemap now contains 654 URLs in total. Generator lives at `frontend/scripts/gen-stations.py`.
- [x] **Code-split the route bundle** — main JS is now **267 KB** (down from the original 594 KB → post-lazy-split 308 KB → regressed 538 KB → now 267 KB after the 2026-04-09 homepage-metadata split). Each route is its own chunk; `SearchPage` (203 KB), `HotelMap` (155 KB), `cityGuides` (202 KB shared), and `journal` (74 KB shared) all only load when their respective routes are visited. HomePage stays eager as the LCP target and now imports only a tiny `homepageFeatured.js` metadata file instead of the full guide/article prose.
- [ ] **Lighthouse audit** on `/`, `/guides/tokyo`, `/search`, `/hotels-near/shinjuku-tokyo`, `/journal/london-zone-1-vs-zone-2-hotel-cost` — record current Performance / Accessibility / SEO / Best Practices scores, then fix the red items. Target: 90+ on all four. *(user action — run `npx lighthouse <url> --view` locally or from Chrome DevTools)*
- [x] **"Last updated" dates + author byline on every guide** — every entry in `cityGuides.js` has `updatedAt` + `author` fields; `GuidePage` renders "Updated April 2026 · by Matt Farrell" beneath the hero.
- [ ] **Submit sitemap to Google Search Console** — verify property, submit `https://staybyrail.co.uk/sitemap.xml`, check indexing coverage. Do the same for **Bing Webmaster Tools**. Free, one-time, essential. *(user action)*
- [x] **Fix every internal 404** — audited every `<Link to>` and `<a href>` in `frontend/src`; all internal targets resolve. Fixed one latent SEO issue: Cloudflare Pages serves 404 routes with HTTP 200, so `NotFoundPage` now emits `noindex` and every page self-canonicalises via a new `canonical`/`noindex` prop on `PageMeta`.

---

## P1 — Content depth (addresses "missing travel content")

### Journal / blog section at `/journal`

The `/journal` scaffold is live with dedicated `JournalIndexPage` and `JournalArticlePage` components, Blog + BlogPosting JSON-LD, byline pointing at the author hub, and related-guide/related-pass sidebars. **All seed articles below are shipped (8 journal posts + 2 that moved to `/passes`).** Keep the cadence going for anything new.

Seed articles:

- [x] "Is the JR Pass still worth it in 2026?" — **shipped as `/passes/jr-pass`** instead of a journal article (same content scope, better categorised under transport passes).
- [x] "London Zone 1 vs Zone 2: the real hotel cost difference" — published at `/journal/london-zone-1-vs-zone-2-hotel-cost`.
- [x] "Why Otsuka is Tokyo's most underrated hotel base" — published at `/journal/why-otsuka-is-tokyos-most-underrated-hotel-base` as an editor's pick expansion.
- [x] "Shinkansen vs flying Tokyo→Osaka in 2026: cost, time, carbon" — published at `/journal/shinkansen-vs-flying-tokyo-osaka-2026`.
- [x] "The quietest hotels near Gare du Nord" — published at `/journal/quietest-hotels-near-gare-du-nord`.
- [x] "Bangkok BTS vs MRT: which line should you actually stay on" — published at `/journal/bangkok-bts-vs-mrt-where-to-stay`.
- [x] "Hammersmith: the London hotel base nobody talks about" — published at `/journal/hammersmith-london-hotel-base-nobody-talks-about`.
- [x] "How to use Navigo Découverte as a tourist in Paris" — **shipped as `/passes/navigo`** instead of a journal article.
- [x] "Kyoto without a car: every temple you can reach by bus + subway" — published at `/journal/kyoto-without-a-car-temples-by-bus-subway`.
- [x] "Eurostar vs budget flight London→Paris: the honest breakdown" — published at `/journal/eurostar-vs-budget-flight-london-paris`.
- [x] "Madrid Atocha vs Chamartín: which station should you actually stay near" — published at `/journal/madrid-atocha-vs-chamartin-where-to-stay`. Fresh angle (not on the original seed list) — Decision-guide format applied to a Spain-side rail topic to balance the existing UK/JP/FR/TH coverage.

Cadence: **one new article every 10-14 days** between now and re-applying. The original 4-5 target was hit and then some — **9 articles live as of April 2026**. Next articles should cover fresh angles (not on the original seed list) to keep the publication dates moving.

### Transport pass explainer pages

High search volume, low competition, perfect for long-tail SEO. `/passes` index page live, `PassPage` component renders any entry from `frontend/src/data/transportPasses.js`:

- [x] `/passes/jr-pass` — Japan Rail Pass after the 2023 hike, break-even maths, regional alternatives.
- [x] `/passes/oyster-card` — Oyster vs contactless, zone caps, Heathrow Express.
- [x] `/passes/navigo` — Navigo Découverte weekly pass with the Monday-to-Sunday gotcha.
- [x] `/passes/eurail` — Eurail Global Pass for multi-country trips — published April 2026 with the 2023 reservation-system reality check.
- [x] `/passes/bts-rabbit-card` — Bangkok BTS Rabbit card / MRT card — published April 2026 with honest buy/skip advice for short tourist trips.

### Expand city guide coverage

Started at 11 full guides. Now at **23 full guides** — every city on the original priority-additions list is shipped. Data still exists in the backend for ~52 cities, so there's room for more expansion whenever a specific city's search volume justifies it.

Priority additions (highest search volume first):

- [x] Manchester (UK — has rail data) — published April 2026.
- [x] Munich (Germany — Oktoberfest traffic) — published April 2026.
- [x] Hamburg (Germany) — published April 2026.
- [x] Lyon (France — TGV hub) — published April 2026.
- [x] Marseille (France) — published April 2026.
- [x] Valencia (Spain) — published April 2026.
- [x] Seville (Spain) — published April 2026.
- [x] Nagoya (Japan — Shinkansen) — published April 2026.
- [x] Yokohama (Japan) — published April 2026.
- [x] Hiroshima (Japan — huge tourist demand) — published April 2026.
- [x] Chiang Mai (Thailand) — published April 2026.
- [x] Phuket (Thailand) — published April 2026 as an honest "no rail here" exception guide, covering beach selection and airport transfers since there are no stations on the island.

Template: use an existing guide as a shape, write 4-5 original sections per city. Each guide is ~1500 words.

### New country expansions (backend station data required first)

These are strategic expansions that need backend station data added to `backend/staybyrail/stations.py` before any frontend guide work. Good rail coverage = strong fit for StayByRail; US coverage deliberately limited to cities where rail is the genuinely practical hotel base.

**China (including Hong Kong SAR)** — world's largest high-speed rail network plus the world-class MTR. **All shipped April 2026.** 7 China mainland cities + Hong Kong, with backend station data, full city guides, FAQs, country explainer, curated hero photos, sitemap entries, CoveragePage card, and Footer popular-pages links. Hong Kong is now categorised under China (it is a Special Administrative Region with its own visa rules, currency, and rail system, but constitutionally part of the PRC). Total: 8 new city guides, 101 new programmatic station landing pages, 1 new country explainer page, 8 curated hero photos.
- [x] Beijing — 6 lines, 26 popular stations (Subway 1/2/4/10, Airport Express, CR HSR), full guide + 5 FAQs + curated Wikimedia Commons hero photo (CBD skyline by N509FZ).
- [x] Shanghai — 5 lines, 21 popular stations (Metro 1/2/10, Maglev, CR HSR), full guide + 5 FAQs + curated hero photo (Pudong panorama by King of Hearts).
- [x] Guangzhou — 4 lines, 16 popular stations (Metro 1/2/3, CR HSR), full guide + 5 FAQs + curated hero photo (Canton Tower by Tim Wu).
- [x] Shenzhen — 3 lines, 11 popular stations (Metro 1/4, CR HSR including Futian and Shenzhen North), full guide + 5 FAQs + curated hero photo (Futian commercial district by Charlie fong).
- [x] Chengdu — 3 lines, 11 popular stations (Metro 1/2, CR HSR), full guide + 5 FAQs + curated hero photo (Chengdu skyline with snow-capped mountains by FISU).
- [x] Xi'an — 3 lines, 8 popular stations (Metro 1/2, CR HSR), full guide + 5 FAQs + curated hero photo (city wall by Xiquinho Silva).
- [x] Hangzhou — 3 lines, 6 popular stations (Metro 1/2, CR HSR), full guide + 5 FAQs + curated hero photo (Qianjiang New City by EditQ).
- [x] Hong Kong — 6 lines, 23 popular stations covering MTR Island/Tsuen Wan/Kwun Tong/East Rail/Tung Chung-Airport Express plus the GSHKER high-speed terminus at West Kowloon. Full guide + 5 FAQs + curated hero photo (Skyline from the Peak by Simeon W). Guide opens with a "Special City Within China" section explaining the 1841-1997 colonial history, the 1984 Joint Declaration, the One Country Two Systems framework, the local Hong Konger identity, Cantonese language, and the practical implications (separate visa, currency, MTR, no Wikipedia/Google blocks).
- [x] **`/countries/china` explainer** — 7-section long-form: CR Network in One Page, Train Types (G/D/C/Z/T/K), Booking on 12306, E-Tickets and Station Entry, Fares and Classes, Hong Kong as a Special Administrative Region, What to Pack and Practical Tips. Linked from every China and Hong Kong guide page.

**South Korea** — **All shipped 2026-04-09.** Seoul Metro is one of the best in the world; KTX high-speed gives full peninsula coverage. 5 cities, 49 station pages, 25 FAQs, `/countries/south-korea` explainer.
- [x] Seoul (Lines 1/2/3/4/6 + AREX + KTX)
- [x] Busan (Lines 1/2/3 + KTX)
- [x] Incheon (Line 1 + Suin-Bundang + AREX)
- [x] Daegu (Lines 1/2/3 + KTX)
- [x] Daejeon (Line 1 + KTX)

**United States** — rail is only the right hotel basis in a few cities; limit coverage to those. Amtrak intercity + urban heavy-rail/subway:
- [ ] New York City (MTA Subway, Grand Central, Penn Station, LIRR, NJ Transit)
- [ ] Washington DC (Metro, Union Station — true rail-first city)
- [ ] Chicago (CTA L, Union Station — Amtrak long-distance hub)
- [ ] Boston (MBTA T, South Station, North Station)
- [ ] San Francisco / Oakland (BART, Caltrain, Muni Metro)
- [ ] Philadelphia (SEPTA, 30th Street Station)

**Deliberately excluded from US scope**: LA, Miami, Seattle, Dallas, Houston, Phoenix, Atlanta. Rail in those cities exists but isn't dense enough to be the natural hotel-siting axis for tourists — covering them would dilute the site's positioning.

**What adding a country requires** (per country):
1. Backend station data in `backend/staybyrail/stations.py` with lines, popular flag, lat/lon.
2. Entries in `CITY_COUNTRIES` / `CITY_DISPLAY` / `CITY_COUNTRY` maps in both `backend/main.py` and `frontend/scripts/gen-stations.py`.
3. Regenerate `frontend/src/data/stations.json` via the generator.
4. One long-form city guide per covered city (~1500 words each) in `cityGuides.js` with 5 FAQs in `guideFaqs.js`.
5. ~~Optional~~: a **country explainer** page at `/countries/:slug` covering the national rail network, ticket types, typical fares, and when to use local vs national passes. This is the P1.5 layer between transport passes and city guides. **Infrastructure now built (April 2026)** — `/countries` index page, `/countries/:slug` route, `frontend/src/data/countries.js` data layer, `CountryPage.jsx` and `CountriesIndexPage.jsx` components, footer link, sitemap entries, and a discoverability link from each `GuidePage` to the matching country explainer. **First country shipped: `/countries/china`** covering CR High-Speed network, train type taxonomy (G/D/C/Z/T/K), 12306 booking, real-name e-tickets, station entry process, fares and classes, the Hong Kong SAR practicalities, and what to pack. Other countries should follow the same pattern.
6. Expand `CoveragePage` and `Footer` popular-pages nav.
7. Regenerate sitemap.

### Itinerary pages at `/itineraries/:slug`

`/itineraries` scaffold is live. Index + article page with Article + TouristTrip JSON-LD, day-by-day schema, related-guide and related-pass sidebars.

- [x] "3 days in Tokyo using only the Yamanote Line" — published at `/itineraries/3-days-tokyo-yamanote-line`.
- [x] "A weekend in Paris from Gare du Nord" — published at `/itineraries/paris-weekend-from-gare-du-nord`.
- [x] "Kansai in 5 days: Kyoto, Osaka, Nara, Himeji" — published at `/itineraries/kansai-5-days-kyoto-osaka-nara-himeji`.
- [x] "London in 48 hours from King's Cross" — published at `/itineraries/london-48-hours-from-kings-cross`.
- [x] "Backpacking Thailand by train: Bangkok to Chiang Mai" — published at `/itineraries/backpacking-thailand-by-train-bangkok-to-chiang-mai`.

### Structured additions to existing guides

- [x] Add a **"Neighbourhood at a glance"** price-band table to each guide (budget / mid / premium) — done for all 23 guides; data in `guidePriceBands.js`; dated with an "April 2026" timestamp so the numbers are visibly honest.
- [x] Add **typical journey times** to each key station — every one of the 120 keyStations across the 23 guides now ships with three journey times (airport, main attraction, another key station). Data lives in a new `frontend/src/data/guideJourneyTimes.js` file keyed by `{guideSlug: {stationName: [{to, minutes, via}]}}`. `GuidePage.jsx` renders them as a small dashed-border sub-list on each station card; on desktop they drop to their own full-width row so the existing "name | reason" two-column layout still works. Phuket entries are marked as taxi journeys since the island has no rail.
- [x] Add **FAQ schema** to each guide page (5 real Qs per city, feeds rich results) — covered earlier with the `guideFaqs.js` + FAQPage JSON-LD work.

---

## P2 — SEO / technical

### Structured data

- [x] **BreadcrumbList** schema on nested pages — live on `GuidePage`, `GuidesIndexPage`, and every `StationLandingPage`.
- [x] **Article** schema on guides — `GuidePage` emits Article JSON-LD with `author` and `datePublished` / `dateModified` from `updatedAt`. Journal posts still TBD.
- [x] **FAQPage** schema on each guide — 5 hand-written Qs per city live in `frontend/src/data/guideFaqs.js`, rendered as a collapsible accordion on each `GuidePage` and emitted as FAQPage JSON-LD.
- [x] **TouristDestination** schema on city guides — `GuidePage` emits it with `geo` coords; `GuidesIndexPage` also emits a `CollectionPage` listing all 23 guides as TouristDestinations.

### Internal linking

- [x] **Every guide should link to 5+ other pages** — every `GuidePage` now links to: related country guides (up to 4), all indexed stations in that city (the station-chip grid), key-station hotels-near landing pages, the author hub, relevant journal articles via the Footer, and transport passes. Typically 15+ internal links per guide.
- [x] **Cross-link stations**: every `StationLandingPage` links to the 8 nearest stations in the same city (by haversine distance) plus the parent city guide. Every `GuidePage` keyStation entry deep-links to its own landing page.
- [x] **Footer "popular pages" block** — three-column footer nav (popular guides + StayByRail meta + resources) renders on every page.

### Performance

- [x] **Code-split routes** (repeat of P0 item — critical)
- [x] **Preload critical fonts**, lazy-load Leaflet — Leaflet CSS is now imported inside `HotelMap.jsx` so it's bundled into the `HotelMap` lazy chunk (15 kB) and only fetched when the user lands on a page with a map. Removed the eager `leaflet.css` CDN link that was in `index.html`. Font preload is not needed — the site uses the system font stack (Inter is declared as a family name but never loaded as a file), so there is nothing to preload.
- [x] **Image sizing** — Wikipedia images are no longer fetched at their original resolution. The `useCityData` hook (which powers the GuidePage hero LCP) still uses the `wikiThumbUrl(summary, widthPx)` helper in `frontend/src/utils/wikiImage.js` to request 1200px, but `HomePage` and `GuidesIndexPage` now use the default `thumbnail.source` URL straight from the Wikipedia summary API (~320px) without rewriting. Reason: rewriting to 800px triggered an on-demand render on Wikimedia's thumb server, and ten concurrent cold-cache renders on homepage mount tripped a 429 rate limit; the default size is always pre-cached. Both surfaces also switched from CSS `background-image` to `<img loading="lazy" decoding="async">` so the browser naturally staggers the fetches. Previously the code preferred `originalimage.source`, which often served 4000×3000 JPEGs at several MB each.
- [x] **Cache-Control headers** on Cloudflare Pages — added `frontend/public/_headers` with an explicit policy: Vite-hashed assets in `/assets/*` get `max-age=31536000, immutable`; the SPA HTML shell gets `max-age=0, must-revalidate` so new deploys are visible immediately; sitemap / robots / ads.txt get a 1-hour TTL so search engines pick up changes quickly; favicon / og-image get 1 day. Also sets `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin` site-wide.

### Canonicals and meta

- [x] Verify every page has a canonical URL pointing to itself — `PageMeta` now self-canonicalises every route by default and accepts an explicit `canonical` override for the programmatic station pages.
- [x] Check no two pages share the same `<title>` — audited all 56 static page titles (15 top-level + 23 city guides + 5 passes + 8 journal articles + 5 itineraries) and all 597 programmatic `/hotels-near/` station landing pages: zero duplicates. Found and fixed one real bug: `SearchPage` had no `PageMeta` at all, so `/search` inherited whatever title the previous page set in the DOM. Now has a distinct title and description.
- [ ] Add `hreflang` tags if you ever ship in multiple languages (not now, but keep in mind)

---

## P3 — Traction (mostly user actions)

None of this is automatable. You need to do these — they need a real human voice.

### Search engine basics

- [ ] **Google Search Console**: verify, submit sitemap, check Core Web Vitals report weekly *(user action)*
- [ ] **Bing Webmaster Tools**: same *(user action)*
- [ ] **Google Business Profile**: probably not applicable but check
- [ ] **Index API**: for each new journal article / station page, request indexing in GSC manually for faster pickup *(user action)*

### Link building (highest-impact slow work)

- [ ] **Reddit**: genuinely helpful answers in r/JapanTravel, r/travel, r/london, r/bangkok, r/paris, r/unitedkingdom — include a link only when it's actually the best answer. Build a real account. Takes weeks. *(user action)*
- [ ] **Quora**: same approach, answer "best hotels near X station" questions *(user action)*
- [ ] **Travel forums**: Lonely Planet Thorn Tree, Tripadvisor forums, Rail.cc forums — respond to specific questions *(user action)*
- [ ] **Fiverr travel bloggers**: £50-150 can get you 2-3 contextual backlinks from mid-DA travel sites. Vet carefully — avoid PBNs. *(user action)*
- [ ] **Medium / Substack cross-posts** — republish journal articles with `rel=canonical` back to staybyrail.co.uk. Doesn't hurt SEO (canonical handles dup content) and gets Medium's built-in audience. *(user action)*
- [ ] **Guest posts** — offer to write a rail-travel guest post for a mid-tier travel blog in exchange for a byline + backlink *(user action)*

### Social / content marketing

- [ ] **Instagram** — simple content: station photos + hotel-near-station reel. Link in bio. *(user action)*
- [ ] **TikTok** — 30-second "hotels near X station" destination reels. Low effort, high reach upside. *(user action)*
- [ ] **X / Twitter** — thread-per-journal-article announcements *(user action)*
- [ ] **Pinterest** — underrated for travel SEO; pin each guide with a branded image *(user action)*

### Email / direct

- [ ] **Email 10 travel bloggers** per month offering a reciprocal link or guest post *(user action)*
- [ ] **Newsletter?** — optional; if you're going to publish journal content anyway, a simple Substack or Buttondown mirror costs nothing and builds a direct audience *(user action)*

---

## P4 — Credibility & brand polish

- [~] **Real photography** — scaffolded: new `frontend/src/data/cityHeroPhotos.js` accepts per-slug entries of `{src, credit, link, source, license}`. `useCityData`, `HomePage`, and `GuidesIndexPage` now prefer a curated photo when one exists for the slug and transparently fall back to the existing Wikipedia fetch otherwise. **First batch shipped April 2026: 8 curated Wikimedia Commons photos for Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Xi'an, Hangzhou, and Hong Kong.** All licensed CC BY / CC BY-SA / CC BY 2.0/3.0/4.0 and properly credited. **Important constraint**: Wikimedia thumbnail widths above ~1280px return HTTP 429 from non-Wikipedia referers (anti-abuse rate-limit on on-demand thumbnail generation), so all curated entries cap at 1280px on the long edge. New `frontend/scripts/warm-hero-photos.py` script can be run after a deploy to pre-warm any new entries on Wikimedia's thumb cache so the first real visitor doesn't see a 429. Remaining 23 cities still need curated photos — they'll continue to use the Wikipedia fallback until populated.
- [x] **Favicon upgrade** — multi-size set rendered from the existing `favicon.svg` using `resvg_py`: 16, 32, 48, 180, 192, 512 PNGs plus a multi-resolution `favicon.ico` (16/32/48). `index.html` now links the `.ico` (old browsers / Google SERPs), the `.svg` (modern browsers), 16/32 PNGs, and a 180px `apple-touch-icon` for iOS. Added `public/site.webmanifest` with 192/512 entries for Android home-screen installs and theme-colour matching the site background.
- [x] **Contact page** with a real form (or at minimum a mailto:) — `/contact` live with ContactPage JSON-LD, mailto CTA, and clear sections on what enquiries are welcome vs which belong elsewhere.
- [x] **Privacy page audit** — the old copy claimed StayByRail "does not collect or store personal information such as your name" but the `/api/tips` endpoint persists `{name, tip, ts}` to `backend/data/tips.json` whenever a user submits a city tip. Rewrote "What data we collect" to disclose this honestly, advise users to use a first name or nickname, and include a delete-on-request line. Also added: a note that sessionStorage caches city/weather/event data locally, an explicit "no first-party tracking cookies" line, disclosure of the Wikipedia / Open-Meteo / Ticketmaster / PredictHQ / Eventbrite fetches, an Affiliate relationships section explaining the forthcoming booking-site links, a mailto contact for deletion requests, and a date bump to April 2026.
- [x] **Terms page audit** — tightened section 3 to name the actual data sources (SerpAPI, RapidAPI, plus Wikipedia / Open-Meteo / Ticketmaster / PredictHQ / Eventbrite for guide content). Renamed section 4 to "Third-party links, booking, and affiliate relationships" and added an affiliate disclosure paragraph matching the Privacy update, with a line stating commission does not influence result ranking. Section 6 now explicitly notes that tips are displayed publicly alongside the submitted name, grants lightweight editing rights, reserves the right to moderate/remove for spam or inaccuracy, gives a mailto for deletion, and sets a 16+ age floor for tip submissions.
- [x] **About page**: added a circular "MF" initials avatar in the Built-by block (links through to `/authors/matt-farrell`; can be swapped for a real `<img>` file whenever a headshot is available), a full-paragraph "Project timeline" section noting the real 29 March 2026 start date + current scale (597 programmatic station pages across 52 cities) + link to the public GitHub history, and a clarifying link to the author page for the full bio. GitHub + LinkedIn are already linked — those are the two profiles Matt uses professionally, so no additional profile links were added.
- [x] **Author page at `/authors/matt-farrell`** — live with Person JSON-LD (jobTitle, description, sameAs links to GitHub/LinkedIn, worksFor). Every guide byline, every journal article byline, and the About page all link to it.
- [x] **Homepage Featured Guides carousel** — the Featured City Guides block used to render all 23 guides in a four-column grid, which buried the how-it-works / journal / explore strips. It now shows ten curated cities in a horizontal scroll-snap carousel (~4 visible on desktop, 1–2 on mobile) with left/right arrow buttons positioned over the card row, same height as the cards, semi-transparent with backdrop-blur. Arrows auto-hide at scroll boundaries (left arrow is hidden until you scroll right; right arrow is hidden once you reach the end). The carousel ends with a dashed-border "Browse more → All city guides" card linking to `/guides`, so users can still reach the full list. Native scrollbar fully hidden because the arrows replace it; touch swipe still works.

---

## P5 — Monetisation readiness (for when CJ approves)

- [x] Hotel card "Book via Booking.com" — secondary CTA relabelled from "Compare on Booking.com" to "Book via Booking.com" and routed through a new `frontend/src/utils/affiliate.js` helper. The helper wraps any Booking.com URL in the CJ deep-link format `https://www.anrdoezrs.net/click-PUB-ADV?url=...` when the three `VITE_AFFILIATE_NETWORK` / `VITE_CJ_PUBLISHER_ID` / `VITE_CJ_BOOKING_ADVERTISER_ID` env vars are set, and passes URLs through unchanged otherwise — so this is a no-op in the current build and becomes live the moment CJ approves and the IDs are added to the Cloudflare Pages environment. Both the primary (cheapest-site) CTA and the secondary Booking.com button are wrapped. Outbound affiliate links now carry `rel="noopener sponsored"` and `data-affiliate="booking"` for the conversion-tracking skeleton in the next item.
- [x] Disclosure banner / footer line — `Footer.jsx` now renders a dashed-border disclosure paragraph above the copyright line on every page: "StayByRail may earn a small commission when you book a hotel through our outbound links, at no extra cost to you. Commission does not influence how results are ranked or displayed." Links through to the Privacy Policy where the full affiliate breakdown lives. Matches the language already on the Privacy and Terms pages.
- [x] Conversion tracking skeleton — new `frontend/src/utils/analytics.js` exports `initAnalytics()` and `trackEvent(name, props)`. `initAnalytics()` is called once from `main.jsx` and installs a single document-level capture-phase click listener that fires an `Affiliate Click` event on every `<a data-affiliate>` click (carries `{network, href}`) plus a `staybyrail:affiliateclick` DOM CustomEvent for other code to observe. Plausible's loader is only injected when `VITE_PLAUSIBLE_DOMAIN` is set on the build, so by default nothing is loaded over the network and the Privacy Policy promise ("we will update this page before analytics is deployed") is not yet triggered. Also instruments the search form — `SearchPage.handleSearch` now fires a `Hotel Search` event with `{city, line}` props. Supports self-hosted Plausible via optional `VITE_PLAUSIBLE_API`.
- [ ] A/B test affiliate CTA copy once there's enough traffic

---

## Re-application checklist

Before re-applying to CJ, verify:

- [x] Site has **50+ indexable pages** — sitemap currently contains 764 URLs (698 programmatic `/hotels-near/` station pages + 31 city guides + 9 journal articles + 5 itineraries + 5 transport passes + core pages).
- [x] At least **5 journal articles** published with real dates showing consistent output — 9 articles now live at `/journal` (target exceeded).
- [ ] **Google Analytics / Plausible** shows non-zero organic traffic for the past 4 weeks
- [ ] **Lighthouse 90+** across the board on the top 3 pages
- [ ] **Search Console** shows pages being indexed and some impressions
- [ ] **At least 3 external backlinks** from non-spam sources
- [ ] All CJ feedback bullets can be answered with "here's what we changed" evidence

Realistic timeline from "start P0" to "ready to re-apply": **6-10 weeks** of focused work.

---

## Out of scope (don't do these)

- ❌ Fake reviews / user tips — CJ will spot this and it's deceptive
- ❌ PBN / link farm backlinks — Google penalises, waste of money
- ❌ Keyword stuffing any page — modern Google ranks content quality, not density
- ❌ Duplicate content across pages — each page must be substantively unique
- ❌ Buying traffic from low-quality sources to pad numbers — affiliate networks see through this

---

*Last updated: 2026-04-10 (deployed) — **36 city guides, 10 journal articles, 5 itineraries, 5 transport passes, 2 country explainers, 8 curated hero photos, 822 sitemap URLs (63 with lastmod) across 65 cities and 8 countries**.*

*Deploy history:*
- **2026-04-10**: Frontend https://780d963b.staybyrail.pages.dev → staybyrail.co.uk. Backend dep-d7cfa1navr4c73ed9qag on Render. Shipped: sitemap lastmod enrichment, IndexNow push (822 URLs to Bing/Yandex/Seznam), AdSense verification, light theme default + contrast fix, Japan journal article + magazine redesign, South Korea expansion (5 cities), bundle-size fix (267 KB).
- **2026-04-08**: Full China expansion (8 cities, 101 station pages), P2 performance block, P4 polish, P5 monetisation skeleton, homepage carousel redesign, journal navbar link, Madrid Atocha article.
