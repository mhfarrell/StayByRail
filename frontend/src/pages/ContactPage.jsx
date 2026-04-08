import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const EMAIL = "hello@staybyrail.co.uk";

function ContactPage() {
  const canonical = "https://staybyrail.co.uk/contact";
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "url": canonical,
    "name": "Contact StayByRail",
    "description":
      "How to reach the StayByRail team for questions, corrections, partnerships, or affiliate enquiries.",
    "publisher": {
      "@type": "Organization",
      "name": "StayByRail",
      "url": "https://staybyrail.co.uk",
      "email": EMAIL,
      "founder": {
        "@type": "Person",
        "name": "Matt Farrell",
        "url": "https://staybyrail.co.uk/authors/matt-farrell",
      },
    },
  };

  return (
    <div className="page-content">
      <PageMeta
        title="Contact StayByRail"
        description="Get in touch with the StayByRail team. Email, GitHub, and LinkedIn contacts for questions, corrections, partnerships, and affiliate enquiries."
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        Contact
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Contact StayByRail
      </h1>
      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Questions, corrections, missing stations, partnership enquiries, or
        affiliate programme applications — drop us a line and we'll get back
        to you. StayByRail is a small project run by one person, so please
        bear with us if replies take a day or two.
      </p>

      <div className="about-sections" style={{ maxWidth: 720, margin: "0 auto" }}>
        <div className="about-block">
          <h2 className="about-block-heading">Email</h2>
          <p className="about-block-text">
            The fastest way to reach us is by email:
          </p>
          <p className="about-block-text">
            <a href={`mailto:${EMAIL}`} className="about-link">
              {EMAIL}
            </a>
          </p>
          <p className="about-block-text">
            Please include the city, line, and station name if you're writing
            about a specific hotel search or a data correction. That speeds
            things up enormously.
          </p>
        </div>

        <div className="about-block">
          <h2 className="about-block-heading">What we'd love to hear about</h2>
          <ul className="about-block-text" style={{ paddingLeft: "1.2rem", lineHeight: 1.8 }}>
            <li>
              <strong>Missing stations or lines.</strong> If we don't cover a
              station you rely on, tell us which city and which line. We add
              stations in every backend release.
            </li>
            <li>
              <strong>Corrections.</strong> Wrong coordinates, wrong walking
              times, outdated fare info, misspelled names — any factual fix is
              genuinely appreciated.
            </li>
            <li>
              <strong>Guide contributions.</strong> If you know a city
              intimately and want to contribute a neighbourhood note or an
              editor's pick, we pay attention. See the{" "}
              <Link to="/authors/matt-farrell" className="about-link">
                editor page
              </Link>{" "}
              for how that works currently.
            </li>
            <li>
              <strong>Affiliate and commercial enquiries.</strong> Booking
              platforms, hotel chains, and rail operators looking to work
              with us — we're happy to talk.
            </li>
            <li>
              <strong>Press and interviews.</strong> Likewise happy to chat.
            </li>
          </ul>
        </div>

        <div className="about-block">
          <h2 className="about-block-heading">Other ways to reach us</h2>
          <p className="about-block-text">
            StayByRail is built and maintained by Matt Farrell, a UK-based
            developer. You can also reach him via:
          </p>
          <p className="about-block-text">
            <a
              href="https://github.com/mhfarrell"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              GitHub (mhfarrell)
            </a>
            {" \u00B7 "}
            <a
              href="https://www.linkedin.com/in/matt-h-farrell/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-link"
            >
              LinkedIn
            </a>
          </p>
        </div>

        <div className="about-block">
          <h2 className="about-block-heading">What we can't help with</h2>
          <p className="about-block-text">
            StayByRail is a comparison tool, not a booking engine. We don't
            take reservations, process payments, or handle refunds. If you've
            booked a room through a platform we link to (Booking.com, Google
            Hotels, TripAdvisor), please contact that platform directly — they
            own the booking and the customer-service pipeline for it.
          </p>
          <p className="about-block-text">
            For privacy-related requests — data export, cookie preferences,
            ad opt-out — see our{" "}
            <Link to="/privacy" className="about-link">
              Privacy Policy
            </Link>{" "}
            which covers all of the above.
          </p>
        </div>
      </div>

      <div className="guide-cta-block">
        <a href={`mailto:${EMAIL}`} className="hero-cta">
          Email {EMAIL}
        </a>
      </div>
    </div>
  );
}

export default ContactPage;
