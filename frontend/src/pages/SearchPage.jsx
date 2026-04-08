import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import SourcesBanner from "../components/SourcesBanner";
import ShortlistPanel from "../components/ShortlistPanel";
import PageMeta from "../components/PageMeta";
import { useShortlist } from "../hooks/useShortlist";
import { trackEvent } from "../utils/analytics";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

function SearchPage() {
  const [cities, setCities] = useState({});
  const [sources, setSources] = useState([]);
  const [results, setResults] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const { items: shortlistItems, toggle: toggleShortlist, clear: clearShortlist, isIn: isShortlisted } = useShortlist();

  // Read initial search params from URL
  const urlParams = useRef({
    city: searchParams.get("city"),
    line: searchParams.get("line"),
    check_in: searchParams.get("check_in"),
    check_out: searchParams.get("check_out"),
    currency: searchParams.get("currency") || null,
    max_price: searchParams.get("max_price") ? Number(searchParams.get("max_price")) : null,
    adults: searchParams.get("adults") ? Number(searchParams.get("adults")) : null,
    children: searchParams.get("children") ? Number(searchParams.get("children")) : null,
    popular_only: searchParams.get("popular_only") === "true" ? true : searchParams.get("popular_only") === "false" ? false : null,
  });

  useEffect(() => {
    const fetchCities = (attempt = 1) => {
      fetch(`${API}/cities`)
        .then((r) => {
          if (!r.ok) throw new Error("Bad response");
          return r.json();
        })
        .then(setCities)
        .catch(() => {
          if (attempt < 3) {
            setTimeout(() => fetchCities(attempt + 1), attempt * 3000);
          } else {
            setError("Could not connect to the server. Please refresh the page.");
          }
        });
    };
    fetchCities();

    fetch(`${API}/sources`)
      .then((r) => r.json())
      .then(setSources)
      .catch(() => {});
  }, []);

  const handleSearch = async (params, selectedWishlist) => {
    // Update URL params (shareable link)
    const urlUpdate = {};
    for (const [k, v] of Object.entries(params)) {
      if (v != null && v !== "") urlUpdate[k] = String(v);
    }
    setSearchParams(urlUpdate, { replace: true });

    // Conversion funnel: log the search. No-op unless Plausible is live.
    trackEvent("Hotel Search", {
      city: params.city || "",
      line: params.line || "any",
    });

    setLoading(true);
    setError(null);
    setResults(null);
    setWishlist(selectedWishlist || []);

    try {
      const qs = new URLSearchParams(params).toString();
      const headers = {};
      const serpKey = localStorage.getItem("staybyrail_serpapi_key");
      if (serpKey) headers["X-SerpAPI-Key"] = serpKey;
      const rapidKey = localStorage.getItem("staybyrail_rapidapi_key");
      if (rapidKey) headers["X-RapidAPI-Key"] = rapidKey;

      const resp = await fetch(`${API}/search?${qs}`, { headers });
      if (!resp.ok) {
        let msg = "Search failed";
        try { msg = (await resp.json()).detail || msg; } catch {}
        throw new Error(msg);
      }
      const data = await resp.json();
      setResults(data);
    } catch (e) {
      setError(e.message || "Search failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Search Hotels Near Train Stations — StayByRail"
        description="Search hotels near train stations in 52 cities across 6 countries. Filter by line, walking distance, price, and guest count. Results sorted by distance to the platform."
      />
      <SourcesBanner sources={sources} sourceCounts={results?.source_counts} />

      <SearchForm
        cities={cities}
        onSearch={handleSearch}
        loading={loading}
        ready={Object.keys(cities).length > 0}
        initialValues={urlParams.current}
      />

      {error && <div className="error-banner">{error}</div>}

      {loading && (
        <div className="loading">
          <div className="spinner" />
          <p>Searching hotels near train stations...</p>
          <p className="loading-hint">This can take up to 30 seconds on first search</p>
        </div>
      )}

      {results && (
        <Results
          data={results}
          wishlist={wishlist}
          onShortlist={toggleShortlist}
          isShortlisted={isShortlisted}
        />
      )}

      <ShortlistPanel
        items={shortlistItems}
        onToggle={toggleShortlist}
        onClear={clearShortlist}
      />
    </>
  );
}

export default SearchPage;
