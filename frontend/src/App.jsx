import { useState, useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdUnit from "./components/AdUnit";
import HomePage from "./pages/HomePage";
import CookieConsent from "./components/CookieConsent";

// Heavy/secondary routes are code-split so the initial bundle stays small.
// HomePage is eager-loaded because it's the LCP target for organic traffic.
const SearchPage = lazy(() => import("./pages/SearchPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));
const CoveragePage = lazy(() => import("./pages/CoveragePage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const GuidesIndexPage = lazy(() => import("./pages/GuidesIndexPage"));
const GuidePage = lazy(() => import("./pages/GuidePage"));
const TravelGuidePage = lazy(() => import("./pages/TravelGuidePage"));
const TrainTimesPage = lazy(() => import("./pages/TrainTimesPage"));
const StationLandingPage = lazy(() => import("./pages/StationLandingPage"));
const AuthorPage = lazy(() => import("./pages/AuthorPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const PassesIndexPage = lazy(() => import("./pages/PassesIndexPage"));
const PassPage = lazy(() => import("./pages/PassPage"));
const CountriesIndexPage = lazy(() => import("./pages/CountriesIndexPage"));
const CountryPage = lazy(() => import("./pages/CountryPage"));
const JournalIndexPage = lazy(() => import("./pages/JournalIndexPage"));
const JournalArticlePage = lazy(() => import("./pages/JournalArticlePage"));
const ItinerariesIndexPage = lazy(() => import("./pages/ItinerariesIndexPage"));
const ItineraryPage = lazy(() => import("./pages/ItineraryPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/header.css";
import "./styles/footer.css";
import "./styles/search-form.css";
import "./styles/results.css";
import "./styles/hotel-card.css";
import "./styles/hotel-map.css";
import "./styles/sources-banner.css";
import "./styles/content.css";
import "./styles/pages.css";
import "./styles/shortlist.css";
import "./styles/guides.css";

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

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

// Ping the backend every 5 min to stop Render free tier from sleeping
function useKeepAlive() {
  useEffect(() => {
    const ping = () => fetch(`${API}/cities`).catch(() => {});
    ping();
    const id = setInterval(ping, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);
}

function App() {
  const { theme, toggle: toggleTheme } = useTheme();
  useKeepAlive();

  return (
    <BrowserRouter>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      <div className="page-wrapper">
        <aside className="ad-rail ad-rail-left">
          <div className="ad-slot ad-slot-tall">
            <AdUnit format="vertical" style={{ width: 160, height: 600 }} />
          </div>
          <div className="ad-slot ad-slot-square">
            <AdUnit format="rectangle" style={{ width: 160, height: 250 }} />
          </div>
        </aside>

        <main className="app">
          <Suspense fallback={<div className="route-loading"><div className="spinner" /></div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/coverage" element={<CoveragePage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/guides" element={<GuidesIndexPage />} />
              <Route path="/guides/:slug" element={<GuidePage />} />
              <Route path="/travel-guide" element={<TravelGuidePage />} />
              <Route path="/train-times" element={<TrainTimesPage />} />
              <Route path="/hotels-near/:slug" element={<StationLandingPage />} />
              <Route path="/authors/:slug" element={<AuthorPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/passes" element={<PassesIndexPage />} />
              <Route path="/passes/:slug" element={<PassPage />} />
              <Route path="/countries" element={<CountriesIndexPage />} />
              <Route path="/countries/:slug" element={<CountryPage />} />
              <Route path="/journal" element={<JournalIndexPage />} />
              <Route path="/journal/:slug" element={<JournalArticlePage />} />
              <Route path="/itineraries" element={<ItinerariesIndexPage />} />
              <Route path="/itineraries/:slug" element={<ItineraryPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>

          <div className="ad-banner">
            <AdUnit format="horizontal" style={{ width: "100%", height: 90 }} />
          </div>

          <Footer />
        </main>

        <aside className="ad-rail ad-rail-right">
          <div className="ad-slot ad-slot-tall">
            <AdUnit format="vertical" style={{ width: 160, height: 600 }} />
          </div>
          <div className="ad-slot ad-slot-square">
            <AdUnit format="rectangle" style={{ width: 160, height: 250 }} />
          </div>
        </aside>
      </div>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
