// Long-form country rail explainers. Each entry drives one /countries/:slug page.
//
// These sit at the P1.5 layer between transport-pass guides and individual
// city guides — covering the national rail network, ticket types, fares,
// and the travel quirks every visitor needs to know before arriving.
//
// Section body copy uses \n\n to separate paragraphs. The CountryPage
// renders one <h2> per section heading and one <p> per paragraph.

export const countries = [
  {
    slug: "china",
    name: "China",
    countryCode: "CN",
    metaTitle: "Train Travel in China — A Practical 2026 Guide | StayByRail",
    metaDescription:
      "A traveller's guide to China's high-speed rail network in 2026: train types, 12306 booking, real-name e-tickets, station logistics, and the Hong Kong SAR practicalities. Honest, no marketing fluff.",
    intro:
      "China runs the world's longest high-speed rail network — 45,000 km of dedicated high-speed lines as of 2026, more than the rest of the world combined — plus an enormous conventional rail system on top. This guide is everything a non-Chinese-speaking traveller actually needs to know to use it: the train types, the 12306 booking process, real-name e-tickets, what happens at station entry, and where Hong Kong fits in (it has its own rail network and its own rules).",
    updatedAt: "2026-04",
    sections: [
      {
        heading: "The China Railway Network in One Page",
        body: "China Railway (\u4e2d\u56fd\u94c1\u8def, often abbreviated CR) is the state-owned operator of essentially every railway line in mainland China. The network has two distinct parts that share the same operator and the same booking system but feel like different services.\n\n**The high-speed network** (CRH \u2014 China Railways High-speed) operates over 45,000 km of dedicated high-speed lines built since 2008. Top speeds are 350 km/h on the newest lines (Beijing\u2013Shanghai, Beijing\u2013Hong Kong) and 250\u2013300 km/h on older lines. This is the network most international visitors will use \u2014 it's modern, clean, punctual, and rivals Japan's Shinkansen for ride quality.\n\n**The conventional network** (over 100,000 km of standard lines) handles slower long-distance services, sleeper trains, and freight. The Trans-Mongolian / Trans-Manchurian to Russia and Europe still runs on these lines, as do the famous overnight trains to Lhasa, Urumqi, and Kunming.\n\nThe two networks use the same online booking site (12306) and the same ticketing system, so for a traveller the practical question is just \"which train type am I booking?\" \u2014 not which network it sits on.",
      },
      {
        heading: "Train Types: G, D, C, Z, T, K",
        body: "Every Chinese train has a letter prefix on its number that tells you immediately what it is. In rough order of speed and quality:\n\n**G-series (Gao\u00a0\u9ad8) \u2014 high-speed.** The fastest services, top speed 300\u2013350 km/h, dedicated high-speed lines only. Beijing\u2013Shanghai G-trains take 4 hours 18 minutes. These are the trains a Western visitor will use 90 percent of the time. All-seater, no sleeper carriages, multiple class tiers (Second, First, Business, and the rare \"VIP\" carriage).\n\n**D-series (Dongche\u00a0\u52a8\u8f66) \u2014 \"bullet\" trains.** Slightly slower than G-trains (200\u2013250 km/h) and run on a mix of high-speed and upgraded conventional lines. Increasingly being replaced by G-services on most major routes. A few D-trains still offer sleeper carriages on overnight runs.\n\n**C-series (Chengji\u00a0\u57ce\u9645) \u2014 intercity high-speed.** Short-distance high-speed services connecting nearby cities (Beijing\u2013Tianjin, Guangzhou\u2013Shenzhen, Shanghai\u2013Suzhou\u2013Nanjing). Often the most frequent services in their corridors.\n\n**Z-series (Zhida\u00a0\u76f4\u8fbe) \u2014 direct express.** Long-distance non-stop conventional services, mostly overnight, with sleeper carriages. Slower than HSR but cheaper and the best way to cover long distances overnight without losing a hotel night.\n\n**T-series (Tekuai\u00a0\u7279\u5feb) \u2014 express.** Conventional fast trains, typically 140\u2013160 km/h, with seats and sleeper carriages. Stop at more stations than Z-trains.\n\n**K-series (Kuaisu\u00a0\u5feb\u901f) \u2014 fast.** The slowest of the long-distance categories, conventional rail with frequent stops. Cheapest tickets, longest journeys, oldest rolling stock. Mostly used by domestic travellers on a budget.\n\nFor an international visitor, G and C are what you'll book most of the time. D for the few corridors where it's still in service. Z if you specifically want a comfortable sleeper. Skip T and K unless you're on a tight budget or going somewhere off the HSR map.",
      },
      {
        heading: "Booking on 12306",
        body: "**12306.cn** is China Railway's official ticketing platform, and since 2019 it has had a fully-functional English-language version that accepts overseas Visa and Mastercard. This is a meaningful change \u2014 a few years ago international visitors had to use third-party agents or buy at station counters; now you can book the entire trip from a laptop before leaving home.\n\nThe alternative is **Trip.com** (formerly Ctrip), the largest Chinese travel agency, which offers the same inventory in a friendlier English UI for a small markup (typically RMB 20\u201340 per ticket). Klook also resells China Rail tickets at a similar markup. For most Western travellers the markup is worth it for the smoother UX, especially the first time.\n\n**Booking window**: tickets open for sale 15 days in advance (occasionally 30 days for the very biggest routes). Holiday periods \u2014 Lunar New Year, Golden Week (1\u20137 October), Labour Day (1\u20135 May) \u2014 sell out within minutes of release. Outside those windows, popular intercity G-trains sell out in the day or two before departure but most services have walk-up availability.\n\n**Real-name registration**: every ticket is tied to a specific passport (or Chinese national ID). The system enforces this strictly \u2014 you cannot transfer a ticket between people, you cannot book a ticket in someone else's name without their passport details, and you cannot board without ID matching the booking. Carry your physical passport at all times when travelling by train in China.",
      },
      {
        heading: "E-Tickets and Station Entry",
        body: "Since November 2020, China Railway has been **paperless on most major routes**. You no longer need to collect a physical ticket from a counter \u2014 your passport is the ticket. Walk up to the high-speed entry gate, present your passport to the optical reader, the system verifies your booking, and the gate opens. The entire process takes about 5 seconds per passenger.\n\nA few remaining conventional lines still issue paper tickets that need to be collected at a station window before boarding. Trip.com flags these explicitly in the booking flow; on 12306 you'll see a \"please collect\" note. If in doubt, arrive 60 minutes early instead of 30 \u2014 collection queues at major stations can be slow.\n\n**Station entry process**, typical for any major HSR station like Beijing South, Shanghai Hongqiao, or Guangzhou South:\n\n1. **Security check** at the station entrance \u2014 X-ray for bags, body scan, mandatory and queue-jumpable for nobody. 5\u201310 minutes at peak times. No liquids over 100ml in your hand luggage.\n\n2. **ID check** at the inner gate \u2014 passport scan, face match, automatic entry. No queue for foreign passports outside Lunar New Year.\n\n3. **Wait in the departure hall** \u2014 vast, often the size of an airport, with restaurants, convenience stores, and ATMs. Your platform is announced 15\u201320 minutes before departure on the main board.\n\n4. **Platform gate opens** \u2014 you scan your passport again at the platform entry gate, walk down to the platform, and board your assigned carriage. Reserved seats only \u2014 your seat number is on the booking confirmation.\n\nAllow at least 45 minutes from arriving at a major station to boarding, more during holiday periods.",
      },
      {
        heading: "Fares and Classes",
        body: "Chinese rail fares are state-regulated and unusually consistent compared to most Western countries. Prices do not surge for last-minute booking, weekends, or weather. The fare is the fare, set by route and train type.\n\n**Beijing\u2013Shanghai G-train (1,318 km, 4h 18m)**: Second Class around RMB 553 (\u00a361), First Class around RMB 933 (\u00a3103), Business Class around RMB 1,748 (\u00a3193). Compare against a budget flight at RMB 600\u20131,200 \u2014 the train is competitive on cost and faster door-to-door.\n\n**Guangzhou\u2013Shenzhen C-train (130 km, 30m)**: Second Class around RMB 75 (\u00a38). One of the busiest commuter HSR corridors in the world.\n\n**Shanghai\u2013Hangzhou G-train (160 km, 45m)**: Second Class around RMB 73 (\u00a38). 2\u20133 trains an hour all day.\n\n**Class differences**: Second Class is the standard \u2014 5 seats per row (3+2 layout), reclining, power sockets, fold-down tray. Comfortable and what the vast majority of passengers use. First Class is 4 per row (2+2), more legroom, larger seat, slightly nicer carriage. Business Class is 3 per row (1+2 with aisle), fully-flat capable on some services, complimentary food and drinks, lounge access at the biggest stations \u2014 closer to airline business class than to European first class. Worth it on the longest runs (Beijing\u2013Shanghai, Beijing\u2013Hong Kong); over-the-top for short corridors.\n\nThere is no national rail pass equivalent to a Eurail or Japan Rail Pass in China. Single tickets are the only purchase model. Some regional discount cards exist for residents but these are not available to short-stay visitors and the savings would not justify the bureaucracy if they were.",
      },
      {
        heading: "Hong Kong: A Special Administrative Region",
        body: "Hong Kong is part of China but functions as a separate jurisdiction in nearly every practical respect for travel purposes \u2014 a constitutional arrangement set out in the 1984 Sino-British Joint Declaration and the Basic Law that followed the 1997 handover.\n\n**Separate visa**: Hong Kong is visa-free for citizens of UK (180 days), US, EU, Canada, Australia, and most Western countries (90 days). Mainland China requires either a full visa or use of the 144/240-hour visa-free transit policy. You can fly into Hong Kong with no paperwork; you cannot do the same for Beijing or Shanghai.\n\n**Separate currency**: Hong Kong dollars (HKD), pegged to the US dollar at roughly 7.8:1. Mainland China uses the renminbi / yuan (CNY). The two currencies are not interchangeable.\n\n**Separate rail system**: Hong Kong's MTR is operated by MTR Corporation, a different company from China Railway. Octopus is the local stored-value card; mainland Yikatong cards do not work in Hong Kong.\n\n**The cross-border high-speed link**: The Guangzhou\u2013Shenzhen\u2013Hong Kong Express Rail Link (GSHKER) opened in 2018 and connects mainland HSR to Hong Kong's West Kowloon station. Trains from West Kowloon reach Futian (Shenzhen) in 14 minutes, Guangzhou South in 48 minutes, and direct services run to Beijing (around 9 hours) and Shanghai (around 8 hours). Crucially, immigration is **co-located inside West Kowloon** under a special arrangement \u2014 you clear both Hong Kong exit and Chinese mainland entry inside the building before boarding, then walk straight off the train on the mainland side. No second queue.\n\n**The older crossings**: You can also reach Hong Kong from mainland China via the older Lo Wu and Lok Ma Chau border crossings on the MTR East Rail Line, both connected to Shenzhen Metro. These are cheaper than the HSR but slower (40 minutes plus the queues at both sides) and only really make sense if your starting point is already in Shenzhen.",
      },
      {
        heading: "What to Pack and Practical Tips",
        body: "**Carry your passport everywhere**. Hotel check-in, train station entry, museum tickets at major sites \u2014 all of them require it. Make a digital backup before you arrive and email it to yourself.\n\n**Set up Alipay or WeChat Pay before you arrive**. Both apps now have English-language tourist versions that accept overseas Visa and Mastercard for top-up. This is a major change from a few years ago and means you no longer need cash for daily expenses. Cash is still accepted at major sites and banks but most small restaurants and convenience stores have stopped accepting it.\n\n**A VPN helps but is not essential** for short trips. Google, Gmail, Instagram, WhatsApp, X, Facebook, and most Western news sites are blocked from inside mainland China (Hong Kong is unaffected). Apple Maps works without a VPN, as does Bing search and the Pleco offline Chinese dictionary. If your work or social life depends on Gmail or WhatsApp, install a VPN before arrival \u2014 the major commercial VPNs (ExpressVPN, NordVPN, Astrill) generally work but reliability varies day to day.\n\n**Translation apps**: Pleco is the gold-standard offline Chinese-English dictionary and includes a camera-translate function for menus and signs. Google Translate's offline Chinese pack also works well; download it before you arrive.\n\n**Visa-free transit**: as of 2024, the 144-hour and 240-hour visa-free transit policies cover most major Chinese cities for citizens of 50+ countries with onward tickets to a third country. Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu, Xi'an, and Hangzhou are all eligible. This is the easiest way to see China for a first visit without going through the full visa process \u2014 check the official Chinese embassy site in your country for the current eligibility list and stay limits.",
      },
    ],
    externalLinks: [
      { label: "China Railway 12306 (English)", url: "https://www.12306.cn/en/" },
      { label: "Trip.com China Trains", url: "https://us.trip.com/trains/china/" },
      { label: "The Man in Seat 61: China", url: "https://www.seat61.com/China.htm" },
      { label: "MTR Hong Kong", url: "https://www.mtr.com.hk/" },
    ],
    relatedGuides: [
      "beijing",
      "shanghai",
      "guangzhou",
      "shenzhen",
      "chengdu",
      "xian",
      "hangzhou",
      "hong_kong",
    ],
    relatedPasses: [],
  },
];

export function getCountry(slug) {
  return countries.find((c) => c.slug === slug) || null;
}
