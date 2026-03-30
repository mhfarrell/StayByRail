import { useState } from "react";

const KEY = "staybyrail_shortlist";

function load() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
  catch { return []; }
}

function persist(items) {
  try { localStorage.setItem(KEY, JSON.stringify(items)); } catch {}
}

export function useShortlist() {
  const [items, setItems] = useState(load);

  const toggle = (hotel) => {
    const inList = items.some((h) => h.name === hotel.name);
    const next = inList
      ? items.filter((h) => h.name !== hotel.name)
      : [
          ...items,
          {
            name: hotel.name,
            price_per_night: hotel.price_per_night,
            price_per_night_str: hotel.price_per_night_str,
            total_price_str: hotel.total_price_str,
            nearest_station: hotel.nearest_station,
            walk_minutes: hotel.walk_minutes,
            overall_rating: hotel.overall_rating,
            reviews: hotel.reviews,
            link: hotel.link,
            num_nights: hotel.num_nights,
            thumbnail: hotel.thumbnail,
          },
        ];
    setItems(next);
    persist(next);
  };

  const clear = () => { setItems([]); persist([]); };
  const isIn = (name) => items.some((h) => h.name === name);

  return { items, toggle, clear, isIn };
}
