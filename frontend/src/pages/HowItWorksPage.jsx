import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function HowItWorksPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="How StayByRail Works — Find Hotels Near Train Stations"
        description="Three simple steps to find hotels near any train or metro station. Choose your city and line, set your dates and budget, then compare hotels sorted by walking distance."
        schema={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to find hotels near train stations with StayByRail",
          "description": "Find and compare hotels within walking distance of train and metro stations across 52 cities.",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Choose Your City and Rail Line",
              "text": "Select from 52 cities across Japan, the United Kingdom, France, Germany, Spain, and Thailand. Pick a specific train or metro line and station to search around."
            },
            {
              "@type": "HowToStep",
              "name": "Set Your Dates and Budget",
              "text": "Enter your check-in and check-out dates and optionally set a maximum nightly budget to filter results to your price range."
            },
            {
              "@type": "HowToStep",
              "name": "Compare Hotels by Walking Distance",
              "text": "Results are sorted by walking distance to the station. Compare prices from Google Hotels, Booking.com, and TripAdvisor side by side, then book directly through your preferred site."
            }
          ]
        }}
      />
      <h2 className="page-heading">How StayByRail Works</h2>
      <p className="page-intro">
        StayByRail makes it simple to find accommodation within walking distance of
        major train and metro stations. Compare prices from Google Hotels, Booking.com,
        and TripAdvisor — all in one search — so you spend less time planning and more
        time exploring.
      </p>

      <div className="content-steps" style={{ marginBottom: "3rem" }}>
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

      <h2 className="page-heading">Why Book Near Train Stations?</h2>
      <p className="page-intro">
        Choosing a hotel close to a train or metro station is one of the smartest
        decisions you can make when travelling. Here is why proximity to public
        transit matters.
      </p>

      <div className="content-benefit-grid">
        <div className="content-benefit-card">
          <div className="content-benefit-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 8l-4 4-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h3 className="content-benefit-title">Save on Transport Costs</h3>
          <p className="content-benefit-text">
            When your hotel is a short walk from the station, you eliminate the need
            for expensive taxi rides or airport shuttle services. In cities like{" "}
            <Link to="/guides/tokyo" className="about-link">Tokyo</Link> and{" "}
            <Link to="/guides/london" className="about-link">London</Link>, where a single taxi fare from the airport can exceed
            the cost of a night's accommodation, this adds up quickly. Walking to the
            nearest station keeps your daily transport budget low.
          </p>
        </div>
        <div className="content-benefit-card">
          <div className="content-benefit-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="content-benefit-title">More Time Exploring</h3>
          <p className="content-benefit-text">
            Less time commuting means more time experiencing your destination. A
            hotel within five minutes' walk of a metro stop lets you head out
            spontaneously, return to drop off shopping bags, or squeeze in a quick
            rest before an evening outing. You gain flexibility that distant hotels
            simply cannot match.
          </p>
        </div>
        <div className="content-benefit-card">
          <div className="content-benefit-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="content-benefit-title">Easy Airport Connections</h3>
          <p className="content-benefit-text">
            Most major airports are connected to the city centre by express train
            services. Hotels near key interchange stations — such as{" "}
            <Link to="/guides/osaka" className="about-link">Shin-Osaka</Link>,{" "}
            <Link to="/guides/paris" className="about-link">Gare du Nord</Link>, or{" "}
            <Link to="/guides/london" className="about-link">London Paddington</Link> — let you reach the terminal in under
            an hour without transfers. This is especially valuable for early-morning
            flights or late-night arrivals.
          </p>
        </div>
        <div className="content-benefit-card">
          <div className="content-benefit-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3 className="content-benefit-title">Access Multiple Neighbourhoods</h3>
          <p className="content-benefit-text">
            A central station hotel acts as a launchpad to every part of the city.
            Rather than being confined to one district, you can reach markets, museums,
            parks, and nightlife areas across town in minutes. In cities with radial
            networks like <Link to="/guides/paris" className="about-link">Paris</Link> or{" "}
            <Link to="/guides/madrid" className="about-link">Madrid</Link>, one well-chosen station puts the entire
            metro map within easy reach.
          </p>
        </div>
      </div>

      <div className="guide-cta-block" style={{ marginTop: "2.5rem" }}>
        <p className="guide-cta-text">
          Ready to try it?
        </p>
        <Link to="/search" className="hero-cta">Search Hotels</Link>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          <Link to="/guides" className="about-link">Browse city guides</Link>
          {" · "}
          <Link to="/coverage" className="about-link">View full coverage</Link>
          {" · "}
          <Link to="/faq" className="about-link">Read the FAQ</Link>
        </p>
      </div>
    </div>
  );
}

export default HowItWorksPage;
