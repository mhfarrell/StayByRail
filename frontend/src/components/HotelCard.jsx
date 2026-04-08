import { affiliateUrl, isAffiliateSite } from "../utils/affiliate";

function HotelCard({ hotel, cardId, priceMode, checkIn, checkOut, adults, wishlist, onShortlist, isShortlisted, isCheapest, isGoodValue }) {
  const stars = hotel.hotel_class
    ? "★".repeat(hotel.hotel_class) + "☆".repeat(5 - hotel.hotel_class)
    : null;

  const showPerNight = priceMode === "per_night";
  const guestCount = adults || 2;
  const score = hotel.wishlist_score;

  const gps = hotel.gps_coordinates;
  const osmLink =
    gps?.latitude && gps?.longitude
      ? `https://www.openstreetmap.org/?mlat=${gps.latitude}&mlon=${gps.longitude}#map=17/${gps.latitude}/${gps.longitude}`
      : null;

  const rawCheapestLink = hotel.link || null;
  // Wrap every outbound booking URL through the affiliate helper. Until
  // CJ approval lands, the helper returns the URL unchanged — so this is
  // a no-op in the current build and becomes live the moment the
  // VITE_CJ_* env vars are set on the Cloudflare Pages build.
  const cheapestLink = affiliateUrl(rawCheapestLink);
  const cheapestIsAffiliate = isAffiliateSite(rawCheapestLink);

  const cheapestSite = (() => {
    // Resolve the display label from the raw (un-wrapped) URL — the CJ
    // click-through URL points at anrdoezrs.net, which would otherwise
    // show up as 'anrdoezrs.net' on the label.
    if (!rawCheapestLink) return null;
    try {
      const host = new URL(rawCheapestLink).hostname.replace("www.", "");
      if (host.includes("booking.com")) return "Booking.com";
      if (host.includes("agoda")) return "Agoda";
      if (host.includes("expedia")) return "Expedia";
      if (host.includes("hotels.com")) return "Hotels.com";
      if (host.includes("trip.com")) return "Trip.com";
      if (host.includes("jalan.net")) return "Jalan";
      if (host.includes("rakuten")) return "Rakuten Travel";
      if (host.includes("ikyu")) return "Ikyu";
      return host.length > 25 ? host.slice(0, 22) + "..." : host;
    } catch {
      return null;
    }
  })();

  const bookingLink = (() => {
    const params = new URLSearchParams({
      ss: hotel.name,
      checkin: checkIn || "",
      checkout: checkOut || "",
      group_adults: String(guestCount),
      no_rooms: "1",
      selected_currency: "GBP",
    });
    const rawUrl = `https://www.booking.com/searchresults.html?${params.toString()}`;
    return affiliateUrl(rawUrl);
  })();

  const isBookingCheapest = cheapestSite === "Booking.com";
  const showBadges = isCheapest || isGoodValue;

  return (
    <div className="hotel-card" id={cardId}>
      {hotel.thumbnail && (
        <div className="hotel-thumb">
          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      )}

      <div className="hotel-info">
        <div className="hotel-header">
          <h4>{hotel.name}</h4>
          {hotel.type && <span className="hotel-type">{hotel.type}</span>}
          {score && score.total > 0 && (
            <span className={`wishlist-badge ${score.matched === score.total ? "wb-perfect" : score.matched > 0 ? "wb-partial" : "wb-none"}`}>
              {score.matched}/{score.total}
            </span>
          )}
          {onShortlist && (
            <button
              className={`shortlist-heart-btn ${isShortlisted ? "shortlisted" : ""}`}
              onClick={() => onShortlist(hotel)}
              aria-label={isShortlisted ? "Remove from shortlist" : "Add to shortlist"}
              title={isShortlisted ? "Remove from shortlist" : "Save to shortlist"}
            >
              {isShortlisted ? "♥" : "♡"}
            </button>
          )}
        </div>

        {stars && <div className="stars">{stars}</div>}

        {/* Price badges */}
        {showBadges && (
          <div className="price-badges">
            {isCheapest && <span className="price-badge badge-cheapest">Best price</span>}
            {isGoodValue && !isCheapest && <span className="price-badge badge-value">Great value</span>}
          </div>
        )}

        {/* Primary booking CTA */}
        <div className="hotel-pricing">
          {cheapestLink ? (
            <a
              href={cheapestLink}
              target="_blank"
              rel="noopener sponsored"
              className="price-link"
              data-affiliate={cheapestIsAffiliate ? "booking" : undefined}
            >
              {showPerNight ? (
                <div className="price-per-night">
                  <span className="price-amount">{hotel.price_per_night_str || "N/A"}</span>
                  <span className="price-label">per night · {cheapestSite || "booking site"}</span>
                </div>
              ) : (
                <div className="price-total">
                  <span className="total-amount">{hotel.total_price_str || "N/A"}</span>
                  <span className="price-label">{hotel.num_nights}n · {cheapestSite || "booking site"}</span>
                </div>
              )}
              <span className="book-now-badge">
                Book →
              </span>
            </a>
          ) : (
            <div className="price-no-link">
              {showPerNight ? (
                <>
                  <span className="price-amount">{hotel.price_per_night_str || "N/A"}</span>
                  <span className="price-label">per night</span>
                </>
              ) : (
                <>
                  <span className="total-amount">{hotel.total_price_str || "N/A"}</span>
                  <span className="price-label">{hotel.num_nights}n</span>
                </>
              )}
            </div>
          )}

          {/* Secondary: Booking.com direct (only if the cheapest source
              is elsewhere). Routed through the affiliate helper so it
              earns commission once CJ approval lands. */}
          {!isBookingCheapest && (
            <a
              href={bookingLink}
              target="_blank"
              rel="noopener sponsored"
              className="booking-compare-btn"
              data-affiliate="booking"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Book via Booking.com
            </a>
          )}
        </div>

        <div className="hotel-meta">
          {hotel.overall_rating && (
            <span className="rating">
              ★ {hotel.overall_rating}
              {hotel.reviews && (
                <span className="review-count"> ({hotel.reviews.toLocaleString()} reviews)</span>
              )}
            </span>
          )}

          {hotel.walk_minutes != null && (
            <span className="walk-time">
              🚶 {hotel.walk_minutes} min to {hotel.nearest_station}
            </span>
          )}

          {osmLink && (
            <a href={osmLink} target="_blank" rel="noopener noreferrer" className="map-link">
              Map
            </a>
          )}
        </div>

        {score && score.total > 0 && (
          <div className="wishlist-results">
            {score.items.map((item) => (
              <span key={item.name} className={`tag wl-${item.status}`}>
                {item.status === "yes" ? "✓" : item.status === "no" ? "✗" : "?"} {item.name}
              </span>
            ))}
          </div>
        )}

        <div className="hotel-tags">
          {hotel.amenities &&
            hotel.amenities
              .filter((a) => !wishlist || !wishlist.some((w) => a.toLowerCase().includes(w.toLowerCase())))
              .slice(0, 5)
              .map((a) => (
                <span key={a} className="tag amenity-tag">{a}</span>
              ))}
        </div>

        {hotel.check_in_time && (
          <div className="check-times">
            Check-in: {hotel.check_in_time}
            {hotel.check_out_time && ` · Check-out: ${hotel.check_out_time}`}
          </div>
        )}
      </div>
    </div>
  );
}

export default HotelCard;
