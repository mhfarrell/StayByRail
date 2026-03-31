import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function PrivacyPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="Privacy Policy — StayByRail"
        description="StayByRail privacy policy. How we handle your data, what cookies we use, and details of third-party services including Google AdSense."
      />
      <h2 className="page-heading">Privacy Policy</h2>
      <p className="page-intro">
        This policy explains how StayByRail collects, uses, and protects
        information when you use this website. Last updated: March 2026.
      </p>

      <div className="about-sections">
        <div className="about-block">
          <h3 className="about-block-heading">What data we collect</h3>
          <p className="about-block-text">
            StayByRail does not require registration and does not collect or
            store personal information such as your name, email address, or
            payment details. Search queries (city, station, dates) are sent to
            our server to retrieve hotel results and are not logged or retained
            beyond the duration of your search request.
          </p>
          <p className="about-block-text">
            If you choose to save API keys using the Settings menu, those keys
            are stored only in your browser's local storage and are never
            transmitted to our servers.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Cookies and advertising</h3>
          <p className="about-block-text">
            StayByRail uses Google AdSense to display advertisements. Google
            AdSense uses cookies to serve ads based on your prior visits to this
            website and other sites. Google's use of advertising cookies enables
            it and its partners to serve ads to you based on your visit to
            StayByRail and/or other sites on the Internet.
          </p>
          <p className="about-block-text">
            You may opt out of personalised advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Google Ads Settings
            </a>
            . You can also opt out of a third-party vendor's use of cookies by
            visiting the{" "}
            <a
              href="https://optout.networkadvertising.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              Network Advertising Initiative opt-out page
            </a>
            .
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Third-party services</h3>
          <p className="about-block-text">
            Hotel search results are retrieved from third-party services
            including Google Hotels (via SerpAPI), Booking.com, and TripAdvisor
            (via RapidAPI). When you click a booking link, you are transferred
            to the relevant third-party platform and their own privacy policies
            apply. StayByRail does not process payments or share your
            information with booking platforms.
          </p>
          <p className="about-block-text">
            Station and map data is sourced from OpenStreetMap contributors and
            is subject to the{" "}
            <a
              href="https://www.openstreetmap.org/copyright"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              ODbL licence
            </a>
            . Maps are rendered using CARTO tile services.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Analytics</h3>
          <p className="about-block-text">
            StayByRail does not currently use any analytics or tracking services
            beyond those associated with Google AdSense advertising. No
            third-party analytics scripts (such as Google Analytics) are
            installed on this site.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Your rights</h3>
          <p className="about-block-text">
            As StayByRail does not collect or store personal data, there is no
            personal data to access, correct, or delete. If you have a question
            about this policy, you can contact Matt Farrell via{" "}
            <a
              href="https://www.linkedin.com/in/matt-h-farrell/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/mhfarrell"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Changes to this policy</h3>
          <p className="about-block-text">
            This privacy policy may be updated from time to time. Any changes
            will be reflected on this page with an updated date. Continued use
            of StayByRail following any changes constitutes your acceptance of
            the updated policy.
          </p>
          <p className="about-block-text">
            <Link to="/about" className="about-link">About StayByRail →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
