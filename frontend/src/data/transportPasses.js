// Long-form transport pass explainers. Each entry drives one /passes/:slug page.
//
// Section body copy uses \n\n to separate paragraphs. The PassPage renders
// one <h2> per section heading and one <p> per paragraph.

export const transportPasses = [
  {
    slug: "jr-pass",
    name: "Japan Rail Pass",
    shortName: "JR Pass",
    country: "Japan",
    countryCode: "JP",
    metaTitle: "Is the JR Pass Still Worth It in 2026? | StayByRail",
    metaDescription:
      "A practical 2026 guide to the Japan Rail Pass after the October 2023 price hike. When it pays off, when it doesn't, what it covers, and which cheaper regional alternatives beat it for most trips.",
    intro:
      "The Japan Rail Pass is the single most famous transport pass in the world, and since the October 2023 price hike it's also the most misunderstood. This guide lays out the current 2026 prices, what the pass actually covers, the three itineraries where it still pays off, and the regional passes that beat it for everyone else.",
    updatedAt: "2026-04",
    sections: [
      {
        heading: "What the JR Pass covers in 2026",
        body: "The nationwide Japan Rail Pass gives unlimited travel on every JR-operated line in Japan for a consecutive 7, 14, or 21 days. That includes the Shinkansen (bullet trains) with the important exception of the fastest Nozomi and Mizuho services — JR Pass holders must use the slightly slower Hikari and Sakura trains instead. It also covers JR local, rapid, and limited express trains; the Tokyo Monorail to Haneda; the Narita Express; and most JR ferries including the one to Miyajima.\n\nIt does not cover Tokyo Metro, Osaka Metro, any private railway (including half of Kyoto's network), the Nozomi and Mizuho Shinkansen services, or night buses. Most travellers assume the pass covers everything; it doesn't, and mapping your actual itinerary against what JR runs is the first thing to do before buying.",
      },
      {
        heading: "2026 prices and the October 2023 hike",
        body: "Prices roughly doubled on 1 October 2023. The 7-day Green Car (first class) JR Pass is now around \u00a5 70,000 and the ordinary 7-day pass is around \u00a5 50,000. 14- and 21-day passes scale up from there at similar rates. In GBP terms that's roughly \u00a3 260 for the 7-day ordinary pass at current exchange rates.\n\nThe old rule of thumb — 'if you're doing Tokyo to Kyoto and back, the pass pays for itself' — no longer applies. One round-trip Tokyo\u2013Kyoto on the Hikari is now cheaper than the pass. You need three or more long Shinkansen trips to break even.",
      },
      {
        heading: "When the JR Pass still pays off",
        body: "There are three itineraries where the nationwide JR Pass is still the right choice:\n\n1. Long multi-city loops. Tokyo → Hiroshima → Kyoto → Tokyo (or any similar loop that covers 1,500+ rail kilometres in 7 days) beats point-to-point fares by a comfortable margin, especially with a Green Car upgrade.\n\n2. Unpredictable itineraries. If you want to spend your trip deciding each morning where to go, the pass removes fare friction entirely — you just walk up and ride. That optionality has real value even when the maths is close.\n\n3. Return trips from Sapporo or Kyushu. Long Shinkansen runs to Hakodate or Kagoshima are individually very expensive. One such round trip plus any central itinerary will usually clear the break-even point.",
      },
      {
        heading: "When to skip the pass (most people)",
        body: "If your trip is Tokyo-only, Kyoto-only, or Tokyo plus one day trip to Hakone or Kamakura, the nationwide JR Pass is a waste of money. Tokyo\u2019s Metro and JR Yamanote Line fares are trivial on a per-trip basis — you'll spend under \u00a5 2,000 a day on transport even as a heavy sightseer.\n\nThe same goes for Tokyo\u2013Kyoto round trips. A reserved Hikari ticket is currently around \u00a5 28,000 return. Two regional passes (JR East and JR West) cover the same journey for less and throw in extras. Doing the numbers on your actual route always beats buying by default.",
      },
      {
        heading: "Regional passes that beat the nationwide pass",
        body: "JR runs seven regional pass schemes, any of which is cheaper than the nationwide pass if your trip stays within that region.\n\nJR East Pass (Tohoku area): covers Tokyo plus the north-east as far as Aomori and Akita, 5 flexible days out of 14. Ideal for a Tokyo-base trip with a Tohoku loop.\n\nJR West Pass (Kansai Wide): covers Kansai — Kyoto, Osaka, Kobe, Himeji, Nara — plus Okayama and Wakayama for 5 consecutive days at around a third of the nationwide pass price. This is the best-value pass for anyone doing a Kansai-focused trip.\n\nJR Kyushu Pass: a complete Kyushu loop for around \u00a5 20,000 over 5 days.\n\nHokkaido Rail Pass: covers JR Hokkaido for 5 or 7 days. Essential for a Hokkaido-only trip.\n\nFor most travellers, stitching together one regional pass with a single reserved Shinkansen ticket to reach it is the cheapest and most flexible approach.",
      },
      {
        heading: "How to buy the pass (and how NOT to buy it)",
        body: "Since 2020, you can buy the JR Pass online from JR itself or directly at major Japanese stations on arrival. The old 'you must buy it before leaving your home country' rule is gone. Buying in Japan is slightly more expensive than online pre-purchase but still valid.\n\nAvoid third-party resellers that advertise 'discounted JR Passes' — the pass is a fixed-price product, any site charging less is selling a voucher that won't be honoured, and any site charging more is taking an unnecessary markup. Klook and JR's own site are the two reliable options for most travellers.\n\nActivation: you choose your start date when you exchange the voucher at a JR office. The pass runs for consecutive calendar days from that date, not 7\u00d724 hours — a 7-day pass activated on a Monday expires Sunday night, even if you activated it at 10 p.m. on Monday.",
      },
      {
        heading: "The verdict for 2026",
        body: "The nationwide JR Pass is no longer a default buy. For Tokyo-only trips it\u2019s a waste. For Tokyo plus Kyoto/Osaka it\u2019s close to break-even and the regional pass combo usually wins. It still earns its price for multi-region loops, Kyushu return trips, and travellers who value the 'walk up and ride' flexibility enough to pay for it.\n\nIf you're not sure, add up the reserved-seat price of every Shinkansen journey you'd actually take in a typical week, and compare that against \u00a5 50,000. If your number is lower, skip the pass. If it's higher by more than 20 percent, buy it.",
      },
    ],
    externalLinks: [
      { label: "Official JR Pass site", url: "https://japanrailpass.net/en/" },
      { label: "Klook (pass + delivery)", url: "https://www.klook.com/activity/2840-jr-pass/" },
      { label: "Japan-Guide: JR Pass overview", url: "https://www.japan-guide.com/e/e2361.html" },
    ],
    relatedGuides: ["tokyo", "kyoto", "osaka"],
  },

  {
    slug: "oyster-card",
    name: "London Oyster Card",
    shortName: "Oyster",
    country: "United Kingdom",
    countryCode: "GB",
    metaTitle: "Oyster Card vs Contactless in London: Which Should You Use? | StayByRail",
    metaDescription:
      "A practical guide to London's Oyster card in 2026 — how daily caps work, when contactless is better, whether Travelcards are still worth buying, and which zones actually affect your hotel decision.",
    intro:
      "London's transport payment system is one of the best in the world, but the overlap between Oyster, contactless, Travelcards, and the Elizabeth line confuses most first-time visitors. This guide explains exactly what each one is, which one to use for a typical trip, and how zones affect your hotel choice.",
    updatedAt: "2026-04",
    sections: [
      {
        heading: "What the Oyster card actually is",
        body: "An Oyster card is a contactless smart card you top up with money or a travelcard product. When you tap in at a Tube, Overground, DLR, or Elizabeth line gate (or a bus reader), it deducts the correct fare for your journey and caps the day's total. Pay-as-you-go fares are identical to contactless debit/credit card tap-ins.\n\nThat identical-fare point is the most important thing to know in 2026. Unless you specifically want a physical card as a souvenir or are carrying someone else\u2019s travel credit, contactless is universally simpler — you already have the card in your wallet, there's no top-up queue, and the daily cap is applied automatically.",
      },
      {
        heading: "How the daily and weekly caps work",
        body: "Tap in and out consistently through the day and Transport for London (TfL) automatically caps what you pay. For Zones 1-2, the daily cap is around \u00a3 8.90 peak or off-peak. Zones 1-4 cap at around \u00a3 12, and Zones 1-6 at around \u00a3 15. After you hit the cap, every additional ride that day is free.\n\nThere's also a Monday-to-Sunday weekly cap (usually around 5x the daily cap). To benefit from the weekly cap with contactless, you have to use the same card every day of the week. With Oyster, you can load a weekly Travelcard directly.\n\nIn practice: most tourists staying four days or fewer only hit the daily cap and should use contactless. A full-week visitor is worth doing the maths — a 7-Day Travelcard on an Oyster sometimes beats the contactless weekly cap by a small amount.",
      },
      {
        heading: "Peak vs off-peak fares (and why they matter less than they used to)",
        body: "Peak fares apply Monday to Friday 06:30\u201309:30 and 16:00\u201319:00 (excluding public holidays). Off-peak covers everything else. The peak premium is typically 30-50 pence per journey for Zones 1-2 and more for longer trips.\n\nThis matters less than tourist guides often suggest because most sightseeing happens mid-morning and afternoon anyway. Unless you're specifically catching an early airport train or commuting with locals, you'll default to off-peak fares without trying.",
      },
      {
        heading: "Zones and hotel decisions",
        body: "London's fare zones are concentric rings. Zone 1 is the centre (Tower Hill west to Paddington, north to King's Cross, south to Waterloo). Zone 2 is the ring immediately outside (Brixton, Camden, Shepherd's Bush, Bethnal Green). Zones 3 to 6 are progressively further out.\n\nFor hotel decisions, the useful rule is: anywhere in Zones 1-2 on a direct Tube line is equally convenient for sightseeing, and Zone 2 hotels are typically 25-40% cheaper for the same quality. Zones 3+ start to cost you meaningful time (extra 10-20 minutes each way) and only pay off if the room saving is substantial.\n\nAvoid the temptation to stay in Heathrow or outer Zone 6 to save money — you'll spend that saving and more on tiredness and daily transport caps.",
      },
      {
        heading: "Heathrow and Gatwick access",
        body: "Heathrow is at the western end of the Piccadilly line (Zone 6) and on the Elizabeth line. Piccadilly line journeys to central London take 50 minutes; Elizabeth line to Paddington takes 15 minutes but costs a premium fare. Heathrow Express is the fastest at 15 minutes to Paddington but noticeably more expensive.\n\nGatwick is outside TfL's network entirely. Contactless works on the Gatwick Express, Southern, and Thameslink trains but Oyster does not cover Gatwick — this is the one place the two payment methods diverge. Thameslink to St. Pancras via the Brighton Main Line is usually the best value for tourists.",
      },
      {
        heading: "The 2026 verdict",
        body: "Use contactless (Apple Pay, Google Pay, or a physical card) unless you have a specific reason not to. It\u2019s the same fare, the same caps, one less thing to buy, and it works everywhere Oyster works plus some places Oyster doesn\u2019t (like Gatwick).\n\nBuy a physical Oyster card only if you want a souvenir, are travelling with someone who can\u2019t use contactless, or are staying more than a week and have run the numbers on a 7-Day Travelcard loaded onto it.\n\nWhatever you pick, tap in AND tap out every journey. Forgetting to tap out on the Tube triggers a maximum fare charge that can be triple what you'd normally pay.",
      },
    ],
    externalLinks: [
      { label: "TfL fares and tickets", url: "https://tfl.gov.uk/fares/" },
      { label: "TfL journey planner", url: "https://tfl.gov.uk/plan-a-journey/" },
      { label: "Visit London: Oyster vs contactless", url: "https://www.visitlondon.com/traveller-information/getting-around-london/oyster" },
    ],
    relatedGuides: ["london"],
  },

  {
    slug: "navigo",
    name: "Paris Navigo Découverte",
    shortName: "Navigo",
    country: "France",
    countryCode: "FR",
    metaTitle: "How to Use Navigo Découverte as a Tourist in Paris | StayByRail",
    metaDescription:
      "A practical 2026 guide to the Paris Navigo Découverte weekly transport pass for tourists — how it works, when it beats buying carnets, and how the Monday-to-Sunday rule affects your trip planning.",
    intro:
      "The Navigo Découverte is Paris's weekly transport pass and it's the cheapest way to ride the Metro, RER, and buses for a full week — but it has one crucial catch that catches out most tourists. This guide explains how it works, when to buy one, and how to avoid the most common mistake.",
    updatedAt: "2026-04",
    sections: [
      {
        heading: "What the Navigo Découverte is",
        body: "The Navigo Découverte is a personalised reloadable smart card sold at major RATP-staffed Metro stations. Loaded with a 'Semaine' (weekly) pass, it gives unlimited travel across all five Paris fare zones for a calendar week — Monday 00:00 to Sunday 23:59. It covers Metro, RER (zones 1-5), Transilien commuter trains, Paris buses, trams, and Montmartre's funicular.\n\nThe 2026 all-zones weekly pass is around \u20ac 30, which includes the one-time \u20ac 5 fee for the physical card plus a passport-style photo. Both ends of the RER line to Charles de Gaulle Airport are included at this fare, which matters — the single fare to CDG from central Paris is around \u20ac 12, so one airport trip already accounts for a third of the weekly pass cost.",
      },
      {
        heading: "The Monday-to-Sunday rule (read this first)",
        body: "This is the catch: the weekly Navigo pass runs Monday to Sunday, not a rolling seven days. If you buy one on a Wednesday, it expires on Sunday night — you\u2019ve paid for seven days but only used four.\n\nThe pass is worth buying if you arrive Sunday night or Monday morning and leave any time before the following Monday morning. If you arrive Thursday or Friday, buying a carnet (block) of ten single tickets is usually better value — that gives you around twenty Metro journeys for about \u20ac 17.\n\nThere are no exceptions to the Monday-to-Sunday rule. It's been the biggest source of tourist complaints about the Paris transport system for twenty years and it's not changing.",
      },
      {
        heading: "How to buy and load it",
        body: "You need a passport-sized photo of yourself (automated photo booths exist in most large Metro stations for around \u20ac 5, or bring one from home). Go to a staffed ticket office at a major station — Gare du Nord, Gare de Lyon, Ch\u00e2telet-Les Halles, Nation, and Saint-Lazare all reliably have Navigo counters.\n\nYou'll be issued the physical card, help attaching the photo, and the staff will load the Navigo Semaine product. You can also top it up later at any Metro ticket machine using contactless or chip-and-pin. The card itself is valid for ten years — keep it for your next Paris trip and you skip the \u20ac 5 fee and the photo.\n\nFor same-day travel before you've had a chance to buy the pass, buy a single ticket or a carnet of ten. You cannot use contactless to tap directly into the Metro as you can in London — Paris only accepts physical tickets or the Navigo card (and recently, some NFC-enabled phones loaded with a Navigo Easy virtual pass, though that\u2019s separate from Navigo D\u00e9couverte).",
      },
      {
        heading: "Charles de Gaulle airport and zones",
        body: "The all-zones Navigo Semaine covers RER B from central Paris to CDG Terminal 1 and Terminal 2/3 at no extra cost. Gare du Nord to CDG on RER B takes around 30 minutes. That included airport access is usually what tips the balance towards buying the pass even for shorter trips — versus buying separate single tickets for the airport on arrival and departure, the weekly pass saves you around \u20ac 20 on top of all your in-city travel.\n\nOrly airport is served by the Orlyval automated shuttle (which costs extra on top of Navigo) and the T7 tram (Navigo included). Most tourists heading to or from Orly end up using the Orlyval anyway because it's significantly faster.",
      },
      {
        heading: "Navigo Easy and other alternatives",
        body: "Navigo Easy is a newer, anonymous version of the card — you buy it without a photo, but it can only carry single tickets, carnets, or day passes, not the weekly unlimited product. It's useful for trips under four days where a full Navigo D\u00e9couverte makes no sense.\n\nParis Visite is a tourist-branded day or multi-day pass that's heavily marketed at tourist offices. It\u2019s almost never the right choice — it costs more than either carnets or Navigo for equivalent coverage and only adds minor discount vouchers for a few attractions. Read the fine print before buying.\n\nThe cheapest way to get around Paris for a short trip remains a carnet of ten single Metro tickets (\u20ac 17 ish) combined with single RER B tickets for your airport transfer. The cheapest way for a full week is Navigo D\u00e9couverte Monday to Sunday. Anything else is usually overpriced.",
      },
      {
        heading: "The 2026 verdict",
        body: "Buy Navigo D\u00e9couverte if and only if your trip includes a full Monday-to-Sunday block, or you arrive Sunday night and leave any time up to the following Sunday night. In those cases the pass is by far the cheapest option and it covers your CDG airport transfers end to end.\n\nOtherwise, buy a carnet of ten at any Metro station on arrival and top up as needed. It\u2019s slower than a tap-and-go system but dependable, and it scales with how much you actually ride instead of locking you into a weekly commitment that might not align with your dates.",
      },
    ],
    externalLinks: [
      { label: "RATP Navigo page", url: "https://www.ratp.fr/en/titres-et-tarifs/navigo-week-pass" },
      { label: "Paris je t'aime: transport", url: "https://parisjetaime.com/eng/getting-around" },
      { label: "Ile-de-France Mobilites", url: "https://www.iledefrance-mobilites.fr/en" },
    ],
    relatedGuides: ["paris"],
  },

  {
    slug: "eurail",
    name: "Eurail Global Pass",
    shortName: "Eurail",
    country: "Europe",
    countryCode: "EU",
    metaTitle: "Is the Eurail Global Pass Worth It in 2026? | StayByRail",
    metaDescription:
      "A practical 2026 guide to the Eurail Global Pass for multi-country European rail trips. When it pays off, when single tickets beat it, and how the reservation system actually works.",
    intro:
      "The Eurail Global Pass is the classic option for interrailing across Europe, but it has always been a trickier product than the marketing suggests. This guide explains exactly what it covers, how the mandatory-reservation system affects your plans, which itineraries it still pays off for in 2026, and when you should just buy advance tickets instead.",
    updatedAt: "2026-04",
    sections: [
      {
        heading: "What the Eurail Global Pass is (and isn't)",
        body: "The Eurail Global Pass gives unlimited train travel across 33 European countries (all EU members except Cyprus, plus the UK, Switzerland, Norway, and several Balkan nations) for a chosen number of days within a wider validity window. The most common products are 'X days within 1 month' (e.g. 7 days within a month, 15 days within two months) and continuous passes (15, 22, one month, two months).\n\nWhat it is not: a unified European rail ticket that lets you walk onto any train. Most high-speed services — TGV in France, Frecciarossa and Italo in Italy, AVE in Spain, ICE in Germany on some routes, Eurostar between London and the continent — require a compulsory seat reservation on top of the pass, at an additional cost of between €5 and €35 per journey. A pass and a last-minute high-speed reservation is often not possible; you may end up stuck with a slow regional alternative.\n\nThis distinction — 'pass + reservation' versus 'one ticket does it all' — is the single most important thing to understand before buying.",
      },
      {
        heading: "2026 prices (adult, second class)",
        body: "The 7-days-in-1-month Eurail Global Pass is around €380 in second class (€490 first class). The 15-days-in-two-months is around €570. A continuous one-month pass is around €680. Youth (12-27) discounts shave about 20-25 percent off every fare; senior (60+) discounts around 10 percent.\n\nCompare that against point-to-point advance fares. A TGV Inoui from Paris to Barcelona booked a month ahead is around €60. A Frecciarossa from Milan to Rome is around €40. A Deutsche Bahn Sparpreis from Berlin to Munich is around €30. Add them all up for a typical interrailing route — Paris, Barcelona, Rome, Munich, Berlin — and you're looking at €150-200 in advance fares. A 7-day Eurail pass would cost double.\n\nThe pass starts to win when (a) you want unplanned flexibility, (b) you're doing very long or multi-country days, (c) you're travelling in peak season when advance fares are gone, or (d) you're adding lots of regional trains where advance fares don't exist.",
      },
      {
        heading: "The reservation problem in detail",
        body: "The biggest headache with Eurail is mandatory reservations on high-speed and night services. TGV Inoui trains between France and the rest of Europe have a fixed quota of pass-holder seats that sells out, sometimes weeks in advance during summer. If you show up at Paris Gare de Lyon wanting to catch the next TGV to Lyon, you may find that the pass-holder quota is full and you have to wait for a train three hours later — even though plenty of full-fare seats are available.\n\nThe same applies to many Spanish AVE services, most Italian Frecciarossa departures, Thalys between Brussels and Amsterdam, and ICE Sprinter services in the Netherlands. Booking those reservations in advance via the Rail Planner app or direct with the operator usually works but adds €5 to €35 per journey to the nominal 'free with pass' price.\n\nSlow regional trains, most German IC services, Swiss trains, and essentially the entire UK rail network do not require reservations. If your itinerary avoids high-speed international services, the reservation problem disappears. If it doesn't, plan ahead.",
      },
      {
        heading: "When Eurail still wins",
        body: "There are three itinerary types where Eurail is still the right call:\n\n1. Multi-country loops with lots of legs. A route that hits Amsterdam, Berlin, Prague, Vienna, Budapest, Ljubljana, Venice, and back to Paris over 15 days is 10+ rail legs, most of which are not covered by cheap advance fares. A 15-day Eurail pass plus a few seat reservations wins against buying each ticket separately.\n\n2. Flexible plans where you don't know the dates. Pass-holders can make decisions the day before. Advance-ticket buyers are locked in a month out. For anyone whose ideal trip includes deciding each morning where to go, the pass buys a flexibility premium that raw cost comparisons miss.\n\n3. Scandinavia and the Balkans. These regions have less-developed advance-fare systems and walk-up train prices can be startlingly expensive. A Eurail pass smooths out the cost across multiple countries and avoids the need to buy local tickets in languages you don't read.",
      },
      {
        heading: "When to skip it",
        body: "Skip Eurail if your trip is two or three cities in Western Europe connected by high-speed rail and you can book three months ahead. Paris-Barcelona-Rome-Paris on advance TGV, AVE, and Frecciarossa fares will cost around €200 per person and take you exactly where you want to be on your chosen dates.\n\nAlso skip it if your trip is a round trip from one base city. Eurail pays off on linear multi-leg routes; if you're using one city as a hub for day trips, buying regional return tickets as you go is usually cheaper.\n\nAnd skip it for UK-focused trips. Most UK rail fares are significantly cheaper via Trainline or the operator's own site than the Eurail supplement would imply, and the UK has no mandatory reservations on most routes.",
      },
      {
        heading: "How to buy and use it",
        body: "Eurail passes are sold directly via eurail.com and also through resellers like Klook and RailEurope. Buy from the direct site for the best prices and clearest refund terms. The pass is delivered as a mobile pass in the Eurail Rail Planner app — no physical ticket.\n\nTo use it: open the Rail Planner app, activate the pass (you choose the start date), and add each journey to your 'trip' list in the app. On the train, the conductor scans a QR code from your phone. Reservations, where required, are added separately either via the app or via the specific operator's website.\n\nOne critical detail: you MUST add each journey to the app before boarding, not after. If a conductor finds you on board without the journey added, they can treat it as travelling without a valid ticket. The app works offline once the trip is added, but you need to remember to do it before getting on.",
      },
      {
        heading: "The 2026 verdict",
        body: "Eurail Global Pass is still the right product for long, multi-country, flexible European trips — especially for people who value the ability to change plans mid-trip. It is no longer a universal 'cheaper than buying tickets' solution for short or planned trips; advance fares have gotten significantly better across Western Europe and the compulsory-reservation system on high-speed services bites.\n\nBefore buying, write out your actual planned route, look up advance fares for every leg on the operator websites, add up the total, and compare that against the pass price plus the reservations you'll need. If the pass wins by €50 or more, or if flexibility is worth that much to you, buy it. If the advance tickets are clearly cheaper, buy them instead — and keep the pass idea in reserve for the next trip where the geometry is kinder.",
      },
    ],
    externalLinks: [
      { label: "Official Eurail site", url: "https://www.eurail.com/en" },
      { label: "Seat61 Europe overview", url: "https://www.seat61.com/" },
      { label: "Rail Europe", url: "https://www.raileurope.com/" },
    ],
    relatedGuides: ["paris", "berlin", "barcelona", "madrid", "munich"],
  },

  {
    slug: "bts-rabbit-card",
    name: "Bangkok BTS Rabbit Card",
    shortName: "Rabbit Card",
    country: "Thailand",
    countryCode: "TH",
    metaTitle: "Bangkok BTS Rabbit Card Guide for Tourists 2026 | StayByRail",
    metaDescription:
      "A practical 2026 guide to Bangkok's BTS Rabbit card and the separate MRT card. Which to buy for a short tourist trip, how the stored-value system works, and the cheaper alternatives most travellers overlook.",
    intro:
      "Bangkok's rail system is fast, clean, and easy to use — but the ticketing is split across two separate systems that do not share payment cards. This guide explains the BTS Rabbit card, the MRT card, the Airport Rail Link, and which combination actually makes sense for a first-time tourist visit of three to seven days.",
    updatedAt: "2026-04",
    sections: [
      {
        heading: "The basic Bangkok transit layout",
        body: "Bangkok has two main rail networks: the BTS Skytrain (elevated, two lines — Sukhumvit light green and Silom dark green) and the MRT (underground, Blue Line loop plus the newer Purple Line heading north-west). They interchange at Asok/Sukhumvit, Sala Daeng/Si Lom, and Mo Chit/Chatuchak Park, but each transfer requires exiting one system and re-entering the other — and paying a fresh fare at each.\n\nThe Airport Rail Link is a separate operator again, connecting Suvarnabhumi Airport to Phaya Thai (on the BTS Sukhumvit line) in about 30 minutes. Like BTS and MRT, it uses its own ticketing.\n\nIn short: three rail systems, three separate ticketing schemes, no universal Oyster-card-style product covering all of them. This is the single biggest gotcha for first-time visitors and it's why understanding the Rabbit card (for BTS) vs the MRT card (for MRT) matters more than you'd expect.",
      },
      {
        heading: "What the BTS Rabbit card actually is",
        body: "The BTS Rabbit card is a stored-value contactless card used on the BTS Skytrain, plus some partner retailers and a growing number of buses. It's issued by the BTS operator, costs \u0e3f 100 (\u0e3f 50 non-refundable issuing fee + \u0e3f 50 refundable deposit), and must be topped up at ticket counters before use. Standard BTS fares range from \u0e3f 16 to \u0e3f 62 per single journey depending on distance.\n\nTourists often find the Rabbit card confusing because it does NOT work on the MRT underground. The two systems have separate operators with separate payment infrastructure, and for political/commercial reasons Thailand has never unified them despite years of promises to do so. Buying a Rabbit card and then trying to tap into an MRT station is the most common confused-tourist mistake in Bangkok.\n\nThe Rabbit card is worth buying if (a) you're in Bangkok for a week or more, (b) most of your travel is on the BTS Sukhumvit or Silom line, and (c) you want to avoid queuing for single-ride tokens at every journey. For shorter trips or MRT-heavy itineraries, single tokens are usually better.",
      },
      {
        heading: "The MRT card (separate product)",
        body: "The MRT underground uses its own stored-value card, confusingly called simply the 'MRT Card' or 'MRT Plus'. It works on the MRT Blue Line, Purple Line, and some affiliated buses, but does NOT work on the BTS Skytrain. It costs \u0e3f 180 (\u0e3f 30 non-refundable issuing fee + \u0e3f 50 deposit + \u0e3f 100 initial stored value), and can be refilled at any MRT station ticket machine or counter.\n\nMRT fares are comparable to BTS — around \u0e3f 16 to \u0e3f 42 per journey depending on distance. For an MRT-focused itinerary (Chinatown, Hua Lamphong, the temples accessible via Sanam Chai or Itsaraphap), the MRT card is the right pick. For a BTS-focused itinerary, skip it entirely and stick with Rabbit or tokens.",
      },
      {
        heading: "The single-journey token alternative",
        body: "Both systems sell single-journey tokens (plastic coin-shaped tokens for BTS, paper tickets for MRT) from vending machines at every station. Prices are identical to the stored-value card fares — there's no discount for using a card on either system. The only real advantage of cards is avoiding the queue at the token machine.\n\nFor a three-day tourist trip using the BTS and MRT maybe three to six times a day, tokens are perfectly fine. You'll spend maybe \u0e3f 150-250 a day on transport either way. The stored-value cards only start to save time (not money) after you've used them enough to make the \u0e3f 50-100 issuing fee worth it.",
      },
      {
        heading: "Day passes and tourist-only products",
        body: "The BTS sells a One Day Pass for \u0e3f 150, giving unlimited BTS Skytrain rides for one calendar day. This is worth buying if your day involves four or more BTS journeys — roughly any sightseeing day that covers more than two districts. It does not include the MRT, the Airport Rail Link, or any bus service.\n\nThe MRT does not sell a comparable day pass for tourists as of 2026. Single tokens or the stored-value card are your only options.\n\nThere are occasional 'Bangkok Tourist' bundled products sold at the airport and at tourist information desks that claim to cover both systems. Read the fine print: most of these are actually just a BTS Day Pass plus a small amount of MRT stored value, bundled at a significant markup. Rarely the right buy.",
      },
      {
        heading: "Airport Rail Link: the cheap airport option",
        body: "The Airport Rail Link (ARL) runs from Suvarnabhumi Airport to Phaya Thai station (where it connects to the BTS Sukhumvit line) in about 30 minutes. A single fare is around \u0e3f 45, making it by far the cheapest way to reach central Bangkok from SVB — taxis are \u0e3f 300-500 depending on traffic and time of day.\n\nThe ARL has its own ticket system (paper tickets or single-use tokens from vending machines). It does not accept Rabbit or MRT cards. For tourists arriving at SVB, the simplest flow is: buy a single ARL ticket at the airport machine, take it to Phaya Thai, walk 2 minutes to the BTS station, and buy a BTS token or Rabbit card there to continue. The entire journey from airport gate to a Sukhumvit hotel typically takes 45-55 minutes and costs around \u0e3f 60-90.\n\nDon Mueang airport is not served by the Airport Rail Link. The practical option is the SRT Red Line commuter train (added in recent years, around \u0e3f 30 to Bang Sue and \u0e3f 50 onwards), or a taxi at around \u0e3f 250-400.",
      },
      {
        heading: "The 2026 verdict for short tourist trips",
        body: "For a typical 3-7 day Bangkok trip, here is the pragmatic answer:\n\n\u2022 Skip buying a Rabbit card unless you're in Bangkok for 7+ days with a BTS-heavy itinerary. Single BTS tokens are fine for shorter trips.\n\n\u2022 Skip the MRT card unless your itinerary specifically centres on MRT-only destinations like Chinatown, Hua Lamphong, or the Wat Mangkon/Sanam Chai temple corridor.\n\n\u2022 Buy a BTS One Day Pass (\u0e3f 150) on days when you plan four or more BTS journeys. Buy single tokens otherwise.\n\n\u2022 For airport transfers, use the ARL from Suvarnabhumi (cheap and fast) or the SRT Red Line from Don Mueang (cheap and fine). Avoid the pre-paid 'airport tourist cards' sold at information desks.\n\nThe sole exception to this advice is if you're arriving with luggage during rush hour and want to avoid any queuing: in that case, buying a Rabbit card at the first BTS station you see and topping it up with \u0e3f 500 smooths the whole trip out for about \u0e3f 100 of convenience overhead. Not a bad deal if your time is worth more than your money.",
      },
    ],
    externalLinks: [
      { label: "BTS Skytrain official", url: "https://www.bts.co.th/eng/" },
      { label: "MRT Bangkok", url: "https://www.bemplc.co.th/en" },
      { label: "Airport Rail Link", url: "https://www.srtet.co.th/en/" },
    ],
    relatedGuides: ["bangkok"],
  },
];

export function getPass(slug) {
  return transportPasses.find((p) => p.slug === slug) || null;
}
