import { useState, useEffect, useRef } from "react";

const SERP_KEY = "staybyrail_serpapi_key";
const RAPID_KEY = "staybyrail_rapidapi_key";

function Header({ theme, onToggleTheme }) {
  const [showAbout, setShowAbout] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [serpKey, setSerpKey] = useState("");
  const [rapidKey, setRapidKey] = useState("");
  const [serpSaved, setSerpSaved] = useState(false);
  const [rapidSaved, setRapidSaved] = useState(false);
  const [message, setMessage] = useState(null);

  const aboutRef = useRef(null);
  const settingsRef = useRef(null);

  useEffect(() => {
    const s = localStorage.getItem(SERP_KEY);
    if (s) { setSerpKey(s); setSerpSaved(true); }
    const r = localStorage.getItem(RAPID_KEY);
    if (r) { setRapidKey(r); setRapidSaved(true); }
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target)) setShowAbout(false);
      if (settingsRef.current && !settingsRef.current.contains(e.target)) setShowSettings(false);
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const saveKey = (type) => {
    if (type === "serp" && serpKey.trim()) {
      localStorage.setItem(SERP_KEY, serpKey.trim());
      setSerpSaved(true);
      flash("SerpAPI key saved");
    } else if (type === "rapid" && rapidKey.trim()) {
      localStorage.setItem(RAPID_KEY, rapidKey.trim());
      setRapidSaved(true);
      flash("RapidAPI key saved");
    }
  };

  const clearKey = (type) => {
    if (type === "serp") {
      localStorage.removeItem(SERP_KEY);
      setSerpKey(""); setSerpSaved(false);
      flash("SerpAPI key removed");
    } else {
      localStorage.removeItem(RAPID_KEY);
      setRapidKey(""); setRapidSaved(false);
      flash("RapidAPI key removed");
    }
  };

  const flash = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 2500);
  };

  const hasSerpKey = serpSaved && serpKey.length > 0;
  const hasRapidKey = rapidSaved && rapidKey.length > 0;

  return (
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

        <nav className="header-nav">
          <span className="header-badge">52 cities</span>
          <span className="header-badge">6 countries</span>

          {/* About dropdown */}
          <div className="header-dropdown" ref={aboutRef}>
            <button
              className="header-nav-btn"
              onClick={() => { setShowAbout(!showAbout); setShowSettings(false); }}
            >
              About
            </button>
            {showAbout && (
              <div className="dropdown-panel dropdown-about">
                <h3 className="dropdown-heading">About StayByRail</h3>
                <p className="dropdown-text">
                  Find hotels within walking distance of major train stations.
                  Search by city and line, set your dates, and compare prices
                  from multiple booking platforms.
                </p>
                <p className="dropdown-text">
                  <strong>52 cities</strong> across <strong>6 countries</strong>: Japan, United Kingdom,
                  France, Germany, Spain, and Thailand.
                </p>
                <p className="dropdown-text dropdown-text-muted">
                  Data from Google Hotels, Booking.com, and TripAdvisor.
                </p>
              </div>
            )}
          </div>

          {/* Settings dropdown */}
          <div className="header-dropdown" ref={settingsRef}>
            <button
              className="header-nav-btn"
              onClick={() => { setShowSettings(!showSettings); setShowAbout(false); }}
            >
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="10" cy="10" r="3"/>
                <path d="M10 1.5v2M10 16.5v2M3.3 3.3l1.4 1.4M15.3 15.3l1.4 1.4M1.5 10h2M16.5 10h2M3.3 16.7l1.4-1.4M15.3 4.7l1.4-1.4"/>
              </svg>
              {(hasSerpKey || hasRapidKey) && <span className="header-key-dot" />}
            </button>
            {showSettings && (
              <div className="dropdown-panel dropdown-settings">
                {/* Theme */}
                <div className="dropdown-row">
                  <span className="dropdown-label">Theme</span>
                  <div className="toggle-group">
                    <button className={`toggle-btn ${theme === "dark" ? "active" : ""}`} onClick={() => theme !== "dark" && onToggleTheme()}>Dark</button>
                    <button className={`toggle-btn ${theme === "light" ? "active" : ""}`} onClick={() => theme !== "light" && onToggleTheme()}>Light</button>
                  </div>
                </div>

                {/* SerpAPI key */}
                <div className="dropdown-row">
                  <span className="dropdown-label">
                    SerpAPI Key
                    {hasSerpKey && <span className="key-status key-active">Active</span>}
                  </span>
                  <div className="key-input-row">
                    <input
                      type="password"
                      className="key-input"
                      value={serpKey}
                      onChange={(e) => { setSerpKey(e.target.value); setSerpSaved(false); }}
                      placeholder="Paste SerpAPI key..."
                      spellCheck={false}
                    />
                    <button className="key-btn key-save" onClick={() => saveKey("serp")} disabled={!serpKey.trim() || serpSaved}>
                      {serpSaved ? "Saved" : "Save"}
                    </button>
                    {hasSerpKey && <button className="key-btn key-clear" onClick={() => clearKey("serp")}>Clear</button>}
                  </div>
                  <span className="key-hint">
                    Google Hotels search. <a href="https://serpapi.com" target="_blank" rel="noopener noreferrer">Get free key</a> (100/mo)
                  </span>
                </div>

                {/* RapidAPI key */}
                <div className="dropdown-row">
                  <span className="dropdown-label">
                    RapidAPI Key
                    {hasRapidKey && <span className="key-status key-active">Active</span>}
                  </span>
                  <div className="key-input-row">
                    <input
                      type="password"
                      className="key-input"
                      value={rapidKey}
                      onChange={(e) => { setRapidKey(e.target.value); setRapidSaved(false); }}
                      placeholder="Paste RapidAPI key..."
                      spellCheck={false}
                    />
                    <button className="key-btn key-save" onClick={() => saveKey("rapid")} disabled={!rapidKey.trim() || rapidSaved}>
                      {rapidSaved ? "Saved" : "Save"}
                    </button>
                    {hasRapidKey && <button className="key-btn key-clear" onClick={() => clearKey("rapid")}>Clear</button>}
                  </div>
                  <span className="key-hint">
                    Booking.com + TripAdvisor. <a href="https://rapidapi.com" target="_blank" rel="noopener noreferrer">Get free key</a> (500/mo)
                  </span>
                </div>

                {message && <div className="dropdown-msg">{message}</div>}

                <p className="dropdown-text dropdown-text-muted" style={{ marginTop: "0.5rem", fontSize: "0.72rem" }}>
                  Keys stay in your browser only — never sent to our servers.
                </p>
              </div>
            )}
          </div>

          {/* Theme toggle */}
          <button
            className="header-theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
