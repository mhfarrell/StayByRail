import React, { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";
import SourcesBanner from "./components/SourcesBanner";
import Settings from "./components/Settings";
import AdUnit from "./components/AdUnit";
import "./App.css";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("staybyrail_theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("staybyrail_theme", theme);
  }, [theme]);

  // Listen for system changes when no manual override
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = (e) => {
      if (!localStorage.getItem("staybyrail_theme")) {
        setTheme(e.matches ? "light" : "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggle };
}

function App() {
  const { theme, toggle: toggleTheme } = useTheme();
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
            // Retry after delay (handles Render cold start)
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

  const loadingRef = React.useRef(null);

  const handleSearch = async (params, selectedWishlist) => {
    setLoading(true);
    setError(null);
    setResults(null);
    setWishlist(selectedWishlist || []);

    // Scroll to loading indicator on mobile
    setTimeout(() => {
      loadingRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);

    try {
      const qs = new URLSearchParams(params).toString();
      const headers = {};
      const userKey = localStorage.getItem("staybyrail_serpapi_key");
      if (userKey) {
        headers["X-SerpAPI-Key"] = userKey;
      }
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 120000);
      const resp = await fetch(`${API}/search?${qs}`, {
        headers,
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!resp.ok) {
        let msg = "Search failed";
        try { msg = (await resp.json()).detail || msg; } catch {}
        throw new Error(msg);
      }
      const data = await resp.json();
      setResults(data);
    } catch (e) {
      if (e.name === "AbortError") {
        setError("Search timed out. The server may be starting up — please try again.");
      } else {
        setError(e.message || "Connection failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      {/* Left ad rail */}
      <aside className="ad-rail ad-rail-left">
        <div className="ad-slot ad-slot-tall">
          <AdUnit format="vertical" style={{ width: 160, height: 600 }} />
        </div>
        <div className="ad-slot ad-slot-square">
          <AdUnit format="rectangle" style={{ width: 160, height: 250 }} />
        </div>
      </aside>

      {/* Main content */}
      <div className="app">
        <header className="site-header">
          <div className="header-inner">
            <div className="header-brand">
              <svg className="site-logo" viewBox="0 0 40 44" width="36" height="40" aria-hidden="true">
                <path d="M4 16 L20 6 L36 16" fill="none" stroke="#2563eb" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="6" y="16" width="28" height="12" rx="2" fill="#2563eb"/>
                <rect x="9" y="18" width="7" height="5" rx="1.5" fill="#0ea5e9"/>
                <rect x="18" y="20" width="12" height="8" rx="1" fill="#0ea5e9" opacity="0.45"/>
                <rect x="7" y="28" width="2.5" height="3.5" rx="0.5" fill="#2563eb"/>
                <rect x="30.5" y="28" width="2.5" height="3.5" rx="0.5" fill="#2563eb"/>
                <line x1="1" y1="36" x2="39" y2="36" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                <line x1="1" y1="40.5" x2="39" y2="40.5" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round"/>
                {[5,11,17,23,29,35].map(x => <line key={x} x1={x} y1="34.5" x2={x} y2="42" stroke="#f59e0b" strokeWidth="1.3" strokeLinecap="round"/>)}
              </svg>
              <div className="header-text">
                <h1 className="brand-name">
                  <span className="brand-stay">Stay</span>
                  <span className="brand-by">By</span>
                  <span className="brand-rail">Rail</span>
                </h1>
                <p className="subtitle">Find hotels near train stations</p>
              </div>
            </div>
            <div className="header-actions">
              <span className="header-region">52 cities</span>
            </div>
          </div>
        </header>

        <Settings theme={theme} onToggleTheme={toggleTheme} />

        <SourcesBanner sources={sources} sourceCounts={results?.source_counts} />

        <SearchForm cities={cities} onSearch={handleSearch} loading={loading} />

        {error && <div className="error-banner">{error}</div>}

        {loading && (
          <div className="loading" ref={loadingRef}>
            <div className="spinner" />
            <p>Searching hotels near train stations...</p>
            <p className="loading-hint">This can take up to 30 seconds on first search</p>
          </div>
        )}

        {results && <Results data={results} wishlist={wishlist} />}

        <div className="ad-banner">
          <AdUnit format="horizontal" style={{ width: "100%", height: 90 }} />
        </div>
      </div>

      {/* Right ad rail */}
      <aside className="ad-rail ad-rail-right">
        <div className="ad-slot ad-slot-tall">
          <AdUnit format="vertical" style={{ width: 160, height: 600 }} />
        </div>
        <div className="ad-slot ad-slot-square">
          <AdUnit format="rectangle" style={{ width: 160, height: 250 }} />
        </div>
      </aside>
    </div>
  );
}

export default App;
