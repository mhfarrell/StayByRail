import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { transportPasses } from "../data/transportPasses";

function PassesIndexPage() {
  const canonical = "https://staybyrail.co.uk/passes";
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://staybyrail.co.uk/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Transport Passes",
            "item": canonical,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "Transport Passes",
        "url": canonical,
        "hasPart": transportPasses.map((p) => ({
          "@type": "Article",
          "headline": p.name,
          "url": `https://staybyrail.co.uk/passes/${p.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="page-content">
      <PageMeta
        title="Transport Pass Guides — JR Pass, Oyster, Navigo and more | StayByRail"
        description="Practical buyer's guides to the main urban and national transport passes for Japan, the UK, France, and beyond. When each pass pays off, when it doesn't, and how to actually buy one."
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        Passes
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Transport Pass Guides
      </h1>
      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Honest buyer's guides to the main national and urban transport passes
        travellers actually use — when each one pays off, when it doesn't, and
        how to buy it without getting stung by resellers.
      </p>

      <div className="guide-related">
        <div className="guide-related-grid">
          {transportPasses.map((p) => (
            <Link
              key={p.slug}
              to={`/passes/${p.slug}`}
              className="guide-related-card"
            >
              <span className="guide-related-city">{p.name}</span>
              <span className="guide-related-line">
                {p.country} {"\u00B7"} {p.shortName}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PassesIndexPage;
