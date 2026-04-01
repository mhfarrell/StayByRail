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
  },
  {
    country: "Thailand", flag: "\u{1F1F9}\u{1F1ED}",
    img: "https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop",
    city: "Bangkok", lat: 13.7563, lon: 100.5018,
    best: "Nov\u2013Feb", avoid: "Mar\u2013May (extreme heat)",
    peak: "Cool season (25\u201330\u00B0C): low humidity, clear skies, perfect for temples and islands. Peak tourist season \u2014 book Phuket and Chiang Mai ahead.",
    off: "Wet season (June\u2013October): short heavy downpours then sunshine. Prices drop 30\u201350%. Songkran (13\u201315 April) is unforgettable \u2014 a nationwide water fight.",
    transport: "Bangkok's BTS Skytrain and MRT metro beat the city's legendary traffic. The Airport Rail Link connects Suvarnabhumi to the centre in 30 minutes. Long-distance State Railway trains reach Chiang Mai (overnight sleeper), the southern beaches, and the northeast. Grab is the go-to app for last-mile rides.",
    tip: "Rabbit card for BTS, tokens for MRT (separate systems). Overnight sleeper Bangkok\u2013Chiang Mai saves a hotel night. Grab beats tuk-tuk prices.",
    guides: [{ slug: "bangkok", city: "Bangkok" }],
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
        description="When to visit Japan, the UK, France, Germany, Spain, and Thailand. Live weather, seasonal advice, transport guides, and budget tips."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>Best Times to Travel</h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        The right timing means better weather, thinner crowds, and lower prices.
        Here's when to go — and when to think twice — for every region we cover.
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
