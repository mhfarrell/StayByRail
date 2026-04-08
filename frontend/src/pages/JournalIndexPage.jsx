import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { journalArticles } from "../data/journal";

function JournalIndexPage() {
  const canonical = "https://staybyrail.co.uk/journal";
  const sorted = [...journalArticles].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );

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
            "name": "Journal",
            "item": canonical,
          },
        ],
      },
      {
        "@type": "Blog",
        "name": "StayByRail Journal",
        "url": canonical,
        "blogPost": sorted.map((a) => ({
          "@type": "BlogPosting",
          "headline": a.title,
          "url": `https://staybyrail.co.uk/journal/${a.slug}`,
          "datePublished": a.datePublished,
          "dateModified": a.dateModified,
          "author": {
            "@type": "Person",
            "name": "Matt Farrell",
            "url": "https://staybyrail.co.uk/authors/matt-farrell",
          },
        })),
      },
    ],
  };

  const formatDate = (iso) =>
    new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="page-content">
      <PageMeta
        title="Journal — Long-form rail travel writing | StayByRail"
        description="Long-form articles on rail travel, hotels, and the decisions that actually matter when planning a trip — comparisons, data, and honest opinions from the StayByRail team."
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        Journal
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        StayByRail Journal
      </h1>
      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        Longer-form writing on rail travel, hotels, and the decisions that
        actually matter when planning a trip. Comparisons, data, and honest
        opinions — no sponsored posts, no press releases. Written by Matt
        Farrell.
      </p>

      <div className="journal-list">
        {sorted.map((a) => (
          <Link
            key={a.slug}
            to={`/journal/${a.slug}`}
            className="journal-card"
          >
            <div className="journal-card-meta">
              {a.category && (
                <span className="journal-card-tag">{a.category}</span>
              )}
              <span className="journal-card-date">
                {formatDate(a.datePublished)}
              </span>
            </div>
            <h2 className="journal-card-title">{a.title}</h2>
            {a.subtitle && (
              <p className="journal-card-subtitle">{a.subtitle}</p>
            )}
            {a.excerpt && <p className="journal-card-excerpt">{a.excerpt}</p>}
            <span className="journal-card-read">Read article \u2192</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JournalIndexPage;
