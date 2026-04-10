import PageMeta from "../components/PageMeta";
import { Link } from "react-router-dom";

function CoveragePage() {
  return (
    <div className="page-content">
      <PageMeta
        title="Coverage — StayByRail | 71 Cities, 9 Countries"
        description="StayByRail covers 71 cities across Japan, the United Kingdom, France, Germany, Spain, Thailand, China (including Hong Kong), South Korea, and the United States — JR lines, the London Underground, Paris Metro, BTS Skytrain, Beijing Subway, Seoul Metropolitan Subway, the KTX high-speed network, and Amtrak's Northeast Corridor."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>Our Coverage</h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        StayByRail covers major rail and metro networks across nine countries and
        71 cities. Whether you are planning a Shinkansen trip through Japan, a
        Eurostar connection through France, a high-speed run from Beijing to
        Hong Kong, a KTX ride from Seoul to Busan, an Amtrak journey along the
        US Northeast Corridor, or a backpacking route through Thailand, we have
        station-level hotel data to help you choose the right place to stay. We
        are continually expanding — new cities and rail lines are added regularly.
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
            <Link to="/guides/tokyo" className="about-link">Tokyo</Link>, <Link to="/guides/osaka" className="about-link">Osaka</Link>, <Link to="/guides/kyoto" className="about-link">Kyoto</Link>, Hiroshima, Yokohama, Nagoya, Sapporo, Fukuoka,
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
            <Link to="/guides/london" className="about-link">London</Link>, Manchester, <Link to="/guides/birmingham" className="about-link">Birmingham</Link>, <Link to="/guides/edinburgh" className="about-link">Edinburgh</Link>, Glasgow, Liverpool, Leeds,
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
            <Link to="/guides/paris" className="about-link">Paris</Link>, Lyon, Marseille, Toulouse, Nice, Bordeaux, and Strasbourg.
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
            <Link to="/guides/berlin" className="about-link">Berlin</Link>, Munich, Hamburg, Frankfurt, Cologne, Stuttgart, Dusseldorf,
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
            <Link to="/guides/madrid" className="about-link">Madrid</Link>, <Link to="/guides/barcelona" className="about-link">Barcelona</Link>, Valencia, Seville, Bilbao, Malaga, and Zaragoza.
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
            <Link to="/guides/bangkok" className="about-link">Bangkok</Link>, Chiang Mai, Pattaya, Phuket, and Hat Yai. Covering BTS
            Skytrain, MRT, Airport Rail Link, and national rail stations.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="24" rx="2" fill="#EE1C25"/>
              <path d="M9 9l1 3h3l-2.4 1.8.9 3-2.5-1.9-2.5 1.9.9-3L5 12h3z" fill="#FFFF00"/>
              <path d="M15 7l.4 1.2h1.2l-1 .7.4 1.2-1-.7-1 .7.4-1.2-1-.7h1.2z" fill="#FFFF00"/>
              <path d="M18 11l.4 1.2h1.2l-1 .7.4 1.2-1-.7-1 .7.4-1.2-1-.7h1.2z" fill="#FFFF00"/>
              <path d="M18 16l.4 1.2h1.2l-1 .7.4 1.2-1-.7-1 .7.4-1.2-1-.7h1.2z" fill="#FFFF00"/>
              <path d="M15 19l.4 1.2h1.2l-1 .7.4 1.2-1-.7-1 .7.4-1.2-1-.7h1.2z" fill="#FFFF00"/>
            </svg>
          </div>
          <h3 className="content-country-name">China</h3>
          <p className="content-country-cities">8 cities (including Hong Kong SAR)</p>
          <p className="content-country-text">
            <Link to="/guides/beijing" className="about-link">Beijing</Link>, <Link to="/guides/shanghai" className="about-link">Shanghai</Link>, <Link to="/guides/guangzhou" className="about-link">Guangzhou</Link>, <Link to="/guides/shenzhen" className="about-link">Shenzhen</Link>, <Link to="/guides/chengdu" className="about-link">Chengdu</Link>, <Link to="/guides/xian" className="about-link">Xi'an</Link>, <Link to="/guides/hangzhou" className="about-link">Hangzhou</Link>, and <Link to="/guides/hong_kong" className="about-link">Hong Kong</Link>.
            Covering the Beijing Subway, Shanghai Metro, Guangzhou Metro, the
            Hong Kong MTR, and the world's longest high-speed rail network.
            Hong Kong is a Special Administrative Region with its own visa rules
            and currency — see the <Link to="/countries/china" className="about-link">China explainer</Link> for details.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="24" rx="2" fill="#fff" stroke="currentColor" strokeWidth="1"/>
              <circle cx="16" cy="16" r="5" fill="none" stroke="#c60c30" strokeWidth="1.3"/>
              <path d="M11 16a5 5 0 0 1 10 0" fill="#c60c30"/>
              <path d="M11 16a5 5 0 0 0 10 0" fill="#003478"/>
              <circle cx="13.3" cy="16" r="1.7" fill="#c60c30"/>
              <circle cx="18.7" cy="16" r="1.7" fill="#003478"/>
            </svg>
          </div>
          <h3 className="content-country-name">South Korea</h3>
          <p className="content-country-cities">5 cities</p>
          <p className="content-country-text">
            <Link to="/guides/seoul" className="about-link">Seoul</Link>, <Link to="/guides/busan" className="about-link">Busan</Link>, <Link to="/guides/incheon" className="about-link">Incheon</Link>, <Link to="/guides/daegu" className="about-link">Daegu</Link>, and <Link to="/guides/daejeon" className="about-link">Daejeon</Link>.
            Covering the Seoul Metropolitan Subway, Busan Metro, AREX airport
            express, and the KTX high-speed network from Seoul to Busan in
            2h 15m. See the <Link to="/countries/south-korea" className="about-link">South Korea explainer</Link> for
            booking tips, T-money cards, and K-ETA entry details.
          </p>
        </div>
        <div className="content-country-card">
          <div className="content-country-flag" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="4" width="28" height="24" rx="2" fill="#fff" stroke="currentColor" strokeWidth="1"/>
              <rect x="2" y="4" width="28" height="2" fill="#B22234"/>
              <rect x="2" y="8" width="28" height="2" fill="#B22234"/>
              <rect x="2" y="12" width="28" height="2" fill="#B22234"/>
              <rect x="2" y="16" width="28" height="2" fill="#B22234"/>
              <rect x="2" y="20" width="28" height="2" fill="#B22234"/>
              <rect x="2" y="24" width="28" height="2" fill="#B22234"/>
              <rect x="2" y="4" width="12" height="14" fill="#3C3B6E"/>
            </svg>
          </div>
          <h3 className="content-country-name">United States</h3>
          <p className="content-country-cities">6 cities</p>
          <p className="content-country-text">
            <Link to="/guides/new_york" className="about-link">New York</Link>, <Link to="/guides/washington_dc" className="about-link">Washington DC</Link>, <Link to="/guides/chicago" className="about-link">Chicago</Link>, <Link to="/guides/boston" className="about-link">Boston</Link>, <Link to="/guides/san_francisco" className="about-link">San Francisco</Link>, and <Link to="/guides/philadelphia" className="about-link">Philadelphia</Link>.
            Covering Amtrak's Northeast Corridor, MTA Subway, WMATA Metro, CTA L,
            MBTA T, BART, and SEPTA. See the <Link to="/countries/united-states" className="about-link">United States explainer</Link> for
            tips on Amtrak booking, transit passes, and getting between cities by rail.
          </p>
        </div>
      </div>

      <p className="content-expanding">
        We are continually expanding our coverage. New cities and rail networks are
        added regularly as data sources become available. Have a city you would like
        to see? We welcome suggestions from the travel community.
      </p>
      <p className="content-expanding" style={{ textAlign: "center" }}>
        <Link to="/guides" className="about-link">Browse our city guides →</Link>
        {" · "}
        <Link to="/travel-guide" className="about-link">Best times to travel →</Link>
        {" · "}
        <Link to="/train-times" className="about-link">Train times and transit resources →</Link>
      </p>
    </div>
  );
}

export default CoveragePage;
