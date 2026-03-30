import { useState } from "react";

function About() {
  const [open, setOpen] = useState(false);

  return (
    <section className="about-section">
      <button
        className="about-toggle"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="about-toggle-label">About StayByRail</span>
        <svg
          className={`about-toggle-icon ${open ? "about-toggle-icon-open" : ""}`}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>

      {open && (
        <div className="about-content">
          <p className="about-description">
            StayByRail helps you find hotels within walking distance of major
            train stations. Search by city or station, set your travel dates,
            and instantly compare prices and ratings from multiple booking
            platforms.
          </p>

          <div className="about-coverage">
            <h3 className="about-heading">Coverage</h3>
            <p className="about-text">
              52 cities across 6 countries: Japan, United Kingdom, France,
              Germany, Spain, and Thailand.
            </p>
          </div>

          <div className="about-sources">
            <h3 className="about-heading">Data Sources</h3>
            <p className="about-text">
              Hotel listings and prices are aggregated from Google Hotels,
              Booking.com, and TripAdvisor to give you the best available
              options and rates.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
