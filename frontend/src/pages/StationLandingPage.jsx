import { useMemo, useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import stationsData from "../data/stations.json";
import { cityGuides } from "../data/cityGuides";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

// Build fast lookups once at module load.
const STATIONS_BY_SLUG = new Map(stationsData.map((s) => [s.slug, s]));
const STATIONS_BY_CITY = stationsData.reduce((acc, s) => {
  (acc[s.city] ||= []).push(s);
  return acc;
}, {});

function defaultCheckIn() {
  // Pick a date 30 days ahead so CTA links to a sensible default search.
  const d = new Date();
  d.setDate(d.getDate() + 30);
  return d.toISOString().slice(0, 10);
}

function defaultCheckOut() {
  const d = new Date();
  d.setDate(d.getDate() + 32);
  return d.toISOString().slice(0, 10);
}

function haversineKm(a, b) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const s1 =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s1));
}

function formatLinesSentence(lines) {
  if (!lines || lines.length === 0) return "the local rail network";
  if (lines.length === 1) return `the ${lines[0]}`;
  if (lines.length === 2) return `the ${lines[0]} and the ${lines[1]}`;
  return `the ${lines.slice(0, -1).join(", the ")}, and the ${lines[lines.length - 1]}`;
}

function StationLandingPage() {
  const { slug } = useParams();
  const station = STATIONS_BY_SLUG.get(slug) || null;

  // Nearby stations in the same city, sorted by distance.
  const nearby = useMemo(() => {
    if (!station) return [];
    const pool = STATIONS_BY_CITY[station.city] || [];
    return pool
      .filter((s) => s.slug !== station.slug)
      .map((s) => ({ ...s, distanceKm: haversineKm(station, s) }))
      .sort((a, b) => a.distanceKm - b.distanceKm)
      .slice(0, 8);
  }, [station]);

  const cityGuide = useMemo(
    () =>
      station ? cityGuides.find((g) => g.slug === station.city) || null : null,
    [station]
  );

  // Fetch a live preview of hotels near this station.
  // We don't block rendering on this — the static content above is what
  // Google indexes, the live list is a bonus for real users.
  const [hotels, setHotels] = useState(null);
  const [hotelsLoading, setHotelsLoading] = useState(false);
  const [hotelsError, setHotelsError] = useState(false);

  useEffect(() => {
    if (!station) return;
    setHotelsLoading(true);
    setHotels(null);
    setHotelsError(false);
    const params = new URLSearchParams({
      city: station.city,
      line: station.primaryLineKey,
      check_in: defaultCheckIn(),
      check_out: defaultCheckOut(),
      station: station.name,
      max_price: "250",
      currency: "GBP",
      adults: "2",
      children: "0",
    });
    fetch(`${API}/search?${params.toString()}`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data) => {
        const first = Object.values(data?.hotels_by_station || {})[0] || [];
        setHotels(first.slice(0, 6));
      })
      .catch(() => setHotelsError(true))
      .finally(() => setHotelsLoading(false));
  }, [station]);

  if (!station) return <Navigate to="/search" replace />;

  const canonical = `https://staybyrail.co.uk/hotels-near/${station.slug}`;

  const metaTitle = `Hotels Near ${station.name} Station, ${station.cityDisplay} | StayByRail`;
  const metaDescription = `Find hotels within walking distance of ${station.name} station in ${station.cityDisplay}${
    station.country ? `, ${station.country}` : ""
  }. Served by ${formatLinesSentence(station.lines)}. Sorted by walking distance to the platform.`;

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
            "name": `${station.cityDisplay} Hotels`,
            "item": cityGuide
              ? `https://staybyrail.co.uk/guides/${cityGuide.slug}`
              : "https://staybyrail.co.uk/guides",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `Hotels near ${station.name}`,
            "item": canonical,
          },
        ],
      },
      {
        "@type": "TrainStation",
        "name": `${station.name} Station`,
        "url": canonical,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": station.lat,
          "longitude": station.lon,
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": station.cityDisplay,
          ...(station.country ? { "addressCountry": station.country } : {}),
        },
      },
    ],
  };

  const searchLink = `/search?city=${encodeURIComponent(station.city)}&line=${encodeURIComponent(
    station.primaryLineKey
  )}`;

  return (
    <div className="page-content">
      <PageMeta
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
        schema={schema}
      />

      <p className="guide-breadcrumb" style={{ textAlign: "center" }}>
        <Link to="/" className="about-link">Home</Link>
        {" \u203A "}
        {cityGuide ? (
          <Link to={`/guides/${cityGuide.slug}`} className="about-link">
            {station.cityDisplay}
          </Link>
        ) : (
          station.cityDisplay
        )}
        {" \u203A "}
        Hotels near {station.name}
      </p>

      <h1 className="page-heading" style={{ textAlign: "center" }}>
        Hotels Near {station.name} Station
      </h1>
      <p className="guide-hero-line" style={{ textAlign: "center" }}>
        {station.cityDisplay}
        {station.country ? `, ${station.country}` : ""}
      </p>

      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        {station.name} station in {station.cityDisplay} is served by{" "}
        {formatLinesSentence(station.lines)}. These are hotels within walking
        distance of the platform, sorted by walking time so you spend less of
        your trip commuting and more of it actually there.
      </p>

      <div className="guide-cta-block">
        <Link to={searchLink} className="hero-cta">
          Search Hotels Near {station.name}
        </Link>
      </div>

      {/* Station facts */}
      <div className="guide-stations-block">
        <h2 className="guide-stations-heading">Station at a glance</h2>
        <ul className="guide-stations-list">
          <li className="guide-station-item">
            <div className="guide-station-head">
              <span className="guide-station-name">Lines served</span>
            </div>
            <span className="guide-station-reason">
              {station.lines.join(" \u00B7 ")}
            </span>
          </li>
          <li className="guide-station-item">
            <div className="guide-station-head">
              <span className="guide-station-name">City</span>
            </div>
            <span className="guide-station-reason">
              {station.cityDisplay}
              {station.country ? `, ${station.country}` : ""}
            </span>
          </li>
          <li className="guide-station-item">
            <div className="guide-station-head">
              <span className="guide-station-name">Coordinates</span>
            </div>
            <span className="guide-station-reason">
              {station.lat.toFixed(4)}, {station.lon.toFixed(4)}
            </span>
          </li>
        </ul>
      </div>

      {/* Live hotel preview */}
      {cityGuide && (
        <div className="guide-stations-block">
          <h2 className="guide-stations-heading">
            Hotels within walking distance
          </h2>
          {hotelsLoading && (
            <p className="guide-tips-empty">Loading live hotel prices...</p>
          )}
          {hotelsError && (
            <p className="guide-tips-empty">
              Live prices are not available right now. Use the search button
              above to check availability.
            </p>
          )}
          {hotels && hotels.length === 0 && !hotelsLoading && (
            <p className="guide-tips-empty">
              No hotels matched our default filter (under &pound;250/night).
              Adjust your dates or budget in the search.
            </p>
          )}
          {hotels && hotels.length > 0 && (
            <ul className="guide-stations-list">
              {hotels.map((h, i) => (
                <li key={`${h.name}-${i}`} className="guide-station-item">
                  <div className="guide-station-head">
                    <span className="guide-station-name">{h.name}</span>
                  </div>
                  <span className="guide-station-reason">
                    {h.walk_minutes != null && `${h.walk_minutes} min walk`}
                    {h.price && ` \u00B7 ${h.price}`}
                    {h.rating && ` \u00B7 ${h.rating}\u2605`}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {/* Nearby stations — internal linking for SEO and real utility */}
      {nearby.length > 0 && (
        <div className="guide-related">
          <h2 className="guide-section-heading">
            Other stations near {station.name}
          </h2>
          <div className="guide-related-grid">
            {nearby.map((s) => (
              <Link
                key={s.slug}
                to={`/hotels-near/${s.slug}`}
                className="guide-related-card"
              >
                <span className="guide-related-city">{s.name}</span>
                <span className="guide-related-line">
                  {s.distanceKm < 1
                    ? `${Math.round(s.distanceKm * 1000)} m away`
                    : `${s.distanceKm.toFixed(1)} km away`}
                  {" \u00B7 "}
                  {s.lines[0]}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Link back to the parent city guide */}
      {cityGuide && (
        <div className="guide-resources">
          <h2 className="guide-section-heading">More about {station.cityDisplay}</h2>
          <div className="guide-resources-grid">
            <Link
              to={`/guides/${cityGuide.slug}`}
              className="guide-resource-card"
            >
              <span className="guide-resource-label">
                {station.cityDisplay} Rail & Hotel Guide
              </span>
              <span className="guide-resource-desc">
                The full StayByRail guide to {station.cityDisplay}, including
                neighbourhood recommendations and transport tips.
              </span>
            </Link>
            <Link
              to={`/search?city=${encodeURIComponent(cityGuide.searchCity)}`}
              className="guide-resource-card"
            >
              <span className="guide-resource-label">
                Search all {station.cityDisplay} hotels
              </span>
              <span className="guide-resource-desc">
                Browse hotels across every major station in {station.cityDisplay}.
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default StationLandingPage;
