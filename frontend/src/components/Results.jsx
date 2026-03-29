import { useState, useMemo, lazy, Suspense } from "react";
import HotelCard from "./HotelCard";
const HotelMap = lazy(() => import("./HotelMap"));

// Check if a hotel's amenities match a wishlist item
function matchesWishlistItem(amenities, item) {
  if (!amenities || amenities.length === 0) return null; // unknown
  const text = amenities.join(" ").toLowerCase();
  const key = item.toLowerCase();
  // Map common wishlist names to amenity keywords
  const aliases = {
    fridge: ["refrigerator", "fridge", "mini-fridge", "mini fridge", "kitchenette"],
    "free wi-fi": ["free wi-fi", "wi-fi", "wifi", "free wifi"],
    "air conditioning": ["air conditioning", "a/c", "ac", "climate control"],
    parking: ["parking"],
    restaurant: ["restaurant"],
    pool: ["pool", "swimming"],
    gym: ["gym", "fitness", "exercise"],
    onsen: ["onsen", "hot spring"],
    "public bath": ["public bath", "shared bath", "communal bath"],
    laundry: ["laundry", "washing machine"],
    kitchen: ["kitchen", "kitchenette", "cooking"],
    washer: ["washer", "washing machine", "laundry"],
    balcony: ["balcony", "terrace"],
    "room service": ["room service"],
    bar: ["bar", "lounge"],
    spa: ["spa", "massage"],
    "pet friendly": ["pet", "dog", "animal"],
    breakfast: ["breakfast"],
    iron: ["iron", "ironing"],
    safe: ["safe", "safety box"],
  };
  const keywords = aliases[key] || [key];
  return keywords.some((kw) => text.includes(kw));
}

function scoreHotel(hotel, wishlist) {
  if (!wishlist || wishlist.length === 0) return { matched: 0, total: 0, items: [] };
  const items = wishlist.map((item) => {
    const result = matchesWishlistItem(hotel.amenities, item);
    return { name: item, status: result === null ? "unknown" : result ? "yes" : "no" };
  });
  const matched = items.filter((i) => i.status === "yes").length;
  return { matched, total: wishlist.length, items };
}

function Results({ data, wishlist }) {
  const [priceMode, setPriceMode] = useState("per_night");
  const [maxWalk, setMaxWalk] = useState(10);
  const [sortBy, setSortBy] = useState("price_asc");

  // Flatten all hotels, score them, filter, sort
  const { allHotels, stationGroups } = useMemo(() => {
    if (!data) return { allHotels: [], stationGroups: [] };

    const all = [];
    for (const group of data.results) {
      for (const hotel of group.hotels) {
        if (hotel.walk_minutes != null && hotel.walk_minutes > maxWalk) continue;
        const score = scoreHotel(hotel, wishlist);
        all.push({ ...hotel, wishlist_score: score });
      }
    }

    // Sort
    const sorted = [...all];
    switch (sortBy) {
      case "wishlist":
        sorted.sort((a, b) => {
          const diff = b.wishlist_score.matched - a.wishlist_score.matched;
          if (diff !== 0) return diff;
          return (a.price_per_night || 9999) - (b.price_per_night || 9999);
        });
        break;
      case "price_asc":
        sorted.sort((a, b) => (a.price_per_night || 9999) - (b.price_per_night || 9999));
        break;
      case "price_desc":
        sorted.sort((a, b) => (b.price_per_night || 0) - (a.price_per_night || 0));
        break;
      case "rating":
        sorted.sort((a, b) => (b.overall_rating || 0) - (a.overall_rating || 0));
        break;
      case "distance":
        sorted.sort((a, b) => (a.walk_minutes || 999) - (b.walk_minutes || 999));
        break;
      case "reviews":
        sorted.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
        break;
    }

    // Also rebuild station groups for the map
    const groups = [];
    for (const group of data.results) {
      const hotels = group.hotels.filter(
        (h) => h.walk_minutes == null || h.walk_minutes <= maxWalk
      );
      if (hotels.length > 0) groups.push({ ...group, hotels });
    }

    return { allHotels: sorted, stationGroups: groups };
  }, [data, maxWalk, wishlist, sortBy]);

  if (!data || data.total_hotels === 0) {
    return (
      <div className="no-results">
        <h2>No hotels found</h2>
        <p>Try increasing the max price or searching all stations.</p>
      </div>
    );
  }

  return (
    <div className="results">
      <div className="results-header">
        <h2>
          {allHotels.length} hotel{allHotels.length !== 1 ? "s" : ""} found
        </h2>
        <span className="results-meta">
          {data.city.charAt(0).toUpperCase() + data.city.slice(1)} · {data.line}{" "}
          · {data.check_in} &rarr; {data.check_out} ({data.num_nights} night
          {data.num_nights !== 1 ? "s" : ""})
        </span>
      </div>

      {/* Controls bar */}
      <div className="results-controls">
        <div className="control-group">
          <label>Show prices as</label>
          <div className="toggle-group">
            <button
              className={`toggle-btn ${priceMode === "per_night" ? "active" : ""}`}
              onClick={() => setPriceMode("per_night")}
            >
              Per Night
            </button>
            <button
              className={`toggle-btn ${priceMode === "total" ? "active" : ""}`}
              onClick={() => setPriceMode("total")}
            >
              Total ({data.num_nights}n)
            </button>
          </div>
        </div>

        <div className="control-group">
          <label>Sort by</label>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {wishlist.length > 0 && (
              <option value="wishlist">Amenities match ({wishlist.length}/5)</option>
            )}
            <option value="price_asc">Price (low to high)</option>
            <option value="price_desc">Price (high to low)</option>
            <option value="rating">Rating (best first)</option>
            <option value="distance">Distance (closest)</option>
            <option value="reviews">Most reviewed</option>
          </select>
        </div>

        <div className="control-group slider-group">
          <label>
            Max walk to station:{" "}
            <strong>{maxWalk} min</strong>
          </label>
          <input
            type="range"
            min={5}
            max={60}
            step={5}
            value={maxWalk}
            onChange={(e) => setMaxWalk(Number(e.target.value))}
            className="walk-slider"
          />
          <div className="slider-labels">
            <span>5 min</span>
            <span>60 min</span>
          </div>
        </div>
      </div>

      {/* Map */}
      <Suspense fallback={<div className="loading"><div className="spinner" /></div>}>
        <HotelMap stationGroups={stationGroups} priceMode={priceMode} />
      </Suspense>

      {/* Flat sorted hotel list */}
      {allHotels.length === 0 ? (
        <div className="no-results">
          <p>No hotels within {maxWalk} min walk. Try increasing the slider.</p>
        </div>
      ) : (
        <div className="hotel-grid">
          {allHotels.map((hotel, i) => (
            <HotelCard
              key={hotel.name + i}
              hotel={hotel}
              priceMode={priceMode}
              checkIn={data.check_in}
              checkOut={data.check_out}
              adults={data.adults}
              wishlist={wishlist}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Results;
