import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import {
  featuredCities,
  featuredJournalArticles,
  totalCityGuides,
} from "../data/homepageFeatured";
import { flagshipLines } from "../data/lines";
import { getCityHeroPhoto } from "../data/cityHeroPhotos";

// HomePage is the LCP target and the only eager route in App.jsx. Keep
// imports metadata-only so guide/journal prose stays in its lazy chunks.

function useCityImages(list) {
  const [images, setImages] = useState(() => {
    const seed = {};
    for (const { slug, city } of list) {
      const curated = getCityHeroPhoto(slug);
      if (curated?.src) seed[city] = curated.src;
    }
    return seed;
  });

  useEffect(() => {
    list.forEach(({ slug, city, wikipedia }) => {
      if (getCityHeroPhoto(slug)) return;
      const key = `sbr_home8_${city}`;
      const cached = sessionStorage.getItem(key);
      if (cached) {
        setImages((prev) => ({ ...prev, [city]: cached }));
        return;
      }
      const wiki = wikipedia || city;
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

function useCarouselScroll() {
  const scrollRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    const recheck = setTimeout(update, 400);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      clearTimeout(recheck);
    };
  }, [update]);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.round(el.clientWidth * 0.8), behavior: "smooth" });
  };

  return { scrollRef, canLeft, canRight, scroll };
}

function HomePage() {
  const cityImages = useCityImages(featuredCities);
  const citiesScroll = useCarouselScroll();
  const linesScroll = useCarouselScroll();
  const navigate = useNavigate();

  const todayIso = new Date().toISOString().slice(0, 10);
  const tomorrowIso = new Date(Date.now() + 86400000).toISOString().slice(0, 10);

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState(todayIso);
  const [checkOut, setCheckOut] = useState(tomorrowIso);
  const [guests, setGuests] = useState(2);

  const onSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.set("q", destination);
    if (checkIn) params.set("check_in", checkIn);
    if (checkOut) params.set("check_out", checkOut);
    if (guests) params.set("adults", String(guests));
    navigate(`/search${params.toString() ? `?${params}` : ""}`);
  };

  return (
    <>
      <PageMeta
        title="StayByRail — Hotels near train stations"
        description="Compare hotels near train and metro stations across 71 cities in 9 countries. Real-time prices from Google Hotels, Booking.com, and TripAdvisor."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
          "description": "Find hotels near train and metro stations. Compare prices from Google Hotels, Booking.com, and TripAdvisor across 71 cities in 9 countries.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://staybyrail.co.uk/search?q={city}&check_in={check_in}&check_out={check_out}",
            },
            "query-input": "required name=city",
          },
        }}
      />

      {/* ---------- Hero with search ---------- */}
      <section className="relative">
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-surface-dark) 0%, var(--color-surface-dark-2) 55%, #2A1626 100%)",
          }}
        >
          {/* Subtle rose glow for brand warmth — no pattern, just a soft halo */}
          <div
            className="pointer-events-none absolute -right-32 -top-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
            style={{ background: "var(--color-primary)" }}
            aria-hidden="true"
          />
          <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-28 sm:pb-32 text-white">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs sm:text-sm font-medium text-white/90 mb-5">
              <span className="line-bullet" style={{ background: "var(--color-primary)" }} aria-hidden="true" />
              71 cities · 9 countries · hotel search built for rail travellers
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl">
              Hotels near train stations,<br className="hidden sm:block" />
              sorted by walk time.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
              Compare live prices from Google Hotels, Booking.com, and TripAdvisor.
              Every result ranked by how long it takes to reach the platform — not just distance on a map.
            </p>
          </div>
        </div>

        {/* Search card — overlaps the hero bottom */}
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-20 relative z-10">
          <form
            onSubmit={onSubmit}
            className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.25)] border border-[var(--color-hairline)] p-3 sm:p-3 grid gap-2 sm:gap-0 sm:grid-cols-[2fr_1fr_1fr_1fr_auto]"
            aria-label="Search hotels"
          >
            <SearchField label="Where" className="sm:border-r sm:border-[var(--color-hairline)]">
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="City, station, or line"
                className="w-full bg-transparent outline-none text-[var(--color-ink)] placeholder:text-[var(--color-ink-subtle)] text-sm font-medium min-h-[38px]"
              />
            </SearchField>
            <SearchField label="Check-in" className="sm:border-r sm:border-[var(--color-hairline)]">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={todayIso}
                className="w-full bg-transparent outline-none text-[var(--color-ink)] text-sm font-medium min-h-[38px] [color-scheme:light]"
              />
            </SearchField>
            <SearchField label="Check-out" className="sm:border-r sm:border-[var(--color-hairline)]">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || todayIso}
                className="w-full bg-transparent outline-none text-[var(--color-ink)] text-sm font-medium min-h-[38px] [color-scheme:light]"
              />
            </SearchField>
            <SearchField label="Guests" className="sm:border-r sm:border-[var(--color-hairline)]">
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full bg-transparent outline-none text-[var(--color-ink)] text-sm font-medium min-h-[38px]"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>
                ))}
              </select>
            </SearchField>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-[var(--color-accent-ink)] font-semibold text-sm hover:bg-[var(--color-accent-lift)] transition-colors min-h-[48px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              Search
            </button>
          </form>
        </div>
      </section>

      {/* ---------- Trending cities ---------- */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-tight m-0">
              Trending destinations
            </h2>
            <p className="text-[var(--color-ink-muted)] mt-1 text-sm sm:text-base">
              Travellers are searching for these cities most.
            </p>
          </div>
          <Link
            to="/guides"
            className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-lift)]"
          >
            See all {totalCityGuides} cities &rarr;
          </Link>
        </div>

        <Carousel {...citiesScroll} label="Trending destinations">
          {featuredCities.map(({ slug, city, country, keyStationCount }) => (
            <Link
              key={slug}
              to={`/guides/${slug}`}
              className="group snap-start shrink-0 w-[260px] sm:w-[300px] rounded-xl overflow-hidden border border-[var(--color-hairline)] bg-white shadow-[var(--shadow-xs)] transition-shadow hover:shadow-[var(--shadow-card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] no-underline"
            >
              <div className="relative aspect-[4/3] bg-[var(--color-surface-2)] overflow-hidden">
                {cityImages[city] && (
                  <img
                    src={cityImages[city]}
                    alt={`${city} skyline`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-bold text-lg leading-tight">{city}</div>
                  <div className="text-white/90 text-xs mt-0.5">{country}</div>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-xs text-[var(--color-ink-muted)]">
                <span>{keyStationCount > 0 ? `${keyStationCount} key stations` : "City guide"}</span>
                <span className="text-[var(--color-primary)] font-semibold group-hover:text-[var(--color-primary-lift)]">
                  View &rarr;
                </span>
              </div>
            </Link>
          ))}
          <Link
            to="/guides"
            className="group snap-start shrink-0 w-[240px] sm:w-[280px] flex flex-col justify-center items-center gap-2 text-center rounded-xl border-2 border-dashed border-[var(--color-hairline-strong)] bg-[var(--color-surface)] p-6 no-underline text-[var(--color-ink)] hover:bg-[var(--color-surface-2)] hover:border-[var(--color-primary)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          >
            <span className="text-xs uppercase tracking-wider text-[var(--color-ink-subtle)] font-semibold">Browse more</span>
            <span className="text-lg font-bold text-[var(--color-ink)]">All {totalCityGuides} cities</span>
            <span className="text-xs text-[var(--color-ink-muted)] max-w-[22ch]">
              9 countries: Japan, UK, France, Germany, Spain, Thailand, China, South Korea, US
            </span>
            <span className="text-sm font-semibold text-[var(--color-primary)]">See all &rarr;</span>
          </Link>
        </Carousel>
      </section>

      {/* ---------- Browse by line (subtle rail nod) ---------- */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
        <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-tight m-0">
              Browse by line
            </h2>
            <p className="text-[var(--color-ink-muted)] mt-1 text-sm sm:text-base">
              Stay anywhere on an entire rail line — only StayByRail lets you search this way.
            </p>
          </div>
        </div>

        <Carousel {...linesScroll} label="Browse by line">
          {flagshipLines.map((line) => (
            <Link
              key={line.slug}
              to={`/guides/${line.city.toLowerCase().replace(/\s+/g, "_").replace(/·/g, "").replace(/_+/g, "_")}`}
              className="group snap-start shrink-0 w-[240px] sm:w-[260px] rounded-xl overflow-hidden border border-[var(--color-hairline)] bg-white shadow-[var(--shadow-xs)] transition-shadow hover:shadow-[var(--shadow-card)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] no-underline p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="line-bullet" style={{ background: line.colorHex }} aria-hidden="true" />
                <span className="text-xs uppercase tracking-wider text-[var(--color-ink-subtle)] font-semibold truncate">
                  {line.city}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-ink)] leading-tight mb-1 group-hover:text-[var(--color-primary)]">
                {line.name}
              </h3>
              <p className="text-xs text-[var(--color-ink-subtle)] mb-3">
                {line.operator} · {line.stopCount} stops
              </p>
              <p className="text-sm text-[var(--color-ink-muted)] leading-relaxed line-clamp-3">
                {line.blurb}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary)] group-hover:text-[var(--color-primary-lift)]">
                View line &rarr;
              </span>
            </Link>
          ))}
        </Carousel>
      </section>

      {/* ---------- How it works ---------- */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 py-12 bg-[var(--color-surface)] rounded-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-tight mb-8 px-4">
          How it works
        </h2>
        <ol className="grid gap-5 sm:grid-cols-3 list-none p-0 m-0 px-4">
          {[
            { n: "01", title: "Search a city, station, or line", text: "Type where you want to stay. We handle city names, station names, and whole rail lines." },
            { n: "02", title: "Compare across every site", text: "Real-time prices from Google Hotels, Booking.com, TripAdvisor, and more. One search, every source." },
            { n: "03", title: "Book direct, walk to the platform", text: "Every result shows walking time to the nearest station. Book through whichever site gives the best price." },
          ].map((step) => (
            <li key={step.n} className="bg-white border border-[var(--color-hairline)] rounded-lg p-5 shadow-[var(--shadow-xs)]">
              <span className="tabular text-sm text-[var(--color-primary)] font-semibold block mb-3">
                {step.n}
              </span>
              <h3 className="text-base font-bold text-[var(--color-ink)] mb-1.5">
                {step.title}
              </h3>
              <p className="text-[var(--color-ink-muted)] text-sm leading-relaxed m-0">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- Journal ---------- */}
      {featuredJournalArticles.length > 0 && (
        <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-tight m-0">
              From the journal
            </h2>
            <Link
              to="/journal"
              className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-lift)]"
            >
              All articles &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredJournalArticles.slice(0, 3).map((a) => (
              <Link
                key={a.slug}
                to={`/journal/${a.slug}`}
                className="group flex flex-col gap-2 bg-white border border-[var(--color-hairline)] rounded-xl p-6 shadow-[var(--shadow-xs)] no-underline text-[var(--color-ink)] transition-all hover:shadow-[var(--shadow-card)] hover:border-[var(--color-primary)]/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              >
                {a.category && (
                  <span className="text-xs uppercase tracking-wider text-[var(--color-primary)] font-semibold">
                    {a.category}
                  </span>
                )}
                <h3 className="text-lg font-bold text-[var(--color-ink)] leading-tight m-0 group-hover:text-[var(--color-primary)]">
                  {a.title}
                </h3>
                {a.subtitle && (
                  <p className="text-[var(--color-ink-muted)] text-sm leading-relaxed m-0">
                    {a.subtitle}
                  </p>
                )}
                <time
                  dateTime={a.datePublished}
                  className="tabular text-xs text-[var(--color-ink-subtle)] mt-auto pt-2"
                >
                  {new Date(a.datePublished + "T00:00:00").toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---------- Explore more ---------- */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 mb-16">
        <h2 className="text-base font-semibold text-[var(--color-ink)] mb-4">Explore more</h2>
        <nav aria-label="More StayByRail pages" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {[
            { to: "/travel-guide", label: "Best times to travel" },
            { to: "/itineraries", label: "Itineraries" },
            { to: "/passes", label: "Transport passes" },
            { to: "/countries", label: "Country rail guides" },
            { to: "/coverage", label: "Coverage map" },
            { to: "/train-times", label: "Live train times" },
            { to: "/how-it-works", label: "How it works" },
            { to: "/faq", label: "FAQ" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[var(--color-ink-muted)] no-underline hover:text-[var(--color-primary)] hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </>
  );
}

function SearchField({ label, className = "", children }) {
  return (
    <label className={`flex flex-col gap-0.5 px-3 py-2 rounded-md hover:bg-[var(--color-surface)] transition-colors ${className}`}>
      <span className="text-[0.68rem] uppercase tracking-wider text-[var(--color-ink-subtle)] font-semibold">
        {label}
      </span>
      {children}
    </label>
  );
}

function Carousel({ scrollRef, canLeft, canRight, scroll, children, label }) {
  return (
    <div className="relative">
      {canLeft && (
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label={`Scroll ${label} left`}
          className="hidden sm:inline-flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-[var(--color-hairline)] text-[var(--color-ink)] shadow-[var(--shadow-float)] hover:bg-[var(--color-surface)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
      )}
      <div
        role="region"
        aria-label={label}
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:-mx-0 sm:px-0 snap-x [scrollbar-width:thin]"
      >
        {children}
      </div>
      {canRight && (
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label={`Scroll ${label} right`}
          className="hidden sm:inline-flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white border border-[var(--color-hairline)] text-[var(--color-ink)] shadow-[var(--shadow-float)] hover:bg-[var(--color-surface)]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default HomePage;
