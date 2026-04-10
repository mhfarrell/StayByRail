import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";

const WMO = {
  0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Fog", 48: "Freezing fog", 51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
  61: "Light rain", 63: "Rain", 65: "Heavy rain", 71: "Light snow", 73: "Snow", 75: "Heavy snow",
  80: "Showers", 81: "Showers", 82: "Heavy showers", 85: "Snow showers", 86: "Heavy snow",
  95: "Thunderstorm", 96: "Thunderstorm", 99: "Thunderstorm",
};
const WMO_ICON = {
  0: "\u2600\uFE0F", 1: "\uD83C\uDF24\uFE0F", 2: "\u26C5", 3: "\u2601\uFE0F",
  45: "\uD83C\uDF2B\uFE0F", 48: "\uD83C\uDF2B\uFE0F",
  51: "\uD83C\uDF26\uFE0F", 53: "\uD83C\uDF26\uFE0F", 55: "\uD83C\uDF27\uFE0F",
  61: "\uD83C\uDF27\uFE0F", 63: "\uD83C\uDF27\uFE0F", 65: "\uD83C\uDF27\uFE0F",
  71: "\uD83C\uDF28\uFE0F", 73: "\u2744\uFE0F", 75: "\u2744\uFE0F",
  80: "\uD83C\uDF26\uFE0F", 81: "\uD83C\uDF26\uFE0F", 82: "\u26C8\uFE0F",
  95: "\u26C8\uFE0F", 96: "\u26C8\uFE0F", 99: "\u26C8\uFE0F",
};

const REGIONS = [
  {
    country: "Japan", flag: "\u{1F1EF}\u{1F1F5}",
    img: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Tokyo", lat: 35.6762, lon: 139.6503,
    best: "Mar\u2013May & Oct\u2013Nov", avoid: "Golden Week (late Apr\u2013early May)",
    peak: "Cherry blossom season (late March to mid-April) draws millions. Book 3\u20134 months ahead for Kyoto and Tokyo. Autumn foliage in November is equally stunning with slightly smaller crowds.",
    off: "January\u2013February and June (rainy season) offer the lowest hotel prices. Typhoon season (Aug\u2013Oct) rarely disrupts travel seriously but check forecasts.",
    transport: "Japan's rail network is unmatched. Shinkansen bullet trains connect major cities at up to 320 km/h. JR lines, private railways, and metro systems cover every city. The Japan Rail Pass offers unlimited JR travel \u2014 essential for multi-city trips. IC cards (Suica/ICOCA) work across all transit and even vending machines.",
    tip: "Buy the JR Pass before arriving. Activate it for your busiest travel days. Overnight sleeper trains save both time and a hotel night.",
    guides: [{ slug: "tokyo", city: "Tokyo" }, { slug: "osaka", city: "Osaka" }, { slug: "kyoto", city: "Kyoto" }],
    resources: [
      { label: "Japan Rail Pass", url: "https://www.japanrailpass.net/en/" },
      { label: "Klook Japan", url: "https://www.klook.com/japan/" },
      { label: "Navitime", url: "https://www.navitime.co.jp/en/" },
      { label: "Tabelog", url: "https://tabelog.com/en/" },
    ],
  },
  {
    country: "United Kingdom", flag: "\u{1F1EC}\u{1F1E7}",
    img: "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "London", lat: 51.5074, lon: -0.1278,
    best: "May\u2013Sep", avoid: "Bank holiday weekends",
    peak: "Summer (June\u2013August) brings the longest days and best weather. Edinburgh Fringe in August is the world's largest arts festival \u2014 book accommodation months ahead.",
    off: "April\u2013May and September\u2013October offer mild weather at significantly lower prices. Avoid bank holidays when trains sell out and prices spike.",
    transport: "National Rail connects every major city. London's Underground (11 lines, 272 stations) is the backbone of the capital. Manchester has the Metrolink tram, Birmingham has the West Midlands Metro, and Edinburgh is connected by ScotRail. Contactless payment works across London \u2014 no Oyster card needed.",
    tip: "Book Advance tickets 12 weeks ahead for 50\u201370% savings. Off-peak fares are always cheaper \u2014 avoid the 7\u20139am rush.",
    guides: [{ slug: "london", city: "London" }, { slug: "edinburgh", city: "Edinburgh" }, { slug: "birmingham", city: "Birmingham" }],
    resources: [
      { label: "Trainline", url: "https://www.thetrainline.com/" },
      { label: "National Rail", url: "https://www.nationalrail.co.uk/" },
      { label: "TfL", url: "https://tfl.gov.uk/" },
      { label: "TimeOut", url: "https://www.timeout.com/london" },
    ],
  },
  {
    country: "France", flag: "\u{1F1EB}\u{1F1F7}",
    img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Paris", lat: 48.8566, lon: 2.3522,
    best: "Apr\u2013Jun & Sep\u2013Oct", avoid: "August in Paris",
    peak: "Paris in spring: pleasant weather, terrace season, manageable crowds. September brings warm days, lower prices, and wine harvest in the regions.",
    off: "August: many Parisian restaurants and shops close for holiday. The city becomes tourist-heavy while the best local spots are shuttered. Head south instead.",
    transport: "TGV high-speed trains reach 320 km/h, connecting Paris to Lyon (2h), Marseille (3h), and Bordeaux (2h). The Paris M\u00E9tro has 16 lines. Ouigo offers budget TGV seats from \u20AC10. Regional TER trains are affordable for shorter distances. The Navigo pass covers all Paris transit.",
    tip: "TGV Prem's fares go on sale 3 months ahead. Ouigo is the budget TGV option. Navigo Easy card for unlimited Paris Metro.",
    guides: [{ slug: "paris", city: "Paris" }],
    resources: [
      { label: "SNCF Connect", url: "https://www.sncf-connect.com/en-en/" },
      { label: "RATP", url: "https://www.ratp.fr/en" },
      { label: "Le Fooding", url: "https://lefooding.com/en" },
    ],
  },
  {
    country: "Germany", flag: "\u{1F1E9}\u{1F1EA}",
    img: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Berlin", lat: 52.5200, lon: 13.4050,
    best: "May\u2013Jun & Sep", avoid: "Oktoberfest crowds (Munich)",
    peak: "Early summer: warm weather, beer gardens, long daylight. Christmas markets (late Nov\u201323 Dec) in Nuremberg, Cologne, and Dresden are worth the cold.",
    off: "Oktoberfest (late Sep\u2013early Oct) means Munich hotels sell out months ahead. Book early or stay in a nearby city and train in for the day.",
    transport: "Deutsche Bahn's ICE high-speed trains link all major cities. Every city has excellent U-Bahn (metro) and S-Bahn (suburban rail). The Deutschland-Ticket (\u20AC49/month) is extraordinary value \u2014 unlimited travel on all regional and local transit nationwide. It doesn't cover ICE/IC but regional trains reach everywhere.",
    tip: "Deutschland-Ticket: \u20AC49/month, unlimited regional transit. ICE Sparpreis fares are cheapest booked well in advance via the DB Navigator app.",
    guides: [{ slug: "berlin", city: "Berlin" }],
    resources: [
      { label: "Deutsche Bahn", url: "https://www.bahn.com/en" },
      { label: "BVG Berlin", url: "https://www.bvg.de/en" },
      { label: "TimeOut Berlin", url: "https://www.timeout.com/berlin" },
    ],
  },
  {
    country: "Spain", flag: "\u{1F1EA}\u{1F1F8}",
    img: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Madrid", lat: 40.4168, lon: -3.7038,
    best: "Apr\u2013Jun & Sep\u2013Nov", avoid: "August inland (40\u00B0C+)",
    peak: "Spring: 20\u201328\u00B0C, festivals like Las Fallas (Valencia) and Semana Santa. Autumn is equally pleasant with thinner crowds and warm evenings.",
    off: "August is brutal in Madrid and Seville (40\u00B0C+). Coastal Barcelona is bearable. For cooler summers, head to the Basque Country or Galicia.",
    transport: "Renfe's AVE network is Europe's longest high-speed rail system. Madrid\u2013Barcelona takes 2.5 hours. Madrid and Barcelona both have extensive metro systems. Cercan\u00EDas commuter trains serve suburban areas. Avlo offers budget high-speed seats from \u20AC7.",
    tip: "Avlo low-cost high-speed: Madrid\u2013Barcelona from \u20AC7. Book Renfe AVE up to 120 days ahead. T-Casual (Barcelona) gives 10 metro trips.",
    guides: [{ slug: "madrid", city: "Madrid" }, { slug: "barcelona", city: "Barcelona" }],
    resources: [
      { label: "Renfe", url: "https://www.renfe.com/es/en" },
      { label: "Metro Madrid", url: "https://www.metromadrid.es/en" },
      { label: "TimeOut Barcelona", url: "https://www.timeout.com/barcelona" },
    ],
  },
  {
    country: "Thailand", flag: "\u{1F1F9}\u{1F1ED}",
    img: "https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Bangkok", lat: 13.7563, lon: 100.5018,
    best: "Nov\u2013Feb", avoid: "Mar\u2013May (extreme heat)",
    peak: "Cool season (25\u201330\u00B0C): low humidity, clear skies, perfect for temples and islands. Peak tourist season, book Phuket and Chiang Mai ahead.",
    off: "Wet season (June\u2013October): short heavy downpours then sunshine. Prices drop 30\u201350%. Songkran (13\u201315 April) is unforgettable, a nationwide water fight.",
    transport: "Bangkok's BTS Skytrain and MRT metro beat the city's legendary traffic. The Airport Rail Link connects Suvarnabhumi to the centre in 30 minutes. Long-distance State Railway trains reach Chiang Mai (overnight sleeper), the southern beaches, and the northeast. Grab is the go-to app for last-mile rides.",
    tip: "Rabbit card for BTS, tokens for MRT (separate systems). Overnight sleeper Bangkok\u2013Chiang Mai saves a hotel night. Grab beats tuk-tuk prices.",
    guides: [{ slug: "bangkok", city: "Bangkok" }],
    resources: [
      { label: "BTS Skytrain", url: "https://www.bts.co.th/eng/" },
      { label: "Klook Thailand", url: "https://www.klook.com/thailand/" },
      { label: "Mark Wiens", url: "https://migrationology.com/bangkok/" },
      { label: "Grab", url: "https://www.grab.com/th/en/" },
    ],
  },
  {
    country: "China", flag: "\u{1F1E8}\u{1F1F3}",
    img: "https://images.pexels.com/photos/2846217/pexels-photo-2846217.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Beijing", lat: 39.9042, lon: 116.4074,
    best: "Apr\u2013May & Sep\u2013Oct", avoid: "Lunar New Year crush & Jul\u2013Aug heat",
    peak: "Spring and autumn are the ideal windows: mild temperatures, clear skies, and the best air quality for Beijing and Shanghai. Autumn colour in the Fragrant Hills around mid-November is genuinely worth the trip. Lunar New Year (late Jan to mid-Feb) sees the whole country on the move at once, expect sold-out trains and packed everything.",
    off: "Winter outside the holiday weeks is cold but dry and dramatically cheaper, Harbin's ice festival in January is a reason to brave it. Summer (Jul\u2013Aug) is hot, humid, and the rainy season, tolerable if you stick to Hong Kong and the south.",
    transport: "China runs the world's longest high-speed rail network, 45,000 km of dedicated track. A G-train from Beijing to Shanghai takes 4h 18m and costs around RMB 553 in second class. Book on 12306 (official, English version) or Trip.com for a friendlier UI. Every ticket is real-name linked to your passport and station entry is passport-scanned at the gate. Alipay and WeChat Pay both now accept foreign cards, so daily spending is simple. Hong Kong sits inside the same rail map via the GSHKER high-speed link from West Kowloon (14 minutes to Shenzhen, 48 to Guangzhou) but has its own visa, currency and MTR.",
    tip: "12306 for direct booking, Trip.com for the smoother experience. 144-hour visa-free transit covers most major cities for UK/US/EU passports. Avoid the Jan\u2013Feb Lunar New Year travel window if you possibly can.",
    guides: [
      { slug: "beijing", city: "Beijing" },
      { slug: "shanghai", city: "Shanghai" },
      { slug: "hong_kong", city: "Hong Kong" },
    ],
    resources: [
      { label: "12306 (English)", url: "https://www.12306.cn/en/" },
      { label: "Trip.com China Trains", url: "https://us.trip.com/trains/china/" },
      { label: "MTR Hong Kong", url: "https://www.mtr.com.hk/" },
      { label: "China Highlights", url: "https://www.chinahighlights.com/" },
    ],
  },
  {
    country: "South Korea", flag: "\u{1F1F0}\u{1F1F7}",
    img: "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Seoul", lat: 37.5665, lon: 126.9780,
    best: "Late Mar\u2013Apr & Sep\u2013Oct", avoid: "Jul\u2013Aug monsoon & Lunar New Year",
    peak: "Cherry blossom peaks in early April in Seoul (a week or so later in Busan) and the whole country turns up for it. Late September through early November is equally good: clear skies, cool mornings, autumn colour in the mountains around Seoraksan and Naejangsan. Korean Thanksgiving (Chuseok) in late September empties Seoul but fills every train south.",
    off: "Winter is cold and very dry but clear, and hotel prices drop noticeably. July and August are hot, humid and monsoon-heavy, you will get caught in a downpour at some point. Lunar New Year (late Jan to mid-Feb) has the same sold-out-everything problem as China and Japan.",
    transport: "Korail's KTX high-speed network is the backbone: Seoul to Busan in 2h 15m for about \u20A959,000 (\u00A334). SR's SRT is a slightly cheaper alternative from the Suseo station in Gangnam. Booking is via Korail Talk (app, English, takes foreign Visa and Mastercard) or Trip.com with a small markup. The Seoul Metropolitan Subway is one of the biggest and most reliable urban rail systems in the world, trains every 2\u20134 minutes, 23 lines, signage bilingual everywhere. T-money is the universal transit card, buy one at any convenience store for \u20A94,000 and use it for subway, bus, taxi and vending machines nationwide. AREX from Incheon Airport to Seoul Station runs in 43 minutes on the Express for \u20A911,000.",
    tip: "K-ETA exemption is currently active for UK/US/EU/CA/AU through 2025 but check before flying. Korail Talk for KTX, T-money for everything else. AREX All-Stop is actually faster than the Express if you're staying in Hongdae.",
    guides: [
      { slug: "seoul", city: "Seoul" },
      { slug: "busan", city: "Busan" },
      { slug: "incheon", city: "Incheon" },
    ],
    resources: [
      { label: "Korail (English)", url: "https://www.letskorail.com/" },
      { label: "Visit Korea", url: "https://english.visitkorea.or.kr/" },
      { label: "K-ETA", url: "https://www.k-eta.go.kr/" },
      { label: "Seoul Metro", url: "https://www.seoulmetro.co.kr/en/" },
    ],
  },
  {
    country: "United States", flag: "\u{1F1FA}\u{1F1F8}",
    img: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "New York", lat: 40.7128, lon: -74.0060,
    best: "Apr\u2013Jun & Sep\u2013Nov", avoid: "Thanksgiving week (late Nov), Christmas\u2013New Year",
    peak: "Summer (June\u2013August) is peak tourist season across all six cities. New York and Washington DC are busiest and most expensive. Book 2\u20133 months ahead for summer stays. Autumn foliage in New England (Boston) and spring cherry blossoms in DC draw large crowds.",
    off: "January\u2013March offers the lowest hotel prices in every US city except San Francisco (which stays mild year-round). Chicago and Boston are cold but museums and transit run normally. Philadelphia is an excellent winter value \u2014 half the price of New York with comparable attractions.",
    transport: "The US has no national rail pass equivalent to a Eurail. Amtrak's Northeast Corridor (Boston\u2013NYC\u2013Philly\u2013DC) is the only route where train beats plane. City transit varies: NYC runs 24/7 subway, DC Metro covers the tourist core, Chicago's L connects the Loop to both airports, Boston's T is compact but effective, BART links San Francisco to Oakland and SFO, and SEPTA connects Philadelphia to 30th Street Station and the airport.",
    tip: "Use contactless payment (OMNY in NYC, tap-to-pay in DC/Chicago/SF). The NEC is best booked 2\u20134 weeks ahead for value fares. Avoid driving in NYC, SF, and central DC.",
    guides: [{ slug: "new_york", city: "New York" }, { slug: "washington_dc", city: "Washington DC" }, { slug: "chicago", city: "Chicago" }, { slug: "boston", city: "Boston" }, { slug: "san_francisco", city: "San Francisco" }, { slug: "philadelphia", city: "Philadelphia" }],
    resources: [
      { label: "Amtrak", url: "https://www.amtrak.com/" },
      { label: "MTA (NYC)", url: "https://new.mta.info/" },
      { label: "WMATA (DC)", url: "https://www.wmata.com/" },
      { label: "BART (SF)", url: "https://www.bart.gov/" },
    ],
  },
];

function useWeather(regions) {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    regions.forEach((r) => {
      const key = `sbr_tgwx2_${r.country}`;
      const ts = sessionStorage.getItem(`${key}_ts`);
      const cached = sessionStorage.getItem(key);
      if (cached && ts && Date.now() - Number(ts) < 30 * 60 * 1000) {
        setWeather((p) => ({ ...p, [r.country]: JSON.parse(cached) }));
        return;
      }
      fetch(`https://api.open-meteo.com/v1/forecast?latitude=${r.lat}&longitude=${r.lon}&current=temperature_2m,weathercode&timezone=auto`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.current) return;
          const code = data.current.weathercode;
          const wx = { temp: Math.round(data.current.temperature_2m), condition: WMO[code] || "", icon: WMO_ICON[code] || "" };
          sessionStorage.setItem(key, JSON.stringify(wx));
          sessionStorage.setItem(`${key}_ts`, String(Date.now()));
          setWeather((p) => ({ ...p, [r.country]: wx }));
        })
        .catch(() => {});
    });
  }, []);
  return weather;
}

function TravelGuidePage() {
  const weather = useWeather(REGIONS);

  return (
    <div className="page-content">
      <PageMeta
        title="Best Times to Travel — StayByRail"
        description="When to visit Japan, the UK, France, Germany, Spain, Thailand, China, and South Korea. Live weather, seasonal advice, transport guides, and budget tips."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>Best Times to Travel</h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        The right timing means better weather, thinner crowds, and lower prices.
        Here's when to go, and when to think twice, for every region we cover.
      </p>

      <div className="tg-list">
        {REGIONS.map((r) => {
          const wx = weather[r.country];
          return (
            <div className="tg-card" key={r.country}>
              <div className="tg-card-hero">
                <img src={r.img} alt={r.country} className="tg-card-img" loading="lazy" />
                <div className="tg-card-overlay">
                  <span className="tg-flag-big">{r.flag}</span>
                  <h3 className="tg-country-name">{r.country}</h3>
                  {wx && (
                    <span className="tg-weather-pill">
                      {wx.icon} {wx.temp}°C {wx.condition} in {r.city}
                    </span>
                  )}
                </div>
              </div>
              <div className="tg-card-content">
                <div className="tg-badges">
                  <span className="travel-badge travel-badge-best">Best: {r.best}</span>
                  <span className="travel-badge travel-badge-avoid">Avoid: {r.avoid}</span>
                </div>
                <div className="tg-section">
                  <h4>Peak Season</h4>
                  <p>{r.peak}</p>
                </div>
                <div className="tg-section">
                  <h4>Off-Peak & What to Avoid</h4>
                  <p>{r.off}</p>
                </div>
                <div className="tg-section">
                  <h4>Getting Around {r.country}</h4>
                  <p>{r.transport}</p>
                </div>
                <div className="transit-tip">
                  <strong>Budget tip:</strong> {r.tip}
                </div>
                {r.guides && r.guides.length > 0 && (
                  <div className="tg-guide-links">
                    <span className="tg-guide-links-label">City guides:</span>
                    {r.guides.map((g) => (
                      <Link key={g.slug} to={`/guides/${g.slug}`} className="tg-guide-link">
                        {g.city}
                      </Link>
                    ))}
                  </div>
                )}
                {r.resources && r.resources.length > 0 && (
                  <div className="tg-guide-links">
                    <span className="tg-guide-links-label">Useful links:</span>
                    {r.resources.map((res) => (
                      <a key={res.url} href={res.url} target="_blank" rel="noopener noreferrer" className="tg-guide-link">
                        {res.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="guide-cta-block" style={{ marginTop: "2.5rem" }}>
        <p className="guide-cta-text">Ready to book?</p>
        <Link to="/search" className="hero-cta">Search Hotels</Link>
        <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          <Link to="/guides" className="about-link">City rail guides</Link>
          {" · "}
          <Link to="/train-times" className="about-link">Train times and resources</Link>
          {" · "}
          <Link to="/coverage" className="about-link">Full coverage</Link>
        </p>
      </div>
    </div>
  );
}

export default TravelGuidePage;
