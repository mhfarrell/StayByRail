# StayByRail — Roadmap to re-applying for Booking.com / CJ

CJ's rejection flagged three things: **missing travel content**, **inadequate site design**, and **insufficient visitor traffic**. Design has been cleaned up. The other two need real work before re-applying.

This file is organised by ROI. Start at the top.

---

## P0 — Do these first (highest ROI)

- [x] **Programmatic `/hotels-near/:station` landing pages** — 597 station pages across 52 cities, each with unique H1/meta/canonical, BreadcrumbList + TrainStation + GeoCoordinates JSON-LD, live hotel preview from the API, nearby-stations grid for internal linking, and back-link to the parent city guide. Sitemap now contains 654 URLs in total. Generator lives at `frontend/scripts/gen-stations.py`.
- [x] **Code-split the route bundle** — main JS dropped from 594 KB to 308 KB via `React.lazy` + `<Suspense>`. Each route is its own chunk; `SearchPage` (202 KB) and `HotelMap` (155 KB) only load when visited. HomePage stays eager as the LCP target.
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

Cadence: **one new article every 10-14 days** between now and re-applying. The original 4-5 target was hit and then some — 8 articles live as of April 2026. Next articles should cover fresh angles (not on the original seed list) to keep the publication dates moving.

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

**China** — world's largest high-speed rail network, huge domestic and inbound search volume, natural fit for this site. Target cities for station data + city guides + country explainer:
- [ ] Beijing (Beijing Subway is enormous; CR High-Speed hub)
- [ ] Shanghai (Metro + Maglev + 12 Shanghai-terminus high-speed lines)
- [ ] Guangzhou (South China rail hub, high-speed to Hong Kong)
- [ ] Shenzhen (mainland terminus for Hong Kong, Futian high-speed)
- [ ] Chengdu (western China, Panda research, high-speed from Chongqing)
- [ ] Xi'an (Terracotta Army, Shaanxi high-speed hub)
- [ ] Hangzhou (tourism destination, G-series from Shanghai)

**South Korea** — Seoul Metro is one of the best in the world; KTX high-speed gives full peninsula coverage. Strong visitor demand from JP/CN/SE Asia. Target cities:
- [ ] Seoul (Seoul Metropolitan Subway: 300+ stations across 23 lines)
- [ ] Busan (Busan Metro + KTX terminus)
- [ ] Incheon (Airport + AREX express)
- [ ] Daegu
- [ ] Daejeon

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
5. Optional: a **country explainer** page at `/countries/:slug` covering the national rail network, ticket types, typical fares, and when to use local vs national passes. This is the P1.5 layer between transport passes and city guides — hit it for each new country.
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
- [x] **Image sizing** — Wikipedia images are no longer fetched at their original resolution. A shared `wikiThumbUrl(summary, widthPx)` helper in `frontend/src/utils/wikiImage.js` swaps the `/NNNpx-` segment on the thumbnail URL so Wikimedia's thumb server renders exactly the size each card needs (800px for grid thumbs, 1000–1200px for hero/country images). Used by `useCityData.js`, `HomePage.jsx`, `GuidesIndexPage.jsx`, and `TrainTimesPage.jsx`. Previously the code preferred `originalimage.source`, which often served 4000×3000 JPEGs at several MB each. No external CDN needed.
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

- [ ] **Real photography** — replace Wikipedia thumbnails in featured cards with curated Unsplash / Pexels shots (free, higher quality, consistent aspect ratio)
- [x] **Favicon upgrade** — multi-size set rendered from the existing `favicon.svg` using `resvg_py`: 16, 32, 48, 180, 192, 512 PNGs plus a multi-resolution `favicon.ico` (16/32/48). `index.html` now links the `.ico` (old browsers / Google SERPs), the `.svg` (modern browsers), 16/32 PNGs, and a 180px `apple-touch-icon` for iOS. Added `public/site.webmanifest` with 192/512 entries for Android home-screen installs and theme-colour matching the site background.
- [x] **Contact page** with a real form (or at minimum a mailto:) — `/contact` live with ContactPage JSON-LD, mailto CTA, and clear sections on what enquiries are welcome vs which belong elsewhere.
- [x] **Privacy page audit** — the old copy claimed StayByRail "does not collect or store personal information such as your name" but the `/api/tips` endpoint persists `{name, tip, ts}` to `backend/data/tips.json` whenever a user submits a city tip. Rewrote "What data we collect" to disclose this honestly, advise users to use a first name or nickname, and include a delete-on-request line. Also added: a note that sessionStorage caches city/weather/event data locally, an explicit "no first-party tracking cookies" line, disclosure of the Wikipedia / Open-Meteo / Ticketmaster / PredictHQ / Eventbrite fetches, an Affiliate relationships section explaining the forthcoming booking-site links, a mailto contact for deletion requests, and a date bump to April 2026.
- [ ] **Terms page audit** — same
- [ ] **About page**: add a photo of you, a timestamp of when you built the project, and which professional profiles you're active on (you already have GitHub + LinkedIn which is good)
- [x] **Author page at `/authors/matt-farrell`** — live with Person JSON-LD (jobTitle, description, sameAs links to GitHub/LinkedIn, worksFor). Every guide byline, every journal article byline, and the About page all link to it.

---

## P5 — Monetisation readiness (for when CJ approves)

- [ ] Hotel card "Book via Booking.com" button wired to the CJ affiliate tracking link
- [ ] Disclosure banner / footer line: "StayByRail earns a small commission when you book through our links, at no cost to you"
- [ ] Conversion tracking — at minimum Plausible or GA4 with affiliate click events
- [ ] A/B test affiliate CTA copy once there's enough traffic

---

## Re-application checklist

Before re-applying to CJ, verify:

- [x] Site has **50+ indexable pages** — sitemap currently contains 654 URLs (597 programmatic `/hotels-near/` station pages + 23 city guides + 8 journal articles + 5 itineraries + 5 transport passes + core pages).
- [x] At least **5 journal articles** published with real dates showing consistent output — 8 articles now live at `/journal` (target exceeded).
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

*Last updated: 2026-04-08 — now 23 city guides, 8 journal articles, 5 itineraries, 5 transport passes, 654 sitemap URLs.*
