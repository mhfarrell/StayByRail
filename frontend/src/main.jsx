import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initAnalytics } from "./utils/analytics";

// No-op unless VITE_PLAUSIBLE_DOMAIN is set on the build. Still installs
// the affiliate-click listener so the conversion funnel is observable
// the moment analytics is switched on.
initAnalytics();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
