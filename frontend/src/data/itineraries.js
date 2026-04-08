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

  {
    slug: "kansai-5-days-kyoto-osaka-nara-himeji",
    title: "Kansai in 5 days: Kyoto, Osaka, Nara, Himeji",
    subtitle:
      "One hotel base, five days, four cities. The most efficient way to see the heart of western Japan without wasting time on hotel changeovers.",
    excerpt:
      "Kansai — the region around Kyoto, Osaka, and Nara — is compact enough that you can stay in one hotel and do every day as a rail day trip. Here's the five-day plan that makes it work.",
    duration: "5 days",
    city: "Kyoto",
    country: "Japan",
    baseArea: "Near Kyoto Station or Shijo / Karasuma-Oike",
    relatedCityGuide: "kyoto",
    relatedPasses: ["jr-pass"],
    updatedAt: "2026-04",
    intro:
      "Kansai is the historical heart of Japan. Within a 50-kilometre radius sit Kyoto (the old imperial capital with 1,600 temples), Osaka (Japan's food capital and second city), Nara (the older-than-Kyoto city with the famous deer park), and Himeji (home to Japan's most beautiful surviving castle). All four are connected by Japan's densest cluster of JR and private railway lines, which means you can base yourself in one hotel for all five nights and do each destination as a day trip without any of the usual 'packing up and moving' friction that plagues Japan itineraries.\n\nWe recommend basing in Kyoto — specifically near Kyoto Station or the Shijo/Karasuma-Oike area in central Kyoto — because Kyoto itself needs the most local time and Osaka is a 15-minute Shinkansen or 45-minute local from Kyoto Station. Osaka works as an alternative base if you want cheaper hotels and a more urban base, but you'll lose about 45 minutes of each day to the Kyoto commute on the days that matter most.",
    days: [
      {
        day: 1,
        title: "Eastern Kyoto: the Higashiyama temple corridor",
        summary:
          "Start with the most famous sights in Kyoto on foot. Kiyomizu-dera first thing, work your way north through the Higashiyama foothills, finish at Ginkaku-ji and the Philosopher's Path.",
        stops: [
          {
            time: "08:00",
            station: "Kyoto Station",
            activity:
              "Take bus 206 from Kyoto Station bus terminal to Gojo-zaka. Arrive at Kiyomizu-dera by 08:30 to beat the tour groups — the wooden stage over the valley and the Otowa Waterfall are both best in the soft morning light.",
          },
          {
            time: "10:30",
            station: "Kiyomizu-dera",
            activity:
              "Walk down Sannen-zaka and Ninen-zaka — two of the best-preserved Edo-period streets in Japan — through to Kodai-ji temple and its bamboo grove. Stop for green tea and wagashi at one of the teahouses.",
          },
          {
            time: "13:00",
            station: "Gion",
            activity:
              "Lunch in Gion. The narrow Hanami-koji Lane is the most photographed street in Japan for a reason; duck into one of the small tempura or obanzai restaurants for the least touristy food in the area.",
          },
          {
            time: "15:00",
            station: "Chion-in",
            activity:
              "Walk north to Chion-in (Japan's largest wooden temple gate), then Nanzen-ji (Zen garden and the Meiji-era red-brick aqueduct), and onto the Philosopher's Path — a 2 km canal-side walk lined with cherry trees.",
          },
          {
            time: "17:00",
            station: "Ginkaku-ji",
            activity:
              "End at Ginkaku-ji (the Silver Pavilion) just before closing. Bus 5 or 17 back to Kyoto Station takes about 35 minutes; it's slow but you've earned the rest.",
          },
        ],
      },
      {
        day: 2,
        title: "Arashiyama and the western temples",
        summary:
          "Bamboo grove and temples in the morning, Randen tram west, Kinkaku-ji and Ryoan-ji in the afternoon. One of the longer walking days — wear real shoes.",
        stops: [
          {
            time: "08:30",
            station: "Saga-Arashiyama",
            activity:
              "JR Sagano Line from Kyoto Station (15 minutes, free with JR Pass). Start at Tenryu-ji before the crowds — the garden is one of the best examples of Zen landscape design in Japan.",
          },
          {
            time: "10:00",
            station: "Saga-Arashiyama",
            activity:
              "Walk through the Arashiyama Bamboo Grove and up to Okochi Sanso Villa (the preserved home of a silent-film star with a famous hillside garden). Continue north to Jojakko-ji and Nison-in for the quieter temples most tour groups skip.",
          },
          {
            time: "12:30",
            station: "Saga-Arashiyama",
            activity:
              "Lunch along the Katsura River near Togetsukyo Bridge. The soba and tofu restaurants on the north bank are the better pick than the obvious tourist spots on the main drag.",
          },
          {
            time: "14:00",
            station: "Kitano-Hakubaicho",
            activity:
              "Take the Keifuku Randen tram east from Arashiyama to Kitano-Hakubaicho (30 minutes, scenic). Walk 15 minutes north to Kinkaku-ji — the Golden Pavilion — for the classic photograph.",
          },
          {
            time: "16:00",
            station: "Kinkaku-ji-michi",
            activity:
              "Bus 59 or a 20-minute walk to Ryoan-ji (the rock garden) and Ninna-ji (an imperial temple with a five-storey pagoda). Bus 50 back to Kyoto Station.",
          },
        ],
      },
      {
        day: 3,
        title: "Nara day trip and Fushimi Inari sunset",
        summary:
          "Half-day in Nara for the deer park and Todai-ji's Great Buddha, then back to Kyoto for Fushimi Inari at sunset.",
        stops: [
          {
            time: "09:00",
            station: "Nara",
            activity:
              "Kintetsu limited express from Kyoto to Kintetsu Nara (35 minutes, ¥760) — not covered by JR Pass but faster than the JR option. Kintetsu Nara drops you 5 minutes' walk from the deer park entrance.",
          },
          {
            time: "10:00",
            station: "Kintetsu Nara",
            activity:
              "Walk through Nara Park feeding the (polite but persistent) sika deer. Kofuku-ji's five-storey pagoda is the first major stop; continue east to Todai-ji.",
          },
          {
            time: "11:30",
            station: "Kintetsu Nara",
            activity:
              "Todai-ji temple — the Great Buddha Hall is one of the largest wooden buildings in the world and contains a 15-metre bronze Buddha that genuinely has to be seen in person to believe. The 'nostril pillar' behind the Buddha is a rite of passage for confident-sized visitors.",
          },
          {
            time: "13:30",
            station: "Kintetsu Nara",
            activity:
              "Lunch near Higashimuki Shotengai (the covered shopping arcade south-west of the station). Try kakinoha-zushi (persimmon-leaf-wrapped sushi), the local specialty.",
          },
          {
            time: "16:00",
            station: "Inari",
            activity:
              "Back to Kyoto on the Kintetsu, then JR Nara Line two stops to Inari station (5 minutes, ¥150). Fushimi Inari is directly opposite the station. Walk up the red torii gate tunnel to the Yotsutsuji viewpoint for sunset — about 45 minutes each way, and the light at the top of the path around 18:00 in most seasons is extraordinary.",
          },
        ],
      },
      {
        day: 4,
        title: "Osaka: street food, castle, and evening neon",
        summary:
          "A full day in Japan's food capital. Osaka Castle in the morning, Dotonbori for the afternoon, Shinsekai in the evening.",
        stops: [
          {
            time: "09:00",
            station: "Shin-Osaka",
            activity:
              "Shinkansen from Kyoto to Shin-Osaka (15 minutes, ¥1,420 or free with JR Pass), then Midosuji Line one stop to Umeda.",
          },
          {
            time: "10:00",
            station: "Tanimachi 4-chome",
            activity:
              "Osaka Castle — the current structure is a 1931 concrete reconstruction but the grounds, moat, and surrounding Nishinomaru Garden are beautiful and free. The castle museum inside is worth the ¥600 entry.",
          },
          {
            time: "13:00",
            station: "Namba",
            activity:
              "Lunch in Dotonbori. Eat standing up: takoyaki at Takoyaki Wanaka, kushikatsu at any of the places near the Glico Running Man sign, okonomiyaki at Mizuno. This is the point of Osaka.",
          },
          {
            time: "15:00",
            station: "Namba",
            activity:
              "Walk through Shinsaibashi-suji, Japan's longest covered shopping arcade, and onto Amerika-mura for the used-clothing and vintage shops. The Den-Den Town electronics district is a short walk further south if you want Osaka's version of Akihabara.",
          },
          {
            time: "18:00",
            station: "Dobutsuen-mae",
            activity:
              "Shinsekai — the retro neon district built in 1912 and preserved since. The Tsutenkaku Tower in the centre is Osaka's answer to the Eiffel Tower and was built the same year. Dinner at one of the kushikatsu places under the tower, then Midosuji Line back to Shin-Osaka and Shinkansen home to Kyoto (15 minutes).",
          },
        ],
      },
      {
        day: 5,
        title: "Himeji Castle day trip",
        summary:
          "The longest day trip but the best single castle in Japan. Shinkansen to Himeji, up the hill, back by evening.",
        stops: [
          {
            time: "09:00",
            station: "Kyoto Station",
            activity:
              "Sakura Shinkansen from Kyoto to Himeji (50 minutes each way, free with JR Pass — Nozomi is faster but not JR-Pass-eligible). Himeji Castle is a straight 15-minute walk from the north exit of the station.",
          },
          {
            time: "10:30",
            station: "Himeji",
            activity:
              "Himeji Castle — the 'White Heron Castle' is Japan's largest surviving feudal castle and the best-preserved example of traditional wooden castle architecture in the country. Walking the main keep takes about 90 minutes; expect to climb several steep wooden staircases in your socks.",
          },
          {
            time: "13:00",
            station: "Himeji",
            activity:
              "Lunch at one of the restaurants on Miyuki-dori (the covered shopping street between the castle and the station). Try Himeji oden, the local version of Japan's winter stew, served with ginger-soy dipping sauce.",
          },
          {
            time: "14:30",
            station: "Himeji",
            activity:
              "Koko-en garden, adjacent to the castle — a 1992 recreation of nine Edo-period gardens on the grounds of a former samurai residence. Quieter than the castle and included in the combined ticket.",
          },
          {
            time: "17:00",
            station: "Kyoto Station",
            activity:
              "Shinkansen back to Kyoto. Final night dinner in Pontocho or Kiyamachi — the narrow alleys along the Kamogawa river that are Kyoto's most atmospheric evening district and the right place to end a Kansai trip.",
          },
        ],
      },
    ],
    tips:
      "A 7-day JR Pass costs ¥50,000 in 2026 and covers every Shinkansen ride in this itinerary (minus Nozomi services) plus the JR Sagano Line to Arashiyama and the JR Nara Line to Fushimi Inari. Whether it pays off depends on whether you're using it for any other days — see our /passes/jr-pass guide for the detailed break-even maths. For the Kansai days alone, a Kansai Area Pass (5-day, ¥12,000) is typically cheaper than the JR Pass and covers Himeji and Nara within the region. The Kintetsu Line to Nara is the faster option but not covered by JR passes — budget ¥760 each way or switch to the slower JR route if you're already holding a pass. Kyoto Station's coin lockers fill up fast in peak season; use the hotel's luggage service rather than lugging things through Himeji or Osaka. All recommended restaurants get queues at 12:30-13:00 and 19:00-20:00 — shift your eating times 30 minutes either side to skip them.",
  },
];

export function getItinerary(slug) {
  return itineraries.find((i) => i.slug === slug) || null;
}
