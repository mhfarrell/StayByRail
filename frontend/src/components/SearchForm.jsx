import { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CURRENCIES = [
  { code: "GBP", symbol: "£", label: "GBP (£)" },
  { code: "USD", symbol: "$", label: "USD ($)" },
  { code: "EUR", symbol: "€", label: "EUR (€)" },
  { code: "JPY", symbol: "¥", label: "JPY (¥)" },
  { code: "THB", symbol: "฿", label: "THB (฿)" },
  { code: "AUD", symbol: "A$", label: "AUD (A$)" },
  { code: "CAD", symbol: "C$", label: "CAD (C$)" },
];

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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currency, setCurrency] = useState("GBP");
  const [maxPrice, setMaxPrice] = useState(100);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
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

  const fmt = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };
  const parseDate = (s) => {
    if (!s) return null;
    const [y, m, d] = s.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  useEffect(() => {
    const checkout = new Date(tomorrow);
    checkout.setDate(checkout.getDate() + 3);
    setStartDate(tomorrow);
    setEndDate(checkout);
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
    if (initialValues.check_in) setStartDate(parseDate(initialValues.check_in));
    if (initialValues.check_out) setEndDate(parseDate(initialValues.check_out));
    if (initialValues.currency) setCurrency(initialValues.currency);
    if (initialValues.max_price) setMaxPrice(initialValues.max_price);
    if (initialValues.adults) setAdults(initialValues.adults);
    if (initialValues.children) setChildren(Number(initialValues.children));
    if (initialValues.popular_only != null) setPopularOnly(initialValues.popular_only);
    appliedInitial.current = true;
  }, [cities, initialValues]);

  const checkIn = startDate ? fmt(startDate) : "";
  const checkOut = endDate ? fmt(endDate) : "";

  const numNights =
    startDate && endDate
      ? Math.max(0, Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)))
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
      currency,
      max_price: maxPrice,
      adults,
      children,
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
      {/* Row 1: Location + Dates */}
      <div className="form-row form-row-location">
        <div className="field">
          <label>Country</label>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            {sortedCountries.map((c) => (
              <option key={c} value={c}>{c}</option>
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

        <div className="field field-daterange">
          <label>Dates</label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={([start, end]) => {
              setStartDate(start);
              setEndDate(end);
            }}
            minDate={tomorrow}
            monthsShown={2}
            dateFormat="dd MMM yyyy"
            placeholderText="Select dates"
            className="daterange-trigger"
            calendarClassName="daterange-calendar"
          />
        </div>
      </div>

      {/* Row 2: Train Line + Popular Stations toggle */}
      <div className="form-row form-row-line">
        <div className="field field-line">
          <label>Train Line</label>
          <select value={line} onChange={(e) => setLine(e.target.value)}>
            {Object.entries(cityLines).map(([key, name]) => (
              <option key={key} value={key}>{name}</option>
            ))}
          </select>
        </div>

        <div className="field checkbox-field">
          <label>
            <input
              type="checkbox"
              checked={popularOnly}
              onChange={(e) => { setPopularOnly(e.target.checked); setSelectedStations([]); }}
            />
            Popular stations only
          </label>
        </div>
      </div>

      {/* Row 3: Station picker (visible when "Popular stations" unchecked) */}
      {!popularOnly && stationsList.length > 0 && (
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
            <span className="wishlist-arrow">{showStations ? "▲" : "▼"}</span>
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
                    {selected && "✓ "}
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

      {/* Row 4: Budget + Guests + Cost pill */}
      <div className="form-row form-row-budget">
        <div className="field field-currency">
          <label>Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
            {CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>{c.label}</option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>Max {CURRENCIES.find((c) => c.code === currency)?.symbol || "£"}/night</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            min={10}
            max={99999}
          />
        </div>

        <div className="field">
          <label>Adults</label>
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
            min={1}
            max={6}
          />
        </div>

        <div className="field">
          <label>Children</label>
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
            min={0}
            max={6}
          />
        </div>

        {numNights > 0 && (
          <div className="field field-pill">
            <span className="nights-badge">
              {numNights} night{numNights !== 1 ? "s" : ""} · max {CURRENCIES.find((c) => c.code === currency)?.symbol || "£"}{maxPrice * numNights} total
            </span>
          </div>
        )}
      </div>

      {/* Row 5: Amenities */}
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

      {/* Row 6: Search */}
      <button
        type="submit"
        disabled={!ready || loading || !startDate || !endDate}
        onClick={(e) => {
          if (ready && !loading && startDate && endDate) {
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
