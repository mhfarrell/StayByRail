import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { countries } from "../data/countries";

function CountriesIndexPage() {
  const canonical = "https://staybyrail.co.uk/countries";
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
            "name": "Countries",
            "item": canonical,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "Country Rail Guides",
        "url": canonical,
        "hasPart": countries.map((c) => ({
          "@type": "Article",
          "headline": c.metaTitle,
          "url": `https://staybyrail.co.uk/countries/${c.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="page-content">
      <PageMeta
        title="Country Rail Guides — StayByRail"
        description="Practical, traveller-focused explainers for the national rail networks we cover. Train types, booking, fares, and the practical quirks every visitor needs to know before arriving."
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        Countries
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Country Rail Guides
      </h1>
      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Practical explainers for the national rail networks we cover \u2014
        train types, booking systems, ticket fares, and the practical quirks
        every visitor needs to know before arriving. The layer between our
        transport-pass guides and the individual city guides.
      </p>

      <div className="guide-related">
        <div className="guide-related-grid">
          {countries.map((c) => (
            <Link
              key={c.slug}
              to={`/countries/${c.slug}`}
              className="guide-related-card"
            >
              <span className="guide-related-city">{c.name}</span>
              <span className="guide-related-line">{c.metaDescription}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CountriesIndexPage;
