# StayByRail — Revenue, Costs & Passive Income Strategy

*Generated April 2026*

---

## Current Hosting Costs: £0/month

| Service | Plan | Cost | Limit |
|---------|------|------|-------|
| Cloudflare Pages | Free | £0 | 500 builds/month, unlimited bandwidth |
| Render (backend) | Free | £0 | Spins down after 15 min idle, 750 hours/month |
| SerpAPI | Free | £0 | 100 searches/month |
| SearchAPI.io | Free | £0 | 100 searches/month |
| RapidAPI (Booking + TripAdvisor) | Free | £0 | 500 requests/month |
| Domain (staybyrail.co.uk) | Annual | ~£8/year | — |
| **Total** | | **~£0.67/month** | |

---

## When Free Tiers Break

Each user search costs **8–12 API calls** on a cold cache (no prior search for that route/date combo). With 24-hour caching and price bucketing, repeat searches are free.

### Realistic API usage per unique daily user

Most users search 2–4 times per visit. Assume half hit cache from other users' searches on popular routes.

| Daily unique users | Estimated API calls/day | SerpAPI/month | RapidAPI/month | Status |
|--------------------|------------------------|---------------|----------------|--------|
| 5 | 30–50 | ~600 | ~300 | Free tier OK |
| 20 | 100–200 | ~3,000 | ~1,200 | **Free tier exceeded** |
| 50 | 200–400 | ~6,000 | ~3,000 | Need paid plans |
| 200 | 600–1,000 | ~15,000 | ~6,000 | Moderate paid cost |
| 1,000 | 2,000–4,000 | ~60,000 | ~20,000 | Significant cost |

### Paid API pricing

| Service | Plan | Cost | Searches included |
|---------|------|------|-------------------|
| SerpAPI | Basic | $50/month (~£40) | 5,000 searches |
| SerpAPI | Business | $130/month (~£104) | 15,000 searches |
| SearchAPI.io | Starter | $50/month (~£40) | 2,500 searches |
| RapidAPI (Booking) | Pro | $10/month (~£8) | 2,000 requests |
| Render | Starter | $7/month (~£6) | Always-on, no spin-down |

### Cost at different traffic levels

| Monthly visitors | Monthly cost (estimated) |
|-----------------|------------------------|
| 100 | £0 (free tiers) |
| 500 | £6 (Render only, APIs still free-ish with caching) |
| 2,000 | £50–£80 (SerpAPI Basic + Render) |
| 5,000 | £100–£150 (SerpAPI Business + RapidAPI Pro + Render) |
| 10,000+ | £200–£300 |

---

## Revenue Streams

### 1. Google AdSense (ready to apply)

Typical AdSense RPM (revenue per 1,000 pageviews) for travel/hotel comparison sites:

| Traffic tier | Est. RPM | Monthly pageviews | Monthly revenue |
|-------------|---------|-------------------|----------------|
| New site, low traffic | £2–£5 | 5,000 | £10–£25 |
| Growing, some SEO traction | £4–£8 | 20,000 | £80–£160 |
| Established, good SEO | £6–£12 | 50,000 | £300–£600 |
| Strong authority | £8–£15 | 100,000 | £800–£1,500 |

Travel/hotel is a **high-value AdSense niche** — advertisers pay well for travel intent. RPMs can reach £10–£15 for well-placed ads on a travel comparison site with engaged users.

**Your current setup: 5 ad slots per page** (2 sidebars, 1 banner, hidden on mobile). This is compliant and well-placed.

### 2. Affiliate links (highest potential)

Hotel affiliate programs pay **per booking**, not per click. This is where the real money is for a comparison site.

| Programme | Commission | Avg booking value | Revenue per conversion |
|-----------|-----------|-------------------|----------------------|
| Booking.com Affiliate | 25–40% of their commission (~4% of booking) | £300 (3 nights) | £12–£15 |
| TripAdvisor | CPC model, £0.20–£0.50 per click-out | — | £0.20–£0.50/click |
| Hotels.com (Expedia Group) | 4–6% of booking value | £300 | £12–£18 |
| Agoda | 5% of booking value | £250 | £12.50 |

**Conversion rates for hotel comparison sites:** 1–3% of users who click through to a booking site actually complete a booking.

| Monthly users | Click-throughs (30%) | Bookings (2% conv.) | Revenue/month |
|--------------|---------------------|---------------------|--------------|
| 500 | 150 | 3 | £36–£45 |
| 2,000 | 600 | 12 | £144–£180 |
| 5,000 | 1,500 | 30 | £360–£450 |
| 10,000 | 3,000 | 60 | £720–£900 |
| 50,000 | 15,000 | 300 | £3,600–£4,500 |

**To enable this:** Replace the plain booking links (Google Hotels, Booking.com, TripAdvisor) with affiliate tracking links. Sign up at:
- Booking.com Affiliate Partner Programme
- TripAdvisor Affiliate (now part of Tripadvisor Content API)
- Expedia Group affiliate (Hotels.com, Expedia, Vrbo)

This requires minimal code change — just swap the `link` URLs in the hotel card component to use affiliate-tagged URLs.

### 3. Combined revenue projection

| Monthly users | AdSense | Affiliates | Total revenue | API + hosting cost | **Net profit** |
|--------------|---------|-----------|--------------|-------------------|---------------|
| 500 | £15 | £40 | £55 | £0 | **£55** |
| 2,000 | £100 | £160 | £260 | £60 | **£200** |
| 5,000 | £300 | £400 | £700 | £130 | **£570** |
| 10,000 | £700 | £800 | £1,500 | £250 | **£1,250** |
| 50,000 | £3,000 | £4,000 | £7,000 | £600 | **£6,400** |

---

## Path to Passive Income

### Phase 1: Foundation (now – 3 months)
**Goal: Get approved, start earning, validate the model**

- [x] Site is content-rich, SEO-optimised, AdSense-ready
- [ ] Apply for Google AdSense (do this now)
- [ ] Sign up for Booking.com Affiliate Partner Programme
- [ ] Sign up for TripAdvisor affiliate
- [ ] Swap booking links to affiliate links (small code change)
- [ ] Submit sitemap to Google Search Console if not already done
- [ ] Share guides on relevant subreddits (r/travel, r/JapanTravel, r/solotravel)

**Expected: £20–£60/month from a trickle of organic traffic**

### Phase 2: Growth (3–12 months)
**Goal: Build organic traffic, reduce per-user costs**

- Write 2–3 new city guides per month (each is a long-tail SEO page)
- Target specific search terms: "hotels near Shinjuku Station", "best hotels near Gare du Nord"
- Add more countries/cities to expand coverage
- Consider a blog section for "Best stations to stay near in [City]" posts
- Improve caching: extend TTL to 48 hours for stable routes, add CDN-level response caching
- When SerpAPI free tier runs out, upgrade to Basic ($50/month) — one of the first costs

**Expected: £200–£500/month with 2,000–5,000 monthly visitors**

### Phase 3: Scale (12+ months)
**Goal: Sustainable passive income with minimal maintenance**

- SEO compounds — older pages with backlinks rank higher over time
- Affiliate revenue grows with traffic (no extra work per booking)
- Add "price alerts" feature (email when a hotel near your station drops in price) — grows an email list for remarketing
- Consider direct hotel partnerships for premium placement (£50–£200/month per hotel)
- The site mostly runs itself: API data is live, caching handles load, content is evergreen

**Expected: £1,000–£3,000/month with 10,000–30,000 monthly visitors**

---

## Key Insight: Affiliate > AdSense

For a hotel comparison site, **affiliate revenue will outpace AdSense by 2–3x** once you have moderate traffic. Every user who clicks through to Booking.com and books a hotel earns you £12–£18 — that's worth more than thousands of ad impressions. AdSense is the floor; affiliates are the ceiling.

The beautiful thing is both are passive once set up. You don't fulfil orders, handle support, or manage inventory. The site generates revenue from people finding it through Google and clicking through to book.

## Biggest Risk

**API costs scaling faster than revenue.** At ~20 daily users you'll outgrow free tiers. If those users aren't converting (because they're bots, or low-intent), you're paying API costs with no revenue. Mitigate this by:

1. Rate-limiting anonymous users (already partially done via the per-request key system)
2. Extending cache TTL aggressively for popular routes
3. Encouraging users to bring their own API keys (already built in)
4. Only upgrading API plans when you have revenue to cover them
