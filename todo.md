# StayByRail — Roadmap to re-applying for Booking.com / CJ

CJ's rejection flagged three things: **missing travel content**, **inadequate site design**, and **insufficient visitor traffic**. Design has been cleaned up. The other two need real work before re-applying.

This file is organised by ROI. Start at the top.

---

## P0 — Do these first (highest ROI)

- [ ] **Programmatic `/hotels-near/:station` landing pages** — turn existing station data into 300-500 indexable pages. Each page: unique H1 / meta / schema, live hotel results from the API, station line info, walking landmarks, internal links to related stations and the parent city guide. This alone can 10x the indexable footprint overnight. Pattern used by Trivago, Kayak, Skyscanner.
- [ ] **Code-split the route bundle** — main JS is 594 KB unchunked. Use `React.lazy` + `<Suspense>` on `SearchPage`, `GuidePage`, `TravelGuidePage`, `TrainTimesPage`. Target LCP < 1.5s on 4G. Google ranks this.
- [ ] **Lighthouse audit** on `/`, `/guides/tokyo`, `/search` — record current Performance / Accessibility / SEO / Best Practices scores, then fix the red items. Target: 90+ on all four.
- [ ] **"Last updated" dates + author byline on every guide** — add `updatedAt` to `cityGuides.js`, render it as "Updated April 2026 · by Matt Farrell". Signals freshness and real authorship. Both CJ writing tips ("be disciplined — regular updates") and Google E-E-A-T care about this.
- [ ] **Submit sitemap to Google Search Console** — verify property, submit `https://staybyrail.co.uk/sitemap.xml`, check indexing coverage. Do the same for **Bing Webmaster Tools**. Free, one-time, essential. *(user action)*
- [ ] **Fix every internal 404** — audit all `<Link>`s and external `href`s across the codebase. Any broken link is a credibility signal to reviewers and crawlers.

---

## P1 — Content depth (addresses "missing travel content")

### Journal / blog section at `/journal`

Add a long-form content section with 8-12 real articles, each 1000-2000 words, published dates, author byline. Target long-tail SEO + proves "regular updates".

Seed articles:

- [ ] "Is the JR Pass still worth it in 2026?" — high search volume, opinion piece with data
- [ ] "London Zone 1 vs Zone 2: the real hotel cost difference" — data-driven, pulls from your own search results
- [ ] "Why Otsuka is Tokyo's most underrated hotel base" — expand your existing editor's pick into a full article
- [ ] "Shinkansen vs flying Tokyo→Osaka in 2026: cost, time, carbon" — comparison piece
- [ ] "The quietest hotels near Gare du Nord" — practical traveller angle
- [ ] "Bangkok BTS vs MRT: which line should you actually stay on" — beginner-facing decision guide
- [ ] "Hammersmith: the London hotel base nobody talks about" — editor's pick expansion
- [ ] "How to use Navigo Découverte as a tourist in Paris" — transport hack
- [ ] "Kyoto without a car: every temple you can reach by bus + subway" — deep utility content
- [ ] "Eurostar vs budget flight London→Paris: the honest breakdown" — comparison

Cadence: **one new article every 10-14 days** between now and re-applying. Even 4-5 published articles + the scaffold = a noticeably active site.

### Transport pass explainer pages

High search volume, low competition, perfect for long-tail SEO:

- [ ] `/passes/jr-pass` — Japan Rail Pass, what it includes, activation, 2026 price changes
- [ ] `/passes/oyster-card` — London Oyster vs contactless, Zone caps, Heathrow Express
- [ ] `/passes/navigo` — Paris Navigo Découverte weekly pass
- [ ] `/passes/eurail` — Eurail Global Pass for multi-country trips
- [ ] `/passes/bts-rabbit-card` — Bangkok BTS Rabbit card / MRT card

### Expand city guide coverage

You have **11 full guides** but data for **52 cities**. Each new full guide = another indexable, linkable page.

Priority additions (highest search volume first):

- [ ] Manchester (UK — has rail data, missing guide)
- [ ] Munich (Germany — Oktoberfest traffic)
- [ ] Hamburg (Germany)
- [ ] Lyon (France — TGV hub)
- [ ] Marseille (France)
- [ ] Valencia (Spain)
- [ ] Seville (Spain)
- [ ] Nagoya (Japan — Shinkansen)
- [ ] Yokohama (Japan)
- [ ] Hiroshima (Japan — huge tourist demand)
- [ ] Chiang Mai (Thailand)
- [ ] Phuket (Thailand)

Template: use an existing guide as a shape, write 4-5 original sections per city. Each guide is ~1500 words.

### Itinerary pages at `/itineraries/:slug`

Highly shareable, link magnets, real travel utility:

- [ ] "3 days in Tokyo using only the Yamanote Line"
- [ ] "A weekend in Paris from Gare du Nord"
- [ ] "Kansai in 5 days: Kyoto, Osaka, Nara, Himeji"
- [ ] "London in 48 hours from King's Cross"
- [ ] "Backpacking Thailand by train: Bangkok to Chiang Mai"

### Structured additions to existing guides

- [ ] Add a **"Neighbourhood at a glance"** price-band table to each guide (budget / mid / premium)
- [ ] Add **typical journey times** to each key station (to airport, to main attraction, to other key stations)
- [ ] Add **FAQ schema** to each guide page (5 real Qs per city, feeds rich results)

---

## P2 — SEO / technical

### Structured data

- [ ] **BreadcrumbList** schema on all nested pages (already have breadcrumb UI, just add the JSON-LD)
- [ ] **Article** schema on journal posts with `datePublished` / `dateModified` / `author`
- [ ] **FAQPage** schema on each guide (pulled from the guide's own FAQs)
- [ ] **TouristDestination** schema on city guides with `geo` coordinates

### Internal linking

- [ ] **Every guide should link to 5+ other pages** — related cities, nearby stations, relevant journal articles, transport passes
- [ ] **Cross-link stations**: on `/hotels-near/shinjuku-tokyo`, link to `shibuya-tokyo`, `tokyo-station-tokyo`, the Tokyo guide, and the Yamanote Line article
- [ ] **Footer "popular pages" block** with the top 6-8 guides/journal articles

### Performance

- [ ] **Code-split routes** (repeat of P0 item — critical)
- [ ] **Preload critical fonts**, lazy-load Leaflet until the user scrolls to the map
- [ ] **Image sizing** — Wikipedia images come in as huge originals; resize through an image CDN or swap to Cloudinary / ImageKit
- [ ] **Cache-Control headers** on Cloudflare Pages for static assets (should already be good, verify in DevTools)

### Canonicals and meta

- [ ] Verify every page has a canonical URL pointing to itself
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
- [ ] **Contact page** with a real form (or at minimum a mailto:) — affiliate reviewers check this
- [ ] **Privacy page audit** — make sure it accurately reflects the ad network + any cookies (CJ reviewers read this)
- [ ] **Terms page audit** — same
- [ ] **About page**: add a photo of you, a timestamp of when you built the project, and which professional profiles you're active on (you already have GitHub + LinkedIn which is good)
- [ ] **Author page at `/authors/matt-farrell`** — a single byline page that every guide and journal article links to. Builds E-E-A-T signal for Google.

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

*Last updated: 2026-04-07*
