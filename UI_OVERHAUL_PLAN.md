# StayByRail — UI Overhaul Plan

*Drafted 2026-04-23. Pick this up in a fresh session and execute Phase 1 directly.*

---

## 0. TL;DR

Complete ground-up UI overhaul that:

1. **Repositions** the site from "hotels near a station" to **"hotels along an entire line"** — a genuinely unique offer no competitor has.
2. **Centralizes all styling** into a single `app.css` with **Tailwind v4** and a `@theme` token block. Deletes all 14 per-component CSS files.
3. **Re-skins** with a **rail-native, editorial-first, CVD-safe palette** — Rail Navy + Departure Amber + Verdigris Teal + warm off-white canvas.
4. **Adds a rail-heritage slab-serif display face** (Zilla Slab) + keeps Inter for body + IBM Plex Mono for times/prices.
5. **Introduces the signature `<LineSchematic>` component** — horizontal rail-line visualization with real official agency colours, hotels plotted along stops.
6. **Opens a major SEO front**: `/lines/:slug` programmatic page family (500–1500 new pages targeting "hotels on the Yamanote line", "hotels on the Central line", etc.).
7. **Makes the site AI-crawler-friendly** via `llms.txt`, expanded schema.org, and (recommended) migration to Astro for static pre-rendering.
8. **Backend stays on Render Free for now** — upgrade to Render Starter ($7/mo) is a later todo. Phase 1 still ships a `/health` endpoint so a free keep-alive cron can go in if needed.

Delivered in **8 shippable phases**. Phase 1 (tokens + Tailwind + fonts) does no visual damage; each subsequent phase is independently deployable.

---

## 1. Positioning & the Line-Centric Moat

### The pivot

Every competitor (Booking, Hotels.com, Airbnb, Expedia, Google Travel) sells "hotels near a place" — a city, a map pin, or at best a single station. StayByRail's unique offer is:

> *"Hotels along the **entire** Yamanote Line."*
> *"Anywhere on the Central Line — I just need to reach Bank easily."*

That sentence has no good search anywhere else. It has a perfect search on StayByRail. This is the one-line pitch, the homepage hero, and the SEO angle simultaneously.

### What the site *is* after the overhaul

**Editorial-dominant travel publication that aggregates hotels along rail lines.** The editorial weight (72 cities, 10+ journal articles, 5 itineraries, country explainers) is our moat against pure aggregators. The line-centric search is our moat against editorial travel publications.

### Primary search axis order

New: **Line → Station → City.** The search form, hero, nav all lead with line. Station and city remain available but are secondary.

---

## 2. Competitor Lessons (What to Steal)

| Site | What they do well | We steal | We don't copy |
|---|---|---|---|
| **Booking.com** | Filter sidebar density, price transparency, trust chips | Filter sidebar UX, price-per-night clarity, free-cancellation style trust chips | Dense card walls, Genius loyalty clutter, upsell modals |
| **Hotels.com** | Editorial hero imagery, clean card hierarchy | Editorial hero treatment | Rewards loyalty programme |
| **Airbnb** | Horizontal category shelves, photo-first, generous whitespace | Horizontal shelves — but ours are **line collections** ("Hotels on the Yamanote", "Hotels on RER A", "Hotels on the Jubilee") | Category obsession, neighbourhood vagueness |
| **Expedia** | Price calendar, bundle framing | Honest price stack | Bundle upsell |
| **Trivago** | Compare-across-sites messaging | Surface "One search, every booking site" prominently | Loud orange chrome, TV-ad tone |
| **Skyscanner** | "Everywhere" flexibility search | **"Any line in this city" flexibility mode** | Flight-specific chrome |
| **Google Travel** | Map-first layout, editorial blocks | Map-first on line pages, editorial "things on this line" blocks | Direct-hotel booking carousel |
| **TfL Journey Planner** | The **horizontal line schematic** (iconic, universally understood) | This becomes our **signature** UI component | Transactional framing — we editorialize the stops |
| **Hyperdia / Japan Transit** | Compact line-colour-coded station lists | Real official line colours everywhere | Clinical tabular density |
| **Seat61** | Editorial voice, honest advice | Voice and tone | Minimal visual design |
| **Condé Nast Traveler / Lonely Planet** | Magazine layout, serif display, long-form | Editorial card system, display type discipline | Paywalls, advertorial mixing |

---

## 3. Colour System — CVD-Safe, Emotion-Tuned, Rail-Native

### Why these colours

Rail signage and livery have converged on navy + amber + warm white for 150 years because that pairing sits on the **blue–yellow axis** that all common colour-vision deficiencies (CVD) preserve. ~8% of men have CVD; deuteranopia (green-weak, ~6%) is the most common. Red-green pairings destroy information for these users. Blue-amber pairings survive perfectly. Rail design was accidentally CVD-safe before accessibility was a word.

### Core palette (light mode)

| Role | Hex | WCAG contrast on canvas | Emotion |
|---|---|---|---|
| **Canvas** | `#FBF8F4` | — | Calm, editorial, paper-stock. Reduces eye strain vs pure white. |
| **Surface** | `#EFEAE0` | — | Card lift. |
| **Hairline** | `#D8D1C2` | — | Warm border, not clinical gray. |
| **Enamel** (text on plaques) | `#FFFFFF` | — | Pure signage white — only inside navy plaques. |
| **Ink** | `#15202B` | 15.2:1 AAA | Near-black with blue undertone. Body text. |
| **Ink Muted** | `#545B66` | 7.1:1 AA | Secondary text. |
| **Primary — Rail Navy** | `#0D2A4A` | 12.6:1 AAA | Trust, reliability, expertise. Station signs, JR, SNCF, BR. |
| **Primary Lift** | `#133A66` | — | Hover. |
| **Accent — Departure Amber** | `#D96A1E` | 4.7:1 AA large | Warmth, anticipation, discovery. Golden-hour, incandescent boards. |
| **Accent Lift** | `#E8804A` | — | Hover. |
| **Editorial — Verdigris Teal** | `#2F6E68` | 6.2:1 AA | Nostalgia, craftsmanship, heritage. Copper-patina station roofs. Decorative only — never semantic. |

### Functional state colours

Every state signal must carry **icon + text**, never colour alone.

| State | Colour | Icon | Example text |
|---|---|---|---|
| Success | `#1B6A4A` | ✓ check | "Saved" |
| Warning | `#B8681A` | △ triangle | "Check…" |
| Error | `#B42318` | ⊘ ring | "Can't do X because…" |
| Info | Rail Navy `#0D2A4A` | ⓘ info | "Note:…" |

### Dark mode

| Role | Hex |
|---|---|
| Canvas | `#0E1217` (night-train window) |
| Surface | `#181E27` |
| Ink | `#F2EDE2` |
| Primary lift | `#5C9CD9` |
| Amber lift | `#FF8A3D` |
| Verdigris lift | `#5EAFA6` |

### Line-colour namespace

Real official agency colours, sourced from each transit authority's brand manual. Used for:

- The `<LineSchematic>` rails and station dots
- Inline `● Yamanote Line` bullet-chips
- Hotel card line tags
- Map polylines

```
--line-tfl-central:       #E32017
--line-tfl-jubilee:       #A0A5A9
--line-tfl-piccadilly:    #003688
--line-tfl-bakerloo:      #B36305
--line-tfl-northern:      #000000
--line-tfl-victoria:      #0098D4
--line-tfl-district:      #00782A
--line-tfl-circle:        #FFD300
--line-tfl-hammersmith:   #F3A9BB
--line-tfl-metropolitan:  #9B0056
--line-tfl-waterloo-city: #95CDBA
--line-tfl-elizabeth:     #6950A1
--line-tfl-dlr:           #00A4A7
--line-tfl-overground:    #EE7C0E

--line-jr-yamanote:       #9ACD32
--line-jr-chuo:           #F15A22
--line-jr-keihin-tohoku:  #00B2E5
--line-jr-sobu:           #FFD400
--line-jr-saikyo:         #2E8B57

--line-tokyo-metro-ginza:     #FF9500
--line-tokyo-metro-marunouchi: #F62E36
--line-tokyo-metro-hibiya:    #B5B5AC
--line-tokyo-metro-tozai:     #009BBF
--line-tokyo-metro-chiyoda:   #00BB85

--line-paris-metro-1:   #FFCD00
--line-paris-metro-2:   #003CA6
--line-paris-metro-4:   #CF009E
--line-paris-rer-a:     #E2231A
--line-paris-rer-b:     #427DBD
--line-paris-rer-c:     #FCCF00

--line-nyc-123:     #EE352E
--line-nyc-acel:    #0039A6
--line-nyc-bdfm:    #FF6319
--line-nyc-nqrw:    #FCCC0A
--line-nyc-7:       #B933AD

--line-shinkansen-tokaido:  #0B318F
--line-shinkansen-tohoku:   #00B261
--line-ktx:                 #0086C3
```

(This list is a seed — expand per city as lines are added.)

### CVD verification (do before shipping Phase 1)

1. Run the full palette through **Coblis** (colblindor.com/coblis) — deuteranopia, protanopia, tritanopia, achromatopsia.
2. Chrome DevTools → Rendering → Emulate vision deficiencies — walk every key screen in the preview page.
3. **APCA contrast** (apcacontrast.com) — target Lc ≥ 75 for body text, Lc ≥ 60 for large text. APCA is more accurate than WCAG on dark-on-light.
4. Tritanopia spot-check for Amber vs Canvas — rare but important.

### Three enforcement rules

1. Every state signal carries **icon + text**, not colour alone.
2. Price comparisons use **↑/↓ arrows and numeric delta**, not red/green hue alone.
3. Hover/focus states shift **luminance ≥ 20%**, not just hue.

---

## 4. Typography

Three-font system, all free (OFL):

| Role | Font | Source | Use |
|---|---|---|---|
| **Display / section headings** | **Zilla Slab** | Google Fonts (OFL) | Rail-heritage slab, evokes Victorian enamel station nameplates. Fallback: Roboto Slab, Georgia, serif. |
| **Body / UI** | **Inter** | Google Fonts (OFL) — already loaded | Neutral, humanist, excellent for UI and long body. Fallback: system-ui, sans-serif. |
| **Data / times / prices / codes** | **IBM Plex Mono** | Google Fonts (OFL) | Departure-board feel for "17:42 → 19:08", hotel prices, station codes. Fallback: ui-monospace, monospace. |

Type scale (modular, 1.25 ratio):
```
--text-xs:   0.75rem   /* 12 */
--text-sm:   0.875rem  /* 14 */
--text-base: 1rem      /* 16 */
--text-lg:   1.125rem  /* 18 */
--text-xl:   1.375rem  /* 22 */
--text-2xl:  1.75rem   /* 28 */
--text-3xl:  2.25rem   /* 36 */
--text-4xl:  2.875rem  /* 46 */
--text-5xl:  3.625rem  /* 58 */
--text-6xl:  4.5rem    /* 72 */
```

---

## 5. Rail-Native Motifs

The rail vibe dials to **4/10** — felt but never theatrical. No literal train icons outside the logo, no costume fonts, no "Mind the gap" microcopy. Borrow the formal grammar of real rail design: signage, enamel, platform edges, tickets, line-colour semiotics.

### Motifs baked into tokens and utilities

| Motif | Where it surfaces |
|---|---|
| **Station-name plaque** (navy pill, white Zilla Slab text, 2px amber lower border) | Station names across the site, page-title pills, category chips |
| **Platform-edge stripe** (diagonal amber hazard stripe, 6px, 60% opacity) | Section dividers (max twice per page), footer top cap |
| **Ticket-card perforation** (dashed edge, subtle notch on mobile) | Hotel cards on station-landing pages |
| **Line-bullet** (`●` filled with real agency colour) | Inline line references: `● Yamanote Line`, `● Central Line` |
| **Departure-board readout** (IBM Plex Mono, amber on navy) | Times, prices, "Updated 2 days ago" timestamps where it reads well |
| **Split-flap flip animation** on the homepage rotating headline | Respects `prefers-reduced-motion` |
| **Twin-track divider** (two parallel lines with tiny cross-ties via SVG background) | Footer separator, long-page section breaks |
| **404 treatment** | Full signage: "NOT IN SERVICE" plaque |

### Voice — rail vocabulary used naturally

| Generic | Rail-native |
|---|---|
| "Latest articles" / "Blog" | **Latest arrivals** |
| "Related stations" | **Next stops** |
| "Featured cities" | **On the network** |
| "Terminal stations" | **Termini** |
| "Search" primary button | **Find hotels** (stays neutral — don't over-theme the primary CTA) |
| "Something went wrong" | Stay neutral. **Never** "Signal failure" (kitsch) |
| Empty state | **No service on this line yet — tell us where to go next.** |

**Rule**: any phrase that would embarrass you to say out loud gets cut.

---

## 6. Signature Component — `<LineSchematic>`

The one thing on the site that no competitor has. Every other design decision orbits it.

### Behaviour

- Horizontal rail strip with station dots as nodes, **painted in the real agency line colour**.
- Each dot shows hotel count on hover/tap ("23 hotels within 5 min walk").
- Click a dot → drill into that station's hotels without leaving the page.
- Junction stations marked with a small interchange glyph; tapping reveals other lines through that stop.
- Mobile: horizontally scrollable, sticky start/end labels, auto-scrolls to cheapest cluster.
- Interchange-aware: a hotel sitting between two lines appears in both lines' schematics with "also on [line]" chip.
- **Fully keyboard-navigable**: arrow keys step along the line, Enter opens a station, Home/End jump to termini.
- Respects `prefers-reduced-motion` (no auto-scroll, no hover-grow).
- **CVD-safe**: line identity is colour **+** name label **+** official bullet/diamond symbol. TfL already uses this pattern — already CVD-safe in the real world.

### Where it renders

1. **Line pages** (`/lines/:slug`) — hero schematic.
2. **Guide pages** — one compact schematic per line serving the city.
3. **Station landing pages** — mini-schematic showing the lines this station sits on.
4. **Homepage** — the day's featured line.
5. **Journal / itinerary articles** — can embed for context.

---

## 7. New URL Taxonomy — `/lines/:slug`

Massive SEO unlock. ~100 cities × 5–15 lines each = **500–1500 new programmatic pages**, each targeting low-competition long-tail queries.

| Example URL | Search queries served |
|---|---|
| `/lines/tokyo-yamanote` | "hotels on the yamanote line", "where to stay yamanote line", "jr yamanote line hotels" |
| `/lines/london-central` | "hotels on the central line", "hotels along the central line london" |
| `/lines/paris-rer-a` | "hotels along rer a", "where to stay rer a" |
| `/lines/shinkansen-tokaido` | "hotels along the shinkansen", "tokaido shinkansen hotels" |
| `/lines/nyc-acel` | "hotels on the a c e line", "hotels on the blue line nyc" |

### Page structure

1. Hero: line name + official colour band + one-line editorial tagline.
2. `<LineSchematic>` with live hotel counts at each stop.
3. Editorial paragraphs: when this line is the right base, which stops are undervalued, interchanges that matter.
4. Hotel results **grouped by stop**, sorted by best-value, with a "shuffle along the line" filter expanding search to the whole line at once.
5. FAQ schema (5 Qs per line — "Is the Yamanote 24-hour?", etc.).
6. Related lines (interchanges), related guides (cities the line serves), related passes (JR Pass covers this).

### Station pages stay

`/hotels-near/:station` pages remain — long-tail target for station-specific searches. Each now renders a compact `<LineSchematic>` showing the 2–3 lines through that station with "browse the whole line →" CTAs.

### Backend impact

**Zero new backend work.** Line-level search = union of per-station queries over stations on that line. The backend already has line→station mapping (the existing SearchForm offers line as a filter). Pure frontend data-composition job.

---

## 8. Tailwind v4 + Centralization

### Why v4

Tailwind v4 (released Jan 2025) is CSS-first — **no `tailwind.config.js`**. The `@theme` block in CSS *is* the token system. Perfectly aligned with "centralize everything". Also: smaller bundle, faster build, native CSS variables.

### Target file structure

```
frontend/src/styles/
  app.css       ← single source of truth: @theme + @utility + base layer
  fonts.css     ← @font-face for Zilla Slab + IBM Plex Mono (or @import from Google Fonts)
```

### Deleted

All 14 per-component CSS files:
- `variables.css`, `base.css`, `layout.css`
- `header.css`, `footer.css`
- `search-form.css`, `results.css`
- `hotel-card.css`, `hotel-map.css`, `shortlist.css`
- `sources-banner.css`, `content.css`, `pages.css`, `guides.css`

### Canonical `app.css` skeleton

```css
@import "tailwindcss";
@import "./fonts.css";

@theme {
  /* Palette */
  --color-canvas: #FBF8F4;
  --color-surface: #EFEAE0;
  --color-hairline: #D8D1C2;
  --color-enamel: #FFFFFF;
  --color-ink: #15202B;
  --color-ink-muted: #545B66;
  --color-primary: #0D2A4A;
  --color-primary-lift: #133A66;
  --color-accent: #D96A1E;
  --color-accent-lift: #E8804A;
  --color-editorial: #2F6E68;
  --color-success: #1B6A4A;
  --color-warning: #B8681A;
  --color-error: #B42318;

  /* Typography */
  --font-display: "Zilla Slab", "Roboto Slab", Georgia, serif;
  --font-body: "Inter", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;

  /* Type scale */
  --text-xs: 0.75rem;   --text-sm: 0.875rem;   --text-base: 1rem;
  --text-lg: 1.125rem;  --text-xl: 1.375rem;   --text-2xl: 1.75rem;
  --text-3xl: 2.25rem;  --text-4xl: 2.875rem;  --text-5xl: 3.625rem;
  --text-6xl: 4.5rem;

  /* Radii */
  --radius-sm: 6px; --radius: 10px; --radius-lg: 16px; --radius-pill: 999px;

  /* Shadows */
  --shadow-card: 0 1px 2px rgb(21 32 43 / 0.04), 0 6px 24px rgb(21 32 43 / 0.08);
  --shadow-float: 0 12px 40px rgb(21 32 43 / 0.14);

  /* Motion */
  --ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
  --duration-fast: 120ms;
  --duration: 200ms;

  /* Rail motifs */
  --enamel-plaque-bg: var(--color-primary);
  --enamel-plaque-fg: #FFFFFF;
  --enamel-plaque-accent: var(--color-accent);
  --platform-stripe: repeating-linear-gradient(135deg, var(--color-accent) 0 8px, transparent 8px 16px);

  /* Line colours — see §3 for the full namespace */
  --line-tfl-central: #E32017;
  --line-jr-yamanote: #9ACD32;
  --line-paris-rer-a: #E2231A;
  /* …etc… */
}

@layer base {
  html[data-theme="dark"] {
    --color-canvas: #0E1217;
    --color-surface: #181E27;
    --color-hairline: #2A3340;
    --color-ink: #F2EDE2;
    --color-ink-muted: #9BA3AD;
    --color-primary: #5C9CD9;
    --color-accent: #FF8A3D;
    --color-editorial: #5EAFA6;
  }

  html { background: var(--color-canvas); color: var(--color-ink); font-family: var(--font-body); }
  body { line-height: 1.6; }

  /* Skip-to-main link */
  .skip-to-main { /* standard a11y pattern, visible on focus only */ }

  /* Focus ring — 3px amber with 2px offset, visible on any surface */
  :focus-visible { outline: 3px solid var(--color-accent); outline-offset: 2px; }
}

@utility plaque {
  background: var(--enamel-plaque-bg);
  color: var(--enamel-plaque-fg);
  font-family: var(--font-display);
  font-weight: 600;
  padding: 0.375rem 0.875rem;
  border-radius: var(--radius-sm);
  border-bottom: 2px solid var(--enamel-plaque-accent);
  letter-spacing: 0.01em;
}

@utility platform-edge {
  height: 6px;
  background: var(--platform-stripe);
  opacity: 0.6;
}

@utility ticket-card {
  border: 1px dashed var(--color-hairline);
  border-radius: var(--radius);
  /* decorative semicircle notches via radial-gradient masks on desktop */
}

@utility line-bullet {
  display: inline-block;
  width: 0.625em; height: 0.625em;
  border-radius: 999px;
  margin-right: 0.375em;
  vertical-align: middle;
  /* background set inline per line via CSS variable */
}
```

### Contributor rules (enforce in review)

1. **No hex codes in component files** — only token references.
2. **No new CSS files** — new styles land in `app.css` or a utility class.
3. **`@apply` only for the 4–6 genuinely composite patterns** (plaque, ticket-card, platform-edge, line-bullet). Everything else: utilities inline in JSX.
4. **Dark mode via `data-theme="dark"` on `<html>`** — Tailwind configured to use `data-theme` as the dark selector, not `.dark` class, to keep the existing theme-toggle working.

---

## 9. Rendering Strategy (Strong Recommendation)

Current: Vite React SPA. Everything renders client-side.

**Problem**: Lighthouse (LCP, TBT), AI crawlers (GPTBot, ClaudeBot, PerplexityBot have inconsistent JS support), Googlebot-AI crawling is best with pre-rendered HTML, and 700+ programmatic station pages each require a full JS bundle to resolve.

**Recommendation: migrate to Astro.**

- Static HTML for all content pages (guides, journal, itineraries, passes, countries, station landings, **line pages**, homepage) rendered at build time.
- Hydrate only what needs JS — SearchForm, HotelMap, ShortlistPanel, carousel, LineSchematic hover states — as "islands".
- Keeps existing React component code; Astro accepts `.jsx` islands directly.
- **LCP / TBT drop massively.** Lighthouse scores jump.
- **AI crawlers see real content** — pre-rendered HTML removes all guesswork.

### Alternatives considered

- **vite-plugin-ssr / vite-ssg** — bolt-on prerender; lowest effort, 80% of the win. Good fallback if Astro migration is too heavy.
- **Next.js** — overkill for a content site; heavier framework.
- **Stay SPA + react-snap** — fragile, fights React 18.

**Scope this as a separate plan** — Astro migration is large enough to deserve its own phased breakdown (roughly: scaffold Astro alongside, port pages one route at a time, cutover when all routes covered). Recommend doing it **after Phase 3** (homepage reskin shipped) so the new visual design is stable before the rendering change.

---

## 10. AI Discoverability Layer

None of this exists today. All additions.

### Artefacts to generate

| File | Content |
|---|---|
| `/llms.txt` | Curated markdown index of the site for LLMs. One paragraph per section + URL list. Read by Anthropic, OpenAI, Perplexity. |
| `/llms-full.txt` | Expanded markdown dump of every guide/journal/itinerary/line page, ~200k tokens, for deep ingestion. |

Generator: new Python script `frontend/scripts/gen-llms.py` sibling to `gen-sitemap.py`. Runs at build time.

### robots.txt — explicit AI-crawler allow-list

Replace current wide-open `Allow: /` with named entries:

```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: *
Allow: /

Sitemap: https://staybyrail.co.uk/sitemap.xml
```

Makes intent explicit and survives future policy tightening.

### Schema.org expansion

| Schema | Where | Notes |
|---|---|---|
| `TravelAgency` | Homepage | Tells Google/AI what the site *is* |
| `Hotel` + `LodgingBusiness` | Hotel cards on station/line landing pages | Individual listings |
| `HowTo` + `HowToStep` | Itinerary pages | Step-by-step day plans |
| `SpeakableSpecification` | TL;DR paragraphs on every guide | Siri/Assistant can read aloud |
| `AggregateRating` | Hotel cards | Once real review data exists |

### Content discipline for RAG ingestion

- **TL;DR paragraph at the top of every guide/journal/itinerary** — LLMs often extract the first 300 tokens.
- **Consistent entity naming** — "Shinjuku Station" always, not "Shinjuku stn" or "Shinjuku". Build an entity glossary.
- **Dates in ISO 8601** in DOM (`<time datetime="2026-04-23">April 2026</time>`), pretty version rendered via CSS.
- **Open Graph + Twitter cards on every page** — AI previews often render these.

---

## 11. SEO Deepening (beyond todo.md)

- **Hub-and-spoke topology explicit**: country hub → line pages → city guides → station landings → journal → itinerary → pass. Cross-link matrix in a universal "Related" block at the bottom of every page.
- **Internal-link audit**: every page needs 5+ contextual inbound links. Generate a link-graph report, fill thin spots.
- **Image alt-text audit**: every hero needs descriptive location-specific alt ("Shinjuku Station west exit at dusk, January 2025"), not "city photo". Auto-generate from curated metadata + Wikimedia captions.
- **E-E-A-T signals**: byline on every article (done); credentials on author page; real-trip evidence (journal photos); last-updated **visible**; source citations on country pages.
- **Fresh-content signal**: "Updated [date]" chip on every page, hooked to `updatedAt`. Rotate content quarterly for pages > 12 months old.
- **Breadcrumbs visible in the UI**, not only in schema.

---

## 12. UX Sharpening

- **Site-wide search** in the header — client-side index (Pagefind or Fuse.js, build-time), covers every guide/station/journal/itinerary/line. No backend needed.
- **Station-chip sticky row** on every guide page — rail-native UX no competitor has.
- **Save-for-later without account** — surface `ShortlistPanel` more prominently, persist across sessions.
- **Progress indicator on long reads** — thin top bar on journal articles and country explainers.
- **Auto table-of-contents** for any page > 800 words, sticky on desktop.
- **First-visit hint strip** — one-line, dismissible: "StayByRail shows hotels within walking distance of real train stations." No modal.
- **Walking-time-first, distance-second** — "4 min walk" > "280 m". Universal.
- **Trust row above the footer** on every page — "Independent · No booking fees · Updated [date] · [source count] data sources".

---

## 13. Accessibility Commitments

- **WCAG 2.2 AA minimum, AAA for body text.** Verified with APCA *and* WCAG.
- **Skip-to-main link** (currently missing).
- **Keyboard-navigable carousels and `<LineSchematic>`** — arrow keys, Home/End, Enter, visible focus ring.
- **Focus ring**: 3px `#D96A1E` outline with 2px offset — visible on any surface.
- Respect `prefers-reduced-motion` (disable departure-board animation, card hover lifts, scroll-snap smoothing).
- Respect `prefers-color-scheme` (already done).
- **Colour-blind safe**: never rely on hue alone (icons + text + colour on every status signal).
- **Third theme**: high-contrast mode for low-vision users.
- **Leaflet map**: enable `keyboard: true`, add skip-over-map link.
- All interactive elements ≥44px touch target (already done).
- Form errors: icon + text + red, never red alone.

---

## 14. Backend Always-On Plan

> **Decision (2026-04-23): stay on Render Free for now. Paid upgrade is a todo-later.** Revisit when Lighthouse/GSC evidence shows cold starts hurting real user or crawler traffic, or when CJ re-application is imminent. See entry in `todo.md` under "Things only YOU can do".

Backend is FastAPI + uvicorn on **Render Free**. Spins down after 15 min of inactivity → cold start 30–60 s on first request. Bad for Lighthouse, Google landings, AI crawlers — but acceptable while the overhaul is the priority.

### Options ranked (for when it's time)

| Option | £/mo | Effort | Notes |
|---|---|---|---|
| **Render Starter** | **~£5.60 ($7)** | **Zero — flip a toggle** | Same infra, no migration, 512 MB RAM, 0.5 CPU, always on. **Recommendation when upgrading.** |
| Railway Hobby | ~£4 ($5) | 1 afternoon | $5 base + $5 credit, always-on. Better DX. |
| Fly.io pay-as-you-go | ~£2–4 | Half-day | `shared-cpu-1x@256MB` with `min_machines_running=1`. Global edge. |
| Hetzner CX22 VM | ~£2.80 (€3.29) | 1–2 days | Bare VM, full control. Only worth it if colocating more services. |
| GitHub Actions cron keep-alive | £0 | 30 min | Pings `/health` every 10 min. Free stopgap while on Free tier. First request after deploy/crash still cold. |

### Free-tier mitigations (do while staying on Free)

- **Add `/health` endpoint** returning `{"ok": true}` — 2 lines of FastAPI. Ships in Phase 1. Serves as the future keep-alive cron target *and* any monitoring.
- **Optional: GitHub Actions cron** pinging `/health` every 10 min — cheap stopgap against the 15-min idle spin-down. Add when the cost of cold starts becomes visible in real analytics; skip until then.
- **Put Cloudflare in front of the backend** — free edge caching on `GET /api/stations`, `/api/city/:slug` (5 min TTL). Backend sees a fraction of the traffic, and common routes mitigate cold starts even on Free tier. Lowest-effort high-value win.

### Trigger to upgrade

Upgrade to Render Starter when **any one of these** is true:
- Real analytics (Plausible/GA) shows >5% of sessions hitting a cold-start delay.
- Lighthouse TTFB on the live site exceeds 1 s because of backend cold starts.
- CJ re-application is within 2 weeks — cold-start is a credibility risk during review.
- AI crawlers (GPTBot/ClaudeBot/PerplexityBot logs) show timeout errors on cold fetches.

---

## 15. Phased Execution Plan

Each phase independently shippable. Visual change is zero in Phase 1; progressive after that.

### Phase 1 — Tailwind v4 + tokens + fonts (no visual change)

- Install `tailwindcss@^4`, `@tailwindcss/vite`.
- Wire into `vite.config.js`.
- Create `frontend/src/styles/app.css` with full `@theme` block from §8.
- Create `frontend/src/styles/fonts.css` loading Zilla Slab, Inter, IBM Plex Mono from Google Fonts.
- Import `app.css` in `main.jsx`.
- Keep all old per-component CSS files in place — nothing visually changes yet.
- Verify the toolchain builds cleanly in dev and prod.
- Add `/health` endpoint to backend `main.py` (2 lines, `{"ok": true}`). Ships now so a future keep-alive cron or monitor has a target — no paid upgrade required, see §14.

**Exit check**: site looks identical in browser; `class="bg-canvas text-ink"` works in any JSX file; Tailwind utilities coexist with legacy CSS.

### Phase 2 — Design preview page

- Create `frontend/public/design-preview.html` — standalone static page rendering:
  - Full palette as swatches with hex + WCAG + APCA contrast ratios.
  - Type scale samples.
  - Sample components: `plaque`, `ticket-card`, `line-bullet` against mock station names, hero split, hotel card, editorial card.
  - Same content rendered four times with CSS filters for deuteranopia, protanopia, tritanopia, achromatopsia side-by-side.
- Review, iterate on hex codes / sizes / spacing in `app.css` only.

**Exit check**: palette and typography signed off.

### Phase 3 — Global shell

- Convert `Header.jsx` to Tailwind + tokens. Add skip-to-main link. Search pill in header leads with line picker.
- Convert `Footer.jsx`. Add `platform-edge` top cap. Rail-vocabulary microcopy.
- Delete `header.css`, `footer.css`.
- Global `:focus-visible` ring from `app.css`.

### Phase 4 — Homepage

- New split hero: editorial photo + line-picker search module. Rotating headline with split-flap animation (respects `prefers-reduced-motion`).
- Featured-lines carousel (horizontal shelf, Airbnb-inspired, rail-themed).
- Featured-cities carousel kept as secondary row.
- How-it-works strip reskinned.
- Latest arrivals (journal) section reskinned.
- Delete homepage-specific CSS blocks from `layout.css`.

### Phase 5 — `/lines/:slug` template + `<LineSchematic>` component

- Build `<LineSchematic>` React component — keyboard-navigable, CVD-safe, responsive.
- Build `LinePage.jsx` template.
- Create `frontend/src/data/lines.js` data layer (line metadata, station order, official colours).
- Generate first 20 flagship line pages programmatically (`frontend/scripts/gen-lines.py`): Yamanote, Chuo, Central, Jubilee, Piccadilly, RER A, RER B, Metro 1, Metro 4, NYC 1/2/3, NYC A/C/E, Shinkansen Tōkaidō, KTX Gyeongbu, MTR Tsuen Wan, MTR Island, Seoul Metro 1, 2, 9, AREX.
- Add `/lines/*` routes to sitemap.

**Exit check**: 20 line pages indexable, `<LineSchematic>` passes CVD sim and keyboard nav test.

### Phase 6 — Guide / journal / itinerary / country / pass templates

- Editorial magazine layout: Zilla Slab headlines, pull quotes, sticky station-chip row on guides.
- Every guide gains a "Lines serving this city" `<LineSchematic>` strip.
- TL;DR paragraph at the top of every long page (§10 requirement).
- Delete `content.css`, `guides.css`, `pages.css`.

### Phase 7 — Search / results / HotelCard / HotelMap

- Filter sidebar (Booking-inspired density).
- HotelCard gains line-colour chip: `● Central · 3 min walk from Bank`.
- `Results` gains "grouped-by-line" toggle beside existing "grouped-by-station".
- Map overlays each line as a coloured polyline.
- Delete `search-form.css`, `results.css`, `hotel-card.css`, `hotel-map.css`, `shortlist.css`.

### Phase 8 — Station landing pages + AI layer + final polish

- Station landing pages get a mini `<LineSchematic>` showing lines through the station.
- Departure-board row treatment for nearby hotels.
- Ship `llms.txt` + `llms-full.txt` generator.
- Update `robots.txt` with explicit AI crawler allow-list.
- Ship expanded schema.org (`TravelAgency`, `Hotel`, `HowTo`, `SpeakableSpecification`).
- Delete `sources-banner.css`, `base.css`, `variables.css` — **zero per-component CSS files remain**.
- Full Lighthouse pass (once the site is actually reachable via staybyrail.co.uk).
- Full CVD sim sweep.
- Verify `prefers-reduced-motion` honoured throughout.

### Post-Phase 8 — Astro migration (separate plan)

Scope as its own phased plan. Port page-by-page, cut over when all routes covered.

---

## 16. First Session Kickoff Checklist

When you start fresh, do these in order:

1. Read this file (`UI_OVERHAUL_PLAN.md`) end to end.
2. Read `todo.md` for the roadmap context.
3. Tell Claude: **"execute Phase 1 of UI_OVERHAUL_PLAN.md"**. That's installing Tailwind v4, creating `app.css` and `fonts.css`, wiring them in, and adding `/health` to the backend. No visual change. **Backend stays on Render Free** — the $7/mo upgrade is a todo-later (see §14 and `todo.md`).
4. After Phase 1 builds cleanly, tell Claude: **"execute Phase 2"** (design preview page). Review the preview on desktop and mobile. Iterate on hex codes / sizes in `app.css` until happy.
5. Only then proceed to Phase 3 (global shell).

### Open decisions you may want to revisit before Phase 1

- **Slab vs sans display**: Zilla Slab is recommended. Alternatives: Roboto Slab (safer), Plus Jakarta Sans or DM Sans (sans-leaning signage feel).
- **Logo refresh**: keep current train SVG with refined colours, or full redraw?
- **Astro migration**: commit upfront, or wait until Phase 3+ ships and evaluate?

---

## Appendix — Quick reference

- **Repo root**: `C:\Users\quick\source\repos\StayByRail\`
- **Frontend**: React + Vite SPA in `frontend/`, deploys to Cloudflare Pages → `staybyrail.co.uk`
- **Backend**: FastAPI + uvicorn in `backend/`, deploys to Render (current: Free; target: Starter $7/mo)
- **Site stats (2026-04-10)**: 42 city guides, 10 journal articles, 5 itineraries, 5 transport passes, 3 country explainers, 900 sitemap URLs across 71 cities / 9 countries
- **Related docs**: `todo.md` (roadmap), `BUSINESS_REPORT.md` (business context), `README.md`

---

*End of plan. Pick this up in a fresh session and start with Phase 1.*
