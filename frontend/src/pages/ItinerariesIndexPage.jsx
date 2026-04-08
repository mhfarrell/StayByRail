import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { itineraries } from "../data/itineraries";

function ItinerariesIndexPage() {
  const canonical = "https://staybyrail.co.uk/itineraries";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://staybyrail.co.uk/" },
          { "@type": "ListItem", "position": 2, "name": "Itineraries", "item": canonical },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "Rail-based travel itineraries",
        "url": canonical,
        "hasPart": itineraries.map((it) => ({
          "@type": "Article",
          "headline": it.title,
          "url": `https://staybyrail.co.uk/itineraries/${it.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="page-content">
      <PageMeta
        title="Rail-based itineraries — City trips planned around train stations | StayByRail"
        description="Detailed day-by-day itineraries for rail travellers — 3 days in Tokyo on the Yamanote Line, a weekend in Paris from Gare du Nord, 48 hours in London from King's Cross, and more."
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        Itineraries
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Rail-based itineraries
      </h1>
      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Day-by-day city itineraries planned around train stations instead of
        car hire. Each one is designed to use as few transfers as possible,
        end each evening near a hotel base, and cover the major sights without
        wasting a morning on logistics.
      </p>

      <div className="guide-related">
        <div className="guide-related-grid">
          {itineraries.map((it) => (
            <Link
              key={it.slug}
              to={`/itineraries/${it.slug}`}
              className="guide-related-card"
            >
              <span className="guide-related-city">{it.title}</span>
              <span className="guide-related-line">
                {it.duration} {"\u00B7"} {it.city}, {it.country}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItinerariesIndexPage;
