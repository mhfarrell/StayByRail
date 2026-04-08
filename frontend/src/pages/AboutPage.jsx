import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function AboutPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="About StayByRail — Hotels Near Train Stations"
        description="StayByRail helps travellers find hotels within walking distance of major train and metro stations across 52 cities in 6 countries. Built by Matt Farrell."
      />
      <h2 className="page-heading">About StayByRail</h2>
      <p className="page-intro">
        StayByRail helps travellers find hotels within walking distance of major
        train and metro stations. Compare real-time prices from multiple booking
        platforms, pick your station, and book directly — all in one place.
      </p>

      <div className="about-sections">
        <div className="about-block">
          <h3 className="about-block-heading">What We Do</h3>
          <p className="about-block-text">
            Planning a trip around public transit is smarter than it sounds. When
            your hotel is a five-minute walk from the station, everything becomes
            easier — airport transfers, day trips, evening outings, and early
            departures. The problem is that most hotel search tools let you filter
            by neighbourhood or star rating, but not by walking distance to a
            specific platform.
          </p>
          <p className="about-block-text">
            StayByRail fills that gap. Choose your city, select a rail line and
            station, set your dates, and we query Google Hotels, Booking.com, and
            TripAdvisor simultaneously. Results come back ranked by how far each
            hotel is from the station entrance — so the most convenient option is
            always at the top.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Coverage</h3>
          <p className="about-block-text">
            We currently cover <strong>52 cities across 6 countries</strong> —
            Japan, the United Kingdom, France, Germany, Spain, and Thailand.
            From the Shinkansen network in <Link to="/guides/tokyo" className="about-link">Japan</Link> to
            the <Link to="/guides/london" className="about-link">London Underground</Link>,
            the <Link to="/guides/paris" className="about-link">Paris Metro</Link> to{" "}
            <Link to="/guides/bangkok" className="about-link">Bangkok's BTS Skytrain</Link>, StayByRail covers the most
            widely travelled rail networks in the world. New cities and lines are
            added regularly as data sources become available.
          </p>
          <p className="about-block-text">
            <Link to="/coverage" className="about-link">View full coverage →</Link>
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Data Sources</h3>
          <p className="about-block-text">
            Hotel listings and real-time pricing come from three sources: Google
            Hotels (via SerpAPI), Booking.com, and TripAdvisor (both via RapidAPI).
            Station coordinates and rail line data are sourced from official transit
            authorities and open data projects. Walking distances are calculated
            directly from geographic coordinates.
          </p>
          <p className="about-block-text">
            StayByRail is a comparison tool — when you find a hotel you like, you
            book directly through the platform of your choice. We never handle
            payments or store personal information.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Built by Matt Farrell</h3>
          <p className="about-block-text">
            StayByRail was designed and built by{" "}
            <Link to="/authors/matt-farrell" className="about-link">
              Matt Farrell
            </Link>
            , a software developer based in the UK. The idea came from personal
            travel frustration — finding hotels near specific stations always
            meant cross-referencing map apps with booking sites manually.
            StayByRail automates that process.
          </p>
          <p className="about-block-text">
            Get in touch or follow the project on{" "}
            <a
              href="https://github.com/mhfarrell"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              GitHub
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/matt-h-farrell/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Explore More</h3>
          <p className="about-block-text">
            <Link to="/how-it-works" className="about-link">How StayByRail works</Link>
            {" · "}
            <Link to="/guides" className="about-link">City rail guides</Link>
            {" · "}
            <Link to="/travel-guide" className="about-link">Best times to travel</Link>
            {" · "}
            <Link to="/train-times" className="about-link">Train times and transit resources</Link>
            {" · "}
            <Link to="/faq" className="about-link">FAQ</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
