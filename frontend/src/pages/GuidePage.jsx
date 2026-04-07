import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { getGuide, cityGuides } from "../data/cityGuides";
import { useCityData } from "../hooks/useCityData";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

function TipForm({ city, onSubmitted }) {
  const [name, setName] = useState("");
  const [tip, setTip] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !tip.trim()) return;
    setSending(true);
    fetch(`${API}/tips`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city, name: name.trim(), tip: tip.trim() }),
    })
      .then(() => { setDone(true); setName(""); setTip(""); onSubmitted(); })
      .catch(() => {})
      .finally(() => setSending(false));
  };

  if (done) return <p className="tip-thanks">Thanks for your tip!</p>;

  return (
    <form className="tip-form" onSubmit={submit}>
      <input
        className="tip-input"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={50}
      />
      <textarea
        className="tip-textarea"
        placeholder="Share a travel tip for this city..."
        value={tip}
        onChange={(e) => setTip(e.target.value)}
        maxLength={500}
        rows={3}
      />
      <button type="submit" className="tip-submit" disabled={sending || !name.trim() || !tip.trim()}>
        {sending ? "Sending..." : "Submit Tip"}
      </button>
    </form>
  );
}

function GuidePage() {
  const { slug } = useParams();
  const guide = getGuide(slug);
  const { image, weather, events, eventSources } = useCityData(guide);
  const [tips, setTips] = useState(null);
  const [tipsLoaded, setTipsLoaded] = useState(false);

  const loadTips = () => {
    if (!guide) return;
    fetch(`${API}/tips?city=${encodeURIComponent(guide.city)}`)
      .then((r) => r.json())
      .then((data) => setTips(data.tips || []))
      .catch(() => setTips([]))
      .finally(() => setTipsLoaded(true));
  };

  if (!tipsLoaded && guide) loadTips();

  if (!guide) return <Navigate to="/guides" replace />;

  return (
    <div className="page-content">
      <PageMeta title={guide.metaTitle} description={guide.metaDescription} />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/guides" className="about-link">Guides</Link>
        {" \u203A "}
        {guide.city}
      </p>

      {/* Hero image */}
      {image && (
        <div className="guide-hero-img-wrap">
          <img
            src={image.src}
            alt={`${guide.city} \u2014 ${image.caption}`}
            className="guide-hero-img"
            loading="lazy"
          />
          <span className="guide-hero-img-caption">
            {image.caption} · via Wikipedia
          </span>
        </div>
      )}

      <div className="guide-title-row" style={{ justifyContent: "center", textAlign: "center" }}>
        <div>
          <h2 className="page-heading" style={{ marginBottom: "0.25rem" }}>
            {guide.city} Rail &amp; Hotel Guide
          </h2>
          <p className="guide-hero-line">{guide.heroLine}</p>
        </div>
      </div>
      {weather && (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <div className="guide-weather-pill">
            <span className="guide-weather-icon">{weather.icon}</span>
            <span className="guide-weather-temp">{weather.temp}{weather.unit}</span>
            <span className="guide-weather-cond">{weather.condition}</span>
          </div>
        </div>
      )}

      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>{guide.intro}</p>

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
          <p className="guide-stations-intro">
            Hand-picked by the StayByRail team based on transport connections,
            walking access to landmarks, and hotel density.
          </p>
          <ul className="guide-stations-list">
            {guide.keyStations.map((s) => {
              const isPick = /stay ?by ?rail pick/i.test(s.reason);
              const reason = isPick
                ? s.reason.replace(/^stay ?by ?rail pick\s*[—\-–:]\s*/i, "")
                : s.reason;
              return (
                <li
                  key={s.name}
                  className={`guide-station-item${isPick ? " guide-station-pick" : ""}`}
                >
                  <div className="guide-station-head">
                    <span className="guide-station-name">{s.name}</span>
                    {isPick && (
                      <span className="guide-station-badge" title="StayByRail editor's pick">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7-5.4-4.7 7.1-.6z" />
                        </svg>
                        Editor's Pick
                      </span>
                    )}
                  </div>
                  <span className="guide-station-reason">{reason}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Events */}
      {events && events.length > 0 && (
        <div className="guide-events-block">
          <h3 className="guide-stations-heading">What's On in {guide.city}</h3>
          <ul className="guide-events-list">
            {events.map((ev, i) => (
              <li key={i} className="guide-event-item">
                <div className="guide-event-meta">
                  {ev.category && <span className="guide-event-tag">{ev.category}</span>}
                  {ev.date && (
                    <span className="guide-event-date">
                      {new Date(ev.date + "T00:00:00").toLocaleDateString("en-GB", {
                        day: "numeric", month: "short", year: "numeric",
                      })}
                      {ev.time && " \u00B7 " + ev.time.slice(0, 5)}
                    </span>
                  )}
                </div>
                {ev.url ? (
                  <a href={ev.url} target="_blank" rel="noopener noreferrer" className="guide-event-name">
                    {ev.name}
                  </a>
                ) : (
                  <span className="guide-event-name">{ev.name}</span>
                )}
                {ev.venue && <span className="guide-event-venue">{ev.venue}</span>}
              </li>
            ))}
          </ul>
          {eventSources && eventSources.length > 0 && (
            <p className="guide-events-credit">
              Events via {eventSources.join(", ")}
            </p>
          )}
        </div>
      )}

      {/* Tourist Tips */}
      <div className={`guide-tips-block${tips && tips.length > 0 ? " guide-tips-populated" : ""}`}>
        <h3 className="guide-stations-heading">
          {tips && tips.length > 0
            ? `Traveller tips for ${guide.city}`
            : `Share a tip about ${guide.city}`}
        </h3>
        {tips && tips.length > 0 && (
          <ul className="guide-tips-list">
            {tips.map((t, i) => (
              <li key={i} className="guide-tip-item">
                <span className="guide-tip-text">&ldquo;{t.tip}&rdquo;</span>
                <span className="guide-tip-author">— {t.name}</span>
              </li>
            ))}
          </ul>
        )}
        {!tips || tips.length === 0 ? (
          <p className="guide-tips-empty">
            Been to {guide.city} by rail? Drop a tip for the next traveller —
            station recommendations, quiet neighbourhoods, or small wins that
            saved you time.
          </p>
        ) : null}
        <TipForm city={guide.city} onSubmitted={loadTips} />
      </div>

      {/* Related guides from same country */}
      {(() => {
        const related = cityGuides
          .filter((g) => g.country === guide.country && g.slug !== slug)
          .slice(0, 4);
        if (!related.length) return null;
        return (
          <div className="guide-related">
            <h3 className="guide-section-heading">More {guide.country} Guides</h3>
            <div className="guide-related-grid">
              {related.map((g) => (
                <Link key={g.slug} to={`/guides/${g.slug}`} className="guide-related-card">
                  <span className="guide-related-city">{g.city}</span>
                  <span className="guide-related-line">{g.heroLine}</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Useful external resources */}
      {guide.links && guide.links.length > 0 && (
        <div className="guide-resources">
          <h3 className="guide-section-heading">Useful Resources for {guide.city}</h3>
          <div className="guide-resources-grid">
            {guide.links.map((lnk) => (
              <a
                key={lnk.url}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="guide-resource-card"
              >
                <span className="guide-resource-label">{lnk.label}</span>
                <span className="guide-resource-desc">{lnk.desc}</span>
              </a>
            ))}
          </div>
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
