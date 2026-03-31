import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";


function HomePage() {
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
          Compare prices from Google Hotels, Booking.com, and TripAdvisor across
          52 cities in 6 countries — sorted by walking distance to the platform.
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
          StayByRail covers the most-travelled rail networks in the world. Here are
          some of the most popular cities our travellers search for.
        </p>
        <div className="content-city-grid">
          {[
            { city: "Tokyo", accent: "red", guide: "tokyo", text: "Explore Japan's capital via the iconic Yamanote Line, which loops through major hubs like Shinjuku, Shibuya, and Tokyo Station. With over 100 stations across dozens of lines, finding a hotel near a convenient stop means easy access to everything from Akihabara to the Meiji Shrine." },
            { city: "London", accent: "blue", guide: "london", text: "Navigate the Tube and find hotels near Underground stations across all zones. Staying near a Central, Victoria, or Piccadilly line station puts you minutes from the British Museum, Buckingham Palace, and the West End." },
            { city: "Paris", accent: "purple", guide: "paris", text: "Stay near Metro stations in the City of Light and reach the Eiffel Tower, Louvre, and Montmartre without relying on taxis. The Paris Metro's 16 lines cover every arrondissement." },
            { city: "Berlin", accent: "green", guide: "berlin", text: "Find hotels along the U-Bahn and S-Bahn networks in Germany's capital. Berlin's efficient public transport makes it easy to hop between the Brandenburg Gate, Museum Island, and the East Side Gallery." },
            { city: "Barcelona", accent: "orange", guide: "barcelona", text: "Hotels near Metro stops in Catalonia's vibrant capital put you within easy reach of the Sagrada Familia, Las Ramblas, and the Gothic Quarter." },
            { city: "Bangkok", accent: "teal", guide: "bangkok", text: "Stay near BTS Skytrain and MRT stations to avoid Bangkok's legendary traffic. The Sukhumvit line passes through the city's main hotel and nightlife districts." },
            { city: "Osaka", accent: "red", guide: "osaka", text: "Budget-friendly stays near Midosuji Line stations make Osaka an ideal base for exploring Kansai. The famous Dotonbori street food scene is a short walk from Namba Station." },
            { city: "Kyoto", accent: "purple", guide: "kyoto", text: "Traditional ryokan and modern hotels cluster near Karasuma Line stations in Japan's cultural capital. Staying near Kyoto Station gives you direct Shinkansen access for day trips." },
            { city: "Madrid", accent: "blue", guide: "madrid", text: "Spain's capital boasts one of Europe's most extensive metro systems. Hotels near Sol or Gran Via stations place you at the heart of the city, within walking distance of the Prado and Retiro Park." },
            { city: "Manchester", accent: "green", guide: null, text: "Find hotels near Metrolink tram stops across Greater Manchester. The tram network connects Piccadilly and Victoria stations to MediaCityUK and the Etihad Campus." },
          ].map(({ city, accent, guide, text }) => (
            <div className="content-city-card" data-accent={accent} key={city}>
              <h3 className="content-city-name">
                {city}
                {guide && <Link to={`/guides/${guide}`} className="city-guide-link">Guide →</Link>}
              </h3>
              <p className="content-city-text">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;
