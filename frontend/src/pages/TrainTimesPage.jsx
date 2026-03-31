import { useState, useEffect } from "react";
import PageMeta from "../components/PageMeta";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

const TRANSIT_DATA = {
  Japan: {
    flag: "\u{1F1EF}\u{1F1F5}",
    wiki: "Shinkansen",
    cities: ["Tokyo", "Osaka", "Kyoto", "Hiroshima", "Nagoya", "Yokohama", "Sapporo", "Fukuoka", "Kobe", "Sendai"],
    links: [
      { name: "JR East (Tokyo & Shinkansen)", url: "https://www.jreast.co.jp/e/" },
      { name: "Jorudan (nationwide planner)", url: "https://www.jorudan.co.jp/english/" },
      { name: "Japan Transit Planner", url: "https://japantravel.navitime.com/en/area/jp/route/" },
    ],
    tips: "Pick up a Suica (Tokyo) or ICOCA (Osaka/Kyoto) IC card for tap-and-go travel. The Japan Rail Pass covers most JR lines including Shinkansen — buy before arriving.",
    summary: "The world's most punctual rail network. Shinkansen bullet trains, JR commuter lines, and private railways cover every corner of the country.",
  },
  "United Kingdom": {
    flag: "\u{1F1EC}\u{1F1E7}",
    wiki: "London_Underground",
    cities: ["London", "Manchester", "Birmingham", "Edinburgh", "Glasgow", "Liverpool", "Leeds", "Bristol", "Newcastle", "Sheffield", "Nottingham", "Cardiff", "Brighton"],
    links: [
      { name: "National Rail", url: "https://www.nationalrail.co.uk/" },
      { name: "Transport for London", url: "https://tfl.gov.uk/plan-a-journey" },
      { name: "Trainline (tickets)", url: "https://www.thetrainline.com/" },
      { name: "ScotRail", url: "https://www.scotrail.co.uk/" },
    ],
    tips: "Use contactless or Oyster in London for automatic fare capping. Book Advance tickets 12 weeks ahead for 50–70% savings on long-distance trains.",
    summary: "Extensive mainline and commuter network. The London Underground is the world's oldest metro, with 11 lines serving 272 stations.",
  },
  France: {
    flag: "\u{1F1EB}\u{1F1F7}",
    wiki: "TGV",
    cities: ["Paris", "Lyon", "Marseille", "Nice", "Toulouse", "Bordeaux", "Strasbourg"],
    links: [
      { name: "SNCF Connect (TGV & national)", url: "https://www.sncf-connect.com/en-en/" },
      { name: "RATP (Paris Metro & buses)", url: "https://www.ratp.fr/en" },
      { name: "Ouigo (low-cost TGV)", url: "https://www.ouigo.com/en/" },
    ],
    tips: "Navigo Easy card for Paris Metro. TGV Prem's fares are cheapest 3 months ahead. Ouigo runs from \u20AC10 on popular routes.",
    summary: "TGV high-speed trains connect major cities at up to 320 km/h. The Paris M\u00E9tro has 16 lines covering every arrondissement.",
  },
  Germany: {
    flag: "\u{1F1E9}\u{1F1EA}",
    wiki: "Intercity_Express",
    cities: ["Berlin", "Munich", "Hamburg", "Frankfurt", "Cologne", "Dusseldorf", "Stuttgart", "Nuremberg"],
    links: [
      { name: "Deutsche Bahn", url: "https://www.bahn.de/en" },
      { name: "BVG (Berlin transit)", url: "https://www.bvg.de/en" },
      { name: "MVV (Munich transit)", url: "https://www.mvv-muenchen.de/en/" },
    ],
    tips: "The Deutschland-Ticket (\u20AC49/month) gives unlimited regional and local transit nationwide. DB Sparpreis fares for ICE trains are cheapest booked early.",
    summary: "ICE high-speed trains, efficient S-Bahn and U-Bahn networks. The Deutschland-Ticket makes regional travel incredibly affordable.",
  },
  Spain: {
    flag: "\u{1F1EA}\u{1F1F8}",
    wiki: "AVE_(rail_service)",
    cities: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao", "Malaga"],
    links: [
      { name: "Renfe (national rail & AVE)", url: "https://www.renfe.com/es/en" },
      { name: "TMB (Barcelona Metro)", url: "https://www.tmb.cat/en/home" },
      { name: "Metro Madrid", url: "https://www.metromadrid.es/en" },
      { name: "Avlo (low-cost high-speed)", url: "https://www.avlorenfe.com/es/en" },
    ],
    tips: "AVE tickets from \u20AC7 on Avlo. T-Casual (Barcelona) and Multi card (Madrid) offer 10-trip bundles. Book Renfe up to 120 days ahead.",
    summary: "Spain's AVE network is Europe's longest high-speed rail system. Madrid and Barcelona have extensive metro networks.",
  },
  Thailand: {
    flag: "\u{1F1F9}\u{1F1ED}",
    wiki: "BTS_Skytrain",
    cities: ["Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Krabi"],
    links: [
      { name: "BTS Skytrain", url: "https://www.bts.co.th/eng/" },
      { name: "State Railway of Thailand", url: "https://www.railway.co.th/en" },
      { name: "Bangkok MRT", url: "https://metro.bemplc.co.th/" },
    ],
    tips: "Rabbit card for BTS, separate tokens/cards for MRT. Grab app for last-mile rides. Overnight sleeper trains Bangkok–Chiang Mai save a hotel night.",
    summary: "Bangkok's BTS Skytrain and MRT beat the city's legendary traffic. Long-distance sleeper trains are a budget-friendly adventure.",
  },
};

const COUNTRIES = Object.keys(TRANSIT_DATA);

function useCountryImages() {
  const [images, setImages] = useState({});
  useEffect(() => {
    for (const [country, data] of Object.entries(TRANSIT_DATA)) {
      if (!data.wiki) continue;
      const key = `sbr_transit2_${country}`;
      const cached = sessionStorage.getItem(key);
      if (cached) { setImages((p) => ({ ...p, [country]: cached })); continue; }
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(data.wiki)}`)
        .then((r) => r.json())
        .then((d) => {
          const thumb = d.thumbnail?.source || "";
          let url = thumb;
          if (thumb && thumb.includes("/thumb/")) {
            url = thumb.replace(/\/\d+px-/, "/800px-");
          }
          if (url) { sessionStorage.setItem(key, url); setImages((p) => ({ ...p, [country]: url })); }
        })
        .catch(() => {});
    }
  }, []);
  return images;
}

function TrainTimesPage() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const countryImages = useCountryImages();

  const countryData = selectedCountry ? TRANSIT_DATA[selectedCountry] : null;
  const cities = countryData ? countryData.cities : [];

  const countryCodeMap = {
    Japan: "JP", "United Kingdom": "GB", France: "FR",
    Germany: "DE", Spain: "ES", Thailand: "TH",
  };

  return (
    <div className="page-content">
      <PageMeta
        title="Train Times & Transit Resources — StayByRail"
        description="Journey planners, rail operators, and practical transit tips for Japan, the UK, France, Germany, Spain, and Thailand."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>
        Train Times &amp; Transit Resources
      </h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        Everything you need to navigate rail networks in six countries. Select a
        country and city to see journey planners, operator links, and practical tips.
      </p>

      {/* Country cards */}
      <div className="transit-country-grid">
        {COUNTRIES.map((country) => {
          const data = TRANSIT_DATA[country];
          const active = selectedCountry === country;
          return (
            <button
              key={country}
              className={`transit-country-card ${active ? "transit-country-active" : ""}`}
              onClick={() => { setSelectedCountry(active ? "" : country); setSelectedCity(""); }}
            >
              <div
                className="transit-country-img"
                style={countryImages[country] ? { backgroundImage: `url(${countryImages[country]})` } : undefined}
              />
              <div className="transit-country-body">
                <span className="transit-country-flag">{data.flag}</span>
                <span className="transit-country-name">{country}</span>
                <span className="transit-country-count">{data.cities.length} cities</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* City selector + results */}
      {selectedCountry && countryData && (
        <div className="transit-result-wrap">
          <p className="transit-country-summary">{countryData.summary}</p>

          <div className="transit-city-row">
            <select
              className="transit-city-select"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="">All {selectedCountry} — choose a city</option>
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div className="transit-links">
            {countryData.links.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="transit-link-card">
                <span className="transit-link-name">{l.name}</span>
                <span className="transit-link-arrow">{"\u2192"}</span>
              </a>
            ))}
            {selectedCity && (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedCity + " Station")}&travelmode=transit`}
                target="_blank"
                rel="noopener noreferrer"
                className="transit-link-card transit-link-maps"
              >
                <span className="transit-link-name">Google Maps: {selectedCity} Station</span>
                <span className="transit-link-arrow">{"\u2192"}</span>
              </a>
            )}
          </div>

          <div className="transit-tip">
            <strong>Tip:</strong> {countryData.tips}
          </div>

          {/* Live departures — coming soon */}
          {(selectedCountry === "United Kingdom" || selectedCountry === "Japan") && (
            <div className="transit-departures">
              <h4 className="transit-dep-heading">Live Departures{selectedCity ? ` — ${selectedCity}` : ""}</h4>
              <div className="transit-coming-soon">
                <span className="transit-coming-badge">Coming Soon</span>
                <p className="transit-coming-text">
                  Real-time departure boards for {selectedCountry === "Japan" ? "Japanese" : "UK"} stations are
                  on the way. We're integrating with {selectedCountry === "Japan" ? "Japan's ODPT open data platform" : "National Rail's Darwin system"} to
                  bring you live times, platform numbers, and delay alerts directly on this page.
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Traveller guidance */}
      <div className="about-sections" style={{ marginTop: "3rem" }}>
        <h2 className="content-heading" style={{ textAlign: "center" }}>Train Travel Tips</h2>
        <p className="content-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
          First time on a foreign rail network? Here's what seasoned rail travellers wish they'd known.
        </p>

        <div className="transit-tips-grid">
          <div className="transit-tip-card">
            <div className="transit-tip-icon">{"\uD83C\uDFAB"}</div>
            <h3>Booking Ahead vs Walk-Up</h3>
            <p>
              In Europe, advance tickets can save 50–70% on long-distance trains. Book when
              tickets go on sale (90–120 days ahead). Japan is the exception — most JR trains
              have flat pricing and reserved seats can be booked at the station on the day.
            </p>
          </div>

          <div className="transit-tip-card">
            <div className="transit-tip-icon">{"\uD83D\uDCB3"}</div>
            <h3>Rail Passes</h3>
            <p>
              Japan Rail Pass is excellent for 3+ Shinkansen trips in a week. Germany's
              Deutschland-Ticket is unbeatable at {"€"}49/month for unlimited regional travel. Eurail
              passes rarely beat advance tickets for single-country trips. Always do the maths.
            </p>
          </div>

          <div className="transit-tip-card">
            <div className="transit-tip-icon">{"\uD83D\uDCF1"}</div>
            <h3>Smart Cards & Contactless</h3>
            <p>
              London accepts any contactless bank card with automatic fare caps. Tokyo's Suica
              and Osaka's ICOCA work across almost all Japanese transit and convenience stores.
              Bangkok's BTS and MRT still use separate card systems.
            </p>
          </div>

          <div className="transit-tip-card">
            <div className="transit-tip-icon">{"\uD83D\uDDFA\uFE0F"}</div>
            <h3>Navigating Stations</h3>
            <p>
              Look for coloured line indicators — most metro systems use consistent colours.
              Arrive 15–20 minutes early for long-distance services. In Japan, trains are
              punctual to the second — if you're on the platform at the right time, you won't miss it.
            </p>
          </div>

          <div className="transit-tip-card">
            <div className="transit-tip-icon">{"\uD83E\uDDF3"}</div>
            <h3>Luggage Tips</h3>
            <p>
              Most metro systems weren't designed for suitcases — expect stairs at older
              stations. Coin lockers at Japanese stations are a lifesaver. European long-distance
              trains have luggage racks but no baggage limits or check-in.
            </p>
          </div>

          <div className="transit-tip-card">
            <div className="transit-tip-icon">{"\uD83D\uDCF6"}</div>
            <h3>Staying Connected</h3>
            <p>
              Japanese Shinkansen and most UK long-distance trains offer free Wi-Fi. For
              metro systems, assume you'll be offline underground — download offline maps
              before descending. An eSIM is more reliable than station Wi-Fi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainTimesPage;
