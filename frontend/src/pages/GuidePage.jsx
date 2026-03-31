import { useParams, Link, Navigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getGuide } from "../data/cityGuides";
import { useCityData } from "../hooks/useCityData";

function GuidePage() {
  const { slug } = useParams();
  const guide = getGuide(slug);
  const { image, weather } = useCityData(guide);

  if (!guide) return <Navigate to="/guides" replace />;

  return (
    <div className="page-content">
      <PageMeta title={guide.metaTitle} description={guide.metaDescription} />

      <p className="guide-breadcrumb">
        <Link to="/guides" className="about-link">Guides</Link>
        {" › "}
        {guide.city}
      </p>

      {/* Hero image */}
      {image && (
        <div className="guide-hero-img-wrap">
          <img
            src={image.src}
            alt={`${guide.city} — ${image.caption}`}
            className="guide-hero-img"
            loading="lazy"
          />
          <span className="guide-hero-img-caption">
            {image.caption} · via Wikipedia
          </span>
        </div>
      )}

      <div className="guide-title-row">
        <div>
          <h2 className="page-heading" style={{ marginBottom: "0.25rem" }}>
            {guide.city} Rail &amp; Hotel Guide
          </h2>
          <p className="guide-hero-line">{guide.heroLine}</p>
        </div>
        {weather && (
          <div className="guide-weather-pill">
            <span className="guide-weather-icon">{weather.icon}</span>
            <span className="guide-weather-temp">{weather.temp}{weather.unit}</span>
            <span className="guide-weather-cond">{weather.condition}</span>
          </div>
        )}
      </div>

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
