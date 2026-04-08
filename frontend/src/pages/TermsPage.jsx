import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

function TermsPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="Terms of Service — StayByRail"
        description="Terms of Service for StayByRail. By using this website you agree to these terms."
      />
      <h2 className="page-heading">Terms of Service</h2>
      <p className="page-intro">
        Please read these terms carefully before using StayByRail. By accessing
        or using this website you agree to be bound by these terms. Last
        updated: April 2026.
      </p>

      <div className="about-sections">
        <div className="about-block">
          <h3 className="about-block-heading">1. About StayByRail</h3>
          <p className="about-block-text">
            StayByRail is a free hotel comparison tool that helps travellers find
            accommodation near train and metro stations. The site is operated by
            Matt Farrell, an independent software developer based in the United
            Kingdom. For enquiries, contact{" "}
            <a href="mailto:hello@staybyrail.co.uk" className="about-link">
              hello@staybyrail.co.uk
            </a>.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">2. Use of the service</h3>
          <p className="about-block-text">
            StayByRail is provided free of charge for personal, non-commercial
            use. You may search for hotels, compare prices, and browse travel
            guides. You agree not to misuse the service, including but not
            limited to: scraping or automated access, attempting to interfere
            with the site's operation, or using the service for any unlawful
            purpose.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">3. Hotel listings and pricing</h3>
          <p className="about-block-text">
            Hotel results, prices, and availability are sourced from third-party
            services including Google Hotels (via SerpAPI), Booking.com,
            TripAdvisor (via RapidAPI), and the other online travel agencies
            those services aggregate (Agoda, Expedia, Hotels.com and similar).
            StayByRail displays this information for comparison purposes only.
            Prices shown may not reflect the final price at the time of booking
            and may vary depending on the booking platform, currency, taxes,
            and fees. StayByRail does not guarantee the accuracy, completeness,
            or availability of any listing.
          </p>
          <p className="about-block-text">
            Supplementary content on city-guide pages — such as photos,
            summaries, weather snapshots, and local event listings — is
            retrieved from Wikipedia/Wikimedia, Open-Meteo, Ticketmaster,
            PredictHQ, and Eventbrite. This content is shown "as is" and
            attribution is provided where the source requires it.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">4. Third-party links, booking, and affiliate relationships</h3>
          <p className="about-block-text">
            When you click a booking link, you leave StayByRail and are
            redirected to a third-party website (such as Booking.com or
            TripAdvisor). Your use of those sites is governed by their own
            terms and privacy policies. StayByRail is not a party to any
            booking transaction and is not responsible for the services,
            content, or conduct of third-party platforms.
          </p>
          <p className="about-block-text">
            Some outbound booking links on StayByRail may be affiliate links,
            meaning we may earn a small commission if you make a booking after
            following them, at no extra cost to you. Commission does not
            influence how results are ranked or displayed — the ordering is
            controlled by the sort and filter options you select on the search
            page. Where affiliate links are used, a disclosure notice is shown
            in the site footer. For the full breakdown, see our{" "}
            <Link to="/privacy" className="about-link">Privacy Policy</Link>.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">5. Intellectual property</h3>
          <p className="about-block-text">
            All original content on StayByRail, including text, design, code,
            and travel guides, is the property of Matt Farrell unless otherwise
            stated. Map data is provided by OpenStreetMap contributors under the
            ODbL licence. Hotel images and descriptions belong to their
            respective owners and are displayed via third-party APIs.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">6. User-provided content (travel tips)</h3>
          <p className="about-block-text">
            Travel tips you submit through the tip form on a city guide are
            displayed publicly on that guide alongside the name (or nickname)
            you entered. By submitting a tip you grant StayByRail a
            non-exclusive, royalty-free right to display, reproduce, and
            lightly edit that content in connection with the service. You
            confirm that the content is your own, accurate to the best of
            your knowledge, and does not infringe on any third party's
            rights.
          </p>
          <p className="about-block-text">
            StayByRail reserves the right to moderate, edit, or remove any
            submitted tip for any reason, including spam, inaccuracy,
            offensive content, or promotional material. If you would like a
            tip you submitted to be deleted, email{" "}
            <a href="mailto:hello@staybyrail.co.uk" className="about-link">
              hello@staybyrail.co.uk
            </a>{" "}
            and it will be removed.
          </p>
          <p className="about-block-text">
            You must be at least 16 years old to submit a tip. If you are
            under 16, please do not use the tip form.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">7. Advertising and cookies</h3>
          <p className="about-block-text">
            StayByRail displays advertisements via Google AdSense. These ads may
            use cookies to personalise content based on your browsing activity.
            For full details on how cookies are used and how to opt out, see
            our{" "}
            <Link to="/privacy" className="about-link">Privacy Policy</Link>.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">8. Disclaimer of warranties</h3>
          <p className="about-block-text">
            StayByRail is provided "as is" without warranties of any kind,
            express or implied. We do not warrant that the service will be
            uninterrupted, error-free, or that information displayed will be
            accurate or up to date. Use of the service is at your own risk.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">9. Limitation of liability</h3>
          <p className="about-block-text">
            To the fullest extent permitted by law, StayByRail and its operator
            shall not be liable for any indirect, incidental, or consequential
            damages arising from your use of the service, including but not
            limited to losses resulting from reliance on hotel listings, pricing
            information, or third-party bookings.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">10. Service availability</h3>
          <p className="about-block-text">
            We reserve the right to modify, suspend, or discontinue StayByRail
            at any time without notice. We may also restrict access to parts of
            the service or the entire service without liability.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">11. Governing law</h3>
          <p className="about-block-text">
            These terms are governed by the laws of England and Wales. Any
            disputes arising from these terms or your use of StayByRail shall be
            subject to the exclusive jurisdiction of the courts of England and
            Wales.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">12. Changes to these terms</h3>
          <p className="about-block-text">
            We may update these terms from time to time. Changes will be posted
            on this page with an updated date. Your continued use of StayByRail
            after changes are posted constitutes acceptance of the revised terms.
          </p>
          <p className="about-block-text">
            <Link to="/privacy" className="about-link">Privacy Policy →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TermsPage;
