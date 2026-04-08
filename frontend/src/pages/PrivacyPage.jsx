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
        information when you use this website. Last updated: April 2026.
      </p>

      <div className="about-sections">
        <div className="about-block">
          <h3 className="about-block-heading">What data we collect</h3>
          <p className="about-block-text">
            StayByRail does not require registration. We do not collect or
            store your email address, payment details, precise location, or
            any form of tracking ID beyond those set by third-party services
            listed below.
          </p>
          <p className="about-block-text">
            Search queries (city, station, dates, number of guests) are sent
            to our server to retrieve hotel results. These queries are not
            logged to disk, tied to any identifier, or retained once the
            request has been served.
          </p>
          <p className="about-block-text">
            If you voluntarily submit a travel tip using the tip form on a
            city guide, the name you type and the tip text are saved on our
            server alongside the city and a timestamp so the tip can be
            displayed to other visitors. Do not enter your real name or any
            personal details in this form unless you are comfortable with
            them being shown publicly — a first name, initial, or nickname
            is fine. If you would like a tip removed, email the address in
            the "How to contact us" section below and we will delete it.
          </p>
          <p className="about-block-text">
            Your browser uses <strong>sessionStorage</strong> (cleared when
            you close the tab) to cache city photos, weather snapshots, and
            event listings so repeat visits within the same browsing session
            are faster. This cache stays in your browser; it is never sent
            to our servers.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Cookies and advertising</h3>
          <p className="about-block-text">
            StayByRail uses Google AdSense to display advertisements. Google
            AdSense uses cookies to serve ads based on your prior visits to
            this website and other sites. Google's use of advertising cookies
            enables it and its partners to serve ads to you based on your
            visit to StayByRail and/or other sites on the Internet.
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
          <p className="about-block-text">
            StayByRail does not set its own first-party tracking cookies.
            Other than the cookies set by Google AdSense, no cookies are
            placed by this site.
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
            City photos, summaries, and country information are fetched
            on-demand from the Wikipedia/Wikimedia REST API. Current weather
            is fetched from Open-Meteo. Local events are fetched from
            Ticketmaster, PredictHQ, and Eventbrite via our server. These
            requests are issued by your browser and are subject to the
            respective providers' terms and privacy policies.
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
          <h3 className="about-block-heading">Affiliate relationships</h3>
          <p className="about-block-text">
            StayByRail is an independent travel site run by one person.
            Outbound links to booking sites (Booking.com, Agoda, Expedia,
            Google Hotels, etc.) may in the future be affiliate links —
            meaning we may earn a small commission if you book a hotel after
            following a link, at no extra cost to you. Commission does not
            influence how we rank or display hotels: results are returned by
            the underlying search API in the order chosen by the filters and
            sort controls you apply on the page.
          </p>
          <p className="about-block-text">
            Where an affiliate link is used, it will be clearly marked and a
            disclosure notice is shown in the site footer.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Analytics</h3>
          <p className="about-block-text">
            StayByRail does not currently use any analytics or tracking
            services beyond those associated with Google AdSense advertising.
            No third-party analytics scripts (such as Google Analytics) are
            installed on this site. If we add privacy-friendly analytics in
            future (for example Plausible) this page will be updated to
            reflect it before the script is deployed.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Your rights and how to contact us</h3>
          <p className="about-block-text">
            You have the right to ask what personal data we hold about you,
            to request its deletion, and to object to how it is processed.
            In practice the only personal data StayByRail ever holds is a
            travel tip you voluntarily submitted (see "What data we collect"
            above), and we will delete that on request.
          </p>
          <p className="about-block-text">
            To exercise any of these rights, or for any other question about
            this policy, email{" "}
            <a href="mailto:hello@staybyrail.co.uk" className="about-link">
              hello@staybyrail.co.uk
            </a>
            . You can also reach Matt Farrell via{" "}
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
