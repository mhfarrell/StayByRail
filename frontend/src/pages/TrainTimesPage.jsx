import { useState } from "react";
import PageMeta from "../components/PageMeta";

const TRANSIT_DATA = {
  Japan: {
    flag: "\u{1F1EF}\u{1F1F5}",
    cities: ["Tokyo", "Osaka", "Kyoto", "Hiroshima", "Nagoya", "Yokohama", "Sapporo", "Fukuoka", "Kobe", "Sendai"],
    links: [
      { name: "JR East (Tokyo & Shinkansen)", url: "https://www.jreast.co.jp/e/" },
      { name: "Jorudan (nationwide planner)", url: "https://www.jorudan.co.jp/english/" },
      { name: "Japan Transit Planner", url: "https://japantravel.navitime.com/en/area/jp/route/" },
    ],
    tips: "Pick up a Suica (Tokyo) or ICOCA (Osaka/Kyoto) IC card for tap-and-go travel. The Japan Rail Pass covers most JR lines including Shinkansen \u2014 buy before arriving.",
  },
  "United Kingdom": {
    flag: "\u{1F1EC}\u{1F1E7}",
    cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Liverpool", "Leeds", "Bristol", "Newcastle"],
    links: [
      { name: "National Rail", url: "https://www.nationalrail.co.uk/" },
      { name: "Transport for London", url: "https://tfl.gov.uk/plan-a-journey" },
      { name: "Trainline (tickets)", url: "https://www.thetrainline.com/" },
      { name: "ScotRail", url: "https://www.scotrail.co.uk/" },
    ],
    tips: "Use contactless or Oyster in London for automatic fare capping. Book Advance tickets 12 weeks ahead for 50\u201370% savings on long-distance trains.",
  },
  France: {
    flag: "\u{1F1EB}\u{1F1F7}",
    cities: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse", "Bordeaux", "Strasbourg"],
    links: [
      { name: "SNCF Connect (TGV & national)", url: "https://www.sncf-connect.com/en-en/" },
      { name: "RATP (Paris Metro & buses)", url: "https://www.ratp.fr/en" },
      { name: "Ouigo (low-cost TGV)", url: "https://www.ouigo.com/en/" },
    ],
    tips: "Navigo Easy card for Paris Metro. TGV Prem's fares are cheapest 3 months ahead. Ouigo runs from \u20AC10 on popular routes.",
  },
  Germany: {
    flag: "\u{1F1E9}\u{1F1EA}",
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Dusseldorf", "Stuttgart", "Nuremberg"],
    links: [
      { name: "Deutsche Bahn", url: "https://www.bahn.de/en" },
      { name: "BVG (Berlin transit)", url: "https://www.bvg.de/en" },
      { name: "MVV (Munich transit)", url: "https://www.mvv-muenchen.de/en/" },
    ],
    tips: "The Deutschland-Ticket (\u20AC49/month) gives unlimited regional/local transit nationwide. DB Sparpreis fares for ICE trains are cheapest booked early.",
  },
  Spain: {
    flag: "\u{1F1EA}\u{1F1F8}",
    cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao", "Malaga"],
    links: [
      { name: "Renfe (national rail & AVE)", url: "https://www.renfe.com/es/en" },
      { name: "TMB (Barcelona Metro)", url: "https://www.tmb.cat/en/home" },
      { name: "Metro Madrid", url: "https://www.metromadrid.es/en" },
      { name: "Avlo (low-cost high-speed)", url: "https://www.avlorenfe.com/es/en" },
    ],
    tips: "AVE tickets from \u20AC7 on Avlo. T-Casual (Barcelona) and Multi card (Madrid) offer 10-trip bundles. Book Renfe up to 120 days ahead.",
  },
  Thailand: {
    flag: "\u{1F1F9}\u{1F1ED}",
    cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Krabi"],
    links: [
      { name: "BTS Skytrain", url: "https://www.bts.co.th/eng/" },
      { name: "State Railway of Thailand", url: "https://www.railway.co.th/en" },
      { name: "Bangkok MRT", url: "https://metro.bemplc.co.th/" },
    ],
    tips: "Rabbit card for BTS, separate tokens/cards for MRT. Grab app for last-mile rides. Overnight sleeper trains Bangkok\u2013Chiang Mai save a hotel night.",
  },
};

function TrainTimesPage() {
  const [selectedCity, setSelectedCity] = useState("");

  const allCities = [];
  for (const [country, data] of Object.entries(TRANSIT_DATA)) {
    for (const city of data.cities) {
      allCities.push({ city, country, flag: data.flag });
    }
  }

  const selectedCountry = selectedCity
    ? allCities.find((c) => c.city === selectedCity)?.country
    : null;
  const countryData = selectedCountry ? TRANSIT_DATA[selectedCountry] : null;

  return (
    <div className="page-content">
      <PageMeta
        title="Train Times & Transit Resources \u2014 StayByRail"
        description="Journey planners, rail operators, and practical transit tips for Japan, the UK, France, Germany, Spain, and Thailand."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>
        Train Times &amp; Transit Resources
      </h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        Select a city to see its transit operators, journey planners, and practical tips.
        All links go directly to official sources — no API calls, no limits.
      </p>

      {/* City finder */}
      <div className="transit-finder">
        <select
          className="transit-city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Choose a city...</option>
          {Object.entries(TRANSIT_DATA).map(([country, data]) => (
            <optgroup key={country} label={`${data.flag} ${country}`}>
              {data.cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </optgroup>
          ))}
        </select>

        {selectedCity && countryData && (
          <div className="transit-result">
            <h3 className="transit-result-city">{selectedCity}</h3>
            <p className="transit-result-country">{countryData.flag} {selectedCountry}</p>

            <div className="transit-links">
              {countryData.links.map((l) => (
                <a
                  key={l.name}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transit-link-card"
                >
                  <span className="transit-link-name">{l.name}</span>
                  <span className="transit-link-arrow">\u2192</span>
                </a>
              ))}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedCity + " Station")}&travelmode=transit`}
                target="_blank"
                rel="noopener noreferrer"
                className="transit-link-card transit-link-maps"
              >
                <span className="transit-link-name">Google Maps Transit Directions</span>
                <span className="transit-link-arrow">\u2192</span>
              </a>
            </div>

            <div className="transit-tip">
              <strong>Tip:</strong> {countryData.tips}
            </div>
          </div>
        )}
      </div>

      {/* Full country breakdown */}
      <div className="about-sections" style={{ marginTop: "2.5rem" }}>
        {Object.entries(TRANSIT_DATA).map(([country, data]) => (
          <div className="about-block" key={country}>
            <h3 className="about-block-heading">{data.flag} {country}</h3>
            <div className="transit-country-links">
              {data.links.map((l) => (
                <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="about-link">
                  {l.name}
                </a>
              ))}
            </div>
            <p className="about-block-text">{data.tips}</p>
            <p className="about-block-text" style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
              Cities: {data.cities.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrainTimesPage;
