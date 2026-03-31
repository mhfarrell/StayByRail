import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const CITIES = [
  { city: "Tokyo", accent: "red", guide: "tokyo", wiki: "Tokyo", text: "Explore Japan's capital via the iconic Yamanote Line, which loops through major hubs like Shinjuku, Shibuya, and Tokyo Station." },
  { city: "London", accent: "blue", guide: "london", wiki: "London", text: "Navigate the Tube and find hotels near Underground stations across all zones. Central, Victoria, or Piccadilly line stations put you minutes from everything." },
  { city: "Paris", accent: "purple", guide: "paris", wiki: "Paris", text: "Stay near Metro stations in the City of Light and reach the Eiffel Tower, Louvre, and Montmartre without relying on taxis." },
  { city: "Berlin", accent: "green", guide: "berlin", wiki: "Berlin", text: "Find hotels along the U-Bahn and S-Bahn networks in Germany's capital. Efficient transport connects the Brandenburg Gate, Museum Island, and East Side Gallery." },
  { city: "Barcelona", accent: "orange", guide: "barcelona", wiki: "Barcelona", text: "Hotels near Metro stops in Catalonia's vibrant capital put you within easy reach of the Sagrada Familia, Las Ramblas, and the Gothic Quarter." },
  { city: "Bangkok", accent: "teal", guide: "bangkok", wiki: "Bangkok", text: "Stay near BTS Skytrain and MRT stations to avoid Bangkok's legendary traffic. The Sukhumvit line passes through the main hotel districts." },
  { city: "Osaka", accent: "red", guide: "osaka", wiki: "Osaka", text: "Budget-friendly stays near Midosuji Line stations make Osaka an ideal base for exploring Kansai. Dotonbori street food is a walk from Namba Station." },
  { city: "Kyoto", accent: "purple", guide: "kyoto", wiki: "Kyoto", text: "Traditional ryokan and modern hotels cluster near Karasuma Line stations. Staying near Kyoto Station gives you direct Shinkansen access." },
  { city: "Madrid", accent: "blue", guide: "madrid", wiki: "Madrid", text: "Spain's capital boasts one of Europe's most extensive metro systems. Hotels near Sol or Gran Via stations place you at the heart of the city." },
  { city: "Edinburgh", accent: "green", guide: "edinburgh", wiki: "Edinburgh", text: "Scotland's historic capital is a rail gateway to the Highlands. Waverley and Haymarket stations sit at the centre of the city's best hotel areas." },
];

function useCityImages() {
  const [images, setImages] = useState({});

  useEffect(() => {
    CITIES.forEach(({ city, wiki }) => {
      const key = `sbr_home2_${city}`;
      const cached = sessionStorage.getItem(key);
      if (cached) {
        setImages((prev) => ({ ...prev, [city]: cached }));
        return;
      }
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`)
        .then((r) => r.json())
        .then((data) => {
          const thumb = data.thumbnail?.source || "";
          let url = thumb;
          if (thumb && thumb.includes("/thumb/")) {
            url = thumb.replace(/\/\d+px-/, "/800px-");
          }
          if (url) {
            sessionStorage.setItem(key, url);
            setImages((prev) => ({ ...prev, [city]: url }));
          }
        })
        .catch(() => {});
    });
  }, []);

  return images;
}

function HomePage() {
  const images = useCityImages();

  return (
    <>
      <PageMeta
        title="StayByRail \u2014 Find Hotels Near Train Stations"
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
          Compare prices from Google Hotels, Booking.com, and TripAdvisor across
          52 cities in 6 countries \u2014 sorted by walking distance to the platform.
        </p>
        <Link to="/search" className="hero-cta">Search Hotels</Link>
      </section>

      {/* ---- How It Works ---- */}
      <section className="content-how-it-works">
        <h2 className="content-heading">How StayByRail Works</h2>
        <p className="content-intro">
          Three simple steps to find the closest hotel to your train station.
        </p>
        <div className="content-steps">
          <div className="content-step-card">
            <div className="content-step-number">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="content-step-title">1. Choose Your City and Line</h3>
            <p className="content-step-text">
              Select from 52 cities across Japan, the United Kingdom, France, Germany,
              Spain, and Thailand. Pick a specific train or metro line and station to
              search around.
            </p>
          </div>
          <div className="content-step-card">
            <div className="content-step-number">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="content-step-title">2. Set Your Dates and Budget</h3>
            <p className="content-step-text">
              Enter your check-in and check-out dates, choose your preferred currency,
              and optionally set a maximum nightly budget to filter results to your
              price range.
            </p>
          </div>
          <div className="content-step-card">
            <div className="content-step-number">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="content-step-title">3. Compare Hotels by Distance</h3>
            <p className="content-step-text">
              Results are sorted by walking distance to the station. Compare prices
              from multiple booking platforms side by side, view amenities, and book
              directly through your preferred site.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Popular Destinations ---- */}
      <section className="content-destinations">
        <h2 className="content-heading">Popular Destinations</h2>
        <p className="content-intro">
          From the high-speed Shinkansen network in Japan to the London Underground,
          StayByRail covers the most-travelled rail networks in the world.
        </p>
        <div className="content-city-grid">
          {CITIES.map(({ city, accent, guide, text }) => (
            <Link to={guide ? `/guides/${guide}` : "/search"} className="content-city-card" data-accent={accent} key={city}>
              {images[city] && (
                <div className="content-city-img" style={{ backgroundImage: `url(${images[city]})` }} />
              )}
              <div className="content-city-body">
                <h3 className="content-city-name">{city}</h3>
                <p className="content-city-text">{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
