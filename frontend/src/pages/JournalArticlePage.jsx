import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getArticle, journalArticles } from "../data/journal";
import { cityGuides } from "../data/cityGuides";
import { transportPasses } from "../data/transportPasses";

const AUTHOR = "Matt Farrell";
const AUTHOR_URL = "https://staybyrail.co.uk/authors/matt-farrell";

function JournalArticlePage() {
  const { slug } = useParams();
  const article = getArticle(slug);

  const relatedGuide = useMemo(
    () =>
      article ? cityGuides.find((g) => g.slug === article.heroCityGuide) : null,
    [article]
  );

  const relatedPasses = useMemo(
    () =>
      article
        ? (article.relatedPasses || [])
            .map((pSlug) => transportPasses.find((p) => p.slug === pSlug))
            .filter(Boolean)
        : [],
    [article]
  );

  const otherArticles = useMemo(
    () =>
      article
        ? journalArticles
            .filter((a) => a.slug !== article.slug)
            .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
            .slice(0, 3)
        : [],
    [article]
  );

  if (!article) return <Navigate to="/journal" replace />;

  const canonical = `https://staybyrail.co.uk/journal/${article.slug}`;

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
            "item": "https://staybyrail.co.uk/journal",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": article.title,
            "item": canonical,
          },
        ],
      },
      {
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.excerpt || article.subtitle || "",
        "url": canonical,
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "author": {
          "@type": "Person",
          "name": AUTHOR,
          "url": AUTHOR_URL,
        },
        "publisher": {
          "@type": "Organization",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
        },
        "mainEntityOfPage": canonical,
      },
    ],
  };

  const formattedDate = new Date(
    article.datePublished + "T00:00:00"
  ).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="page-content">
      <PageMeta
        title={`${article.title} | StayByRail Journal`}
        description={article.excerpt || article.subtitle || article.title}
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        <Link to="/journal" className="about-link">Journal</Link>
        {" \u203A "}
        {article.category || "Article"}
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        {article.title}
      </h1>
      {article.subtitle && (
        <p className="guide-hero-line" style={{ textAlign: "center" }}>
          {article.subtitle}
        </p>
      )}
      <p className="guide-byline" style={{ textAlign: "center" }}>
        {formattedDate}
        {" \u00B7 by "}
        <Link to="/authors/matt-farrell" className="about-link">
          {AUTHOR}
        </Link>
      </p>

      <div className="about-sections" style={{ maxWidth: 720, margin: "2rem auto 0" }}>
        {article.sections.map((s) => (
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

      {(relatedGuide || relatedPasses.length > 0) && (
        <div className="guide-resources">
          <h2 className="guide-section-heading">Related on StayByRail</h2>
          <div className="guide-resources-grid">
            {relatedGuide && (
              <Link
                to={`/guides/${relatedGuide.slug}`}
                className="guide-resource-card"
              >
                <span className="guide-resource-label">
                  {relatedGuide.city} Rail & Hotel Guide
                </span>
                <span className="guide-resource-desc">
                  {relatedGuide.heroLine}
                </span>
              </Link>
            )}
            {relatedPasses.map((p) => (
              <Link
                key={p.slug}
                to={`/passes/${p.slug}`}
                className="guide-resource-card"
              >
                <span className="guide-resource-label">{p.name}</span>
                <span className="guide-resource-desc">
                  {p.metaDescription}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {otherArticles.length > 0 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">More from the Journal</h2>
          <div className="guide-related-grid">
            {otherArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/journal/${a.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{a.title}</span>
                <span className="guide-related-line">{a.subtitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default JournalArticlePage;
