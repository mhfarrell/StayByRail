import { useState } from "react";

function ShortlistPanel({ items, onToggle, onClear }) {
  const [open, setOpen] = useState(false);

  if (items.length === 0) return null;

  return (
    <>
      <button className="shortlist-bar" onClick={() => setOpen(true)}>
        <span className="shortlist-bar-heart">♥</span>
        <span className="shortlist-bar-label">
          {items.length} shortlisted
        </span>
        <span className="shortlist-bar-cta">Compare →</span>
      </button>

      {open && (
        <>
          <div className="shortlist-backdrop" onClick={() => setOpen(false)} />
          <div className="shortlist-panel">
            <div className="shortlist-panel-header">
              <h3 className="shortlist-panel-title">
                Shortlisted Hotels
                <span className="shortlist-panel-count">{items.length}</span>
              </h3>
              <div className="shortlist-header-actions">
                <button className="shortlist-clear-btn" onClick={() => { onClear(); setOpen(false); }}>
                  Clear all
                </button>
                <button className="shortlist-close-btn" onClick={() => setOpen(false)} aria-label="Close">
                  ×
                </button>
              </div>
            </div>

            <div className="shortlist-panel-list">
              {items.map((hotel) => (
                <div key={hotel.name} className="shortlist-item">
                  {hotel.thumbnail && (
                    <img
                      className="shortlist-thumb"
                      src={hotel.thumbnail}
                      alt={hotel.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  )}
                  <div className="shortlist-item-info">
                    <span className="shortlist-item-name">{hotel.name}</span>
                    <span className="shortlist-item-meta">
                      {hotel.walk_minutes != null && `${hotel.walk_minutes} min · `}
                      {hotel.nearest_station}
                    </span>
                    {hotel.overall_rating && (
                      <span className="shortlist-item-rating">★ {hotel.overall_rating}</span>
                    )}
                  </div>
                  <div className="shortlist-item-right">
                    <div className="shortlist-item-price">
                      <span className="shortlist-price">{hotel.price_per_night_str || "N/A"}</span>
                      <span className="shortlist-price-label">/ night</span>
                    </div>
                    <div className="shortlist-item-actions">
                      {hotel.link && (
                        <a
                          href={hotel.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shortlist-book-btn"
                        >
                          Book
                        </a>
                      )}
                      <button
                        className="shortlist-remove-btn"
                        onClick={() => onToggle(hotel)}
                        aria-label="Remove"
                        title="Remove from shortlist"
                      >
                        ×
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShortlistPanel;
