// Lightweight metadata for the HomePage hero carousel and "latest from the
// journal" strip.
//
// Why this file exists: HomePage is the only eager route in the app (it's the
// LCP target), so anything it imports lands in the main JS bundle. Previously
// HomePage imported the full cityGuides.js (~215 KB of guide prose) and
// journal.js (~78 KB of article prose) just to pull a handful of slugs,
// titles, and one-line blurbs out of them. That dragged ~290 KB of dead weight
// into the initial bundle. Splitting the metadata out keeps those two modules
// entirely off the homepage path — they now only load when the user visits a
// guide/journal route.
//
// MAINTENANCE:
//   - featuredCities: the exact 10 cards shown in the homepage carousel. Edit
//     this list (or reorder it) to change the homepage curation. The slugs
//     must exist in cityGuides.js.
//   - featuredJournalArticles: curated order of journal articles for the
//     homepage "Latest from the journal" strip. HomePage shows the first 3
//     in list order (NOT sorted by datePublished) so the editor can pin a
//     travel diary or evergreen piece above the latest dated post. When
//     shipping a new article to journal.js, decide where to slot it here
//     and mirror its slug/title/subtitle/category/datePublished fields.
//   - totalCityGuides: the number printed on the "Browse more" card. Bump it
//     when adding a new city guide.

export const totalCityGuides = 42;

export const featuredCities = [
  {
    slug: "tokyo",
    city: "Tokyo",
    country: "Japan",
    heroLine: "The world's most extensive urban rail network",
    keyStationCount: 6,
    wikipedia: "Tokyo",
    accent: "red",
  },
  {
    slug: "london",
    city: "London",
    country: "United Kingdom",
    heroLine: "The Underground that connects 270 stations across 11 lines",
    keyStationCount: 6,
    wikipedia: "London",
    accent: "blue",
  },
  {
    slug: "paris",
    city: "Paris",
    country: "France",
    heroLine: "Sixteen Metro lines serving every arrondissement in the city",
    keyStationCount: 5,
    wikipedia: "Paris",
    accent: "purple",
  },
  {
    slug: "new_york",
    city: "New York",
    country: "United States",
    heroLine: "Amtrak's Northeast Corridor hub with 472 subway stations",
    keyStationCount: 6,
    wikipedia: "New York City",
    accent: "blue",
  },
  {
    slug: "osaka",
    city: "Osaka",
    country: "Japan",
    heroLine: "Japan's kitchen city, built around the Midosuji Line",
    keyStationCount: 5,
    wikipedia: "Osaka",
    accent: "red",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    country: "Spain",
    heroLine: "Gaudí's city, connected by a Metro network of eleven lines",
    keyStationCount: 5,
    wikipedia: "Barcelona",
    accent: "orange",
  },
  {
    slug: "bangkok",
    city: "Bangkok",
    country: "Thailand",
    heroLine: "Beat Bangkok traffic with the BTS Skytrain and MRT",
    keyStationCount: 5,
    wikipedia: "Bangkok",
    accent: "teal",
  },
  {
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    heroLine: "A reunified city with two overlapping rail networks",
    keyStationCount: 5,
    wikipedia: "Berlin",
    accent: "green",
  },
  {
    slug: "kyoto",
    city: "Kyoto",
    country: "Japan",
    heroLine: "Japan's cultural capital, best explored from its central station",
    keyStationCount: 5,
    wikipedia: "Kyoto",
    accent: "purple",
  },
  {
    slug: "madrid",
    city: "Madrid",
    country: "Spain",
    heroLine: "Europe's third-largest metro system, covering the whole capital",
    keyStationCount: 5,
    wikipedia: "Madrid",
    accent: "blue",
  },
];

export const featuredJournalArticles = [
  {
    slug: "sixteen-days-in-japan-january-2025",
    title: "Sixteen days in Japan: Tokyo, castles, and a close-up of Mount Fuji",
    subtitle:
      "Notes and photos from a January 2025 trip. Tokyo's a planet of its own, Osaka Castle hits different at night, and Himeji's gardens deserve the detour.",
    category: "Travel diary",
    datePublished: "2025-01-29",
  },
  {
    slug: "madrid-atocha-vs-chamartin-where-to-stay",
    title: "Madrid Atocha vs Chamart\u00edn: which station should you actually stay near",
    subtitle:
      "Madrid has two long-distance stations that serve completely different parts of the city. The one you sleep near reshapes your trip in ways the AVE map never warns you about.",
    category: "Decision guide",
    datePublished: "2026-04-08",
  },
  {
    slug: "kyoto-without-a-car-temples-by-bus-subway",
    title: "Kyoto without a car: every temple you can reach by bus and subway",
    subtitle:
      "Kyoto's rail network is small and the subway only has two lines, but the bus system fills every gap. Here's the complete guide to reaching every major temple without renting a car.",
    category: "Utility",
    datePublished: "2026-04-08",
  },
  {
    slug: "hammersmith-london-hotel-base-nobody-talks-about",
    title: "Hammersmith: the London hotel base nobody talks about",
    subtitle:
      "Four Tube lines, direct to Heathrow, ten minutes to Green Park, and rooms at a third of the price. The case for west London's most underrated interchange.",
    category: "Editor's pick",
    datePublished: "2026-04-08",
  },
  {
    slug: "quietest-hotels-near-gare-du-nord",
    title: "The quietest hotels near Gare du Nord",
    subtitle:
      "Gare du Nord is loud, chaotic, and surrounded by hotels of wildly varying quality. Here's how to pick one where you can actually sleep.",
    category: "Practical",
    datePublished: "2026-04-08",
  },
  {
    slug: "why-otsuka-is-tokyos-most-underrated-hotel-base",
    title: "Why Otsuka is Tokyo's most underrated hotel base",
    subtitle:
      "An editor's pick expanded: the quiet Yamanote Line neighbourhood that undercuts Shinjuku on price without compromising on transport.",
    category: "Editor's pick",
    datePublished: "2026-04-05",
  },
  {
    slug: "london-zone-1-vs-zone-2-hotel-cost",
    title: "London Zone 1 vs Zone 2: the real hotel cost difference",
    subtitle:
      "How much you actually save by stepping one stop outside central London, and when it stops being worth it.",
    category: "Data",
    datePublished: "2026-04-01",
  },
  {
    slug: "eurostar-vs-budget-flight-london-paris",
    title: "Eurostar vs budget flight London to Paris: the honest breakdown",
    subtitle:
      "Door-to-door time, real cost after all the fees, carbon, and what actually happens when each one goes wrong.",
    category: "Comparison",
    datePublished: "2026-03-28",
  },
  {
    slug: "shinkansen-vs-flying-tokyo-osaka-2026",
    title: "Shinkansen vs flying Tokyo to Osaka in 2026",
    subtitle:
      "The comparison most travel blogs get wrong: total door-to-door time, real costs after airport transfers, and what changed after the 2023 JR Pass hike.",
    category: "Comparison",
    datePublished: "2026-03-25",
  },
  {
    slug: "bangkok-bts-vs-mrt-where-to-stay",
    title: "Bangkok BTS vs MRT: which line should you actually stay on",
    subtitle:
      "A beginner-friendly decision guide to Bangkok's two main rail networks and the hotels that sit alongside them.",
    category: "Decision guide",
    datePublished: "2026-03-18",
  },
];
