import { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import SourcesBanner from "../components/SourcesBanner";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

function SearchPage() {
  const [cities, setCities] = useState({});
  const [sources, setSources] = useState([]);
  const [results, setResults] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      <SourcesBanner sources={sources} sourceCounts={results?.source_counts} />

      <SearchForm
        cities={cities}
        onSearch={handleSearch}
        loading={loading}
        ready={Object.keys(cities).length > 0}
      />

      {error && <div className="error-banner">{error}</div>}

      {loading && (
        <div className="loading">
          <div className="spinner" />
          <p>Searching hotels near train stations...</p>
          <p className="loading-hint">This can take up to 30 seconds on first search</p>
        </div>
      )}

      {results && <Results data={results} wishlist={wishlist} />}
    </>
  );
}

export default SearchPage;
