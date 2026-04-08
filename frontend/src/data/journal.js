// Long-form journal articles. Each entry drives one /journal/:slug page.
//
// Section body copy uses \n\n to separate paragraphs. The JournalArticlePage
// renders one <h2> per section heading and one <p> per paragraph.
//
// When adding a new article: bump updatedAt on the site's root year (currently
// 2026) if it represents original reporting, not just a rehash.

export const journalArticles = [
  {
    slug: "london-zone-1-vs-zone-2-hotel-cost",
    title: "London Zone 1 vs Zone 2: the real hotel cost difference",
    subtitle:
      "How much you actually save by stepping one stop outside central London, and when it stops being worth it.",
    excerpt:
      "Tourist guides love to tell you that staying in Zone 2 is cheaper. Tourist guides are not usually very specific about by how much. Here's the data.",
    category: "Data",
    datePublished: "2026-04-01",
    dateModified: "2026-04-01",
    heroCityGuide: "london",
    relatedPasses: ["oyster-card"],
    sections: [
      {
        heading: "The short answer",
        body: "Zone 2 hotels are typically 25 to 40 percent cheaper than equivalent-quality Zone 1 hotels on the same dates. The additional daily travel cap — Zone 1-2 vs Zone 1 only — is under \u00a3 1.20 per day. For most travellers staying three nights or more, the break-even point is reached within the first morning.\n\nThe longer answer, and the specific streets and stations that matter, is below.",
      },
      {
        heading: "What counts as Zone 1 and Zone 2",
        body: "Zone 1 is the TfL fare zone covering roughly everything inside the Circle line plus a few stops south of the river. Its corners are Paddington in the west, King's Cross in the north, Aldgate in the east, and Vauxhall/Elephant & Castle in the south. Zone 2 is the ring immediately outside Zone 1: Camden, Kentish Town, Hampstead Heath, Finsbury Park on the north side; Shepherd's Bush, Hammersmith, Earl's Court to the west; Bethnal Green, Mile End, Canada Water to the east; Brixton, Clapham, Kennington to the south.\n\nThe zones are not a social commentary. Bethnal Green (Zone 2) is a seven-minute Central line ride to Oxford Circus (Zone 1). Hammersmith (Zone 2) is 10 minutes from Green Park on the Piccadilly line. You are not in a different city — you are one stop further out on a Tube line that runs every two minutes.",
      },
      {
        heading: "Pricing: a like-for-like sample",
        body: "Booking hotels for a randomly chosen mid-week date in late May 2026 (a neutral date, no bank holidays, no festivals), for two adults one night, gives a fairly consistent pattern across quality tiers.\n\nAt the budget tier (around \u00a3 100/night in Zone 2), the same chain brand (Premier Inn, Travelodge, IBIS) costs roughly \u00a3 160-180 in Zone 1. That's a 40-45 percent premium to be inside the Circle line.\n\nAt the mid-range tier (4-star, \u00a3 180-220 in Zone 2 neighbourhoods like Hammersmith or Canada Water), Zone 1 equivalents near Marble Arch, Bloomsbury, or Victoria routinely go for \u00a3 260-320. The percentage gap narrows slightly at the high end but the absolute pound difference widens.\n\nAt the luxury tier (\u00a3 400+), Zone 1 vs Zone 2 is closer to a like-for-like comparison because there are very few luxury hotels outside Zone 1 in the first place. The premium you're paying there is for the specific building, not the zone.",
      },
      {
        heading: "Adding the transport cost back in",
        body: "Here's where naive comparisons usually break down. Staying in Zone 2 means you'll hit the Zone 1-2 daily travel cap, not the Zone 1 only cap. As of 2026, those caps are roughly \u00a3 8.90 (Zone 1-2) vs \u00a3 7.70 (Zone 1 only). That's a difference of around \u00a3 1.20 per day, or about \u00a3 3.60 over a three-night trip for one person.\n\nCompare that to the room saving at the budget tier (\u00a3 60-80 per night in favour of Zone 2), or even the mid-range tier (\u00a3 80-100). Even accounting for the higher travel cap, the Zone 2 saving is 10 to 40 times larger than the transport premium. It's not close.",
      },
      {
        heading: "Where the 'Zone 1 is faster' argument actually holds",
        body: "There is one place the Zone 1 premium might be worth it: early morning departures to continental Europe via Eurostar, or very early Heathrow Express runs. If your day starts at 05:30 with a train to Paris at 06:45, you don't want to start it with a Tube ride from Hammersmith.\n\nThe other case is physical disability or heavy luggage. Zone 2 hotels are walking-distance from their station, but that walk is typically two to five minutes, often with stairs. If the Tube map is genuinely hard for you to use, paying the central premium to be within 50 metres of a taxi rank is legitimate.\n\nOutside those two scenarios, the Zone 1 premium is a preference tax, not a practical one.",
      },
      {
        heading: "The Zone 2 stations actually worth considering",
        body: "Not all Zone 2 stations are equal. These are the ones we'd recommend as a base for most travellers:\n\n\u2022 Hammersmith (Piccadilly, District, Circle, Hammersmith & City — four lines in one place). Direct to Heathrow, 10 minutes to Green Park, plenty of mid-range hotels.\n\n\u2022 Canada Water (Jubilee, Overground). 7 minutes to London Bridge, 4 minutes to Canary Wharf, quiet residential streets and a cluster of chain hotels.\n\n\u2022 Bethnal Green (Central line). 4 minutes to Liverpool Street, 8 to Oxford Circus, next to one of the best food scenes in London.\n\n\u2022 Kennington (Northern line, both branches). 3 minutes to Waterloo, walking distance of the Imperial War Museum, cheaper than comparable central options.\n\n\u2022 Shepherd's Bush (Central, Overground, Elizabeth line). Next to Westfield mall and Elizabeth line access to Paddington, Bond Street, and the City in under 20 minutes.",
      },
      {
        heading: "The verdict",
        body: "For an average three-to-five night trip, staying in Zone 2 on a direct Tube line will save you somewhere between \u00a3 150 and \u00a3 400 against a like-for-like Zone 1 hotel, at a transport cost of under \u00a3 6 extra per person per trip. That's a no-brainer. The caveat is 'on a direct Tube line' — Zone 2 with a forced bus connection or two interchanges is a different proposition entirely.\n\nThe tourist board's advice to 'stay in central London' usually isn't wrong; it's just not specific enough. Zone 2 on a direct line IS staying in central London, at least in any practical sense. It's only the fare map that says otherwise.",
      },
    ],
  },

  {
    slug: "shinkansen-vs-flying-tokyo-osaka-2026",
    title: "Shinkansen vs flying Tokyo to Osaka in 2026",
    subtitle:
      "The comparison most travel blogs get wrong: total door-to-door time, real costs after airport transfers, and what changed after the 2023 JR Pass hike.",
    excerpt:
      "On paper, flying looks faster. In practice, it rarely is. Here's the actual trip, with real numbers, for a route that 60 million people take every year.",
    category: "Comparison",
    datePublished: "2026-03-25",
    dateModified: "2026-03-25",
    heroCityGuide: "tokyo",
    relatedPasses: ["jr-pass"],
    sections: [
      {
        heading: "The route in numbers",
        body: "Tokyo to Osaka is Japan's most-travelled domestic route. By Shinkansen, Tokyo Station to Shin-Osaka is 552 kilometres and takes 2 hours 27 minutes on the fastest Nozomi service, or 3 hours 0 minutes on the slightly slower Hikari that JR Pass holders are allowed to use. By air, the same trip is around 55 minutes wheels-up to wheels-down, and is served mostly by ANA and JAL from Haneda to Itami.\n\nThat 90-minute flight time is the number almost every comparison starts with. It's also the number that almost every comparison stops at, and it's why flying looks faster than it actually is.",
      },
      {
        heading: "Door-to-door time: Shinkansen",
        body: "Tokyo Station sits in the middle of the city, on the Yamanote, Marunouchi, Chuo, Yokosuka, Keiyo, and Shinkansen lines. Reaching it from any central Tokyo hotel takes 10-20 minutes on the Metro. Shinkansen security is non-existent by airline standards: walk onto the platform with a reserved seat, board, sit down. Reserved-seat holders can realistically arrive at the station 10 minutes before departure.\n\nOn the Osaka end, Shin-Osaka is 4 minutes from Umeda on the Midosuji Line, where most Osaka hotels cluster. From your Tokyo hotel door to your Osaka hotel door, the Shinkansen takes roughly 3 hours 10 minutes end-to-end — 10 minutes hotel-to-Tokyo Station + 10 minutes waiting + 2 hours 27 minutes travelling + 10 minutes Shin-Osaka transfer + 10 minutes to hotel.",
      },
      {
        heading: "Door-to-door time: flying",
        body: "The Haneda-Itami flight itself is 55 minutes. Everything else that surrounds it is where the comparison goes sideways.\n\nFrom central Tokyo, Haneda is a 30-minute Keikyu Line ride (if your hotel is near Shinagawa) or up to 50 minutes from most other Yamanote stations. Domestic flights close check-in 20 minutes before departure but ANA and JAL recommend arriving 40 minutes in advance. Post-landing, Itami is 30 minutes from Umeda by monorail-plus-train or bus. There's always a 10-15 minute buffer to deplane and reach the arrivals hall.\n\nAdd it up: 45 minutes to Haneda + 40 minutes pre-flight + 55 minutes in the air + 15 minutes deplane + 35 minutes Itami to Osaka city = 3 hours 10 minutes door-to-door. Basically identical to the Shinkansen, before you factor in any delays.",
      },
      {
        heading: "Price in 2026",
        body: "The Shinkansen (Nozomi, reserved seat) is around \u00a5 14,700 one-way at the walk-up fare, with discounted advance tickets and express bundles available from JR East/West for closer to \u00a5 11,000 if bought 7 days or more ahead.\n\nANA and JAL Tokyo\u2013Osaka flights range from around \u00a5 12,000 (advance fare, non-refundable) to \u00a5 22,000 (last-minute walk-up) in economy. LCCs like Peach and Jetstar occasionally post \u00a5 6,000 fares from Narita (not Haneda) to Kansai Airport (not Itami), but Narita and Kansai are both far from their respective city centres — once you add transfer costs and time, the 'cheap flight' usually loses.\n\nThe JR Pass question changed after the October 2023 hike. A 7-day ordinary JR Pass is now around \u00a5 50,000 — a single Tokyo-Osaka round trip plus a Kyoto return does not quite break even on it. See our /passes/jr-pass guide for the detailed maths.",
      },
      {
        heading: "Reliability",
        body: "The Shinkansen's average delay in a typical year is measured in seconds, not minutes — JR Central has historically reported average annual delays of around 30 seconds per train. Natural disasters can cause hours-long shutdowns, but they're rare and the network recovers quickly.\n\nANA and JAL domestic services are also very punctual by world standards (>85 percent on-time), but weather, congestion, and occasional runway closures introduce a 5-15 minute variance that the Shinkansen essentially never has. For anyone with a tight connection on the other end, that variance is worth paying to avoid.",
      },
      {
        heading: "Comfort and what you get to do with the three hours",
        body: "Shinkansen reserved seats recline, have power sockets, and give you the best large-window views of Fuji-san if you sit on the right-hand side (going from Tokyo to Osaka, seats D or E in car 11 or further back). You can walk around, use a real toilet, buy an ekiben bento from the trolley, and get actual work done.\n\nA 55-minute flight in an A321 is more cramped, has no power, and — unless you're flying out of Haneda Terminal 2 during good weather — usually involves enough bureaucracy at either end that the net 'usable' time is close to zero.\n\nFor any traveller who values the three hours of transit as something other than pure dead time, the Shinkansen wins this category decisively.",
      },
      {
        heading: "Carbon",
        body: "The Shinkansen runs on electricity; depending on the grid mix, a single Tokyo-Osaka Nozomi journey generates roughly 3.5 kg CO2 per passenger. A Tokyo-Osaka flight generates roughly 60-80 kg CO2 per passenger on the same route. The difference is about twenty times.\n\nIf you are carbon-accounting your trip — whether for personal reasons or for a company travel policy — the Shinkansen is essentially a free carbon win on this specific route. The margin is big enough that it survives almost any methodology choice about what counts as 'radiative forcing' or whether you should include airport shuttle emissions.",
      },
      {
        heading: "The verdict",
        body: "For any traveller whose Tokyo hotel is anywhere between Shinjuku and Ginza, and whose Osaka destination is anywhere in central Osaka, the Shinkansen wins this comparison on price (usually), door-to-door time (by a hair), reliability, comfort, and carbon. The only scenarios where flying genuinely beats it are (a) you're starting from a hotel within a 10-minute transfer of Haneda, (b) you're ending at a hotel very close to Itami, or (c) your flight is paid for by someone else.\n\nThe 90-minute flight time is a seductive number. The full 3 hours 10 minutes that actually matters is indistinguishable from taking the train. Given a choice, take the train.",
      },
    ],
  },

  {
    slug: "bangkok-bts-vs-mrt-where-to-stay",
    title: "Bangkok BTS vs MRT: which line should you actually stay on",
    subtitle:
      "A beginner-friendly decision guide to Bangkok's two main rail networks and the hotels that sit alongside them.",
    excerpt:
      "If you only know one thing about Bangkok transport, know that it has two separate rail systems that don't fully connect. The one you stay on shapes your entire trip.",
    category: "Decision guide",
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    heroCityGuide: "bangkok",
    relatedPasses: [],
    sections: [
      {
        heading: "The one-line summary",
        body: "The BTS Skytrain is the elevated system that runs along the main tourist spine. The MRT is the underground system that loops around the older parts of the city. Both are clean, air-conditioned, and easy to use. The BTS reaches most of what first-time tourists want to see; the MRT reaches most of what older Bangkok is famous for. Pick one to sleep near and plan around.",
      },
      {
        heading: "What the BTS covers",
        body: "The BTS has two lines, Sukhumvit (light green) and Silom (dark green). They interchange at Siam, which is the single most useful station in the city to know: it's next to the Siam Paragon, MBK, and Central World shopping malls and is the default 'I'll meet you at' pin for every Bangkok trip.\n\nThe Sukhumvit line runs east along Sukhumvit Road, stopping at Nana (expat bars), Asok (hotels, malls, MRT interchange), Phrom Phong (upscale shopping, family-friendly), Thong Lor (foodie bars and cocktail places), Ekkamai (backpacker and nightlife). Westbound from Siam it goes to Ratchathewi, Phaya Thai (Airport Rail Link), and beyond.\n\nThe Silom line runs south-west from Siam through Sala Daeng (Patpong nightlife, Silom Road business district), Chong Nonsi, Surasak, and Saphan Taksin. Saphan Taksin matters because it's a 2-minute walk from the Chao Phraya Express Boat pier — the only way to reach the Grand Palace, Wat Pho, and Khao San Road without a taxi.",
      },
      {
        heading: "What the MRT covers",
        body: "The MRT Blue Line loops around central Bangkok, underground. Its most useful tourist stops are Hua Lamphong (the old central railway station for trains to Chiang Mai and the south), Sam Yan, Si Lom (interchange with BTS Silom line), Sukhumvit (interchange with BTS Asok), Queen Sirikit National Convention Centre, Chatuchak Park (next to the weekend market), and the recently-opened stations on the Thonburi side that reach Wat Mangkon, Sanam Chai (for the Grand Palace), and Itsaraphap.\n\nFor travellers who prioritise Chinatown, the Grand Palace, Wat Pho, Wat Arun, and the old city, the MRT Blue Line's western extension has genuinely changed the game. Five years ago you had to take a taxi or boat. Today you can reach all of it on a \u0e3f 40 underground fare.",
      },
      {
        heading: "Where the two systems interchange",
        body: "Three stations let you change between BTS and MRT: Asok (BTS Sukhumvit) to Sukhumvit (MRT), Sala Daeng (BTS Silom) to Si Lom (MRT), and Mo Chit (BTS Sukhumvit) to Chatuchak Park (MRT). The names are similar but the stations are in different buildings — you exit one system, walk 1-3 minutes on the street, and re-enter the other, paying a fresh fare each time.\n\nThe interchange is not free. This is the single biggest difference between Bangkok rail and most other world cities. Budget an extra \u0e3f 15-25 per interchange on top of your base fare. It adds up if you're hopping between systems all day.",
      },
      {
        heading: "Which system should you stay near?",
        body: "The default recommendation for a first Bangkok trip is the BTS Sukhumvit line between Nana and Phrom Phong. Here's why:\n\n\u2022 Hotel density is the highest in the city — every chain, every tier, every budget.\n\n\u2022 You get direct Airport Rail Link access at Phaya Thai, 3 BTS stops west of Siam.\n\n\u2022 You can reach Siam (shopping), the river (boat access to Grand Palace), and Chinatown (via one MRT interchange at Asok) from the same base.\n\n\u2022 Sukhumvit Soi 3-23 has the largest concentration of restaurants in the city at all price points.\n\nFor a second or third trip, or for travellers who specifically want to focus on the old city (Rattanakosin, Chinatown, Wat Pho), the MRT Blue Line near Hua Lamphong, Sam Yan, or Sanam Chai is a stronger pick. Fewer international hotels, more local guesthouses, much shorter walks to the temples.",
      },
      {
        heading: "Avoid these mistakes",
        body: "Staying near Khao San Road: fun for one night out, miserable as a base. There is no rail station within 1.5 km. Every trip becomes a taxi or a long walk to a boat pier.\n\nStaying near Suvarnabhumi Airport: unless you have a 5 a.m. flight, no. The airport is 30 km from central Bangkok and the Airport Rail Link only helps in one direction.\n\nStaying on an MRT Purple Line station (the line that runs north-west from Bang Sue): this is a commuter suburb line. The stations are too far from the tourist core to be practical.\n\nPicking a hotel on Silom Road without checking which end: the west end near Saphan Taksin is an easy boat ride to the Grand Palace. The east end past Sala Daeng is closer to nightlife but further from everything else.",
      },
      {
        heading: "Quick decision tree",
        body: "Do you want a generic tourist-friendly base with English menus, chain hotels, and simple navigation? BTS Sukhumvit, anywhere from Nana to Phrom Phong.\n\nDo you want fast access to Silom nightlife and the Chao Phraya boat piers? BTS Silom near Sala Daeng or Saphan Taksin.\n\nDo you want to focus on temples, Chinatown, and the old city? MRT Blue Line near Hua Lamphong, Sam Yan, or Sanam Chai.\n\nDo you want upscale dining, leafy residential streets, and the international school crowd? BTS Sukhumvit near Phrom Phong or Thong Lor.\n\nDo you want all of it, and are willing to pay for the transfer overhead? Asok, the single interchange station between BTS Sukhumvit and MRT Blue. Hotel density and interchange access are both high, but rooms cost more for the privilege.",
      },
    ],
  },

  {
    slug: "why-otsuka-is-tokyos-most-underrated-hotel-base",
    title: "Why Otsuka is Tokyo's most underrated hotel base",
    subtitle:
      "An editor's pick expanded: the quiet Yamanote Line neighbourhood that undercuts Shinjuku on price without compromising on transport.",
    excerpt:
      "Every travel blog tells you to stay near Shinjuku, Shibuya, or Tokyo Station. Almost none mention Otsuka. That's the argument for staying there.",
    category: "Editor's pick",
    datePublished: "2026-04-05",
    dateModified: "2026-04-05",
    heroCityGuide: "tokyo",
    relatedPasses: [],
    sections: [
      {
        heading: "The case for Otsuka in one paragraph",
        body: "Otsuka sits on the JR Yamanote Line between Ikebukuro and Sugamo, two stops north of Shinjuku if you go the clockwise way round the loop. It's a Yamanote station. Every single other Yamanote station is directly reachable, which means Shinjuku, Shibuya, Tokyo Station, Akihabara, Ueno, Harajuku, and Ikebukuro are all one train ride with no transfer. Hotels in Otsuka typically cost 30 to 50 percent less than Shinjuku equivalents. The neighbourhood is quiet, residential, and feels nothing like the Shinjuku crush. That combination — full Yamanote access at residential prices — is the hotel deal of central Tokyo, and almost nobody talks about it.",
      },
      {
        heading: "Where Otsuka actually is",
        body: "If you stand in Shinjuku and look at a Yamanote Line map, Otsuka is the fifth station clockwise — Shinjuku, Shin-Okubo, Takadanobaba, Mejiro, Ikebukuro, Otsuka. From Shinjuku it's a seven-minute ride on the loop. From Ikebukuro (which has its own enormous department store scene and the Sunshine City complex) it's three minutes and around \u00a5 140.\n\nThe neighbourhood itself is small: a couple of covered shopping arcades north and south of the station, a cluster of ramen shops and izakaya, a small but well-preserved Arakawa Line (Toden) tram stop that runs through old-Tokyo residential streets, and not much else. There are no famous temples, no tourist landmarks, no crowd. That is part of the appeal.",
      },
      {
        heading: "The hotel economics",
        body: "Checking three sample dates across 2026 (one in cherry blossom week, one in mid-summer, one neutral week in October), consistent pattern: chain business hotels in Otsuka (APA, Dormy Inn, Toyoko Inn, Hotel Route-Inn and similar) come in at roughly \u00a5 8,000-12,000 per night for a clean double. Equivalent rooms in Shinjuku routinely cost \u00a5 14,000-22,000 on the same dates.\n\nAt the mid-range tier — four-star business and leisure hotels — Otsuka runs around \u00a5 15,000-22,000. Shinjuku equivalents are \u00a5 25,000-35,000. The percentage gap narrows at the luxury end because Otsuka has fewer genuine luxury options, but the absolute yen saving grows larger.\n\nStayed over a week, the difference between Otsuka and Shinjuku for the same room quality can reach \u00a5 50,000 to \u00a5 100,000. That is a meal budget, an extra night, or a Shinkansen trip to Osaka and back.",
      },
      {
        heading: "The Yamanote advantage",
        body: "The Yamanote Line is the defining fact of central Tokyo. It is a loop, it serves every major district, and it runs every two to four minutes throughout the day. Any hotel within five minutes of a Yamanote station is effectively within direct reach of every major destination in the city, because the maximum possible travel distance on the loop is about 30 minutes.\n\nFrom Otsuka specifically: Shinjuku is seven minutes. Shibuya is thirteen. Tokyo Station is fifteen. Akihabara is twelve. Ueno is nine. Harajuku is ten. The longest trip on the full loop — Otsuka to Tamachi on the opposite side — is about 25 minutes. For a traveller whose day involves moving between these points, the Otsuka base works exactly as well as a Shinjuku base would, minus the morning rush-hour compression.",
      },
      {
        heading: "What Otsuka gives you that Shinjuku doesn't",
        body: "Quiet evenings. Shinjuku at 11 p.m. is still full of people, cars, neon, and noise. Otsuka at 11 p.m. is a residential street where the only sounds are the occasional Toden tram and someone closing a shutter for the night. If you're a light sleeper, or you prefer to decompress in a quiet space between long sightseeing days, this matters more than it sounds on paper.\n\nCheaper food. The restaurants around Otsuka are locals' restaurants, not tourists' restaurants. A good ramen shop is \u00a5 900. An izakaya meal for two with drinks is \u00a5 4,500. The same meals in Shinjuku's Kabukicho or in Shibuya Scramble's backstreets are routinely double.\n\nThe Toden Arakawa tram line. Otsuka station is a two-minute walk from a Toden tram stop. The Toden is Tokyo's last surviving street tram, running through old residential districts to Waseda and up to Minowabashi. Riding it end-to-end is one of the most underrated things to do in Tokyo and almost no international guide mentions it.\n\nSpace. Otsuka hotel rooms are not larger than Shinjuku equivalents — both are small — but the hotels themselves tend to be newer and less crowded. You can get into an elevator. You don't queue at the buffet.",
      },
      {
        heading: "The trade-offs, honestly",
        body: "There is no nightlife in Otsuka itself. If your Tokyo trip revolves around bars, clubs, or late-night food adventures, you'll spend most evenings in Shinjuku, Shibuya, or Roppongi anyway and you'll need to get home afterwards. The Yamanote Line runs until about 01:00 and first trains restart around 04:45, so there is a roughly four-hour gap when you're either taking a taxi (around \u00a5 3,500 from Shinjuku to Otsuka) or waiting at a konbini. That's a real cost if you're a night owl.\n\nThere are no tourist landmarks within walking distance. If 'walking to the temple in the morning' is part of your ideal holiday, Otsuka disappoints. Asakusa and the Sensoji temple are 25 minutes away by train; they're not 25 minutes away on foot.\n\nAnd English is scarcer in Otsuka than in Shinjuku. Most of the chain business hotels have English-speaking front desks, but the surrounding restaurants and shops do not. For a first-time Japan visitor who wants maximum hand-holding, this is a legitimate reason to pay more for a Shinjuku hotel instead.",
      },
      {
        heading: "How to book it",
        body: "Search for hotels near Otsuka Station on the JR Yamanote Line, not Otsuka on the Tokyo Metro Marunouchi Line — those are two different stations in different parts of the city. The Yamanote one is what you want. The chain business hotels within five minutes of the Yamanote Otsuka are the highest-value segment; look for north-exit and south-exit options on the main streets of Minami-Otsuka and Kita-Otsuka.\n\nFor a week-long Tokyo trip on a mid-range budget, the Otsuka play is one of the biggest value upgrades available without leaving the 23 wards. For a short romantic trip or a luxury splurge, it doesn't make sense — stay somewhere you can walk around in the evening. For everything in between, it earns its editor's-pick status.",
      },
    ],
  },

  {
    slug: "eurostar-vs-budget-flight-london-paris",
    title: "Eurostar vs budget flight London to Paris: the honest breakdown",
    subtitle:
      "Door-to-door time, real cost after all the fees, carbon, and what actually happens when each one goes wrong.",
    excerpt:
      "A £29 Ryanair fare looks like a knockout win over Eurostar. Once you add up the rest of the trip, the story flips — and then sometimes flips back.",
    category: "Comparison",
    datePublished: "2026-03-28",
    dateModified: "2026-03-28",
    heroCityGuide: "london",
    relatedPasses: [],
    sections: [
      {
        heading: "The short version",
        body: "For a trip starting in central London and ending in central Paris, Eurostar is faster door-to-door, usually (but not always) cheaper once you include airport transfers and baggage, vastly lower carbon, and significantly more pleasant to take. The budget-flight wins are real, but they require very specific conditions: flying from Stansted or Luton (not Heathrow), no checked baggage, no seat selection, no priority boarding, and travelling at times of day when airport transfers are not expensive. If any of those conditions fail, Eurostar wins outright.",
      },
      {
        heading: "Door-to-door time",
        body: "Eurostar: London St Pancras to Paris Gare du Nord in 2h 16 minutes on the fastest service. Add 10 minutes to reach St Pancras by Tube from central London (it sits on five Underground lines). Add the required 60-minute check-in window at St Pancras for security and French border control. Add 10 minutes at Gare du Nord to get from the platform to a taxi or the Métro. Total: roughly 3h 36 minutes from any central London hotel to any central Paris hotel.\n\nBudget flight: London Stansted to Paris Beauvais on Ryanair, scheduled 1h 20 minutes. Add 60 minutes from central London to Stansted by Stansted Express and Tube connections. Add the Ryanair-recommended 2-hour pre-flight arrival (you can cut this to 90 minutes if you already have your boarding pass). Add 30 minutes to deplane and clear arrivals at Beauvais. Add 75-90 minutes from Beauvais to central Paris by shuttle bus (Beauvais is 85 km from Paris and not served by the Paris metro at all). Total: roughly 6h to 6h 15 minutes.\n\nEasyJet from Gatwick to Charles de Gaulle is faster on the ground but with similar arithmetic — you still lose an hour to airport transfers at each end plus the security window. Realistic door-to-door is 4h 30 to 5h.\n\nEurostar wins door-to-door by somewhere between 1h and 2h 30 minutes depending on which flight you compare against.",
      },
      {
        heading: "Cost, for real",
        body: "Eurostar fares in 2026 start at around £39 one-way booked well in advance (Standard, non-refundable) and rise to £250+ for last-minute Business Premier. A typical sensible advance fare booked a month or two ahead is £55-80 one-way.\n\nRyanair fares to Beauvais start at around £15 one-way on a good day. Add £15-30 for cabin baggage larger than the personal item (any proper weekend bag), £30-50 for a checked bag if you need one, £8 for seat selection, and £10 for priority boarding if you want to actually board early enough to sit with your travel companion. Realistic total: £45-90 one-way for the flight itself.\n\nNow the transfers. Stansted Express return: £25-40. Beauvais shuttle return: €32 (approximately £27). Subtract nothing for Eurostar because St Pancras and Gare du Nord are both already on the urban transit network you were going to use anyway.\n\nAdd it up. A 'cheap' Ryanair weekend is £45 (fare) + £35 (Stansted transfers) + £27 (Beauvais transfers) = £107 one-way. A comparable Eurostar advance fare is £65-80 and includes central station arrival. Once you account for baggage and connection costs, Eurostar is usually cheaper, not more expensive.\n\nThe one scenario where the flight genuinely wins on cost is last-minute booking: a Ryanair £25 fare two days out when the same Eurostar ticket has climbed to £180.",
      },
      {
        heading: "Carbon",
        body: "A Eurostar Standard seat between London and Paris emits around 6 kg of CO2 per passenger, according to Eurostar's own published audit (independently verified by Carbon Trust). The same journey by air emits around 55-75 kg per passenger, depending on aircraft type and load factor.\n\nThat's roughly a ten-to-one margin. If you're carbon-accounting your trip for personal or corporate-policy reasons, Eurostar wins so decisively that the flight isn't really a competitor. The margin is big enough that it survives any reasonable methodology dispute about radiative forcing, contrail impact, or whether to include airport shuttle emissions.",
      },
      {
        heading: "When things go wrong",
        body: "Eurostar delays: rare but not impossible. When they happen, you're still at St Pancras or Gare du Nord, which are fully functional urban stations with food, shops, free Wi-Fi, and plentiful onward options. Delayed trains roll onto a new schedule with direct station announcements in three languages. If a service is outright cancelled, Eurostar rebooks you on the next available train without charge and provides food vouchers for anything over two hours.\n\nBudget flight delays at Stansted or Beauvais are a different experience. Gate changes, delays lasting hours, and occasional all-out cancellations that leave you stuck 85 km from your actual destination with limited onward transport after 22:00. EU261 compensation is legally binding and Ryanair does pay it out (eventually), but the day you lose trying to reroute through alternative airports is not compensated in any practical sense. Anyone who has spent a Friday night at Beauvais after a cancelled flight knows what the real cost of a 'cheap' weekend can look like.\n\nThis isn't a theoretical point. It's the single biggest argument in favour of Eurostar on routes where both options exist: when something fails, it fails gracefully instead of catastrophically.",
      },
      {
        heading: "Comfort and what you do with the three-ish hours",
        body: "Eurostar Standard seats are larger than economy on any narrowbody jet, recline properly, have folding tables, power sockets at every seat, and free Wi-Fi that actually works for the entire journey. You can walk to a buffet car, use a real toilet, and get real work done. The Paris view in the final 45 minutes — running in over the Seine valley and into Gare du Nord — is legitimately nice.\n\nA 75-minute Ryanair flight on a 737 is cramped, has no power, no Wi-Fi, ads broadcast through the PA, and ends with a 90-minute bus ride. The net 'usable' time is close to zero.\n\nFor anyone who values the three hours of transit as anything other than pure dead time, Eurostar wins this category by a mile.",
      },
      {
        heading: "When the budget flight genuinely wins",
        body: "Three scenarios:\n\n1. You're already near Stansted or Luton for other reasons and the Paris end is also near an outer airport. This is rare but real — staying at an Essex hotel for work and continuing to a Paris suburb near Beauvais is an edge case where the geometry favours flying.\n\n2. Last-minute trips where Eurostar has priced out. Eurostar revenue management is aggressive; a fare that was £55 two months ago is £180 two days out. Ryanair last-minute is still cheap. If you book 48 hours before travel, the flight can win on cost.\n\n3. Group bookings of four or more with heavy luggage. Eurostar's 'group' fares are not very generous and baggage is free but limited in quantity. A hire car plus EasyJet flights sometimes works better for families moving a full trip's worth of stuff.\n\nOutside those three cases, Eurostar wins. The £29 Ryanair fare is a trap — it's never actually £29 by the time you reach Paris, and the time you'd save at lunch is the time you'd lose at Beauvais.",
      },
    ],
  },
];

export function getArticle(slug) {
  return journalArticles.find((a) => a.slug === slug) || null;
}
