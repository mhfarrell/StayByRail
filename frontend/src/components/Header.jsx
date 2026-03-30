function Header({ theme, onToggleTheme }) {
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
        <div className="header-actions">
          <span className="header-badge">52 cities</span>
          <span className="header-badge">6 countries</span>
          <button
            className="header-theme-toggle"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg className="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg className="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
