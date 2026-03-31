import { useState, useEffect, useRef } from "react";

const AMENITY_OPTIONS = [
  "Fridge",
  "Free Wi-Fi",
  "Air conditioning",
  "Parking",
  "Restaurant",
  "Pool",
  "Gym",
  "Onsen",
  "Public bath",
  "Laundry",
  "Kitchen",
  "Washer",
  "Balcony",
  "Room service",
  "Bar",
  "Spa",
  "Pet friendly",
  "Breakfast",
  "Iron",
  "Safe",
];

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

function SearchForm({ cities, onSearch, loading, ready, initialValues }) {
  const [country, setCountry] = useState("United Kingdom");
  const [city, setCity] = useState("london");
  const [line, setLine] = useState("");
  const [selectedStations, setSelectedStations] = useState([]);
  const [stationsList, setStationsList] = useState([]);
  const [showStations, setShowStations] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);
  const [adults, setAdults] = useState(2);
  const [popularOnly, setPopularOnly] = useState(true);
  const [wishlist, setWishlist] = useState([]);
  const [showAmenities, setShowAmenities] = useState(false);
  const appliedInitial = useRef(false);

  // Build country -> cities map
  const countries = {};
  for (const [c, data] of Object.entries(cities)) {
    const ctry = data.country || "Other";
    if (!countries[ctry]) countries[ctry] = [];
    countries[ctry].push(c);
  }
  // Sort countries, sort cities within each
  const sortedCountries = Object.keys(countries).sort();
  for (const ctry of sortedCountries) {
    countries[ctry].sort();
  }

  const citiesInCountry = countries[country] || [];

  const fmt = (d) => d.toISOString().split("T")[0];
  const today = fmt(new Date());

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const checkout = new Date(tomorrow);
    checkout.setDate(checkout.getDate() + 3);
    setCheckIn(fmt(tomorrow));
    setCheckOut(fmt(checkout));
  }, []);

  // When country changes, pick the first city in that country
  useEffect(() => {
    if (citiesInCountry.length > 0 && !citiesInCountry.includes(city)) {
      setCity(citiesInCountry[0]);
    }
  }, [country, cities]);

  // When city changes, pick the first line
  useEffect(() => {
    if (cities[city]) {
      const lines = Object.keys(cities[city].lines);
      if (lines.length > 0 && !lines.includes(line)) {
        setLine(lines[0]);
      }
    }
  }, [city, cities]);

  // Fetch stations when city/line changes
  useEffect(() => {
    setSelectedStations([]);
    setStationsList([]);
    setShowStations(false);
    if (!city || !line) return;
    fetch(`${API}/stations?city=${encodeURIComponent(city)}&line=${encodeURIComponent(line)}&popular_only=false`)
      .then((r) => r.json())
      .then((data) => { if (Array.isArray(data)) setStationsList(data); })
      .catch(() => {});
  }, [city, line]);

  // Apply URL params once cities are loaded
  useEffect(() => {
    if (appliedInitial.current || !initialValues || Object.keys(cities).length === 0) return;
    if (initialValues.city) {
      const cityKey = Object.keys(cities).find(
        (k) => k.toLowerCase() === initialValues.city.toLowerCase()
      );
      if (cityKey) {
        const cityData = cities[cityKey];
        if (cityData?.country) setCountry(cityData.country);
        setCity(cityKey);
      }
    }
    if (initialValues.line) setLine(initialValues.line);
    if (initialValues.check_in) setCheckIn(initialValues.check_in);
    if (initialValues.check_out) setCheckOut(initialValues.check_out);
    if (initialValues.max_price) setMaxPrice(initialValues.max_price);
    if (initialValues.adults) setAdults(initialValues.adults);
    if (initialValues.popular_only != null) setPopularOnly(initialValues.popular_only);
    appliedInitial.current = true;
  }, [cities, initialValues]);

  const numNights =
    checkIn && checkOut
      ? Math.max(
          0,
          Math.round(
            (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)
          )
        )
      : 0;

  const toggleAmenity = (amenity) => {
    setWishlist((prev) => {
      if (prev.includes(amenity)) {
        return prev.filter((a) => a !== amenity);
      }
      if (prev.length >= 5) return prev;
      return [...prev, amenity];
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const params = {
      city,
      line,
      check_in: checkIn,
      check_out: checkOut,
      max_price: maxPrice,
      adults,
      popular_only: popularOnly,
    };
    if (selectedStations.length === 1) {
      params.station = selectedStations[0];
    } else if (selectedStations.length > 1) {
      params.stations = selectedStations.join(",");
    }
    onSearch(params, wishlist);
  };

  const cityLines = cities[city]?.lines || {};

  return (
    <form className="search-form" noValidate onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <div className="form-row">
        <div className="field">
          <label>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {sortedCountries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>City</label>
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            {citiesInCountry.map((c) => (
              <option key={c} value={c}>
                {c.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>Train Line</label>
          <select value={line} onChange={(e) => setLine(e.target.value)}>
            {Object.entries(cityLines).map(([key, name]) => (
              <option key={key} value={key}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>Check-in</label>
          <input
            type="date"
            value={checkIn}
            min={today}
            onChange={(e) => {
              const val = e.target.value;
              setCheckIn(val);
              if (val) {
                const d = new Date(val);
                const lastDay = new Date(d.getFullYear(), d.getMonth() + 1, 0);
                setCheckOut(fmt(lastDay));
              }
            }}
          />
        </div>

        <div className="field">
          <label>Check-out</label>
          <input
            type="date"
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Max £/night</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            min={10}
            max={500}
          />
        </div>

        <div className="field">
          <label>Guests</label>
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            min={1}
            max={6}
          />
        </div>

        <div className="field checkbox-field">
          <label>
            <input
              type="checkbox"
              checked={popularOnly}
              onChange={(e) => setPopularOnly(e.target.checked)}
            />
            Popular stations only
          </label>
        </div>

        <div className="field">
          {numNights > 0 && (
            <span className="nights-badge">
              {numNights} night{numNights !== 1 ? "s" : ""} · max £
              {maxPrice * numNights} total
            </span>
          )}
        </div>
      </div>

      {/* Station picker */}
      {stationsList.length > 0 && (
        <div className="wishlist-section">
          <button
            type="button"
            className="wishlist-toggle"
            onClick={() => setShowStations(!showStations)}
          >
            Stations ({selectedStations.length || "All"}/{stationsList.length})
            {selectedStations.length > 0 && (
              <span className="wishlist-preview">
                {selectedStations.join(", ")}
              </span>
            )}
            <span className="wishlist-arrow">{showStations ? "\u25B2" : "\u25BC"}</span>
          </button>

          {showStations && (
            <div className="wishlist-grid">
              {stationsList.map((s) => {
                const selected = selectedStations.includes(s.name);
                return (
                  <button
                    key={s.name}
                    type="button"
                    className={`wishlist-chip ${selected ? "chip-selected" : ""}`}
                    onClick={() =>
                      setSelectedStations((prev) =>
                        selected
                          ? prev.filter((n) => n !== s.name)
                          : [...prev, s.name]
                      )
                    }
                  >
                    {selected && "\u2713 "}
                    {s.name}
                  </button>
                );
              })}
              <button
                type="button"
                className="wishlist-chip"
                style={{ fontStyle: "italic" }}
                onClick={() => setSelectedStations([])}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      )}

      {/* Amenity Wishlist */}
      <div className="wishlist-section">
        <button
          type="button"
          className="wishlist-toggle"
          onClick={() => setShowAmenities(!showAmenities)}
        >
          Amenities ({wishlist.length}/5)
          {wishlist.length > 0 && (
            <span className="wishlist-preview">
              {wishlist.join(", ")}
            </span>
          )}
          <span className="wishlist-arrow">{showAmenities ? "▲" : "▼"}</span>
        </button>

        {showAmenities && (
          <div className="wishlist-grid">
            {AMENITY_OPTIONS.map((amenity) => {
              const selected = wishlist.includes(amenity);
              const disabled = !selected && wishlist.length >= 5;
              return (
                <button
                  key={amenity}
                  type="button"
                  className={`wishlist-chip ${selected ? "chip-selected" : ""} ${disabled ? "chip-disabled" : ""}`}
                  onClick={() => !disabled && toggleAmenity(amenity)}
                >
                  {selected && "✓ "}
                  {amenity}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={!ready || loading || !checkIn || !checkOut}
        onClick={(e) => {
          if (ready && !loading && checkIn && checkOut) {
            e.preventDefault();
            handleSubmit();
          }
        }}
      >
        {!ready ? (
          <span className="btn-loading"><span className="btn-spinner" /> Connecting to server...</span>
        ) : loading ? (
          <span className="btn-loading"><span className="btn-spinner" /> Searching...</span>
        ) : (
          "Search Hotels"
        )}
      </button>
    </form>
  );
}

export default SearchForm;
