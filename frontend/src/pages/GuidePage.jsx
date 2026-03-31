import { useParams, Link, Navigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getGuide } from "../data/cityGuides";

function GuidePage() {
  const { slug } = useParams();
  const guide = getGuide(slug);

  if (!guide) return <Navigate to="/guides" replace />;

  return (
    <div className="page-content">
      <PageMeta title={guide.metaTitle} description={guide.metaDescription} />

      <p className="guide-breadcrumb">
        <Link to="/guides" className="about-link">Guides</Link>
        {" › "}
        {guide.city}
      </p>

      <h2 className="page-heading">{guide.city} Rail &amp; Hotel Guide</h2>
      <p className="guide-hero-line">{guide.heroLine}</p>
      <p className="page-intro">{guide.intro}</p>

      <div className="about-sections">
        {guide.sections.map((s) => (
          <div className="about-block" key={s.heading}>
            <h3 className="about-block-heading">{s.heading}</h3>
            {s.body.split("\n\n").map((para, i) => (
              <p className="about-block-text" key={i}>{para}</p>
            ))}
          </div>
        ))}
      </div>

      {guide.keyStations.length > 0 && (
        <div className="guide-stations-block">
          <h3 className="guide-stations-heading">Key Stations for Hotel Searches</h3>
          <ul className="guide-stations-list">
            {guide.keyStations.map((s) => (
              <li key={s.name} className="guide-station-item">
                <span className="guide-station-name">{s.name}</span>
                <span className="guide-station-reason">{s.reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="guide-cta-block">
        <p className="guide-cta-text">
          Ready to find a hotel near {guide.city}'s rail stations?
        </p>
        <Link
          to={`/search?city=${encodeURIComponent(guide.searchCity)}`}
          className="hero-cta"
        >
          Search {guide.city} Hotels
        </Link>
      </div>
    </div>
  );
}

export default GuidePage;
