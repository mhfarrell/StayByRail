import PageMeta from "../components/PageMeta";

const REGIONS = [
  {
    country: "Japan",
    flag: "\u{1F1EF}\u{1F1F5}",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Chureito_Pagoda_and_Mount_Fuji.jpg/640px-Chureito_Pagoda_and_Mount_Fuji.jpg",
    best: "March\u2013May & October\u2013November",
    avoid: "Golden Week (late Apr\u2013early May)",
    highlight: "Cherry blossom season (late March to mid-April) is magical \u2014 the bloom sweeps north from Kyushu to Hokkaido over several weeks. Autumn foliage in November rivals the blossoms, especially in Kyoto and Nikko.",
    details: "Avoid Golden Week (29 April \u2013 5 May) when trains sell out and prices spike. Typhoon season runs August to October. January\u2013February and June (rainy season) offer the lowest hotel prices.",
    budget: "Activate your JR Pass to cover your busiest travel days. Winter and rainy season bring the cheapest accommodation.",
  },
  {
    country: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/640px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg",
    best: "May\u2013September",
    avoid: "Bank holiday weekends",
    highlight: "Summer brings the longest days and best weather (18\u201325\u00B0C). The Edinburgh Festival Fringe in August is the world's largest arts festival \u2014 incredible atmosphere but book months ahead.",
    details: "Shoulder seasons (April\u2013May and September\u2013October) offer mild weather and significantly lower prices. Watch out for bank holiday weekends when domestic travel spikes.",
    budget: "Book Advance train tickets 12 weeks ahead for 50\u201370% savings versus walk-up fares. Off-peak trains are cheaper and less crowded.",
  },
  {
    country: "France",
    flag: "\u{1F1EB}\u{1F1F7}",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/640px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg",
    best: "April\u2013June & September\u2013October",
    avoid: "August in Paris",
    highlight: "Paris in spring is everything the clich\u00E9s promise \u2014 pleasant weather, manageable crowds, and terrace season in full swing. September brings warm days and the start of wine harvest.",
    details: "Avoid August in Paris \u2014 many local restaurants and shops close for the annual holiday. The south of France peaks July\u2013August. Ski season runs December through March.",
    budget: "SNCF releases TGV Prem's fares 3 months ahead. Ouigo, the low-cost TGV, runs from \u20AC10 on popular routes.",
  },
  {
    country: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Brandenburgertorpor.jpg/640px-Brandenburgertorpor.jpg",
    best: "May\u2013June & September",
    avoid: "Oktoberfest crowds (Munich)",
    highlight: "Early summer is ideal \u2014 warm weather, outdoor beer gardens, and long daylight hours. Christmas markets (late November to 23 December) in Nuremberg, Cologne, and Dresden are worth the cold.",
    details: "Oktoberfest (late September to early October) \u2014 book Munich accommodation months ahead. Summer is warm and perfect for Berlin, Hamburg, and the Rhine Valley.",
    budget: "The Deutschland-Ticket (\u20AC49/month) gives unlimited regional and local transit nationwide. ICE Sparpreis fares are cheapest booked early.",
  },
  {
    country: "Spain",
    flag: "\u{1F1EA}\u{1F1F8}",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sagrada_Familia_nave_roof_detail.jpg/640px-Sagrada_Familia_nave_roof_detail.jpg",
    best: "April\u2013June & September\u2013November",
    avoid: "August inland (40\u00B0C+)",
    highlight: "Spring brings warm temperatures (20\u201328\u00B0C), blooming landscapes, and festivals like Las Fallas in Valencia and Semana Santa across Andalusia. Autumn is equally pleasant.",
    details: "August is brutal in Madrid and Seville (regularly 40\u00B0C+). Coastal cities like Barcelona are hot but bearable. For cooler summers, head to the Basque Country or Galicia.",
    budget: "Renfe's Avlo low-cost high-speed service runs Madrid\u2013Barcelona from \u20AC7. Book AVE tickets up to 120 days ahead.",
  },
  {
    country: "Thailand",
    flag: "\u{1F1F9}\u{1F1ED}",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Wat_Arun_at_Night.jpg/640px-Wat_Arun_at_Night.jpg",
    best: "November\u2013February",
    avoid: "March\u2013May (extreme heat)",
    highlight: "Cool season (25\u201330\u00B0C) with low humidity and clear skies \u2014 perfect for temples, markets, and island hopping. This is peak tourist season, so book ahead.",
    details: "Songkran (13\u201315 April), the Thai New Year water festival, is unforgettable. Wet season (June\u2013October) brings short, heavy downpours but the lowest prices and greenest landscapes.",
    budget: "Overnight sleeper trains from Bangkok to Chiang Mai save a hotel night. Bangkok's BTS and MRT are cheap and efficient.",
  },
];

function TravelGuidePage() {
  return (
    <div className="page-content">
      <PageMeta
        title="Best Times to Travel \u2014 StayByRail"
        description="Practical advice on the best times to visit Japan, the UK, France, Germany, Spain, and Thailand."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>
        Best Times to Travel
      </h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        The right timing means better weather, thinner crowds, and lower prices.
        Here's when to go \u2014 and when to think twice \u2014 for every region we cover.
      </p>

      <div className="travel-region-list">
        {REGIONS.map((r) => (
          <div className="travel-region-card" key={r.country}>
            <img src={r.img} alt={r.country} className="travel-region-img" loading="lazy" />
            <div className="travel-region-body">
              <div className="travel-region-header">
                <h3 className="travel-region-name">{r.flag} {r.country}</h3>
                <div className="travel-region-badges">
                  <span className="travel-badge travel-badge-best">Best: {r.best}</span>
                  <span className="travel-badge travel-badge-avoid">Avoid: {r.avoid}</span>
                </div>
              </div>
              <p className="travel-region-highlight">{r.highlight}</p>
              <p className="travel-region-detail">{r.details}</p>
              <div className="transit-tip">
                <strong>Budget tip:</strong> {r.budget}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelGuidePage;
