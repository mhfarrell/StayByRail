// Day-by-day itineraries. Each entry drives one /itineraries/:slug page.
//
// The shape is deliberately constrained: intro + N days + tips. Every day
// has a title, summary, and a list of stops with a time, a station, and
// an activity. The ItineraryPage renders this structure directly without
// free-form HTML.

export const itineraries = [
  {
    slug: "3-days-tokyo-yamanote-line",
    title: "3 days in Tokyo using only the Yamanote Line",
    subtitle:
      "The JR loop connects almost every major district in Tokyo. Here's a three-day plan that treats it as the only train you need.",
    excerpt:
      "One train, 30 stations, a single ticket each day. Tokyo's Yamanote Line is the most useful single line in the world for first-time visitors, and a well-planned three-day loop covers everything a first trip needs.",
    duration: "3 days",
    city: "Tokyo",
    country: "Japan",
    baseArea: "Any Yamanote Line station",
    relatedCityGuide: "tokyo",
    relatedPasses: [],
    updatedAt: "2026-04",
    intro:
      "The JR Yamanote Line is a 34.5 km loop that connects every major district of central Tokyo, runs every 2-4 minutes, and takes about an hour to complete a full circle. This three-day itinerary uses only the Yamanote Line — no Metro, no private railways, no buses — to cover the main sights without ever needing to plan a transfer. Pick any Yamanote station as your hotel base and it works identically. Our recommendation is Otsuka for value or Shinagawa if you're flying in and out of Haneda.",
    days: [
      {
        day: 1,
        title: "West side: Shinjuku, Harajuku, Shibuya",
        summary:
          "Start with the west side of the loop — the part everyone has photographs of. Shinjuku in the morning, Harajuku for lunch, Shibuya for the evening.",
        stops: [
          {
            time: "09:00",
            station: "Shinjuku",
            activity:
              "Tokyo Metropolitan Government Building — free observation decks on the 45th floor, great morning light over the city, and a useful orientation before anything else.",
          },
          {
            time: "11:00",
            station: "Shinjuku",
            activity:
              "Shinjuku Gyoen National Garden — ¥500 entry, one of Tokyo's best city parks, enough to fill 90 minutes with a coffee and a walk.",
          },
          {
            time: "13:00",
            station: "Harajuku",
            activity:
              "Takeshita Street for crepes and browsing, then loop round to Meiji Shrine for a genuinely quiet forest walk inside the middle of the city.",
          },
          {
            time: "16:00",
            station: "Shibuya",
            activity:
              "Shibuya Scramble Crossing from the Starbucks inside Tsutaya — then walk up Center Gai and have an early dinner in the backstreets.",
          },
          {
            time: "19:00",
            station: "Shibuya",
            activity:
              "Shibuya Sky observation deck. Book tickets an hour or two ahead via the app for sunset, or walk-in for after dark.",
          },
        ],
      },
      {
        day: 2,
        title: "East side: Tokyo Station, Akihabara, Ueno",
        summary:
          "Day two is the heritage-and-museums loop. Start at Tokyo Station, make your way up to Akihabara for lunch, end with the museums around Ueno Park.",
        stops: [
          {
            time: "09:00",
            station: "Tokyo",
            activity:
              "Imperial Palace East Gardens — free, 20 minutes walking from the Marunouchi side of Tokyo Station. The palace itself is only accessible on guided tours booked in advance.",
          },
          {
            time: "11:30",
            station: "Tokyo",
            activity:
              "Walk back through the Marunouchi business district, past Tokyo Station's beautifully restored 1914 red-brick facade, and into Kitchen Street inside the station for lunch.",
          },
          {
            time: "13:30",
            station: "Akihabara",
            activity:
              "Two stops north on the Yamanote. Yodobashi Akiba for electronics, the back streets for retro gaming and anime stores, and the Radio Kaikan tower for figurine shopping.",
          },
          {
            time: "15:30",
            station: "Ueno",
            activity:
              "Ueno Park — the Tokyo National Museum (Japan's largest and oldest) if you want serious art and history, or the Science Museum if you're travelling with kids.",
          },
          {
            time: "18:00",
            station: "Ueno",
            activity:
              "Ameya-Yokocho (Ameyoko) market streets under the rail tracks for cheap street food, beer, and the best dinner value on the east side of the loop.",
          },
        ],
      },
      {
        day: 3,
        title: "South side: Shinagawa, Ebisu, hidden corners",
        summary:
          "The last day covers the southern half of the loop — places most first-time itineraries skip but that locals rate highly.",
        stops: [
          {
            time: "09:30",
            station: "Shinagawa",
            activity:
              "Start at Shinagawa for a quieter morning: coffee in the reconstructed traditional tea house at Takanawa Gateway (one stop north), then walk along the Keihin canal waterfront.",
          },
          {
            time: "12:00",
            station: "Ebisu",
            activity:
              "Ebisu has some of the best restaurants per square metre in Tokyo. Lunch at any of the ramen, soba, or izakaya spots around the Yebisu Garden Place complex.",
          },
          {
            time: "14:00",
            station: "Ebisu",
            activity:
              "Tokyo Photographic Art Museum inside Yebisu Garden Place. Small, focused, usually has a worthwhile photography exhibition running, and rarely crowded.",
          },
          {
            time: "16:00",
            station: "Harajuku",
            activity:
              "Come back round the loop for an afternoon walk down Omotesando — Tokyo's 'Champs-Élysées' lined with architectural flagships from Tadao Ando, Kengo Kuma, and others.",
          },
          {
            time: "19:00",
            station: "Your hotel station",
            activity:
              "Return to your base for a quiet dinner — you've just completed a full circuit of one of the world's great cities without once leaving a single train line.",
          },
        ],
      },
    ],
    tips:
      "Buy a Tokunai Pass (\u00a5 760) for unlimited Yamanote and other JR lines within central Tokyo for a single day. For three days, three Tokunai Passes (\u00a5 2,280 total) is cheaper than a one-day Tokyo Metro pass plus individual JR fares if you stick to JR. Avoid the Yamanote between 07:30 and 09:00 — it's one of the most crowded commuter services in the world. For photographs of the scramble crossing, position yourself at the Starbucks upstairs in Tsutaya Shibuya between 18:00 and 19:00 for the best light.",
  },

  {
    slug: "paris-weekend-from-gare-du-nord",
    title: "A weekend in Paris from Gare du Nord",
    subtitle:
      "Arriving on Eurostar on Friday night? This 48-hour plan starts from Gare du Nord and covers the city without wasting a single train ride.",
    excerpt:
      "Paris is compact enough to do in two days if you don't waste time on the wrong transfers. Here's a straight-line weekend plan for visitors arriving via Eurostar, designed to use the Metro, a little walking, and nothing else.",
    duration: "2 days",
    city: "Paris",
    country: "France",
    baseArea: "Near Gare du Nord or Châtelet-Les Halles",
    relatedCityGuide: "paris",
    relatedPasses: ["navigo"],
    updatedAt: "2026-04",
    intro:
      "For travellers arriving on a Friday evening Eurostar and leaving on a Sunday afternoon train, Paris gives you roughly 46 hours on the ground. This itinerary is designed to maximise that window without wasting time on inefficient transfers. It assumes a hotel near Gare du Nord or on the RER B line between Gare du Nord and Saint-Michel — both of which put you within 10 minutes of every stop on this plan.",
    days: [
      {
        day: 1,
        title: "Right Bank classics: Louvre to the Eiffel Tower",
        summary:
          "Saturday is for the big names on the Right Bank. Start early at the Louvre, walk along the Seine, finish at the Eiffel Tower for sunset.",
        stops: [
          {
            time: "08:30",
            station: "Palais Royal – Musée du Louvre",
            activity:
              "Louvre Museum — book the 09:00 opening slot online in advance. Head straight to the Mona Lisa, the Venus de Milo, and the Winged Victory in the first 90 minutes before the coach tours arrive.",
          },
          {
            time: "11:30",
            station: "Palais Royal – Musée du Louvre",
            activity:
              "Walk through the Tuileries Gardens to Place de la Concorde. Lunch in the 1st arrondissement backstreets near Rue de l'Arbre-Sec.",
          },
          {
            time: "14:00",
            station: "Concorde",
            activity:
              "Champs-Élysées walk from Concorde to the Arc de Triomphe. Climb to the top of the Arc (€16) for the city's most underrated views — unlike the Eiffel Tower, the view from here INCLUDES the Eiffel Tower.",
          },
          {
            time: "16:00",
            station: "Trocadéro",
            activity:
              "Take Metro line 6 to Trocadéro for the classic Eiffel Tower photograph from Place du Trocadéro, then walk down the steps and across the bridge to the tower itself.",
          },
          {
            time: "18:00",
            station: "Bir-Hakeim",
            activity:
              "Eiffel Tower at sunset — book summit tickets for around 19:00 via the official site weeks in advance if you want to avoid the queue. Alternatively, enjoy a picnic on the Champ de Mars lawn.",
          },
          {
            time: "21:00",
            station: "Saint-Michel / Châtelet",
            activity:
              "Dinner in the Latin Quarter or the Marais. Rue Mouffetard has a dense cluster of restaurants at every price point.",
          },
        ],
      },
      {
        day: 2,
        title: "Left Bank: Notre-Dame, Île de la Cité, Montmartre",
        summary:
          "Sunday is for the Left Bank and a quick Metro hop to Montmartre. Checkout, luggage at the station, then a last walk.",
        stops: [
          {
            time: "09:00",
            station: "Saint-Michel – Notre-Dame",
            activity:
              "Notre-Dame de Paris — reopened in December 2024. The interior is free to visit but reserve a time slot in advance via the official site. Allow 45 minutes.",
          },
          {
            time: "10:30",
            station: "Saint-Michel – Notre-Dame",
            activity:
              "Sainte-Chapelle (adjacent to the Palais de Justice) for the stained glass chapel. Usually only a 15-minute queue in the morning.",
          },
          {
            time: "12:00",
            station: "Saint-Germain-des-Prés",
            activity:
              "Lunch in Saint-Germain-des-Prés. Les Deux Magots is famous and expensive; the side streets have better and cheaper options.",
          },
          {
            time: "14:00",
            station: "Cité / Musée d'Orsay area",
            activity:
              "Musée d'Orsay — arguably a better single-visit museum than the Louvre if you're tight on time. Impressionist and Post-Impressionist highlights can be covered in 90 minutes.",
          },
          {
            time: "16:00",
            station: "Abbesses",
            activity:
              "Take Metro line 12 up to Abbesses for Montmartre. Walk up to Sacré-Cœur for the view, browse Place du Tertre, and have an early aperitif at a café on the way back down.",
          },
          {
            time: "18:00",
            station: "Gare du Nord",
            activity:
              "Metro line 2 direct to Gare du Nord. Pick up dinner or a picnic from the station's food halls for the Eurostar home.",
          },
        ],
      },
    ],
    tips:
      "Buy a carnet of 10 Metro tickets at the first station machine you see (around €17) rather than single tickets at each ride. Navigo Découverte doesn't make sense for a two-day weekend because of the Monday-to-Sunday gotcha — see our /passes/navigo guide. The RER B line from Gare du Nord is the fastest way to reach the Latin Quarter and Saint-Michel; the Metro line 4 is slower but runs more frequently. Notre-Dame reopened in December 2024 — reserve a free timed entry slot in advance for the interior visit, particularly for weekend mornings.",
  },

  {
    slug: "london-48-hours-from-kings-cross",
    title: "London in 48 hours from King's Cross",
    subtitle:
      "Arriving by train from Edinburgh or the north? A two-day plan that starts at King's Cross and uses the Tube and a lot of walking.",
    excerpt:
      "King's Cross sits on five Underground lines and a 15-minute walk from the British Museum. That makes it arguably the best starting point in London for a short visit.",
    duration: "2 days",
    city: "London",
    country: "United Kingdom",
    baseArea: "Near King's Cross St Pancras or Euston",
    relatedCityGuide: "london",
    relatedPasses: ["oyster-card"],
    updatedAt: "2026-04",
    intro:
      "London is manageable in 48 hours if you resist the temptation to do too much. This plan prioritises the major free museums and galleries, uses the Tube sparingly, and ends each day back near King's Cross for dinner and sleep. It's designed for visitors arriving by train from Edinburgh, Manchester, York, or anywhere else on the East Coast and West Coast main lines.",
    days: [
      {
        day: 1,
        title: "Museums and monuments: British Museum, Westminster, South Bank",
        summary:
          "Saturday is a long day on foot. Museums in the morning, Westminster and the river in the afternoon, South Bank for dinner.",
        stops: [
          {
            time: "09:00",
            station: "Russell Square",
            activity:
              "British Museum — free entry, open 10:00. Arrive 15 minutes before opening to beat the queues. Focus on the Rosetta Stone, the Elgin Marbles, and the Egyptian galleries. 2 hours is enough.",
          },
          {
            time: "12:00",
            station: "Holborn",
            activity:
              "Lunch in Covent Garden or Seven Dials. The Neal's Yard courtyard and the streets around it have better independent options than the tourist-facing restaurants on the piazza itself.",
          },
          {
            time: "13:30",
            station: "Westminster",
            activity:
              "Westminster Abbey (£27, book in advance) or just the exterior plus Parliament Square and Big Ben. The latter is free and takes 30 minutes. Then walk across Westminster Bridge for the classic view.",
          },
          {
            time: "15:00",
            station: "Waterloo",
            activity:
              "Walk the South Bank from Westminster Bridge to Tate Modern. Free entry to Tate Modern — the turbine hall and the permanent collections are worth 90 minutes.",
          },
          {
            time: "17:30",
            station: "Blackfriars",
            activity:
              "Cross the Millennium Bridge to St Paul's Cathedral. The exterior and the cathedral steps are free; the interior (£25) is worth it only if you're specifically interested in the Whispering Gallery.",
          },
          {
            time: "19:00",
            station: "King's Cross St Pancras",
            activity:
              "Back to base. Dinner in Coal Drops Yard — a converted Victorian coal yard next to King's Cross station with a rotating cluster of restaurants and bars.",
          },
        ],
      },
      {
        day: 2,
        title: "Markets, galleries, and a riverside walk",
        summary:
          "Sunday is Borough Market, the Tate Britain, and a quieter day on foot. Finish back at King's Cross in time for an afternoon train.",
        stops: [
          {
            time: "09:30",
            station: "London Bridge",
            activity:
              "Borough Market — open on Saturdays too, but Sunday mornings are noticeably quieter. Breakfast there, then walk west along the river.",
          },
          {
            time: "11:00",
            station: "London Bridge",
            activity:
              "Shakespeare's Globe — a reconstruction of the original Elizabethan theatre. The guided tour (£25) is genuinely good if timing allows; otherwise the exterior and café are free.",
          },
          {
            time: "12:30",
            station: "Temple",
            activity:
              "Cross Blackfriars Bridge to the Victoria Embankment, then walk up towards Covent Garden for lunch. The Temple area is atmospheric and usually overlooked.",
          },
          {
            time: "14:00",
            station: "Pimlico",
            activity:
              "Tate Britain — free, much quieter than Tate Modern, and arguably a more interesting collection for first-time visitors. Turner, Constable, and a strong British 20th-century gallery.",
          },
          {
            time: "16:00",
            station: "King's Cross St Pancras",
            activity:
              "Return to base. If you have time before your train, Granary Square and the Regent's Canal walk to Camden Market are 10 minutes' walk from the station and a good way to end the weekend.",
          },
        ],
      },
    ],
    tips:
      "Use contactless debit, credit card, or Apple/Google Pay rather than buying a physical Oyster card for a two-day visit — the fares are identical and the daily cap applies automatically. See our /passes/oyster-card guide for the full rationale. The Tate Modern and Tate Britain both run a free shuttle boat between them every 40 minutes; it's a scenic alternative to the Tube. Avoid taxis in central London during rush hour — the Tube is almost always faster. King's Cross is on the Circle, Hammersmith & City, Metropolitan, Northern, Piccadilly, and Victoria lines, plus national rail and Eurostar, so any itinerary that ends back at King's Cross gives you unmatched onward flexibility.",
  },
];

export function getItinerary(slug) {
  return itineraries.find((i) => i.slug === slug) || null;
}
