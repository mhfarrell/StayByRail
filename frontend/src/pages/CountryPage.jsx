import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getCountry, countries } from "../data/countries";
import { cityGuides } from "../data/cityGuides";
import { transportPasses } from "../data/transportPasses";

const AUTHOR = "Matt Farrell";
const AUTHOR_URL = "https://staybyrail.co.uk/authors/matt-farrell";

function CountryPage() {
  const { slug } = useParams();
  const country = getCountry(slug);

  if (!country) return <Navigate to="/countries" replace />;

  const canonical = `https://staybyrail.co.uk/countries/${country.slug}`;
  const relatedGuides = (country.relatedGuides || [])
    .map((g) => cityGuides.find((c) => c.slug === g))
    .filter(Boolean);
  const relatedPasses = (country.relatedPasses || [])
    .map((p) => transportPasses.find((t) => t.slug === p))
    .filter(Boolean);

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
            "item": "https://staybyrail.co.uk/countries",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": country.name,
            "item": canonical,
          },
        ],
      },
      {
        "@type": "Article",
        "headline": country.metaTitle,
        "description": country.metaDescription,
        "url": canonical,
        "author": {
          "@type": "Person",
          "name": AUTHOR,
          "url": AUTHOR_URL,
        },
        ...(country.updatedAt
          ? {
              "datePublished": `${country.updatedAt}-01`,
              "dateModified": `${country.updatedAt}-01`,
            }
          : {}),
        "publisher": {
          "@type": "Organization",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
        },
        "mainEntityOfPage": canonical,
      },
    ],
  };

  return (
    <div className="page-content">
      <PageMeta
        title={country.metaTitle}
        description={country.metaDescription}
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        <Link to="/countries" className="about-link">Countries</Link>
        {" \u203A "}
        {country.name}
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Train Travel in {country.name}
      </h1>
      {country.updatedAt && (
        <p className="guide-byline" style={{ textAlign: "center" }}>
          Updated{" "}
          {new Date(country.updatedAt + "-01T00:00:00").toLocaleDateString("en-GB", {
            month: "long",
            year: "numeric",
          })}
          {" \u00B7 by "}
          <Link to="/authors/matt-farrell" className="about-link">
            {AUTHOR}
          </Link>
        </p>
      )}

      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        {country.intro}
      </p>

      <div className="about-sections">
        {country.sections.map((s) => (
          <div className="about-block" key={s.heading}>
            <h2 className="about-block-heading">{s.heading}</h2>
            {s.body.split("\n\n").map((para, i) => (
              <p className="about-block-text" key={i}>
                {para}
              </p>
            ))}
          </div>
        ))}
      </div>

      {country.externalLinks && country.externalLinks.length > 0 && (
        <div className="guide-resources">
          <h2 className="guide-section-heading">Official sources and further reading</h2>
          <div className="guide-resources-grid">
            {country.externalLinks.map((lnk) => (
              <a
                key={lnk.url}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="guide-resource-card"
              >
                <span className="guide-resource-label">{lnk.label}</span>
                <span className="guide-resource-desc">{lnk.url.replace(/^https?:\/\//, "")}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {relatedGuides.length > 0 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">City guides for {country.name}</h2>
          <div className="guide-related-grid">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                to={`/guides/${g.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{g.city}</span>
                <span className="guide-related-line">{g.heroLine}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {relatedPasses.length > 0 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">Related transport passes</h2>
          <div className="guide-related-grid">
            {relatedPasses.map((p) => (
              <Link
                key={p.slug}
                to={`/passes/${p.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{p.shortName}</span>
                <span className="guide-related-line">{p.country} {"\u00B7"} {p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {countries.length > 1 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">Other country guides</h2>
          <div className="guide-related-grid">
            {countries
              .filter((c) => c.slug !== country.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/countries/${c.slug}`}
                  className="guide-related-card"
                >
                  <span className="guide-related-city">{c.name}</span>
                  <span className="guide-related-line">National rail explainer</span>
                </Link>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CountryPage;
