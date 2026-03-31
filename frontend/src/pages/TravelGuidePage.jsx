import { useState, useEffect } from "react";
import PageMeta from "../components/PageMeta";

const REGIONS = [
  {
    country: "Japan",
    flag: "\u{1F1EF}\u{1F1F5}",
    wiki: "Cherry_blossoms",
    best: "March–May & October–November",
    avoid: "Golden Week (late Apr–early May)",
    highlight: "Cherry blossom season (late March to mid-April) is magical — the bloom sweeps north from Kyushu to Hokkaido over several weeks. Autumn foliage in November rivals the blossoms, especially in Kyoto and Nikko.",
    details: "Avoid Golden Week (29 April – 5 May) when trains sell out and prices spike. Typhoon season runs August to October — most pass harmlessly but can disrupt Shinkansen schedules. January–February and June (rainy season) offer the lowest hotel prices.",
    budget: "Activate your JR Pass to cover your busiest travel days. Winter and rainy season bring the cheapest accommodation.",
  },
  {
    country: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    wiki: "Edinburgh_Festival_Fringe",
    best: "May–September",
    avoid: "Bank holiday weekends",
    highlight: "Summer brings the longest days and best weather (18–25\u00B0C). The Edinburgh Festival Fringe in August is the world's largest arts festival — incredible atmosphere but book months ahead.",
    details: "Shoulder seasons (April–May and September–October) offer mild weather and significantly lower prices. Watch out for bank holiday weekends (early May, late May, late August) when domestic travel spikes and train tickets sell out.",
    budget: "Book Advance train tickets 12 weeks ahead for 50–70% savings versus walk-up fares. Off-peak trains are cheaper and less crowded.",
  },
  {
    country: "France",
    flag: "\u{1F1EB}\u{1F1F7}",
    wiki: "Eiffel_Tower",
    best: "April–June & September–October",
    avoid: "August in Paris",
    highlight: "Paris in spring is everything the clich\u00E9s promise — pleasant weather, manageable crowds, and terrace season in full swing. September brings warm days, lower prices, and the start of wine harvest.",
    details: "Avoid August in Paris — many local restaurants, bakeries, and shops close for the annual holiday. The south of France peaks July–August. Ski season in the Alps runs December through March, with February being peak.",
    budget: "SNCF releases TGV Prem's fares 3 months ahead. Ouigo, the low-cost TGV, runs from \u20AC10 on popular routes.",
  },
  {
    country: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    wiki: "Oktoberfest",
    best: "May–June & September",
    avoid: "Oktoberfest crowds (Munich)",
    highlight: "Early summer is ideal — warm weather, outdoor beer gardens, and long daylight hours. Christmas markets (late November to 23 December) in Nuremberg, Cologne, and Dresden are worth the cold.",
    details: "Oktoberfest (late September to early October) — book Munich accommodation months ahead. December hotel prices rise in market cities but remain reasonable elsewhere. Summer is warm and perfect for Berlin, Hamburg, and the Rhine Valley.",
    budget: "The Deutschland-Ticket (\u20AC49/month) gives unlimited regional and local transit nationwide. ICE Sparpreis fares are cheapest booked early.",
  },
  {
    country: "Spain",
    flag: "\u{1F1EA}\u{1F1F8}",
    wiki: "Sagrada_Fam%C3%ADlia",
    best: "April–June & September–November",
    avoid: "August inland (40\u00B0C+)",
    highlight: "Spring brings warm temperatures (20–28\u00B0C), blooming landscapes, and festivals like Las Fallas in Valencia (March) and Semana Santa across Andalusia. Autumn is equally pleasant with thinner crowds.",
    details: "August is brutal in Madrid and Seville (regularly 40\u00B0C+). Coastal cities like Barcelona and Malaga are hot but bearable with sea breezes. If you must travel in peak summer, head for the Basque Country or Galicia — they stay cooler.",
    budget: "Renfe's Avlo low-cost high-speed service runs Madrid\u2013Barcelona from \u20AC7. Book AVE tickets up to 120 days ahead for the best fares.",
  },
  {
    country: "Thailand",
    flag: "\u{1F1F9}\u{1F1ED}",
    wiki: "Songkran_(Thailand)",
    best: "November–February",
    avoid: "March–May (extreme heat)",
    highlight: "Cool season (25–30\u00B0C) with low humidity and clear skies — perfect for temples, markets, and island hopping. This is peak tourist season, so book ahead for Phuket and Chiang Mai.",
    details: "Hot season (March–May) brings intense heat, but Songkran (13–15 April), the Thai New Year water festival, is unforgettable. Wet season (June–October) sees short, heavy daily downpours — prices drop significantly and landscapes are lush and green.",
    budget: "Overnight sleeper trains from Bangkok to Chiang Mai save a hotel night. Bangkok's BTS and MRT are cheap and efficient for getting around.",
  },
];

function useRegionImages() {
  const [images, setImages] = useState({});
  useEffect(() => {
    REGIONS.forEach(({ country, wiki }) => {
      if (!wiki) return;
      const key = `sbr_travel_${country}`;
      const cached = sessionStorage.getItem(key);
      if (cached) { setImages((p) => ({ ...p, [country]: cached })); return; }
      fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(wiki)}`)
        .then((r) => r.json())
        .then((d) => {
          const url = d.thumbnail?.source || "";
          if (url) { sessionStorage.setItem(key, url); setImages((p) => ({ ...p, [country]: url })); }
        })
        .catch(() => {});
    });
  }, []);
  return images;
}

function TravelGuidePage() {
  const images = useRegionImages();

  return (
    <div className="page-content">
      <PageMeta
        title="Best Times to Travel — StayByRail"
        description="Practical advice on the best times to visit Japan, the UK, France, Germany, Spain, and Thailand. Seasonal tips, festivals, and money-saving travel windows."
      />
      <h2 className="page-heading" style={{ textAlign: "center" }}>
        Best Times to Travel
      </h2>
      <p className="page-intro" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
        The right timing means better weather, thinner crowds, and lower prices.
        Here's when to go — and when to think twice — for every region we cover.
      </p>

      <div className="travel-region-list">
        {REGIONS.map((r) => (
          <div className="travel-region-card" key={r.country}>
            {images[r.country] && (
              <div className="travel-region-img" style={{ backgroundImage: `url(${images[r.country]})` }} />
            )}
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
