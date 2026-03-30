import { useState, useEffect } from "react";

const LS_KEY = "staybyrail_serpapi_key";

function Settings() {
  const [open, setOpen] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [saved, setSaved] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem(LS_KEY);
    if (stored) {
      setApiKey(stored);
      setSaved(true);
    }
  }, []);

  const handleSave = () => {
    if (!apiKey.trim()) return;
    localStorage.setItem(LS_KEY, apiKey.trim());
    setSaved(true);
    setMessage({ type: "ok", text: "Key saved — it will be used for your searches" });
    setTimeout(() => setMessage(null), 3000);
  };

  const handleClear = () => {
    localStorage.removeItem(LS_KEY);
    setApiKey("");
    setSaved(false);
    setMessage({ type: "ok", text: "Key removed — using default server key" });
    setTimeout(() => setMessage(null), 3000);
  };

  const hasKey = saved && apiKey.length > 0;
  const preview = hasKey
    ? apiKey.slice(0, 4) + "****..." + apiKey.slice(-3)
    : null;

  return (
    <div className="settings-panel">
      <button
        className="settings-toggle"
        onClick={() => setOpen(!open)}
        title="Settings"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="3" />
          <path d="M10 1.5v2M10 16.5v2M3.3 3.3l1.4 1.4M15.3 15.3l1.4 1.4M1.5 10h2M16.5 10h2M3.3 16.7l1.4-1.4M15.3 4.7l1.4-1.4" />
        </svg>
        <span>API Key</span>
        <span className={`settings-indicator ${hasKey ? "ind-on" : "ind-off"}`} />
      </button>

      {open && (
        <div className="settings-body">
          <div className="settings-row">
            <label className="settings-label" htmlFor="serpapi-key">
              SerpAPI Key (optional)
            </label>
            <div className="settings-input-group">
              <input
                id="serpapi-key"
                type="password"
                className="settings-input"
                value={apiKey}
                onChange={(e) => { setApiKey(e.target.value); setSaved(false); }}
                placeholder="Paste your key for unlimited searches..."
                spellCheck={false}
              />
              <button
                className="settings-save-btn"
                onClick={handleSave}
                disabled={!apiKey.trim() || saved}
              >
                {saved ? "Saved" : "Save Key"}
              </button>
              {hasKey && (
                <button
                  className="settings-save-btn settings-clear-btn"
                  onClick={handleClear}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="settings-footer">
            <span className={`settings-status ${hasKey ? "status-active" : "status-inactive"}`}>
              <span className={`status-dot ${hasKey ? "dot-on" : "dot-off"}`} />
              {hasKey
                ? `Your key (${preview})`
                : "Using default key"}
            </span>
            <span className="settings-hint">
              Your key stays in your browser only — never sent to our servers.{" "}
              <a href="https://serpapi.com" target="_blank" rel="noopener noreferrer">
                Get a free key
              </a>{" "}
              (250 searches/month)
            </span>
          </div>

          {message && (
            <div className={`settings-msg ${message.type === "ok" ? "msg-ok" : "msg-err"}`}>
              {message.text}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Settings;
