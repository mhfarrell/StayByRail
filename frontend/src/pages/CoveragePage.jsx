function CoveragePage() {
  return (
    <div className="page-content">
      <h2 className="page-heading">Our Coverage</h2>
      <p className="page-intro">
        StayByRail covers major rail and metro networks across six countries and
        52 cities. Whether you are planning a Shinkansen trip through Japan, a
        Eurostar connection through France, or a backpacking route through Thailand,
        we have station-level hotel data to help you choose the right place to stay.
        We are continually expanding — new cities and rail lines are added regularly.
      </p>

      <div className="content-country-grid">
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="#fff" stroke="currentColor" strokeWidth="1"/>
              <circle cx="16" cy="16" r="5.5" fill="#bc002d"/>
            </svg>
          </div>
          <h3 className="content-country-name">Japan</h3>
          <p className="content-country-cities">12 cities</p>
          <p className="content-country-text">
            Tokyo, Osaka, Kyoto, Hiroshima, Yokohama, Nagoya, Sapporo, Fukuoka,
            Kobe, Sendai, Kawasaki, and Kitakyushu. Covering JR, metro, and private
            railway lines including the Shinkansen network.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="24" rx="2" fill="#012169"/>
              <path d="M2 4l28 24M30 4L2 28" stroke="#fff" strokeWidth="4"/>
              <path d="M2 4l28 24M30 4L2 28" stroke="#C8102E" strokeWidth="2"/>
              <path d="M16 4v24M2 16h28" stroke="#fff" strokeWidth="6"/>
              <path d="M16 4v24M2 16h28" stroke="#C8102E" strokeWidth="3"/>
            </svg>
          </div>
          <h3 className="content-country-name">United Kingdom</h3>
          <p className="content-country-cities">13 cities</p>
          <p className="content-country-text">
            London, Manchester, Birmingham, Edinburgh, Glasgow, Liverpool, Leeds,
            Bristol, Sheffield, Newcastle, Nottingham, Cardiff, and Leicester.
            Covering the Underground, Overground, Metrolink, and national rail.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="9.3" height="24" rx="1" fill="#002395"/>
              <rect x="11.3" y="4" width="9.4" height="24" fill="#fff"/>
              <rect x="20.7" y="4" width="9.3" height="24" rx="1" fill="#ED2939"/>
            </svg>
          </div>
          <h3 className="content-country-name">France</h3>
          <p className="content-country-cities">7 cities</p>
          <p className="content-country-text">
            Paris, Lyon, Marseille, Toulouse, Nice, Bordeaux, and Strasbourg.
            Covering the Metro, RER, tramway, and TGV station areas.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="8" rx="1" fill="#000"/>
              <rect x="2" y="12" width="28" height="8" fill="#DD0000"/>
              <rect x="2" y="20" width="28" height="8" rx="1" fill="#FFCE00"/>
            </svg>
          </div>
          <h3 className="content-country-name">Germany</h3>
          <p className="content-country-cities">8 cities</p>
          <p className="content-country-text">
            Berlin, Munich, Hamburg, Frankfurt, Cologne, Stuttgart, Dusseldorf,
            and Dresden. Covering U-Bahn, S-Bahn, and Deutsche Bahn stations.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="8" rx="1" fill="#AA151B"/>
              <rect x="2" y="12" width="28" height="8" fill="#F1BF00"/>
              <rect x="2" y="20" width="28" height="8" rx="1" fill="#AA151B"/>
            </svg>
          </div>
          <h3 className="content-country-name">Spain</h3>
          <p className="content-country-cities">7 cities</p>
          <p className="content-country-text">
            Madrid, Barcelona, Valencia, Seville, Bilbao, Malaga, and Zaragoza.
            Covering Metro, Cercanias, and AVE high-speed rail stations.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="4" fill="#A51931"/>
              <rect x="2" y="8" width="28" height="4" fill="#F4F5F8"/>
              <rect x="2" y="12" width="28" height="8" fill="#2D2A4A"/>
              <rect x="2" y="20" width="28" height="4" fill="#F4F5F8"/>
              <rect x="2" y="24" width="28" height="4" fill="#A51931"/>
            </svg>
          </div>
          <h3 className="content-country-name">Thailand</h3>
          <p className="content-country-cities">5 cities</p>
          <p className="content-country-text">
            Bangkok, Chiang Mai, Pattaya, Phuket, and Hat Yai. Covering BTS
            Skytrain, MRT, Airport Rail Link, and national rail stations.
          </p>
        </div>
      </div>

      <p className="content-expanding">
        We are continually expanding our coverage. New cities and rail networks are
        added regularly as data sources become available. Have a city you would like
        to see? We welcome suggestions from the travel community.
      </p>
    </div>
  );
}

export default CoveragePage;
