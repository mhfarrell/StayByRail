// FAQ content for each city guide. Keyed by guide slug.
// Kept separate from cityGuides.js to keep the main data file readable
// and to make the FAQs easier to edit in isolation.
//
// Every guide has exactly five questions so the FAQPage schema is
// consistent across the site. Answers are written for travellers
// actually deciding where to stay — no keyword stuffing, no fluff.

export const guideFaqs = {
  tokyo: [
    {
      q: "Which Tokyo station is best for first-time visitors?",
      a: "Shinjuku is the safest first choice. It sits on the Yamanote Line (so every other major district is two to eight stops away), has hotels at every price point within a ten-minute walk of the west exit, and is the departure point for both Narita Express and the buses to Hakone and Mount Fuji. Tokyo Station is a stronger pick if you're starting with a Shinkansen trip to Kyoto or Osaka on day two.",
    },
    {
      q: "Is it cheaper to stay outside the Yamanote loop?",
      a: "Yes, but usually not by enough to justify the extra commute. Stations one or two stops outside the loop — Nakano on the Chuo Line, Otsuka on the Yamanote itself, or Kita-Senju on the Hibiya Line — can shave 20 to 30 percent off a nightly rate while adding only 5 to 10 minutes to most journeys. Going further than that rarely pays off because you lose more time on transfers than you save on the room.",
    },
    {
      q: "Which station should I pick if I'm flying into Haneda?",
      a: "Shinagawa is the best all-round answer. The Keikyu Line reaches Haneda in under 20 minutes and Shinagawa is also a Yamanote and Shinkansen stop, so you can get across the city and out to Kyoto from the same hotel. Hamamatsucho (Tokyo Monorail) is the alternative if you prefer a quieter neighbourhood.",
    },
    {
      q: "Do I need to stay near a Shinkansen station for a Kyoto day trip?",
      a: "No. Tokyo Station and Shinagawa both handle the Tokaido Shinkansen, but you can reach either in 10 to 15 minutes from any Yamanote Line hotel. The only time staying directly next to a Shinkansen platform matters is if you have a very early departure (before 06:30) or very heavy luggage and no interest in a Yamanote transfer.",
    },
    {
      q: "When do Tokyo hotel prices peak?",
      a: "Golden Week (late April to early May), the Obon holiday (mid-August), the autumn foliage window (late October through November), and cherry blossom season (late March to early April) all see hotel rates roughly double. The cheapest weeks are typically mid-January to mid-February and mid-June excluding Japanese public holidays.",
    },
  ],

  london: [
    {
      q: "Which London station is best for tourists on a first visit?",
      a: "King's Cross St. Pancras is hard to beat: five Underground lines intersect there, Eurostar runs from the same building, and you're a 15-minute walk from the British Museum. Paddington is a close second if you're arriving via Heathrow Express. Victoria works well if Gatwick is your airport.",
    },
    {
      q: "How much does Zone 1 vs Zone 2 actually save on hotels?",
      a: "Typically 25 to 40 percent on equivalent-quality rooms. Zone 2 stations like Hammersmith, Bethnal Green, Kennington, and Brixton all sit on direct Underground lines into Zone 1, and the daily travelcard cap for Zones 1-2 is only about £1 more than Zone 1 only. For most visitors the trade-off is worth it.",
    },
    {
      q: "Is staying near Heathrow ever a good idea?",
      a: "Only if you have a late arrival followed by an early departure the next morning. For normal sightseeing trips, Heathrow hotels cost almost as much as central London and leave you with a 50-minute Tube ride each way. Paddington or Earl's Court give you fast Heathrow access without sacrificing central location.",
    },
    {
      q: "Which stations give the easiest access to the West End theatres?",
      a: "Covent Garden, Leicester Square, and Tottenham Court Road sit inside the theatre district itself but hotels there charge a premium. Charing Cross, Embankment, and Holborn are all within a 10-minute walk and tend to be cheaper. Further out, any station on the Piccadilly line between South Kensington and Holborn works.",
    },
    {
      q: "Do I need an Oyster card if I'm only staying two nights?",
      a: "No. Contactless debit or credit cards (and Apple/Google Pay) are accepted on every Tube, bus, and Overground service and apply the same daily cap as Oyster. You don't need to queue at a machine or buy paper tickets — just tap in and out with the card you already carry.",
    },
  ],

  paris: [
    {
      q: "Which arrondissement is best for first-time visitors?",
      a: "The 1st, 4th, and 6th arrondissements put you within walking distance of the Louvre, Notre-Dame, and Saint-Germain-des-Prés respectively, all served by multiple Metro lines. They're expensive but dense with restaurants and sights. The 9th and 11th offer better value with only slightly longer Metro rides into the centre.",
    },
    {
      q: "Is it better to stay near Gare du Nord or in the 1st arrondissement?",
      a: "Depends on your itinerary. Gare du Nord makes sense if you're arriving or leaving by Eurostar or if you want Metro Line 4 and 5 connections to the centre. For pure tourism with no rail travel, the 1st or 4th keeps you closer to the Louvre, Île de la Cité, and the Seine. Gare du Nord hotels are usually cheaper.",
    },
    {
      q: "How do I get from Charles de Gaulle to my Paris hotel?",
      a: "The RER B train runs directly from CDG to Gare du Nord, Châtelet–Les Halles, and Saint-Michel–Notre-Dame in about 30 minutes. If your hotel is near any of those stations, the RER is the cheapest and fastest option. Otherwise, Gare du Nord plus one Metro change is still usually quicker than a taxi at rush hour.",
    },
    {
      q: "Which Metro stations should I avoid staying near at night?",
      a: "Gare du Nord and Barbès-Rochechouart can feel unwelcoming after dark, especially to solo travellers. They're not dangerous in statistical terms, just busy and unrelaxing. If you're sensitive to that, the 5th, 6th, 7th, and Marais areas are all noticeably quieter in the evening.",
    },
    {
      q: "Is a Navigo pass worth it for a short Paris trip?",
      a: "Only if you're staying Monday to Sunday and arriving before Thursday. The Navigo Découverte is a weekly pass (not rolling seven days) valid Monday through Sunday — cheap, but it expires on Sunday night regardless of when you bought it. For shorter trips, a carnet of ten t+ tickets is usually better value.",
    },
  ],

  osaka: [
    {
      q: "Should I stay near Umeda or Namba?",
      a: "Umeda (also called Osaka Station) is the main JR hub and the right answer if you're taking day trips to Kyoto, Kobe, or Nara. Namba is the nightlife and street-food core and the right answer if Dotonbori, Shinsaibashi, and Den Den Town are your priority. Both are 20 minutes apart by Midosuji Line.",
    },
    {
      q: "Which station should I use for Universal Studios Japan?",
      a: "Stay near any JR Loop Line station — Osaka, Nishikujo, or Tennoji — and switch to the JR Yumesaki Line at Nishikujo. Universal-City Station is the final stop. From Umeda it's about 15 minutes door-to-door. Many hotels in Nishikujo cater specifically to theme-park visitors.",
    },
    {
      q: "Is Shin-Osaka worth staying near?",
      a: "Only if you have an early Shinkansen departure or are travelling with a lot of luggage. Shin-Osaka is purely a transport interchange — there are hotels but almost nothing to eat or do in walking distance. A Umeda hotel is 4 minutes away on the Midosuji Line and a much nicer base.",
    },
    {
      q: "How far is Osaka from Kyoto by train?",
      a: "Fifteen minutes on the Shinkansen (Shin-Osaka to Kyoto) or around 30 minutes on the JR Special Rapid from Osaka Station. Both options run frequently. Many travellers base themselves in Osaka for cheaper rooms and day-trip to Kyoto rather than the other way round.",
    },
    {
      q: "Is the Osaka Amazing Pass worth it?",
      a: "Usually yes if you plan to visit three or more paid attractions in one day. It bundles unlimited Osaka Metro rides with free entry to Osaka Castle, the Umeda Sky Building observation deck, and around 30 other sights. For travellers who just want to eat and wander, the standard Metro day pass is better value.",
    },
  ],

  barcelona: [
    {
      q: "Which Barcelona station is best for first-time visitors?",
      a: "Passeig de Gràcia sits on three Metro lines (L2, L3, L4) and two commuter rail services, and puts you within walking distance of Casa Batlló, La Pedrera, and Plaça de Catalunya. Hotels are expensive but the walking-radius coverage is unmatched. Catalunya station is the cheaper alternative with almost the same connectivity.",
    },
    {
      q: "How do I get from Barcelona Airport to the city centre?",
      a: "The Aerobús runs to Plaça de Catalunya in about 35 minutes and costs around €6. The Metro L9 Sud is slightly cheaper but slower and requires a transfer. The R2 Nord commuter train is the fastest for anyone staying near Sants or Passeig de Gràcia. Taxis take 25 to 40 minutes depending on traffic.",
    },
    {
      q: "Is it better to stay in the Gothic Quarter or in Eixample?",
      a: "Gothic Quarter is atmospheric, walkable, and closer to the cathedral and the sea, but streets are narrow and noise carries at night. Eixample is grid-planned, leafier, and has the Gaudí buildings — it's a calmer base with slightly longer walks. Most repeat visitors pick Eixample for a second trip.",
    },
    {
      q: "Which station is best for Sagrada Família?",
      a: "The station is literally called Sagrada Família, served by Metro L2 (purple) and L5 (blue). Staying near any L2 or L5 station puts you 5 to 10 minutes away with no transfers. The immediate streets around the basilica have become quite touristy — a hotel one or two stops away is usually more pleasant.",
    },
    {
      q: "When are Barcelona hotel prices lowest?",
      a: "November through February excluding Christmas and New Year, and the first two weeks of July. Avoid the Mobile World Congress week (late February to early March) and Primavera Sound / Sónar festival weeks (late May to mid-June) — rates can triple.",
    },
  ],

  bangkok: [
    {
      q: "Should I stay near the BTS or the MRT?",
      a: "The BTS (elevated Skytrain) covers the main tourist spine — Siam, Asok, Nana, Phrom Phong, Thong Lor — and is the obvious choice for first-time visitors. The MRT (underground) connects Chinatown, Hua Lamphong rail station, and Queen Sirikit. If you're choosing between equivalent hotels, BTS access is usually more useful.",
    },
    {
      q: "Is it worth staying near Suvarnabhumi Airport?",
      a: "Only for late arrivals or early departures. The Airport Rail Link runs to Phaya Thai on the BTS in about 30 minutes, so any BTS hotel between Phaya Thai and Asok is effectively a direct airport connection without the cost and isolation of staying at the airport itself.",
    },
    {
      q: "Which Bangkok area is best for nightlife vs families?",
      a: "Sukhumvit between Nana and Thong Lor is the nightlife corridor — great for bars and restaurants, noisy at 2 a.m. Silom is a calmer option with similar transport. Families tend to prefer the Chit Lom / Ratchathewi area: central, close to the big shopping malls, quieter hotels, and direct BTS to everything.",
    },
    {
      q: "How do I get from BTS stations to the Grand Palace?",
      a: "No station sits directly next to the Grand Palace. Take the BTS to Saphan Taksin, then the Chao Phraya Express Boat north to Tha Chang pier — it's about 15 minutes by boat and the most scenic option. A taxi from any Silom or Sukhumvit hotel also works, 20 to 40 minutes depending on traffic.",
    },
    {
      q: "Which month is cheapest for Bangkok hotels?",
      a: "September and October, the wettest part of the rainy season, see the lowest rates — often 30 to 50 percent below peak. The absolute peak is mid-December through mid-January and the Songkran festival week in mid-April.",
    },
  ],

  berlin: [
    {
      q: "Which Berlin station is best for first-time visitors?",
      a: "Berlin Hauptbahnhof (the central station) gives you direct S-Bahn connections to every major sight in ten minutes and regional trains to Potsdam. Friedrichstraße and Alexanderplatz are closer to Museum Island and the East Side Gallery respectively and often cheaper. All three put you within a 15-minute walk of Brandenburger Tor via S-Bahn.",
    },
    {
      q: "Is Mitte the best neighbourhood to stay in?",
      a: "For a first trip, yes. Mitte has the highest density of landmarks (Brandenburger Tor, Museum Island, Checkpoint Charlie) and sits on multiple U-Bahn and S-Bahn lines. On a second trip, consider Prenzlauer Berg (cafés, Sunday markets) or Kreuzberg (food, nightlife) for a more lived-in feel and lower rates.",
    },
    {
      q: "How do I get from BER airport to central Berlin?",
      a: "The FEX (Airport Express) runs to Berlin Hauptbahnhof in about 30 minutes. The S-Bahn S9 and S45 are slower but cheaper and stop at more stations. A single ticket covering all BVG zones (ABC) is around €4 and valid on any of these plus onward travel in the city for two hours.",
    },
    {
      q: "Do I need a day ticket for the U-Bahn?",
      a: "Only if you plan four or more trips in a day. A single ticket (2 hours, one direction) is around €3.20. A day ticket (AB zones) is around €9 and pays off after roughly three rides. The 7-day ticket is best value for anyone staying four days or more.",
    },
    {
      q: "When are Berlin hotel prices lowest?",
      a: "November to February excluding Christmas markets week, and early September just before Berlin Marathon. Avoid Berlinale (mid-February), ITB travel trade show (early March), and IFA electronics fair (early September) — hotels fill up and rates spike citywide.",
    },
  ],

  kyoto: [
    {
      q: "Should I stay near Kyoto Station or downtown?",
      a: "Kyoto Station has the most hotel options, the Shinkansen, and easy bus access to all the temples — great for first-timers and anyone on a tight schedule. The downtown area around Karasuma Oike and Shijo Kawaramachi is more atmospheric and closer to Nishiki Market and Gion. On a short trip, Kyoto Station is usually more practical.",
    },
    {
      q: "How easy is it to reach Kyoto's temples by train?",
      a: "Easier than you might expect. The JR Nara Line serves Fushimi Inari and Tofuku-ji; the Keihan Main Line covers Gion, Kiyomizu-dera, and Fushimi; the Randen tram reaches Arashiyama and Ryoan-ji. The one exception is Kinkaku-ji (Golden Pavilion), which is bus-only from the nearest station.",
    },
    {
      q: "Is Kyoto walkable?",
      a: "Central Kyoto (Kawaramachi, Gion, Pontocho) is very walkable. The temple districts are spread out — Higashiyama, Arashiyama, and Kinkaku-ji are each a 20 to 40 minute train ride apart, so a single day on foot usually only covers one of them. Planning one district per day is the most common approach.",
    },
    {
      q: "Which season is best for Kyoto?",
      a: "Late November for autumn foliage (kōyō) and late March to early April for cherry blossoms — both genuinely spectacular and both see hotel prices double. For good weather at sane prices, mid-October and mid-May are the best compromises.",
    },
    {
      q: "Can I day-trip to Kyoto from Osaka?",
      a: "Yes, easily. The JR Special Rapid from Osaka Station to Kyoto Station takes about 28 minutes and runs every few minutes. Many travellers base themselves in Osaka for cheaper rooms and day-trip to Kyoto. The main trade-off is that Kyoto's temples are at their most beautiful in the early morning and late afternoon, which a day trip tends to miss.",
    },
  ],

  madrid: [
    {
      q: "Which Madrid Metro station is best for tourists?",
      a: "Sol is the geographic and symbolic centre of Madrid and sits on three Metro lines (L1, L2, L3) plus commuter rail. You can walk to Plaza Mayor, the Royal Palace, and Gran Vía in under 15 minutes. Gran Vía itself is the alternative for shoppers and theatre-goers. Both command a premium on hotel rates.",
    },
    {
      q: "Is it better to stay near Atocha or Sol?",
      a: "Sol for sightseeing, Atocha for rail travel. Atocha is Madrid's main high-speed rail station with AVE services to Barcelona, Seville, and Valencia — so if rail trips are part of your itinerary, staying nearby saves daily transfers. Otherwise Sol is closer to most sights and nightlife.",
    },
    {
      q: "How do I get from Madrid Barajas airport to the city centre?",
      a: "Metro Line 8 (pink) runs to Nuevos Ministerios in about 15 minutes, then changes to L10 or Cercanías for the final stretch. The Cercanías C-1 line is a direct train to Atocha (25 minutes). The Airport Express bus runs 24 hours and costs €5. A taxi is a flat €30 to anywhere within the M-30 ring road.",
    },
    {
      q: "Are Madrid hotels cheaper than Barcelona?",
      a: "On equivalent-quality rooms, yes — typically 15 to 25 percent cheaper. Madrid is also less affected by tourism caps and peak-season spikes than Barcelona. If you're flexible on which Spanish city to visit, Madrid often gets you a better hotel for the same budget.",
    },
    {
      q: "When does Madrid get hottest?",
      a: "Mid-July through August regularly hit 38°C (100°F). Many locals leave the city and a lot of independent restaurants close for at least two weeks in August. For sightseeing, April to early June and September to October are much more comfortable and often cheaper.",
    },
  ],

  birmingham: [
    {
      q: "Which Birmingham station should I stay near?",
      a: "Birmingham New Street is the obvious answer: it's the main intercity and commuter hub, sits directly under the Bullring shopping centre, and puts you within walking distance of the Bullring, Brindleyplace, and the Jewellery Quarter. Birmingham Moor Street is a calmer alternative a few minutes' walk away with Chiltern services to London.",
    },
    {
      q: "Is Birmingham a good base for exploring the Midlands?",
      a: "Yes. From New Street you can reach Stratford-upon-Avon in about 50 minutes, Coventry in 20, Warwick in 30, and the Black Country Living Museum via a short combined train-and-tram hop. Hotel prices are a fraction of London's, which makes Birmingham a sensible budget base for a Midlands trip.",
    },
    {
      q: "How long does it take to reach London from Birmingham?",
      a: "Avanti West Coast runs the fastest service from New Street to London Euston in about 1 hour 20 minutes. Chiltern Railways from Moor Street to London Marylebone takes around 2 hours but is often significantly cheaper and uses a less-crowded line. Both run frequently throughout the day.",
    },
    {
      q: "Is the Jewellery Quarter worth staying in?",
      a: "If you're travelling for a weekend and want a quieter base with independent restaurants, yes. The Jewellery Quarter has its own station on the Midland Metro and the Cross-City Line, it's a 10-minute walk from the centre, and hotel rates are noticeably lower than around New Street. Repeat visitors often prefer it.",
    },
    {
      q: "When is Birmingham cheapest to visit?",
      a: "January and early February (excluding the NEC major-event weekends) and mid-November. Avoid Crufts week in March, the Grand Prix weekend at Silverstone in July, and any weekend with a major NEC trade show — hotel rates citywide spike by 50 percent or more.",
    },
  ],

  edinburgh: [
    {
      q: "Which Edinburgh station is best for tourists?",
      a: "Waverley. It's the main intercity station, sits in a valley directly between the Old Town and New Town, and puts every major sight within a 15-minute walk. Haymarket is the alternative if your hotel is in the West End, and tends to be slightly cheaper, but you give up some of the central walking access.",
    },
    {
      q: "Is it better to stay in the Old Town or New Town?",
      a: "Old Town is atmospheric, cobbled, and closer to the Castle and Royal Mile — but steep, narrow, and very crowded during festival season. New Town is flatter, more Georgian, and home to the best restaurants. For most first-time visitors the New Town is a more comfortable base with just as much walking access.",
    },
    {
      q: "How do I reach Edinburgh Airport from the city centre?",
      a: "The Edinburgh Tram runs directly from York Place (near Waverley) to the airport terminal in about 35 minutes. The Airlink 100 bus is slightly cheaper and takes roughly the same time. Both run frequently throughout the day. A taxi takes 25 minutes off-peak and about £25.",
    },
    {
      q: "How far in advance should I book during the Festival?",
      a: "Six months is sensible, nine months is safer. Edinburgh's August Festival (Fringe, International, Book, and Art festivals all overlap) sees hotel rates triple or quadruple, and the best value properties sell out first. If you can't book that far ahead, consider staying in Leith or Portobello and commuting in.",
    },
    {
      q: "Can I day-trip to Glasgow from Edinburgh?",
      a: "Yes — the ScotRail express to Glasgow Queen Street takes about 50 minutes and runs every 15 minutes throughout the day. Many visitors base themselves in Edinburgh and day-trip to Glasgow rather than the other way round. Flexible tickets are cheap if you avoid the morning commuter window.",
    },
  ],
};

export function getFaqs(slug) {
  return guideFaqs[slug] || null;
}
