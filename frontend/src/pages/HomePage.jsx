import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import {
  featuredCities,
  featuredJournalArticles,
  totalCityGuides,
} from "../data/homepageFeatured";
import { getCityHeroPhoto } from "../data/cityHeroPhotos";

// HomePage is the LCP target and is the only eager route in App.jsx, so every
// module it imports lands in the main JS bundle. The full cityGuides.js and
// journal.js modules (~290 KB combined) used to be imported here purely to
// pull out slugs/titles/blurbs for the carousel and the "latest from the
// journal" strip. That content now lives in homepageFeatured.js — a tiny
// metadata-only file — so the full guide and article prose stays in its own
// lazy chunks and only loads when the user visits a guide/journal route.
const FEATURED = featuredCities.map((c) => ({
  slug: c.slug,
  city: c.city,
  country: c.country,
  heroLine: c.heroLine,
  stations: c.keyStationCount,
  accent: c.accent,
  wiki: c.wikipedia || c.city,
}));

function useCityImages(list) {
  const [images, setImages] = useState(() => {
    // Seed state synchronously with any curated photos so the cards
    // paint with real imagery on first render.
    const seed = {};
    for (const { slug, city } of list) {
      const curated = getCityHeroPhoto(slug);
      if (curated?.src) seed[city] = curated.src;
    }
    return seed;
  });

  useEffect(() => {
    list.forEach(({ slug, city, wiki }) => {
      // Curated photos were already seeded in useState above; skip the
      // Wikipedia fetch when one exists.
      if (getCityHeroPhoto(slug)) return;
      // Use the exact thumbnail URL the Wikipedia summary API returns,
      // without rewriting it to a larger size. Rewritten sizes trigger
      // an on-demand render on Wikimedia's thumb server which gets
      // rate-limited (HTTP 429) when ten requests fire simultaneously
      // at homepage mount. The default thumbnail is always pre-cached.
      const key = `sbr_home6_${city}`;
      const cached = sessionStorage.getItem(key);
      if (cached) {
        setImages((prev) => ({ ...prev, [city]: cached }));
        return;
      }
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`)
        .then((r) => r.json())
        .then((data) => {
          const url = data.thumbnail?.source || "";
          if (url) {
            sessionStorage.setItem(key, url);
            setImages((prev) => ({ ...prev, [city]: url }));
          }
        })
        .catch(() => {});
    });
  }, [list]);

  return images;
}

// Cards shown in the horizontal-scroll carousel on the homepage. ~4 are
// visible at a time on desktop; the rest are reached by swiping /
// scrolling right. The carousel is curated to 10 cards — the full list
// is one tap away on the "Browse more" card at the end of the scroll
// row.
const FEATURED_CAROUSEL = FEATURED;

function HomePage() {
  const images = useCityImages(FEATURED_CAROUSEL);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollBoundaries = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    // 4px fudge so tiny sub-pixel values at the ends still count as
    // "at the edge" and hide the arrow.
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollBoundaries();
    el.addEventListener("scroll", updateScrollBoundaries, { passive: true });
    window.addEventListener("resize", updateScrollBoundaries);
    // Re-check once images load and potentially change the layout.
    const recheck = setTimeout(updateScrollBoundaries, 400);
    return () => {
      el.removeEventListener("scroll", updateScrollBoundaries);
      window.removeEventListener("resize", updateScrollBoundaries);
      clearTimeout(recheck);
    };
  }, [updateScrollBoundaries]);

  const scrollCarousel = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    // Scroll by ~80% of the visible width so the user gets a fresh
    // page of cards but retains a little overlap for continuity.
    const delta = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  return (
    <>
      <PageMeta
        title="StayByRail — Find Hotels Near Train Stations"
        description="Compare hotels near train and metro stations across 65 cities in 8 countries. Real-time prices from Google Hotels, Booking.com, and TripAdvisor."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
          "description": "Find hotels near train and metro stations. Compare prices from Google Hotels, Booking.com, and TripAdvisor across 65 cities in 8 countries.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://staybyrail.co.uk/search?city={city}&check_in={check_in}&check_out={check_out}"
            },
            "query-input": "required name=city"
          }
        }}
      />

      {/* ---- Hero ---- */}
      <section className="page-hero">
        <h2 className="hero-title">Find hotels near train stations</h2>
        <p className="hero-subtitle">
          Compare prices from Google Hotels, Booking.com, and TripAdvisor across{" "}
          <Link to="/coverage" className="hero-subtitle-link">65 cities in 8 countries</Link> — sorted by walking distance to the platform.
        </p>
        <Link to="/search" className="hero-cta">Search Hotels</Link>
      </section>

      {/* ---- Popular Destinations — the featured module ---- */}
      <section className="home-destinations">
        <div className="home-destinations-head">
          <h2 className="home-destinations-title">Featured City Guides</h2>
          <p className="home-destinations-sub">
            Hand-picked stations, neighbourhood notes, and travel tips for the
            routes our team knows best.
          </p>
        </div>

        <div className="home-city-carousel">
          <button
            type="button"
            className="home-carousel-arrow home-carousel-arrow-left"
            onClick={() => scrollCarousel(-1)}
            aria-label="Scroll featured guides left"
            hidden={!canScrollLeft}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div
            className="home-city-grid home-city-grid-scroll"
            role="region"
            aria-label="Featured city guides"
            ref={scrollRef}
          >
            {FEATURED_CAROUSEL.map(({ slug, city, country, heroLine, stations, accent }) => (
              <Link
                to={`/guides/${slug}`}
                className="home-city-card"
                data-accent={accent}
                key={slug}
              >
                <div className="home-city-img">
                  {images[city] && (
                    <img
                      src={images[city]}
                      alt={`${city} skyline`}
                      loading="lazy"
                      decoding="async"
                      className="home-city-img-el"
                    />
                  )}
                  <span className="home-city-country">{country}</span>
                </div>
                <div className="home-city-body">
                  <h3 className="home-city-name">{city}</h3>
                  <p className="home-city-line">{heroLine}</p>
                  <div className="home-city-foot">
                    <span className="home-city-meta">
                      {stations > 0 ? `${stations} key stations` : "Guide"}
                    </span>
                    <span className="home-city-cta">View guide →</span>
                  </div>
                </div>
              </Link>
            ))}
            {/* Final card in the scroll row — escape hatch to the full
                city-guides index for anyone who wants to see all 23. */}
            <Link to="/guides" className="home-city-card home-city-more">
              <div className="home-city-more-body">
                <span className="home-city-more-kicker">Browse more</span>
                <span className="home-city-more-title">All city guides</span>
                <span className="home-city-more-sub">
                  {totalCityGuides} cities across Japan, China, the UK,
                  France, Germany, Spain, and Thailand.
                </span>
                <span className="home-city-cta">See all →</span>
              </div>
            </Link>
          </div>

          <button
            type="button"
            className="home-carousel-arrow home-carousel-arrow-right"
            onClick={() => scrollCarousel(1)}
            aria-label="Scroll featured guides right"
            hidden={!canScrollRight}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </section>

      {/* ---- Compact how-it-works strip ---- */}
      <section className="home-how">
        <div className="home-how-item">
          <span className="home-how-num">1</span>
          <div>
            <h3 className="home-how-title">Pick a station</h3>
            <p className="home-how-text">Choose a city and train or metro line to search around.</p>
          </div>
        </div>
        <div className="home-how-item">
          <span className="home-how-num">2</span>
          <div>
            <h3 className="home-how-title">Compare live prices</h3>
            <p className="home-how-text">Real-time rates from Google Hotels, Booking.com, and TripAdvisor.</p>
          </div>
        </div>
        <div className="home-how-item">
          <span className="home-how-num">3</span>
          <div>
            <h3 className="home-how-title">Book direct</h3>
            <p className="home-how-text">Sorted by walking distance. Book through whichever platform you trust.</p>
          </div>
        </div>
      </section>

      {/* ---- Latest from the journal ---- */}
      {featuredJournalArticles.length > 0 && (
        <section className="home-journal">
          <div className="home-journal-head">
            <h2 className="home-journal-title">Latest from the journal</h2>
            <Link to="/journal" className="home-journal-all">
              All articles &rarr;
            </Link>
          </div>
          <div className="home-journal-grid">
            {[...featuredJournalArticles]
              .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
              .slice(0, 3)
              .map((a) => (
                <Link
                  key={a.slug}
                  to={`/journal/${a.slug}`}
                  className="home-journal-card"
                >
                  {a.category && (
                    <span className="home-journal-tag">{a.category}</span>
                  )}
                  <h3 className="home-journal-card-title">{a.title}</h3>
                  {a.subtitle && (
                    <p className="home-journal-card-sub">{a.subtitle}</p>
                  )}
                  <span className="home-journal-card-date">
                    {new Date(a.datePublished + "T00:00:00").toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </Link>
              ))}
          </div>
        </section>
      )}

      {/* ---- Explore more strip ---- */}
      <nav className="home-explore" aria-label="More StayByRail pages">
        <Link to="/travel-guide" className="home-explore-link">Best times to travel</Link>
        <Link to="/itineraries" className="home-explore-link">Itineraries</Link>
        <Link to="/passes" className="home-explore-link">Transport passes</Link>
        <Link to="/coverage" className="home-explore-link">Coverage map</Link>
        <Link to="/train-times" className="home-explore-link">Train times</Link>
        <Link to="/how-it-works" className="home-explore-link">How it works</Link>
        <Link to="/faq" className="home-explore-link">FAQ</Link>
      </nav>
    </>
  );
}

export default HomePage;
