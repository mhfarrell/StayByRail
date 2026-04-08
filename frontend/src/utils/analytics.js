// Conversion-tracking skeleton.
//
// StayByRail does not ship any analytics by default. The site's Privacy
// Policy promises that if analytics are added, the policy page will be
// updated *before* the script is deployed. To keep that promise honest,
// Plausible only loads when `VITE_PLAUSIBLE_DOMAIN` is set on the build
// (e.g. in the Cloudflare Pages environment). In local dev and in the
// current production build the analytics code paths are no-ops.
//
// Why Plausible and not GA4:
//   - Privacy-first: no cookies, GDPR/PECR friendly, no consent banner.
//   - Simple custom event API (`window.plausible(name, { props })`).
//   - One-line script, no measurement ID dance, no IP logging.
//
// How to turn it on later:
//   1. Create a Plausible site (or use the self-hosted Plausible CE).
//   2. Set `VITE_PLAUSIBLE_DOMAIN=staybyrail.co.uk` in the Cloudflare
//      Pages build env (the property name on your Plausible dashboard).
//   3. Optional: set `VITE_PLAUSIBLE_API=https://plausible.example.com`
//      if you're self-hosting. Defaults to https://plausible.io.
//   4. Update the Privacy page to reflect the new analytics before the
//      redeploy lands.
//
// Affiliate click tracking:
//   Any <a data-affiliate="X"> link on the page will fire an
//   `Affiliate Click` custom event with `{ network: X, href: ... }`
//   when the user clicks it, regardless of which component rendered
//   the link. This single document-level listener means we don't have
//   to wire a handler onto every CTA.

const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN || "";
const PLAUSIBLE_API = import.meta.env.VITE_PLAUSIBLE_API || "https://plausible.io";

let initialised = false;

export function initAnalytics() {
  if (initialised) return;
  initialised = true;

  // Always install the affiliate-click listener — it's free, doesn't
  // send anything over the network unless Plausible is live, and it
  // also fires a dispatched CustomEvent that other code (e.g. future
  // A/B test harnesses) can listen for.
  if (typeof document !== "undefined") {
    document.addEventListener("click", handleAffiliateClick, { capture: true });
  }

  // Load Plausible only when a site has been configured for it.
  if (!PLAUSIBLE_DOMAIN || typeof document === "undefined") return;

  const existing = document.querySelector('script[data-plausible-loaded]');
  if (existing) return;

  const script = document.createElement("script");
  script.defer = true;
  script.setAttribute("data-domain", PLAUSIBLE_DOMAIN);
  script.setAttribute("data-plausible-loaded", "true");
  script.src = `${PLAUSIBLE_API}/js/script.outbound-links.js`;
  document.head.appendChild(script);

  // Plausible's recommended custom-event shim so `window.plausible(...)`
  // calls that fire before the main script has loaded are queued.
  if (!window.plausible) {
    window.plausible = function () {
      (window.plausible.q = window.plausible.q || []).push(arguments);
    };
  }
}

function handleAffiliateClick(event) {
  // Find the nearest <a> ancestor with data-affiliate. Clicks on child
  // <span>s or <svg>s should still count.
  const link = event.target.closest && event.target.closest("a[data-affiliate]");
  if (!link) return;
  const network = link.getAttribute("data-affiliate");
  const href = link.getAttribute("href") || "";
  trackEvent("Affiliate Click", { network, href });
  // Also dispatch a DOM CustomEvent so non-analytics code can react
  // (e.g. a future A/B test harness that wants to count conversions).
  document.dispatchEvent(
    new CustomEvent("staybyrail:affiliateclick", {
      detail: { network, href },
    })
  );
}

// Fire a custom event through whichever analytics backend is installed.
// Safe to call regardless of whether analytics is active — the function
// just no-ops when Plausible isn't loaded.
export function trackEvent(name, props) {
  if (typeof window === "undefined") return;
  if (typeof window.plausible !== "function") return;
  try {
    window.plausible(name, { props: props || {} });
  } catch {
    // Never let an analytics failure break the user's flow.
  }
}

export const _internal = { handleAffiliateClick };
