import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { cityGuides } from "../data/cityGuides";

const countryFlag = {
  Japan: "\u{1F1EF}\u{1F1F5}",
  "United Kingdom": "\u{1F1EC}\u{1F1E7}",
  France: "\u{1F1EB}\u{1F1F7}",
  Germany: "\u{1F1E9}\u{1F1EA}",
  Spain: "\u{1F1EA}\u{1F1F8}",
  Thailand: "\u{1F1F9}\u{1F1ED}",
};

function useGuideImages(guides) {
  const [images, setImages] = useState({});

  useEffect(() => {
    guides.forEach((g) => {
      if (!g.wikipedia) return;
      const cacheKey = `sbr_thumb3_${g.slug}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setImages((prev) => ({ ...prev, [g.slug]: cached }));
        return;
      }
      fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(g.wikipedia)}`
      )
        .then((r) => r.json())
        .then((data) => {
          const url = data.originalimage?.source || data.thumbnail?.source || "";
          if (url) {
            sessionStorage.setItem(cacheKey, url);
            setImages((prev) => ({ ...prev, [g.slug]: url }));
          }
        })
        .catch(() => {});
    });
  }, []);

  return images;
}

function GuidesIndexPage() {
  const images = useGuideImages(cityGuides);

  return (
    <div className="page-content">
      <PageMeta
        title="City Rail & Hotel Guides — StayByRail"
        description="In-depth guides to finding hotels near train and metro stations in Tokyo, London, Paris, Osaka, Barcelona, Bangkok, Berlin, Kyoto, Madrid, Birmingham, and Edinburgh."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>City Rail &amp; Hotel Guides</h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        Detailed guides to the rail networks, best stations, and hotel
        neighbourhoods in every city StayByRail covers. Whether you're
        navigating Tokyo's Yamanote Line or London's Underground, these guides
        help you pick the right base for your trip.
      </p>

      <div className="guides-grid">
        {cityGuides.map((g) => (
          <Link to={`/guides/${g.slug}`} key={g.slug} className="guide-card guide-card-img">
            <div
              className="guide-card-thumb"
              style={images[g.slug] ? { backgroundImage: `url(${images[g.slug]})` } : undefined}
            >
              {!images[g.slug] && <span className="guide-card-flag-lg">{countryFlag[g.country] || ""}</span>}
            </div>
            <div className="guide-card-body">
              <h3 className="guide-card-city">{g.city}</h3>
              <p className="guide-card-country">{countryFlag[g.country] || ""} {g.country}</p>
              <p className="guide-card-line">{g.heroLine}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GuidesIndexPage;
