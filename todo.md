# StayByRail — Roadmap to re-applying for Booking.com / CJ

CJ's rejection flagged three things: **missing travel content**, **inadequate site design**, and **insufficient visitor traffic**. Design has been cleaned up. The other two need real work before re-applying.

This file is organised by ROI. Start at the top.

---

## P0 — Do these first (highest ROI)

- [x] **Programmatic `/hotels-near/:station` landing pages** — 597 station pages across 52 cities, each with unique H1/meta/canonical, BreadcrumbList + TrainStation + GeoCoordinates JSON-LD, live hotel preview from the API, nearby-stations grid for internal linking, and back-link to the parent city guide. Sitemap regenerated with all 613 URLs. Generator lives at `frontend/scripts/gen-stations.py`.
- [x] **Code-split the route bundle** — main JS dropped from 594 KB to 308 KB via `React.lazy` + `<Suspense>`. Each route is its own chunk; `SearchPage` (202 KB) and `HotelMap` (155 KB) only load when visited. HomePage stays eager as the LCP target.
- [ ] **Lighthouse audit** on `/`, `/guides/tokyo`, `/search`, `/hotels-near/shinjuku-tokyo`, `/journal/london-zone-1-vs-zone-2-hotel-cost` — record current Performance / Accessibility / SEO / Best Practices scores, then fix the red items. Target: 90+ on all four. *(user action — run `npx lighthouse <url> --view` locally or from Chrome DevTools)*
- [x] **"Last updated" dates + author byline on every guide** — every entry in `cityGuides.js` has `updatedAt` + `author` fields; `GuidePage` renders "Updated April 2026 · by Matt Farrell" beneath the hero.
- [ ] **Submit sitemap to Google Search Console** — verify property, submit `https://staybyrail.co.uk/sitemap.xml`, check indexing coverage. Do the same for **Bing Webmaster Tools**. Free, one-time, essential. *(user action)*
- [x] **Fix every internal 404** — audited every `<Link to>` and `<a href>` in `frontend/src`; all internal targets resolve. Fixed one latent SEO issue: Cloudflare Pages serves 404 routes with HTTP 200, so `NotFoundPage` now emits `noindex` and every page self-canonicalises via a new `canonical`/`noindex` prop on `PageMeta`.

---

## P1 — Content depth (addresses "missing travel content")

### Journal / blog section at `/journal`

The `/journal` scaffold is live with dedicated `JournalIndexPage` and `JournalArticlePage` components, Blog + BlogPosting JSON-LD, byline pointing at the author hub, and related-guide/related-pass sidebars. Seed articles are being published one by one.

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

Cadence: **one new article every 10-14 days** between now and re-applying. Even 4-5 published articles + the scaffold = a noticeably active site.

### Transport pass explainer pages

High search volume, low competition, perfect for long-tail SEO. `/passes` index page live, `PassPage` component renders any entry from `frontend/src/data/transportPasses.js`:

- [x] `/passes/jr-pass` — Japan Rail Pass after the 2023 hike, break-even maths, regional alternatives.
- [x] `/passes/oyster-card` — Oyster vs contactless, zone caps, Heathrow Express.
- [x] `/passes/navigo` — Navigo Découverte weekly pass with the Monday-to-Sunday gotcha.
- [x] `/passes/eurail` — Eurail Global Pass for multi-country trips — published April 2026 with the 2023 reservation-system reality check.
- [x] `/passes/bts-rabbit-card` — Bangkok BTS Rabbit card / MRT card — published April 2026 with honest buy/skip advice for short tourist trips.

### Expand city guide coverage

You have **11 full guides** but data for **52 cities**. Each new full guide = another indexable, linkable page.

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
- [ ] "Kansai in 5 days: Kyoto, Osaka, Nara, Himeji"
- [x] "London in 48 hours from King's Cross" — published at `/itineraries/london-48-hours-from-kings-cross`.
- [ ] "Backpacking Thailand by train: Bangkok to Chiang Mai"

### Structured additions to existing guides

- [x] Add a **"Neighbourhood at a glance"** price-band table to each guide (budget / mid / premium) — done for all 17 guides; data in `guidePriceBands.js`; dated with an "April 2026" timestamp so the numbers are visibly honest.
- [ ] Add **typical journey times** to each key station (to airport, to main attraction, to other key stations)
- [x] Add **FAQ schema** to each guide page (5 real Qs per city, feeds rich results) — covered earlier with the `guideFaqs.js` + FAQPage JSON-LD work.

---

## P2 — SEO / technical

### Structured data

- [x] **BreadcrumbList** schema on nested pages — live on `GuidePage`, `GuidesIndexPage`, and every `StationLandingPage`.
- [x] **Article** schema on guides — `GuidePage` emits Article JSON-LD with `author` and `datePublished` / `dateModified` from `updatedAt`. Journal posts still TBD.
- [x] **FAQPage** schema on each guide — 5 hand-written Qs per city live in `frontend/src/data/guideFaqs.js`, rendered as a collapsible accordion on each `GuidePage` and emitted as FAQPage JSON-LD.
- [x] **TouristDestination** schema on city guides — `GuidePage` emits it with `geo` coords; `GuidesIndexPage` also emits a `CollectionPage` listing all 11 guides as TouristDestinations.

### Internal linking

- [x] **Every guide should link to 5+ other pages** — every `GuidePage` now links to: related country guides (up to 4), all indexed stations in that city (the station-chip grid), key-station hotels-near landing pages, the author hub, relevant journal articles via the Footer, and transport passes. Typically 15+ internal links per guide.
- [x] **Cross-link stations**: every `StationLandingPage` links to the 8 nearest stations in the same city (by haversine distance) plus the parent city guide. Every `GuidePage` keyStation entry deep-links to its own landing page.
- [x] **Footer "popular pages" block** — three-column footer nav (popular guides + StayByRail meta + resources) renders on every page.

### Performance

- [x] **Code-split routes** (repeat of P0 item — critical)
- [ ] **Preload critical fonts**, lazy-load Leaflet until the user scrolls to the map
- [ ] **Image sizing** — Wikipedia images come in as huge originals; resize through an image CDN or swap to Cloudinary / ImageKit
- [ ] **Cache-Control headers** on Cloudflare Pages for static assets (should already be good, verify in DevTools)

### Canonicals and meta

- [x] Verify every page has a canonical URL pointing to itself — `PageMeta` now self-canonicalises every route by default and accepts an explicit `canonical` override for the programmatic station pages.
- [ ] Check no two pages share the same `<title>`
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
- [ ] **Favicon upgrade** — current is the logo SVG; a proper multi-size favicon set (ico + png 16/32/192/512) looks more professional
- [x] **Contact page** with a real form (or at minimum a mailto:) — `/contact` live with ContactPage JSON-LD, mailto CTA, and clear sections on what enquiries are welcome vs which belong elsewhere.
- [ ] **Privacy page audit** — make sure it accurately reflects the ad network + any cookies (CJ reviewers read this)
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

- [ ] Site has **50+ indexable pages** (currently ~25, programmatic station pages close this instantly)
- [ ] At least **5 journal articles** published with real dates showing consistent output
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

*Last updated: 2026-04-08*
