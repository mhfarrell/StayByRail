// Affiliate link wrapper.
//
// StayByRail has applied to Commission Junction (CJ) for the Booking.com
// affiliate programme. Until that application is approved we don't have
// real publisher / advertiser IDs, so every function here passes the
// target URL straight through unchanged. When CJ approves, set the three
// environment variables below on the build (Cloudflare Pages dashboard
// or `frontend/.env`) and every Booking.com link on the site starts
// earning commission automatically:
//
//   VITE_AFFILIATE_NETWORK         — "cj" (the only one wired up right now)
//   VITE_CJ_PUBLISHER_ID           — your CJ publisher ID, e.g. 1234567
//   VITE_CJ_BOOKING_ADVERTISER_ID  — Booking.com advertiser ID on CJ
//
// Adding other networks (Awin, Impact, Partnerize, Booking.com direct)
// is a matter of dropping another branch into `affiliateUrl()` below.
//
// Every call site that wraps a URL through this helper should also set
// the `data-affiliate="booking"` attribute on the <a> tag so the
// conversion-tracking helper in `utils/analytics.js` can log the click.

const NETWORK = import.meta.env.VITE_AFFILIATE_NETWORK || "";
const CJ_PID = import.meta.env.VITE_CJ_PUBLISHER_ID || "";
const CJ_BOOKING_AID = import.meta.env.VITE_CJ_BOOKING_ADVERTISER_ID || "";

// CJ "Deep Link" destination-URL format. Works for any advertiser who
// has opted in to deep linking on the network — Booking.com has.
//   https://www.anrdoezrs.net/click-PUB-ADV?url=ENCODED_DESTINATION
// The domain can be any of CJ's tracking domains (anrdoezrs.net,
// dpbolvw.net, jdoqocy.com, kqzyfj.com, tkqlhce.com); they are
// interchangeable.
function cjBookingUrl(targetUrl) {
  if (!CJ_PID || !CJ_BOOKING_AID) return targetUrl;
  return (
    `https://www.anrdoezrs.net/click-${CJ_PID}-${CJ_BOOKING_AID}` +
    `?url=${encodeURIComponent(targetUrl)}`
  );
}

// Detect whether a URL belongs to a site we have an affiliate programme
// for. Today: Booking.com only. Expand this list as new programmes are
// approved.
export function isAffiliateSite(url) {
  if (!url) return false;
  try {
    const host = new URL(url).hostname.replace(/^www\./, "").toLowerCase();
    if (host.endsWith("booking.com")) return true;
  } catch {
    return false;
  }
  return false;
}

// Wrap a target URL in the appropriate affiliate click-through URL for
// whichever network we're approved on. Returns the original URL
// untouched if no affiliate programme applies — so calling this on
// every outbound hotel link is always safe, even before CJ approves.
export function affiliateUrl(targetUrl) {
  if (!targetUrl) return targetUrl;
  try {
    const host = new URL(targetUrl).hostname.replace(/^www\./, "").toLowerCase();
    if (host.endsWith("booking.com") && NETWORK === "cj") {
      return cjBookingUrl(targetUrl);
    }
  } catch {
    // Malformed URL — just return it unchanged, the browser will handle
    // the error if the user clicks it.
  }
  return targetUrl;
}

// Exposed for tests and for the conversion-tracking layer that wants to
// know whether a click should be logged as a "monetisable" outbound.
export const _internal = { cjBookingUrl };
