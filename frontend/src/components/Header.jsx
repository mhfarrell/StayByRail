import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";
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
  const [keyStatus, setKeyStatus] = useState(null);
  const [checkingKeys, setCheckingKeys] = useState(false);

  const aboutRef = useRef(null);
  const settingsRef = useRef(null);
  const keyStatusLoaded = useRef(false);

  useEffect(() => {
    const s = localStorage.getItem(SERP_KEY);
    if (s) { setSerpKey(s); setSerpSaved(true); }
    const r = localStorage.getItem(RAPID_KEY);
    if (r) { setRapidKey(r); setRapidSaved(true); }
  }, []);

  const checkKeyStatus = () => {
    setCheckingKeys(true);
    const headers = {};
    const s = localStorage.getItem(SERP_KEY);
    if (s) headers["X-SerpAPI-Key"] = s;
    const r = localStorage.getItem(RAPID_KEY);
    if (r) headers["X-RapidAPI-Key"] = r;
    fetch(`${API}/key-status`, { headers })
      .then((res) => res.json())
      .then(setKeyStatus)
      .catch(() => setKeyStatus(null))
      .finally(() => setCheckingKeys(false));
  };

  const closeAll = () => { setShowAbout(false); setShowSettings(false); };

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
        <Link to="/" className="header-brand" onClick={closeAll}>
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
            <span className="brand-name">
              <span className="brand-stay">Stay</span>
              <span className="brand-by">By</span>
              <span className="brand-rail">Rail</span>
            </span>
            <p className="subtitle">Find hotels near train stations</p>
          </div>
        </Link>

        <nav className="header-nav">
          {/* Search link */}
          <NavLink
            to="/search"
            className={({ isActive }) => `header-nav-btn${isActive ? " active" : ""}`}
            onClick={closeAll}
          >
            Search
          </NavLink>

          {/* Guides — top-level link */}
          <NavLink
            to="/guides"
            className={({ isActive }) => `header-nav-btn${isActive ? " active" : ""}`}
            onClick={closeAll}
          >
            Guides
          </NavLink>

          {/* Journal — top-level link */}
          <NavLink
            to="/journal"
            className={({ isActive }) => `header-nav-btn${isActive ? " active" : ""}`}
            onClick={closeAll}
          >
            Journal
          </NavLink>

          {/* Travel — top-level link */}
          <NavLink
            to="/travel-guide"
            className={({ isActive }) => `header-nav-btn${isActive ? " active" : ""}`}
            onClick={closeAll}
          >
            Travel
          </NavLink>

          {/* About dropdown (simplified) */}
          <div className="header-dropdown" ref={aboutRef}>
            <button
              className={`header-nav-btn${showAbout ? " active" : ""}`}
              onClick={() => { setShowAbout(!showAbout); setShowSettings(false); }}
            >
              More
              <svg width="10" height="10" viewBox="0 0 10 6" fill="none" aria-hidden="true" style={{ marginLeft: 2 }}>
                <path d={showAbout ? "M1 5l4-4 4 4" : "M1 1l4 4 4-4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {showAbout && (
              <div className="dropdown-panel dropdown-about">
                <button className="dropdown-close" onClick={closeAll} aria-label="Close">&times;</button>
                <nav className="dropdown-nav">
                  <Link to="/about" className="dropdown-nav-link" onClick={closeAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    About
                  </Link>
                  <Link to="/how-it-works" className="dropdown-nav-link" onClick={closeAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                    How It Works
                  </Link>
                  <Link to="/train-times" className="dropdown-nav-link" onClick={closeAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    Train Times
                  </Link>
                  <Link to="/coverage" className="dropdown-nav-link" onClick={closeAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    Coverage
                  </Link>
                  <Link to="/faq" className="dropdown-nav-link" onClick={closeAll}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
                    FAQ
                  </Link>
                </nav>
              </div>
            )}
          </div>

          {/* Settings dropdown */}
          <div className="header-dropdown" ref={settingsRef}>
            <button
              className="header-nav-btn"
              onClick={() => { const opening = !showSettings; setShowSettings(opening); setShowAbout(false); if (opening && !keyStatusLoaded.current) { keyStatusLoaded.current = true; checkKeyStatus(); } }}
              aria-label="Settings"
              title="Settings"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3"/>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
              </svg>
              {(hasSerpKey || hasRapidKey) && <span className="header-key-dot" />}
            </button>
            {showSettings && (
              <div className="dropdown-panel dropdown-settings">
                <button className="dropdown-close" onClick={closeAll} aria-label="Close">&times;</button>
                {/* Theme */}
                <div className="dropdown-row">
                  <span className="dropdown-label">Theme</span>
                  <div className="toggle-group">
                    <button className={`toggle-btn ${theme === "dark" ? "active" : ""}`} onClick={() => theme !== "dark" && onToggleTheme()}>Dark</button>
                    <button className={`toggle-btn ${theme === "light" ? "active" : ""}`} onClick={() => theme !== "light" && onToggleTheme()}>Light</button>
                  </div>
                </div>

                {/* Server key status */}
                <div className="dropdown-row">
                  <span className="dropdown-label">Server Key Status</span>
                  {checkingKeys ? (
                    <span className="key-checking">Checking...</span>
                  ) : keyStatus ? (
                    <div className="key-status-grid">
                      <KeyStatusRow
                        label="SerpAPI (Google Hotels)"
                        status={keyStatus.serpapi}
                      />
                      <KeyStatusRow
                        label="RapidAPI (Booking + TripAdvisor)"
                        status={keyStatus.rapidapi}
                      />
                    </div>
                  ) : (
                    <span className="key-hint">Open settings to check status</span>
                  )}
                  <button className="key-btn key-refresh" onClick={checkKeyStatus} disabled={checkingKeys} style={{ marginTop: "0.4rem" }}>
                    Refresh Status
                  </button>
                </div>

                {/* SerpAPI key */}
                <div className="dropdown-row">
                  <span className="dropdown-label">
                    SerpAPI Key (optional)
                    {hasSerpKey && <span className="key-status key-active">Saved</span>}
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
                    RapidAPI Key (optional)
                    {hasRapidKey && <span className="key-status key-active">Saved</span>}
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

        </nav>
      </div>
      {(showAbout || showSettings) && (
        <div className="dropdown-backdrop" onClick={closeAll} />
      )}
    </header>
  );
}

function KeyStatusRow({ label, status }) {
  if (!status.configured) {
    return (
      <div className="key-status-row">
        <span className="key-dot key-dot-off" />
        <span className="key-status-label">{label}</span>
        <span className="key-status-value key-status-off">No key</span>
      </div>
    );
  }
  if (status.valid === false) {
    return (
      <div className="key-status-row">
        <span className="key-dot key-dot-error" />
        <span className="key-status-label">{label}</span>
        <span className="key-status-value key-status-error">{status.error || "Invalid"}</span>
      </div>
    );
  }
  if (status.rate_limited) {
    return (
      <div className="key-status-row">
        <span className="key-dot key-dot-warn" />
        <span className="key-status-label">{label}</span>
        <span className="key-status-value key-status-warn">Rate limited</span>
      </div>
    );
  }
  if (status.valid) {
    return (
      <div className="key-status-row">
        <span className="key-dot key-dot-ok" />
        <span className="key-status-label">{label}</span>
        <span className="key-status-value key-status-ok">
          {status.remaining != null ? `${status.remaining} searches left` : "Active"}
        </span>
      </div>
    );
  }
  return (
    <div className="key-status-row">
      <span className="key-dot key-dot-off" />
      <span className="key-status-label">{label}</span>
      <span className="key-status-value key-status-off">{status.error || "Unknown"}</span>
    </div>
  );
}

export default Header;
