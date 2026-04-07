import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { cityGuides } from "../data/cityGuides";

// Featured cities for the homepage — pulled live from the guide data so the
// headlines and meta stay in sync with the guide pages themselves.
const FEATURED_ACCENTS = {
  tokyo: "red", london: "blue", paris: "purple", berlin: "green",
  barcelona: "orange", bangkok: "teal", osaka: "red", kyoto: "purple",
  madrid: "blue", edinburgh: "green", birmingham: "orange",
};

const FEATURED = cityGuides.map((g) => ({
  slug: g.slug,
  city: g.city,
  country: g.country,
  heroLine: g.heroLine,
  stations: g.keyStations?.length || 0,
  accent: FEATURED_ACCENTS[g.slug] || "blue",
  wiki: g.wikipedia || g.city,
}));

function useCityImages(list) {
  const [images, setImages] = useState({});

  useEffect(() => {
    list.forEach(({ city, wiki }) => {
      const key = `sbr_home4_${city}`;
      const cached = sessionStorage.getItem(key);
      if (cached) {
        setImages((prev) => ({ ...prev, [city]: cached }));
        return;
      }
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`)
        .then((r) => r.json())
        .then((data) => {
          const url = data.originalimage?.source || data.thumbnail?.source || "";
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

function HomePage() {
  const images = useCityImages(FEATURED);

  return (
    <>
      <PageMeta
        title="StayByRail — Find Hotels Near Train Stations"
        description="Compare hotels near train and metro stations across 52 cities in 6 countries. Real-time prices from Google Hotels, Booking.com, and TripAdvisor."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
          "description": "Find hotels near train and metro stations. Compare prices from Google Hotels, Booking.com, and TripAdvisor across 52 cities in 6 countries.",
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
          <Link to="/coverage" className="hero-subtitle-link">52 cities in 6 countries</Link> — sorted by walking distance to the platform.
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

        <div className="home-city-grid">
          {FEATURED.map(({ slug, city, country, heroLine, stations, accent }) => (
            <Link
              to={`/guides/${slug}`}
              className="home-city-card"
              data-accent={accent}
              key={slug}
            >
              <div
                className="home-city-img"
                style={images[city] ? { backgroundImage: `url(${images[city]})` } : undefined}
              >
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
        </div>

        <div className="home-destinations-foot">
          <Link to="/guides" className="home-browse-all">
            Browse all city guides →
          </Link>
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

      {/* ---- Explore more strip ---- */}
      <nav className="home-explore" aria-label="More StayByRail pages">
        <Link to="/travel-guide" className="home-explore-link">Best times to travel</Link>
        <Link to="/coverage" className="home-explore-link">Coverage map</Link>
        <Link to="/train-times" className="home-explore-link">Train times &amp; passes</Link>
        <Link to="/how-it-works" className="home-explore-link">How it works</Link>
        <Link to="/faq" className="home-explore-link">FAQ</Link>
      </nav>
    </>
  );
}

export default HomePage;
