import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";
const SERP_KEY = "staybyrail_serpapi_key";
const RAPID_KEY = "staybyrail_rapidapi_key";

const NAV_BASE =
  "inline-flex items-center gap-1.5 px-3 py-2 min-h-10 rounded-md text-sm font-medium text-[var(--color-on-dark-muted)] no-underline " +
  "transition-colors duration-100 [touch-action:manipulation] select-none " +
  "hover:bg-white/10 hover:text-white " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]";
const NAV_ACTIVE =
  "!text-white !bg-white/10";
const NAV_PRIMARY =
  "inline-flex items-center gap-1.5 px-4 py-2 min-h-10 rounded-md text-sm no-underline font-semibold " +
  "bg-[var(--color-accent)] text-[var(--color-accent-ink)] " +
  "transition-colors duration-100 [touch-action:manipulation] " +
  "hover:bg-[var(--color-accent-lift)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-lift)]";

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
    <>
      <a href="#main" className="skip-to-main">Skip to main content</a>
      <header className="sticky top-0 z-[100] bg-[var(--color-surface-dark)] border-b border-black/30 shadow-sm">
        <div className="flex items-center justify-between gap-3 max-w-[1280px] mx-auto px-4 h-14 sm:px-6 sm:h-16 lg:px-8">
          <Link
            to="/"
            onClick={closeAll}
            className="flex items-center gap-2.5 no-underline shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] rounded"
          >
            <svg viewBox="0 0 40 40" className="shrink-0 w-8 h-8 sm:w-9 sm:h-9" aria-hidden="true">
              <circle cx="20" cy="20" r="19" fill="var(--color-primary)" />
              <rect x="11" y="13" width="18" height="14" rx="3" fill="#FFFFFF" />
              <rect x="13" y="15" width="6" height="4" rx="1" fill="var(--color-primary)" />
              <rect x="21" y="15" width="6" height="4" rx="1" fill="var(--color-primary)" opacity="0.45" />
              <circle cx="15" cy="25" r="1.4" fill="var(--color-primary)" />
              <circle cx="25" cy="25" r="1.4" fill="var(--color-primary)" />
              <rect x="10" y="29.5" width="20" height="1.4" rx="0.7" fill="#FFFFFF" opacity="0.9" />
            </svg>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight leading-none text-white">
              Stay<span className="text-[var(--color-primary)]">By</span>Rail
            </span>
          </Link>

          <nav className="flex items-center gap-0.5 sm:gap-1 relative z-[200]">
            <NavLink
              to="/guides"
              className={({ isActive }) => `${NAV_BASE} hidden sm:inline-flex${isActive ? ` ${NAV_ACTIVE}` : ""}`}
              onClick={closeAll}
            >
              Guides
            </NavLink>
            <NavLink
              to="/journal"
              className={({ isActive }) => `${NAV_BASE} hidden sm:inline-flex${isActive ? ` ${NAV_ACTIVE}` : ""}`}
              onClick={closeAll}
            >
              Journal
            </NavLink>
            <NavLink
              to="/travel-guide"
              className={({ isActive }) => `${NAV_BASE} hidden md:inline-flex${isActive ? ` ${NAV_ACTIVE}` : ""}`}
              onClick={closeAll}
            >
              Travel
            </NavLink>

            {/* More dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                type="button"
                className={`${NAV_BASE}${showAbout ? ` ${NAV_ACTIVE}` : ""}`}
                onClick={() => { setShowAbout(!showAbout); setShowSettings(false); }}
              >
                More
                <svg width="10" height="10" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                  <path d={showAbout ? "M1 5l4-4 4 4" : "M1 1l4 4 4-4"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {showAbout && (
                <DropdownPanel width="w-[240px]" onClose={closeAll}>
                  <nav className="flex flex-col gap-0.5">
                    {[
                      { to: "/guides", label: "Guides", mobileOnly: true },
                      { to: "/journal", label: "Journal", mobileOnly: true },
                      { to: "/travel-guide", label: "Travel", mobileOnly: true },
                      { to: "/about", label: "About" },
                      { to: "/how-it-works", label: "How it works" },
                      { to: "/train-times", label: "Train times" },
                      { to: "/coverage", label: "Coverage" },
                      { to: "/faq", label: "FAQ" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={closeAll}
                        className={`${item.mobileOnly ? "sm:hidden " : ""}flex items-center gap-2 px-3 py-2.5 min-h-11 rounded-md text-sm font-medium text-[var(--color-ink)] no-underline transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </DropdownPanel>
              )}
            </div>

            {/* Settings dropdown */}
            <div className="relative" ref={settingsRef}>
              <button
                type="button"
                className={`${NAV_BASE} relative`}
                onClick={() => {
                  const opening = !showSettings;
                  setShowSettings(opening);
                  setShowAbout(false);
                  if (opening && !keyStatusLoaded.current) {
                    keyStatusLoaded.current = true;
                    checkKeyStatus();
                  }
                }}
                aria-label="Settings"
                title="Settings"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
                {(hasSerpKey || hasRapidKey) && (
                  <span
                    className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-success)]"
                    aria-hidden="true"
                  />
                )}
              </button>
              {showSettings && (
                <DropdownPanel width="w-[340px]" onClose={closeAll}>
                  <SettingsRow label="Theme">
                    <div className="inline-flex bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-md overflow-hidden">
                      <button
                        className={`px-3.5 py-1.5 min-h-[34px] text-xs font-semibold transition-colors ${theme === "dark" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-2)]"}`}
                        onClick={() => theme !== "dark" && onToggleTheme()}
                      >Dark</button>
                      <button
                        className={`px-3.5 py-1.5 min-h-[34px] text-xs font-semibold transition-colors ${theme === "light" ? "bg-[var(--color-primary)] text-white" : "text-[var(--color-ink-muted)] hover:bg-[var(--color-surface-2)]"}`}
                        onClick={() => theme !== "light" && onToggleTheme()}
                      >Light</button>
                    </div>
                  </SettingsRow>

                  <SettingsRow label="Server Key Status">
                    {checkingKeys ? (
                      <span className="text-xs text-[var(--color-ink-subtle)] italic">Checking...</span>
                    ) : keyStatus ? (
                      <div className="flex flex-col gap-1.5">
                        <KeyStatusRow label="SerpAPI (Google Hotels)" status={keyStatus.serpapi} />
                        <KeyStatusRow label="RapidAPI (Booking + TripAdvisor)" status={keyStatus.rapidapi} />
                      </div>
                    ) : (
                      <span className="text-xs text-[var(--color-ink-subtle)]">Open settings to check status</span>
                    )}
                    <button
                      className="mt-1.5 px-2.5 py-1 min-h-[34px] bg-[var(--color-surface)] text-[var(--color-ink-muted)] text-xs border border-[var(--color-hairline)] rounded-md font-semibold hover:bg-[var(--color-surface-2)] disabled:opacity-40"
                      onClick={checkKeyStatus}
                      disabled={checkingKeys}
                    >
                      Refresh Status
                    </button>
                  </SettingsRow>

                  <SettingsRow
                    label={<>SerpAPI Key (optional){hasSerpKey && <KeySavedBadge />}</>}
                  >
                    <KeyInputRow
                      value={serpKey}
                      onChange={(v) => { setSerpKey(v); setSerpSaved(false); }}
                      saved={serpSaved}
                      hasKey={hasSerpKey}
                      onSave={() => saveKey("serp")}
                      onClear={() => clearKey("serp")}
                      placeholder="Paste SerpAPI key..."
                    />
                    <KeyHint>
                      Google Hotels search.{" "}
                      <a className="text-[var(--color-primary-lift)] no-underline hover:underline" href="https://serpapi.com" target="_blank" rel="noopener noreferrer">Get free key</a> (100/mo)
                    </KeyHint>
                  </SettingsRow>

                  <SettingsRow
                    label={<>RapidAPI Key (optional){hasRapidKey && <KeySavedBadge />}</>}
                  >
                    <KeyInputRow
                      value={rapidKey}
                      onChange={(v) => { setRapidKey(v); setRapidSaved(false); }}
                      saved={rapidSaved}
                      hasKey={hasRapidKey}
                      onSave={() => saveKey("rapid")}
                      onClear={() => clearKey("rapid")}
                      placeholder="Paste RapidAPI key..."
                    />
                    <KeyHint>
                      Booking.com + TripAdvisor.{" "}
                      <a className="text-[var(--color-primary-lift)] no-underline hover:underline" href="https://rapidapi.com" target="_blank" rel="noopener noreferrer">Get free key</a> (500/mo)
                    </KeyHint>
                  </SettingsRow>

                  {message && (
                    <div className="mt-2 px-2.5 py-1.5 bg-[var(--color-success-soft)] border border-[var(--color-success)]/30 text-[var(--color-success)] rounded-md text-xs">
                      {message}
                    </div>
                  )}
                  <p className="mt-2 text-[0.72rem] text-[var(--color-ink-subtle)] leading-relaxed">
                    Keys stay in your browser only — never sent to our servers.
                  </p>
                </DropdownPanel>
              )}
            </div>

            <Link
              to="/search"
              className={NAV_PRIMARY}
              onClick={closeAll}
            >
              Search
            </Link>
          </nav>
        </div>
        {(showAbout || showSettings) && (
          <div
            className="fixed inset-0 z-[150] bg-black/20"
            onClick={closeAll}
            aria-hidden="true"
          />
        )}
      </header>
    </>
  );
}

function DropdownPanel({ width, onClose, children }) {
  return (
    <div
      className={`absolute top-[calc(100%+0.5rem)] right-0 z-[200] ${width} max-w-[92vw]
        bg-[var(--color-canvas)] border border-[var(--color-hairline)] rounded-lg
        shadow-[var(--shadow-popover)]
        p-3 pt-10`}
    >
      <button
        type="button"
        className="absolute top-2 right-2 w-8 h-8 inline-flex items-center justify-center rounded-md bg-transparent border border-[var(--color-hairline)] text-[var(--color-ink-muted)] text-base leading-none hover:bg-[var(--color-surface)] hover:text-[var(--color-ink)]"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      {children}
    </div>
  );
}

function SettingsRow({ label, children }) {
  return (
    <div className="py-2.5 border-b border-[var(--color-hairline)] last:border-b-0">
      <span className="flex items-center gap-2 text-[0.7rem] text-[var(--color-ink-subtle)] font-semibold uppercase tracking-wider mb-1.5">
        {label}
      </span>
      {children}
    </div>
  );
}

function KeyInputRow({ value, onChange, saved, hasKey, onSave, onClear, placeholder }) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      <input
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        spellCheck={false}
        className="flex-1 min-w-0 min-h-10 bg-[var(--color-surface)] border border-[var(--color-hairline)] rounded-md text-[var(--color-ink)] px-2.5 py-1.5 text-sm font-mono focus:outline-none focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20"
      />
      <button
        className="px-3 py-1.5 min-h-10 rounded-md bg-[var(--color-primary)] text-white text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[var(--color-primary-lift)]"
        onClick={onSave}
        disabled={!value.trim() || saved}
      >
        {saved ? "Saved" : "Save"}
      </button>
      {hasKey && (
        <button
          className="px-3 py-1.5 min-h-10 rounded-md bg-[var(--color-error-soft)] text-[var(--color-error)] border border-[var(--color-error)]/30 text-xs font-semibold hover:bg-[var(--color-error)]/15"
          onClick={onClear}
        >
          Clear
        </button>
      )}
    </div>
  );
}

function KeyHint({ children }) {
  return (
    <span className="block mt-1 text-[0.7rem] text-[var(--color-ink-subtle)]">{children}</span>
  );
}

function KeySavedBadge() {
  return (
    <span className="text-[0.65rem] px-1.5 py-0.5 rounded normal-case tracking-normal font-semibold bg-[var(--color-success-soft)] text-[var(--color-success)] border border-[var(--color-success)]/30">
      Saved
    </span>
  );
}

function KeyStatusRow({ label, status }) {
  const row = "flex items-center gap-2 text-xs px-2 py-1.5 bg-[var(--color-surface)] rounded-md";
  const dot = "w-2 h-2 rounded-full shrink-0";
  const labelCls = "flex-1 text-[var(--color-ink-muted)] font-medium text-xs";
  const valCls = "text-[0.72rem] font-semibold whitespace-nowrap";

  if (!status.configured) {
    return (
      <div className={row}>
        <span className={`${dot} bg-[var(--color-hairline-strong)]`} />
        <span className={labelCls}>{label}</span>
        <span className={`${valCls} text-[var(--color-ink-subtle)]`}>No key</span>
      </div>
    );
  }
  if (status.valid === false) {
    return (
      <div className={row}>
        <span className={`${dot} bg-[var(--color-error)]`} />
        <span className={labelCls}>{label}</span>
        <span className={`${valCls} text-[var(--color-error)]`}>{status.error || "Invalid"}</span>
      </div>
    );
  }
  if (status.rate_limited) {
    return (
      <div className={row}>
        <span className={`${dot} bg-[var(--color-warning)]`} />
        <span className={labelCls}>{label}</span>
        <span className={`${valCls} text-[var(--color-warning)]`}>Rate limited</span>
      </div>
    );
  }
  if (status.valid) {
    return (
      <div className={row}>
        <span className={`${dot} bg-[var(--color-success)]`} />
        <span className={labelCls}>{label}</span>
        <span className={`${valCls} text-[var(--color-success)]`}>
          {status.remaining != null ? `${status.remaining} searches left` : "Active"}
        </span>
      </div>
    );
  }
  return (
    <div className={row}>
      <span className={`${dot} bg-[var(--color-hairline-strong)]`} />
      <span className={labelCls}>{label}</span>
      <span className={`${valCls} text-[var(--color-ink-subtle)]`}>{status.error || "Unknown"}</span>
    </div>
  );
}

export default Header;
