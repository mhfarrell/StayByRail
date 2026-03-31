import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import { cityGuides } from "../data/cityGuides";

const countryFlag = {
  Japan: "🇯🇵",
  "United Kingdom": "🇬🇧",
  France: "🇫🇷",
  Germany: "🇩🇪",
  Spain: "🇪🇸",
  Thailand: "🇹🇭",
};

function GuidesIndexPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="City Rail &amp; Hotel Guides — StayByRail"
        description="In-depth guides to finding hotels near train and metro stations in Tokyo, London, Paris, Osaka, Barcelona, Bangkok, Berlin, Kyoto, Madrid, Birmingham, and Krabi."
      />
      <h2 className="page-heading">City Rail &amp; Hotel Guides</h2>
      <p className="page-intro">
        Detailed guides to the rail networks, best stations, and hotel
        neighbourhoods in every city StayByRail covers. Whether you're
        navigating Tokyo's Yamanote Line or London's Underground, these guides
        help you pick the right base for your trip.
      </p>

      <div className="guides-grid">
        {cityGuides.map((g) => (
          <Link to={`/guides/${g.slug}`} key={g.slug} className="guide-card">
            <div className="guide-card-flag">{countryFlag[g.country] || ""}</div>
            <div className="guide-card-body">
              <h3 className="guide-card-city">{g.city}</h3>
              <p className="guide-card-country">{g.country}</p>
              <p className="guide-card-line">{g.heroLine}</p>
            </div>
            <span className="guide-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GuidesIndexPage;
