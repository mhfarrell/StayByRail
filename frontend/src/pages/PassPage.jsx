import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getPass, transportPasses } from "../data/transportPasses";
import { cityGuides } from "../data/cityGuides";

const AUTHOR = "Matt Farrell";
const AUTHOR_URL = "https://staybyrail.co.uk/authors/matt-farrell";

function PassPage() {
  const { slug } = useParams();
  const pass = getPass(slug);

  if (!pass) return <Navigate to="/passes" replace />;

  const canonical = `https://staybyrail.co.uk/passes/${pass.slug}`;
  const relatedGuides = (pass.relatedGuides || [])
    .map((g) => cityGuides.find((c) => c.slug === g))
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
            "name": "Transport Passes",
            "item": "https://staybyrail.co.uk/passes",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": pass.name,
            "item": canonical,
          },
        ],
      },
      {
        "@type": "Article",
        "headline": pass.metaTitle,
        "description": pass.metaDescription,
        "url": canonical,
        "author": {
          "@type": "Person",
          "name": AUTHOR,
          "url": AUTHOR_URL,
        },
        ...(pass.updatedAt
          ? {
              "datePublished": `${pass.updatedAt}-01`,
              "dateModified": `${pass.updatedAt}-01`,
            }
          : {}),
        "publisher": {
          "@type": "Organization",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
        },
      },
    ],
  };

  return (
    <div className="page-content">
      <PageMeta
        title={pass.metaTitle}
        description={pass.metaDescription}
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        <Link to="/passes" className="about-link">Passes</Link>
        {" \u203A "}
        {pass.shortName}
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        {pass.name}
      </h1>
      <p className="guide-hero-line" style={{ textAlign: "center" }}>
        {pass.country}
      </p>
      {pass.updatedAt && (
        <p className="guide-byline" style={{ textAlign: "center" }}>
          Updated{" "}
          {new Date(pass.updatedAt + "-01T00:00:00").toLocaleDateString("en-GB", {
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
        {pass.intro}
      </p>

      <div className="about-sections">
        {pass.sections.map((s) => (
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

      {pass.externalLinks && pass.externalLinks.length > 0 && (
        <div className="guide-resources">
          <h2 className="guide-section-heading">Official sources and further reading</h2>
          <div className="guide-resources-grid">
            {pass.externalLinks.map((lnk) => (
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
          <h2 className="guide-section-heading">Related city guides</h2>
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

      <div className="guide-related">
        <h2 className="guide-section-heading">Other transport passes</h2>
        <div className="guide-related-grid">
          {transportPasses
            .filter((p) => p.slug !== pass.slug)
            .map((p) => (
              <Link
                key={p.slug}
                to={`/passes/${p.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{p.shortName}</span>
                <span className="guide-related-line">
                  {p.country} \u00B7 {p.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default PassPage;
