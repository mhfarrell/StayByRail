// Flagship rail lines — seed data for the line-centric positioning.
//
// This file is intentionally small for Phase 4 (homepage Featured Lines
// carousel). Phase 5 of UI_OVERHAUL_PLAN.md expands this into a full
// data layer backing 500–1500 programmatic /lines/:slug pages, with
// station order, agency colour, interchange info, and hotel counts.
//
// MAINTENANCE: slugs must stay URL-safe and match (eventually) the
// /lines/:slug route. Operators and colours come from each transit
// authority's brand manual — do NOT approximate; real colours are part
// of the CVD-safe-by-accident rail design tradition.

export const flagshipLines = [
  {
    slug: "tokyo-yamanote",
    name: "Yamanote Line",
    city: "Tokyo",
    country: "Japan",
    operator: "JR East",
    colorHex: "#9ACD32",
    stopCount: 29,
    keyStops: ["Shinjuku", "Shibuya", "Ebisu", "Shinagawa", "Tokyo", "Ueno", "Ikebukuro"],
    blurb: "The loop that ties Tokyo together. Base yourself anywhere on it and every major district is one ride away.",
  },
  {
    slug: "london-central",
    name: "Central Line",
    city: "London",
    country: "United Kingdom",
    operator: "Transport for London",
    colorHex: "#E32017",
    stopCount: 49,
    keyStops: ["Notting Hill Gate", "Oxford Circus", "Bank", "Liverpool Street", "Stratford"],
    blurb: "West-to-east through the heart of London. Hotels near any Central stop put the city within 20 minutes.",
  },
  {
    slug: "london-elizabeth",
    name: "Elizabeth Line",
    city: "London",
    country: "United Kingdom",
    operator: "Transport for London",
    colorHex: "#6950A1",
    stopCount: 41,
    keyStops: ["Paddington", "Bond Street", "Tottenham Court Road", "Liverpool Street", "Canary Wharf"],
    blurb: "Heathrow to the City in forty minutes. The fastest way to base yourself near a direct-airport rail line.",
  },
  {
    slug: "paris-rer-a",
    name: "RER A",
    city: "Paris",
    country: "France",
    operator: "RATP / SNCF",
    colorHex: "#E2231A",
    stopCount: 46,
    keyStops: ["La Défense", "Charles de Gaulle – Étoile", "Auber", "Châtelet – Les Halles", "Nation"],
    blurb: "The east-west express under Paris. Five stops cover the whole central arrondissement sweep.",
  },
  {
    slug: "paris-metro-1",
    name: "Metro Line 1",
    city: "Paris",
    country: "France",
    operator: "RATP",
    colorHex: "#FFCD00",
    stopCount: 25,
    keyStops: ["La Défense", "Champs-Élysées – Clémenceau", "Concorde", "Louvre", "Bastille", "Château de Vincennes"],
    blurb: "Paris's tourist-route spine: the Louvre, the Tuileries, the Champs-Élysées, Bastille — all one line.",
  },
  {
    slug: "nyc-acel",
    name: "A · C · E Lines",
    city: "New York",
    country: "United States",
    operator: "MTA",
    colorHex: "#0039A6",
    stopCount: 32,
    keyStops: ["Inwood", "Columbus Circle", "42 St – Port Authority", "W 4 St", "Canal St", "World Trade Center"],
    blurb: "Manhattan's west-side express. Everything worth walking to is within three stops of a blue-line station.",
  },
  {
    slug: "nyc-123",
    name: "1 · 2 · 3 Lines",
    city: "New York",
    country: "United States",
    operator: "MTA",
    colorHex: "#EE352E",
    stopCount: 38,
    keyStops: ["96 St", "72 St", "Times Sq – 42 St", "Penn Station", "14 St", "Chambers St", "South Ferry"],
    blurb: "The Broadway corridor. Penn Station to Times Square to the Village in five stops.",
  },
  {
    slug: "shinkansen-tokaido",
    name: "Tōkaidō Shinkansen",
    city: "Tokyo · Nagoya · Osaka",
    country: "Japan",
    operator: "JR Central",
    colorHex: "#0B318F",
    stopCount: 17,
    keyStops: ["Tokyo", "Shinagawa", "Shin-Yokohama", "Nagoya", "Kyoto", "Shin-Osaka"],
    blurb: "Japan's original bullet train. Base near any Tōkaidō stop and three cities open up in two hours each.",
  },
  {
    slug: "tokyo-metro-ginza",
    name: "Ginza Line",
    city: "Tokyo",
    country: "Japan",
    operator: "Tokyo Metro",
    colorHex: "#FF9500",
    stopCount: 19,
    keyStops: ["Shibuya", "Omotesandō", "Ginza", "Asakusa"],
    blurb: "Tokyo's oldest subway line — Shibuya to Asakusa, cutting straight through the best of the city.",
  },
  {
    slug: "hong-kong-island",
    name: "Island Line",
    city: "Hong Kong",
    country: "China",
    operator: "MTR",
    colorHex: "#0072BC",
    stopCount: 17,
    keyStops: ["Kennedy Town", "Central", "Admiralty", "Causeway Bay", "North Point", "Chai Wan"],
    blurb: "Hong Kong Island, end to end. Central and Causeway Bay are three stops apart on the same side of the harbour.",
  },
];
