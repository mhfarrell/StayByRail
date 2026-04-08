import { useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getItinerary, itineraries } from "../data/itineraries";
import { cityGuides } from "../data/cityGuides";
import { transportPasses } from "../data/transportPasses";

const AUTHOR = "Matt Farrell";
const AUTHOR_URL = "https://staybyrail.co.uk/authors/matt-farrell";

function ItineraryPage() {
  const { slug } = useParams();
  const it = getItinerary(slug);

  const relatedGuide = useMemo(
    () =>
      it ? cityGuides.find((g) => g.slug === it.relatedCityGuide) : null,
    [it]
  );

  const relatedPasses = useMemo(
    () =>
      it
        ? (it.relatedPasses || [])
            .map((pSlug) => transportPasses.find((p) => p.slug === pSlug))
            .filter(Boolean)
        : [],
    [it]
  );

  const otherItineraries = useMemo(
    () =>
      it
        ? itineraries.filter((x) => x.slug !== it.slug).slice(0, 3)
        : [],
    [it]
  );

  if (!it) return <Navigate to="/itineraries" replace />;

  const canonical = `https://staybyrail.co.uk/itineraries/${it.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://staybyrail.co.uk/" },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Itineraries",
            "item": "https://staybyrail.co.uk/itineraries",
          },
          { "@type": "ListItem", "position": 3, "name": it.title, "item": canonical },
        ],
      },
      {
        "@type": "Article",
        "headline": it.title,
        "description": it.excerpt || it.subtitle,
        "url": canonical,
        "author": {
          "@type": "Person",
          "name": AUTHOR,
          "url": AUTHOR_URL,
        },
        ...(it.updatedAt
          ? {
              "datePublished": `${it.updatedAt}-01`,
              "dateModified": `${it.updatedAt}-01`,
            }
          : {}),
        "publisher": {
          "@type": "Organization",
          "name": "StayByRail",
          "url": "https://staybyrail.co.uk",
        },
      },
      {
        "@type": "TouristTrip",
        "name": it.title,
        "description": it.intro,
        "url": canonical,
        ...(it.baseArea ? { "touristType": "Rail traveller" } : {}),
      },
    ],
  };

  return (
    <div className="page-content">
      <PageMeta
        title={`${it.title} | StayByRail Itineraries`}
        description={it.excerpt || it.subtitle || it.title}
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        <Link to="/itineraries" className="about-link">Itineraries</Link>
        {" \u203A "}
        {it.city}
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        {it.title}
      </h1>
      {it.subtitle && (
        <p className="guide-hero-line" style={{ textAlign: "center" }}>
          {it.subtitle}
        </p>
      )}
      <p className="guide-byline" style={{ textAlign: "center" }}>
        {it.duration} {"\u00B7"} {it.city}, {it.country}
        {it.updatedAt && (
          <>
            {" \u00B7 Updated "}
            {new Date(it.updatedAt + "-01T00:00:00").toLocaleDateString("en-GB", {
              month: "long",
              year: "numeric",
            })}
          </>
        )}
        {" \u00B7 by "}
        <Link to="/authors/matt-farrell" className="about-link">
          {AUTHOR}
        </Link>
      </p>

      <p
        className="page-intro"
        style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}
      >
        {it.intro}
      </p>

      {it.baseArea && (
        <p
          className="about-block-text"
          style={{ textAlign: "center", color: "var(--text-secondary)" }}
        >
          <strong>Recommended base:</strong> {it.baseArea}
        </p>
      )}

      <div className="itinerary-days">
        {it.days.map((d) => (
          <div key={d.day} className="itinerary-day">
            <div className="itinerary-day-head">
              <span className="itinerary-day-number">Day {d.day}</span>
              <h2 className="itinerary-day-title">{d.title}</h2>
            </div>
            {d.summary && (
              <p className="itinerary-day-summary">{d.summary}</p>
            )}
            <ol className="itinerary-stops">
              {d.stops.map((s, i) => (
                <li key={i} className="itinerary-stop">
                  <div className="itinerary-stop-meta">
                    <span className="itinerary-stop-time">{s.time}</span>
                    {s.station && (
                      <span className="itinerary-stop-station">{s.station}</span>
                    )}
                  </div>
                  <p className="itinerary-stop-activity">{s.activity}</p>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>

      {it.tips && (
        <div className="guide-stations-block" style={{ maxWidth: 720, margin: "2rem auto 0" }}>
          <h2 className="guide-stations-heading">Practical tips</h2>
          <p className="about-block-text">{it.tips}</p>
        </div>
      )}

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
                <span className="guide-resource-desc">{relatedGuide.heroLine}</span>
              </Link>
            )}
            {relatedPasses.map((p) => (
              <Link
                key={p.slug}
                to={`/passes/${p.slug}`}
                className="guide-resource-card"
              >
                <span className="guide-resource-label">{p.name}</span>
                <span className="guide-resource-desc">{p.metaDescription}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {otherItineraries.length > 0 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">More itineraries</h2>
          <div className="guide-related-grid">
            {otherItineraries.map((x) => (
              <Link
                key={x.slug}
                to={`/itineraries/${x.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{x.title}</span>
                <span className="guide-related-line">
                  {x.duration} {"\u00B7"} {x.city}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ItineraryPage;
