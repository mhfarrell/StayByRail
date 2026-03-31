import { useState, useEffect } from "react";
import PageMeta from "../components/PageMeta";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

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
  const [stationInput, setStationInput] = useState("");
  const [departures, setDepartures] = useState(null);
  const [loadingDep, setLoadingDep] = useState(false);
  const [depSource, setDepSource] = useState("");

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

  // Map country names to codes for the departures API
  const countryCodeMap = {
    Japan: "JP", "United Kingdom": "GB", France: "FR",
    Germany: "DE", Spain: "ES", Thailand: "TH",
  };

  const fetchDepartures = () => {
    if (!stationInput.trim() || !selectedCountry) return;
    setLoadingDep(true);
    setDepartures(null);
    const cc = countryCodeMap[selectedCountry] || "";
    fetch(`${API}/departures?station=${encodeURIComponent(stationInput.trim())}&country=${cc}`)
      .then((r) => r.json())
      .then((data) => {
        setDepartures(data.departures || []);
        setDepSource(data.source || "");
      })
      .catch(() => setDepartures([]))
      .finally(() => setLoadingDep(false));
  };

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

            {/* Live departures — coming soon */}
            {(selectedCountry === "United Kingdom" || selectedCountry === "Japan") && (
              <div className="transit-departures">
                <h4 className="transit-dep-heading">Live Departures</h4>
                <div className="transit-coming-soon">
                  <span className="transit-coming-badge">Coming Soon</span>
                  <p className="transit-coming-text">
                    Real-time departure boards for {selectedCountry === "Japan" ? "Tokyo" : "UK"} stations are
                    on the way. We're integrating with {selectedCountry === "Japan" ? "Japan's ODPT open data platform" : "National Rail's Darwin system"} to
                    bring you live times, platform numbers, and delay alerts directly on this page.
                  </p>
                </div>
              </div>
            )}
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

      {/* Traveller guidance */}
      <div className="about-sections" style={{ marginTop: "2.5rem" }}>
        <h2 className="content-heading" style={{ textAlign: "center" }}>Train Travel Tips for First-Timers</h2>

        <div className="about-block">
          <h3 className="about-block-heading">Booking Ahead vs Walk-Up</h3>
          <p className="about-block-text">
            In most of Europe, long-distance trains have two pricing models: advance
            tickets (cheaper, fixed to a specific train) and walk-up fares (flexible
            but expensive). The savings on advance tickets can be enormous — 50 to 70%
            in the UK, and similar on France's TGV and Spain's AVE. Book as soon as
            tickets go on sale (typically 90 to 120 days ahead) for the best prices.
            Japan is the exception: most JR trains have flat pricing regardless of when
            you book, and reserved seats can be booked at the station on the day.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Rail Passes: When They're Worth It</h3>
          <p className="about-block-text">
            Rail passes sound appealing but only save money if you're covering long
            distances on multiple days. The Japan Rail Pass is excellent value if you're
            taking three or more Shinkansen trips in a week. Germany's Deutschland-Ticket
            is a no-brainer at \u20AC49/month for unlimited regional travel. The Eurail pass
            can work for multi-country trips but rarely beats advance tickets for a
            single-country itinerary. Always do the maths before buying — add up what
            individual tickets would cost and compare.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Navigating Stations</h3>
          <p className="about-block-text">
            Large stations can be overwhelming, especially in Japan where signage may be
            in Japanese first. Look for coloured line indicators — most metro systems use
            consistent colours for each line. In Europe, departure boards are your best
            friend: they show platform numbers, calling points, and delays. Arrive at
            major stations 15 to 20 minutes early for long-distance services. In Japan,
            platform numbers are announced well in advance and trains are punctual to
            the second — if you're on the platform at the right time, you won't miss it.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Smart Cards and Contactless</h3>
          <p className="about-block-text">
            Almost every major transit system now supports a stored-value card or
            contactless payment. London accepts any contactless bank card with automatic
            fare capping. Tokyo's Suica and Osaka's ICOCA work across almost all
            transit in Japan and can be used at convenience stores. Bangkok's BTS and
            MRT still use separate systems — Rabbit card for BTS, stored-value or
            tokens for MRT. In Germany, the Deutschland-Ticket lives on your phone via
            the DB Navigator or local transit app. Having the right card or app ready
            before you arrive saves time and usually money.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Luggage and Accessibility</h3>
          <p className="about-block-text">
            Most metro systems weren't designed with suitcases in mind. In Tokyo and
            London, expect stairs and escalators rather than lifts at many older
            stations — check accessibility maps before travelling with heavy luggage.
            Coin lockers at major Japanese stations are a lifesaver: store your bags
            for a few hundred yen and explore hands-free. In Europe, long-distance
            trains usually have luggage racks near doors or overhead shelving, but
            there are no baggage limits or check-in processes like airlines.
          </p>
        </div>

        <div className="about-block">
          <h3 className="about-block-heading">Staying Connected</h3>
          <p className="about-block-text">
            Wi-Fi on trains varies wildly. Japanese Shinkansen have free on-board
            Wi-Fi, as do most UK long-distance services (though quality varies).
            German ICE trains offer Wi-Fi in both first and second class. French TGV
            trains have Wi-Fi on most routes. For metro systems, assume you'll be
            offline underground — download offline maps (Google Maps, CityMapper, or
            Navitime for Japan) before descending. An eSIM or local SIM card is
            almost always more reliable than station Wi-Fi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TrainTimesPage;
