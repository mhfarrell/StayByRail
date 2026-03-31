import { useState, useEffect } from "react";

const API = import.meta.env.VITE_API_URL || "http://localhost:4850/api";

const WMO = {
  0: "Clear sky", 1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Fog", 48: "Freezing fog",
  51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
  61: "Light rain", 63: "Rain", 65: "Heavy rain",
  71: "Light snow", 73: "Snow", 75: "Heavy snow", 77: "Snow grains",
  80: "Rain showers", 81: "Showers", 82: "Heavy showers",
  85: "Snow showers", 86: "Heavy snow showers",
  95: "Thunderstorm", 96: "Thunderstorm + hail", 99: "Thunderstorm + hail",
};

const WMO_ICON = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️",
  45: "🌫️", 48: "🌫️",
  51: "🌦️", 53: "🌦️", 55: "🌧️",
  61: "🌧️", 63: "🌧️", 65: "🌧️",
  71: "🌨️", 73: "❄️", 75: "❄️", 77: "❄️",
  80: "🌦️", 81: "🌦️", 82: "⛈️",
  85: "🌨️", 86: "❄️",
  95: "⛈️", 96: "⛈️", 99: "⛈️",
};

export function useCityData(guide) {
  const [image, setImage] = useState(null);
  const [weather, setWeather] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    if (!guide) return;
    setImage(null);
    setWeather(null);
    setEvents(null);

    // Wikipedia image
    if (guide.wikipedia) {
      const cacheKey = `sbr_wiki_${guide.slug}`;
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setImage(JSON.parse(cached));
      } else {
        fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(guide.wikipedia)}`
        )
          .then((r) => r.json())
          .then((data) => {
            if (data.originalimage?.source || data.thumbnail?.source) {
              const src =
                data.originalimage?.source ||
                data.thumbnail.source.replace(/\/\d+px-/, "/800px-");
              const img = { src, caption: data.description || data.title };
              sessionStorage.setItem(cacheKey, JSON.stringify(img));
              setImage(img);
            }
          })
          .catch(() => {});
      }
    }

    // Open-Meteo weather (no key required)
    if (guide.lat && guide.lon) {
      const cacheKey = `sbr_wx_${guide.slug}`;
      const cached = sessionStorage.getItem(cacheKey);
      const cacheAge = sessionStorage.getItem(`${cacheKey}_ts`);
      const fresh = cacheAge && Date.now() - Number(cacheAge) < 30 * 60 * 1000;
      if (cached && fresh) {
        setWeather(JSON.parse(cached));
      } else {
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${guide.lat}&longitude=${guide.lon}&current=temperature_2m,weathercode,windspeed_10m&timezone=auto`
        )
          .then((r) => r.json())
          .then((data) => {
            if (data.current) {
              const code = data.current.weathercode;
              const wx = {
                temp: Math.round(data.current.temperature_2m),
                unit: "°C",
                condition: WMO[code] || "Unknown",
                icon: WMO_ICON[code] || "🌡️",
                wind: Math.round(data.current.windspeed_10m),
              };
              sessionStorage.setItem(cacheKey, JSON.stringify(wx));
              sessionStorage.setItem(`${cacheKey}_ts`, String(Date.now()));
              setWeather(wx);
            }
          })
          .catch(() => {});
      }
    }
    // Ticketmaster events (via backend to keep key server-side)
    if (guide.city) {
      const cacheKey = `sbr_events_${guide.slug}`;
      const cached = sessionStorage.getItem(cacheKey);
      const cacheTs = sessionStorage.getItem(`${cacheKey}_ts`);
      const fresh = cacheTs && Date.now() - Number(cacheTs) < 3 * 60 * 60 * 1000;
      if (cached && fresh) {
        setEvents(JSON.parse(cached));
      } else {
        const qs = new URLSearchParams({ city: guide.city });
        if (guide.countryCode) qs.set("country_code", guide.countryCode);
        fetch(`${API}/events?${qs}`)
          .then((r) => r.json())
          .then((data) => {
            const list = data.events || [];
            sessionStorage.setItem(cacheKey, JSON.stringify(list));
            sessionStorage.setItem(`${cacheKey}_ts`, String(Date.now()));
            setEvents(list);
          })
          .catch(() => setEvents([]));
      }
    }
  }, [guide?.slug]);

  return { image, weather, events };
}
