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

  manchester: [
    {
      q: "Piccadilly or Victoria — which Manchester station should I stay near?",
      a: "Piccadilly for most first-time visitors: it handles the London intercity service, has higher hotel density, and sits directly above a Metrolink stop connecting every tram line. Victoria is the right call if you're attending a concert or event at the Manchester Arena, which is directly attached to the station.",
    },
    {
      q: "How long does the train from Manchester to London take?",
      a: "The Avanti West Coast service from Manchester Piccadilly to London Euston takes about two hours fifteen minutes at its fastest. Advance tickets booked three months ahead are significantly cheaper than walk-up fares. The Chiltern service from Moor Street to Marylebone is slower at two hours but often half the price.",
    },
    {
      q: "Is the Northern Quarter a good base?",
      a: "Yes, for a weekend trip. The Northern Quarter has the highest density of independent bars, record shops, and restaurants in the city centre, and is a 10-minute walk from Piccadilly station. It gets busy and loud on weekend nights — light sleepers should check reviews for street-noise warnings before booking.",
    },
    {
      q: "Does Manchester Airport have direct trains to the city?",
      a: "Yes. The airport has a dedicated station served by frequent trains to Manchester Piccadilly (20 minutes) and onward to Oxford Road and some regional destinations. A Metrolink tram runs a parallel route that's slower but covers more city-centre stops. For most travellers, the train is the faster option.",
    },
    {
      q: "When are Manchester hotels cheapest?",
      a: "Mid-January to mid-March (excluding half-term), and early June (excluding Parklife festival weekend) typically see the lowest rates. Avoid any weekend with a Manchester United or Manchester City home match, and check Manchester Central's conference calendar before booking — large trade shows can double hotel prices citywide.",
    },
  ],

  munich: [
    {
      q: "Is München Hauptbahnhof a safe area to stay in?",
      a: "Generally yes, though the immediate area south of the station (around Schillerstraße and Goetheplatz) is older and less polished. Most travellers feel more comfortable north of the station or on the route between Hauptbahnhof and Karlsplatz. Major chain hotels in all directions from the station are fine; solo travellers sometimes prefer the Marienplatz end of the old town instead.",
    },
    {
      q: "Should I stay near Marienplatz or near the Hauptbahnhof?",
      a: "Marienplatz puts you at the geographic heart of the city, one minute from the Glockenspiel and the best sightseeing, but hotels charge a premium. Hauptbahnhof is better if you'll be doing day trips by train, is typically 20-30 percent cheaper for equivalent rooms, and is still only a 15-minute walk from Marienplatz. For a pure leisure trip, Marienplatz wins; for a rail-heavy trip, Hauptbahnhof is usually better.",
    },
    {
      q: "How far in advance should I book for Oktoberfest?",
      a: "By February at the latest. Hotel rates triple or quadruple during Oktoberfest (late September to first weekend of October) and the best-value properties within walking distance of Theresienwiese sell out first. If you can't book that far ahead, consider staying in the suburbs on an S-Bahn line and commuting in.",
    },
    {
      q: "How do I get from Munich Airport to the city centre?",
      a: "The S1 or S8 S-Bahn lines both run from the airport to Hauptbahnhof in about 40 minutes. They take different routes but arrive at the same time. A single ticket covering the airport zone is around €13.80 and valid for onward travel in the city for the day on the same validity window.",
    },
    {
      q: "Is Munich a good base for day trips?",
      a: "One of the best in Europe. Salzburg is under two hours by EuroCity, Nuremberg is 65 minutes, Regensburg 90 minutes, and the Neuschwanstein castle area (via Füssen) about two hours. Dachau, the concentration camp memorial, is 20 minutes by S-Bahn. Nearly everything interesting in southern Bavaria and Austria is reachable from Munich by lunchtime.",
    },
  ],

  hamburg: [
    {
      q: "Which Hamburg station is best for first-time visitors?",
      a: "Jungfernstieg is arguably the best choice for sightseeing: it's next to the Binnenalster lake, on four S-Bahn lines and three U-Bahn lines, and within walking distance of the town hall, the Chilehaus district, and the main shopping streets. Hauptbahnhof is busier and has more hotel options but the immediate area is less polished.",
    },
    {
      q: "Is HafenCity worth staying in?",
      a: "Yes, if you want a modern, waterfront experience and your trip revolves around the Elbphilharmonie, harbour tours, or the Speicherstadt warehouses. Hotels are newer and often have water views. The main drawback is it's slightly further from the main shopping and sightseeing streets, though the U4 line now provides fast access.",
    },
    {
      q: "How close can I stay to the Reeperbahn without being kept awake?",
      a: "The U3 station at Feldstraße, one stop north of Reeperbahn, puts you within 10 minutes' walk of the entertainment district but removes most of the street noise. Rooms facing side streets rather than the Reeperbahn itself also help. For light sleepers, Altona or Jungfernstieg plus a 15-minute U-Bahn ride is a better compromise.",
    },
    {
      q: "How do I get from Hamburg Airport to the city centre?",
      a: "The S1 S-Bahn runs directly from the airport to Hauptbahnhof in about 25 minutes. A day ticket in the HVV covers the airport trip plus all onward U-Bahn, S-Bahn, and harbour ferries, and is excellent value for anyone staying more than one day.",
    },
    {
      q: "Do cruise ship dates affect Hamburg hotel prices?",
      a: "Yes, noticeably. When multiple large cruise ships are in port simultaneously — which the Hamburg Cruise Center publishes on its calendar — central hotel prices can spike by 50 percent or more. Checking that calendar before booking is one of the easiest ways to save money in Hamburg.",
    },
  ],

  lyon: [
    {
      q: "Should I stay near Part-Dieu or Perrache?",
      a: "Part-Dieu is the right call for rail-heavy trips: nearly all TGV services use it, and you can reach the platform in under three minutes from most nearby hotels. Perrache is better for sightseeing, since it's already on the Presqu'île peninsula within walking distance of Place Bellecour and the old town.",
    },
    {
      q: "How fast is the TGV from Lyon to Paris?",
      a: "Two hours flat on the TGV Inoui or Ouigo services, running every 30 minutes at peak. Advance tickets booked a month or more ahead are often under €40 one-way, making Lyon one of the best-value rail day trips from Paris — or vice versa.",
    },
    {
      q: "Is Vieux Lyon worth staying in?",
      a: "It's atmospheric and romantic, but narrow streets fill with tourists during the day and restaurants stay busy until late. Hotels are mostly small boutique properties. For quieter nights with the same walking access, consider Bellecour or the Hôtel de Ville area on the Presqu'île — one minute by Metro to Vieux Lyon.",
    },
    {
      q: "Which airport does Lyon have and how do I get there?",
      a: "Lyon Saint-Exupéry. The Rhônexpress tram-train runs from Lyon Part-Dieu to the airport in about 25 minutes, every 15-30 minutes. Tickets are around €16 each way — more expensive than most European airport links but significantly faster than any alternative.",
    },
    {
      q: "Can I do Alpine day trips from Lyon?",
      a: "Yes. TGV to Annecy takes 1h 55 and TGV to Grenoble takes 1h 15 — both are easily same-day. Chamonix and the Mont Blanc area are further (around four hours each way) and realistically require an overnight. For lighter Alpine scenery without the long commute, the trains into the Chartreuse and Vercors regions are outstanding.",
    },
  ],

  hiroshima: [
    {
      q: "Is one day enough for Hiroshima?",
      a: "Technically yes — you can visit the Peace Memorial Museum, Park, and A-Bomb Dome in half a day and Miyajima in the afternoon. Realistically, two days lets you move at a pace that does the subject matter justice, and adds options like the castle, Shukkei-en garden, and the Mazda Museum. Most visitors regret cramming it into one day.",
    },
    {
      q: "What's the best way to get from Hiroshima Station to the Peace Park?",
      a: "Hiroden tram lines 2 or 6 from the station south exit to Genbaku Dome-mae, about 15 minutes and a flat fare of around ¥190. Walking takes about 30 minutes and is fine in good weather. Taxis work too but tend to be expensive for the short distance.",
    },
    {
      q: "Should I stay overnight on Miyajima?",
      a: "If you can afford it, yes. The island's atmosphere after the day-trippers leave is genuinely special — the torii gate at sunset and the shrine before sunrise are worth building a trip around. Hotels and ryokans on the island charge a premium but the experience is difficult to replicate as a day-tripper.",
    },
    {
      q: "Is the JR Pass useful for getting to Hiroshima?",
      a: "Only partially. JR Pass holders can't use the fastest Nozomi Shinkansen; you're limited to Hikari and Sakura services, which add about 20-30 minutes to Tokyo-Hiroshima. Sakura from Osaka to Hiroshima is 90 minutes and perfectly reasonable. For a single Tokyo round trip including Hiroshima, the pass maths are close; see our JR Pass guide for the full calculation.",
    },
    {
      q: "What's the Hiroshima hotel price compared to Osaka and Kyoto?",
      a: "Typically 20-30 percent cheaper for equivalent-quality rooms. Hiroshima is less affected by peak-season spikes than Kyoto or Osaka, which makes it particularly good value during cherry blossom season and autumn foliage weeks.",
    },
  ],

  yokohama: [
    {
      q: "Is Yokohama a smart base for a Tokyo trip?",
      a: "For most travellers, yes. A four-star Yokohama hotel typically costs what a three-star Tokyo hotel costs, and Shinjuku is 25 minutes away on a direct JR Shonan-Shinjuku Line train. The trade-off is the commute time; for trips of three nights or more, the savings almost always justify it.",
    },
    {
      q: "How long is the train from Yokohama to Shinjuku?",
      a: "25 minutes on the JR Shonan-Shinjuku Line, direct with no transfer. The Tokyu Toyoko Line to Shibuya is about 30 minutes. Both run frequently throughout the day. Single fares are around ¥900, so for trips where you make more than 2-3 round trips a day, it makes sense to buy a daily Tokyo-area pass.",
    },
    {
      q: "Is Minato Mirai worth the extra cost?",
      a: "For a short romantic trip or special-occasion stay, yes. Waterfront views of the harbour and Mount Fuji on clear days are hard to match elsewhere in the Tokyo area, and the area is genuinely pleasant to walk around. For longer or more budget-conscious trips, Sakuragicho station is one stop away and noticeably cheaper.",
    },
    {
      q: "Can I reach Haneda Airport directly from Yokohama?",
      a: "Yes — the Keikyu Line runs directly from Yokohama Station to Haneda Airport in about 30 minutes, no transfers. This is often faster than reaching Haneda from central Tokyo, and is one of the strongest reasons to choose Yokohama as a base for flights in or out of Haneda.",
    },
    {
      q: "What should I see in Yokohama itself beyond using it as a Tokyo base?",
      a: "Yokohama has genuine attractions of its own: Japan's largest Chinatown, the Cup Noodles Museum, the Shin-Yokohama Ramen Museum, the Landmark Tower observation deck, Sankeien Garden, Red Brick Warehouse, and the Yamate hill with its 19th-century Western-style houses. Plan on one to two days dedicated to Yokohama if you're staying there for longer than a week.",
    },
  ],

  marseille: [
    {
      q: "Should I stay near Gare Saint-Charles or the Vieux-Port?",
      a: "Vieux-Port for almost any leisure trip. It's six minutes by metro from Saint-Charles, directly on the old harbour, and within walking distance of the MuCEM, the Panier, and most of the restaurants you'll actually want to eat at. Saint-Charles hotels are cheaper and more convenient if you have an early TGV or multiple day trips by rail, but the neighbourhood itself is functional rather than atmospheric.",
    },
    {
      q: "How long is the TGV from Paris to Marseille?",
      a: "Three hours flat on the fastest Inoui services, running roughly every hour. Advance tickets on Ouigo (SNCF's budget TGV brand) can drop to €25 one-way if booked a month or more ahead. At that price, Marseille becomes one of the best-value long-weekend destinations in France from Paris.",
    },
    {
      q: "How do I reach the Calanques without a car?",
      a: "Two ways. The TER regional train from Saint-Charles to Cassis (about 25 minutes, around €8) is the most scenic — you end up in a proper Provençal harbour town that's itself a good base for walks into the Calanque de Port-Miou and En-Vau. Alternatively, city bus route 21-Jet from Castellane runs to the walking trailheads at Luminy and Callelongue directly from Marseille.",
    },
    {
      q: "Is Marseille safe for tourists?",
      a: "Yes, with normal urban precautions. The main tourist corridors — Vieux-Port, Le Panier, Prado, and Castellane — are as safe as any French city. The area immediately around Gare Saint-Charles after dark is livelier and requires a bit more awareness, and a few pockets of the 1st, 2nd, and 3rd arrondissements are worth avoiding late at night. Don't flash valuables at the station and don't wander unfamiliar neighbourhoods after midnight. Outside that, Marseille is welcoming.",
    },
    {
      q: "What day trips are possible by rail from Marseille?",
      a: "Aix-en-Provence is 45 minutes by TER, Avignon is 35 minutes by TGV, Arles is 50 minutes, and Cassis is 25 minutes. Nice is 2h 30 by TGV — long but doable as a same-day return. A four-day Marseille trip with day trips to Cassis, Aix, and Arles is one of the strongest rail-based holidays you can do in the south of France.",
    },
  ],

  valencia: [
    {
      q: "Should I stay near Nord or Joaquín Sorolla?",
      a: "Nord for leisure trips — you're walking distance from the cathedral, the Mercado Central, and the whole of Ciutat Vella. Joaquín Sorolla for rail-heavy trips with an early AVE departure or a tight turnaround; the modern chain hotels there are slightly cheaper, and the free shuttle bus to Nord runs every ten minutes if you need to reach the old town in a hurry.",
    },
    {
      q: "How fast is the AVE from Madrid to Valencia?",
      a: "1h 55 on the fastest services, running roughly every hour. Advance tickets on Avlo (Renfe's budget high-speed brand) can drop to €20-30 one-way if booked a month or more ahead. That makes Valencia one of the best-value weekend destinations in Spain from Madrid.",
    },
    {
      q: "Can I reach Valencia Airport by metro?",
      a: "Yes. Metro Line 3 and Line 5 both run directly to the airport from the city centre in about 25 minutes for around €4.90 one-way. No shuttle bus needed, no taxi. Valencia has one of the best airport-to-city metro links in Spain.",
    },
    {
      q: "How do I reach the beach from the old town?",
      a: "Metro Line 5 to Marítim-Serrería, then change to Tram Line 6 to Malvarrosa — total journey about 20 minutes. Alternatively, rent a bike and cycle through the Turia riverbed park and along the seafront. It's flat, easy, and one of the best free attractions in the city.",
    },
    {
      q: "When should I avoid booking Valencia?",
      a: "Las Fallas, the mid-March festival, sees hotel prices roughly quadruple for the two-week run-up. If you're not specifically coming for Las Fallas, book around it — either early March or from the first week of April onwards. Summer is hot and crowded; spring and autumn are the sweet spot.",
    },
  ],

  seville: [
    {
      q: "Where should a first-time visitor stay in Seville?",
      a: "Santa Cruz, the former Jewish quarter east of the cathedral, is the classic answer. It's the most atmospheric central neighbourhood and puts you within a five-minute walk of the cathedral, the Alcázar, and the Archivo de Indias. Hotels are mostly boutique properties in restored historic buildings; prices are higher than the city average but the walking access justifies it.",
    },
    {
      q: "How fast is the AVE from Madrid to Seville?",
      a: "2h 30 on the fastest services, running roughly every 90 minutes. Seville was the original AVE destination from Madrid when the high-speed line opened in 1992, and the route remains one of Spain's busiest. Advance tickets can drop to €30-40 one-way if booked a month or more ahead.",
    },
    {
      q: "Is there a metro from Seville Airport to the city?",
      a: "Not yet. Metro Line 3 is under construction and expected to open its first segments in 2028 or later. Until then, the airport bus EA runs every 20-30 minutes from Seville Airport to Santa Justa and Plaza de Armas for €4 one-way, taking 35-40 minutes. Taxis are a flat rate of around €22-25. For most travellers, the bus is fine.",
    },
    {
      q: "Is Triana worth staying in?",
      a: "For a flamenco-focused trip, absolutely. Triana has the city's most authentic flamenco venues (rather than the tourist shows around the cathedral), the Mercado de Triana for breakfast, and a more relaxed atmosphere than the old town. Hotels are cheaper. The trade-off is a 10-15 minute walk back across the Guadalquivir to reach the cathedral and Alcázar.",
    },
    {
      q: "When should I avoid Seville?",
      a: "Summers (June-September) are punishing — regular afternoon highs above 38°C, and the narrow old-town streets offer only partial shade. Semana Santa (Holy Week) and the Feria de Abril immediately after see hotel prices triple and availability vanish. Spring (March, early April, late April after the Feria) and autumn (October-November) are the sweet spot for weather and reasonable pricing.",
    },
  ],

  nagoya: [
    {
      q: "Is Nagoya worth stopping in on the Tokaido Shinkansen?",
      a: "Yes, especially for a day or overnight. Most travellers speed past on the Nozomi between Tokyo and Kyoto, missing one of Japan's great castles (Nagoya-jo with its reconstructed Honmaru Palace), the second-most important Shinto shrine (Atsuta Jingu), and the best launchpad for Takayama, Ise, and the Kiso Valley. A one-night stopover comfortably covers the city centre; two nights lets you do a proper day trip.",
    },
    {
      q: "How fast is the Shinkansen to Nagoya from Tokyo and Kyoto?",
      a: "From Tokyo, the fastest Nozomi reaches Nagoya in 1h 34 (around ¥11,300 reserved seat). From Kyoto it's 35 minutes, from Shin-Osaka 51 minutes. JR Pass holders can't use the Nozomi but the Hikari is only 10 minutes slower from Tokyo and uses the same pass.",
    },
    {
      q: "Should I stay near Nagoya Station or Sakae?",
      a: "Nagoya Station for rail-heavy trips with early Shinkansen departures — the Marriott Associa and JR Gate Tower Hotel are directly connected to the platforms. Sakae for eating, walking around, and evening atmosphere. The two are three minutes apart on the Higashiyama subway line, so the choice is more about step-out-of-the-door convenience than actual distance.",
    },
    {
      q: "Can I do Takayama as a day trip from Nagoya?",
      a: "Yes but barely — the JR Hida limited express takes 2h 15 each way, leaving you about 4-5 hours in Takayama. Enough for the morning market, old town, and Hida Folk Village, but it's a packed day. For onsen relaxation or a proper Alpine walk, stay overnight in Takayama instead.",
    },
    {
      q: "What food is Nagoya famous for?",
      a: "Three regional specialties. Miso-katsu (pork cutlet in a thick red miso sauce). Tebasaki (sweet-soy chicken wings — Sekai no Yamachan in Sakae is the famous chain). Hitsumabushi (grilled eel served over rice with three different ways to eat it — Atsuta Horaiken near the shrine is the definitive version, with a legendary queue). All three are genuinely different enough from standard Japanese food to make a trip worthwhile.",
    },
  ],

  chiang_mai: [
    {
      q: "Should I take the overnight train or fly from Bangkok to Chiang Mai?",
      a: "Take the overnight sleeper train if you have an open schedule. Train #9 departs Bangkok's Krung Thep Aphiwat station around 18:10 and arrives Chiang Mai around 07:15, saving you a hotel night and dropping you in the city ready to start the day. Second-class air-conditioned berths are around 950-1,050 baht and genuinely comfortable. Flying is faster on paper (70 minutes) but once you add the airport transfers at each end, the overnight train loses almost nothing and costs about the same.",
    },
    {
      q: "Where should I stay in Chiang Mai?",
      a: "The old city (the walled square ringed by the moat) is the best all-round base for a first visit — walking distance to the main temples, the Sunday Walking Street, and most restaurants. Nimman is the cooler, more modern alternative if you want cafés, bars, and a larger hotel with a pool. The Night Bazaar area east of the moat is the classic tourist nightlife district and has the big international brands with river views.",
    },
    {
      q: "Does Chiang Mai have a metro or public transport?",
      a: "No metro, no skytrain, no proper urban rail. The city uses red songthaew trucks as shared taxis — flag one down, tell the driver where you're going, agree a fare (usually 30-60 baht depending on distance), and ride in the back. Grab and Bolt also work for app-based rides. Walking is the main mode inside the old city itself, which is only 1.6 km square.",
    },
    {
      q: "When is the burning season in Chiang Mai?",
      a: "Roughly mid-February to mid-April, when farmers in the surrounding valleys burn crop residues and the mountain air traps the smoke over the city. Air quality can drop to hazardous levels (PM2.5 over 150) for days at a time. If you're sensitive to air pollution or have respiratory issues, avoid this window entirely. November to early February is the ideal weather window.",
    },
    {
      q: "Can I visit elephant sanctuaries from Chiang Mai?",
      a: "Yes, and this is one of the most popular reasons to visit. Elephant Nature Park is the most ethically respected sanctuary — avoid any operator that offers elephant riding, which is widely considered cruel. Book directly with the sanctuary rather than through your hotel, and pick a full-day option rather than half-day. Transport from Chiang Mai is included in the price.",
    },
  ],

  phuket: [
    {
      q: "Where should I stay in Phuket for the first time?",
      a: "For most first-time visitors, Kata Beach is the best all-round answer — a proper beach atmosphere without the Patong nightlife chaos, a cluster of mid-range and upper-mid hotels, and a walkable strip of restaurants. Patong only if nightlife is the point of your trip. Bang Tao for an all-inclusive resort experience near the airport. Surin or Kata Noi for luxury.",
    },
    {
      q: "Does Phuket have any trains or metro?",
      a: "No. Phuket is an island with no rail service at all. The nearest train station is at Surat Thani on the mainland, hours away by bus and ferry. Most travellers arrive by air into Phuket International Airport and use Grab (the rideshare app), taxis, or hotel transfers to reach their beach.",
    },
    {
      q: "How do I get around Phuket without a car?",
      a: "Grab or Bolt rideshare apps are the easiest option for most tourists — reliable, priced in the app, no haggling. Songthaews (shared blue pickup trucks) run fixed loose routes between Phuket Town and the major beaches for very cheap fares. Scooter rental is common but Phuket has one of Thailand's highest road accident rates for tourists and we don't recommend it unless you already ride daily at home.",
    },
    {
      q: "When is the best time to visit Phuket?",
      a: "November through April is the dry high season, with the peak weeks being Christmas-New Year and Chinese New Year (prices triple). May through October is the Southwest monsoon — warm, with regular afternoon rain and rougher seas on the west coast. The low season is 40-60 percent cheaper and much quieter; if you can tolerate rain, it's one of the best value tropical trips in Asia.",
    },
    {
      q: "Is Patong worth visiting or should I avoid it entirely?",
      a: "Worth visiting for one evening even if you don't stay there — the walk down Bangla Road is a genuine Thailand-tourism experience and there's some good street food. Worth staying there only if you specifically want to be in the middle of the nightlife. For every other type of trip (family, couples, luxury, quiet), stay somewhere else on the west coast and visit Patong on a Grab for one night if curious.",
    },
  ],

  beijing: [
    {
      q: "Which Beijing station should I stay closest to as a tourist?",
      a: "Wangfujing on Subway Line 1 is the safest first-time choice — walking distance to the Forbidden City, Tiananmen Square, and most of central Beijing's heritage sites, with a high concentration of international four- and five-star hotels. For a second trip or for travellers who want a more atmospheric base, the hutong courtyard hotels around the Yonghegong Lama Temple area (Lines 2 and 5) are a stronger pick.",
    },
    {
      q: "Which of Beijing's four mainline railway stations does my train use?",
      a: "It depends entirely on where you're going. Beijing South handles east-coast HSR (Shanghai, Tianjin, Jinan). Beijing West handles south and west long-distance services (Wuhan, Guangzhou, Xi'an, the through-train to Hong Kong). Beijing Railway Station handles conventional and overnight services plus a few HSR routes. Beijing North handles the high-speed line to Zhangjiakou. Always check the departure station printed on your ticket before booking a hotel — the four are 5–15 km apart and not interchangeable.",
    },
    {
      q: "Can I visit Beijing without a Chinese visa?",
      a: "For citizens of 50+ countries (including UK, US, EU, Canada, Australia), yes — the 144-hour visa-free transit policy lets you stay in Beijing for up to six days as long as you're booked onwards to a third country. You'll need to declare it on arrival at the airport and stick to the city limits. This is the easiest way to see Beijing for most Western travellers without going through the full visa process.",
    },
    {
      q: "How do I pay for the Beijing Subway as a tourist?",
      a: "Alipay or WeChat Pay tourist versions are now the easiest option — both apps accept overseas Visa and Mastercard for top-up since 2024 and you scan a QR code at every fare gate. The traditional Yikatong stored-value card still works and can be bought from any subway ticket office for a refundable deposit. A single ride is ¥3–9 depending on distance. Cash payment at machines is also possible but slower.",
    },
    {
      q: "What's the best way to reach the Great Wall from Beijing?",
      a: "For most first-time visitors, an organised half-day tour to Mutianyu from any central hotel is the easiest answer — Mutianyu is the most-restored, least-crowded section, with a cable car up and a toboggan down. For travellers who want the cheapest option, the new Beijing–Zhangjiakou high-speed line from Beijing North reaches Badaling in 30 minutes for around ¥30 each way; Badaling is more crowded but the easiest DIY option. Avoid the touts at the main railway stations claiming to sell Great Wall tours.",
    },
  ],

  shanghai: [
    {
      q: "Which side of the Huangpu River should I stay on?",
      a: "For a first Shanghai trip, the Puxi side near the Bund (East Nanjing Road station) gives you the best base — walking distance to the colonial-era riverfront, the Yuyuan Garden, and People's Square. The Pudong side (Lujiazui) is the right pick if you specifically want a tower hotel with a skyline view back across the river. Line 2 connects both sides directly so the choice is more about atmosphere than logistics.",
    },
    {
      q: "Maglev or Metro Line 2 from Pudong Airport?",
      a: "Metro Line 2 is more practical end-to-end for most travellers — it goes directly to People's Square in 45–55 minutes for around ¥8, no transfer needed. The Maglev is faster on its own segment (8 minutes to Longyang Road, hitting 300 km/h) but Longyang Road is 5 km from anywhere central, so you still need a Metro transfer afterwards. The Maglev is worth doing once for the experience; Line 2 is the right choice for actually getting to your hotel.",
    },
    {
      q: "Which Shanghai station do high-speed trains use?",
      a: "Almost all long-distance HSR services from Shanghai (Beijing, Hangzhou, Suzhou, Nanjing, Hefei, Wuhan) depart from Shanghai Hongqiao Railway Station in the west of the city. Hongqiao is China's biggest railway station by floor area and is connected to the centre by Metro Line 2 in around 40 minutes. The older Shanghai Railway Station and Shanghai South handle a smaller share of conventional and regional services.",
    },
    {
      q: "How long can I stay in Shanghai without a visa?",
      a: "Up to 240 hours (10 days) for citizens of 50+ countries with onward tickets to a third country, under the Yangtze Delta visa-free transit policy introduced in 2024. The same policy covers Hangzhou, Suzhou, and Nanjing, so you can move freely between them within the 10-day window. This is one of the most generous transit policies in Asia and has made short Shanghai breaks dramatically easier.",
    },
    {
      q: "Is Shanghai a good day trip from Hong Kong?",
      a: "By high-speed train it's around 8 hours each way, so no — not as a same-day round trip. As a 2–3 night side trip from a Hong Kong base, yes, and the through-train from Hong Kong West Kowloon to Shanghai Hongqiao avoids the Shenzhen border interchange. Most visitors who do both cities fly between them on a budget airline (around 2 hours, ¥600–1500), which is faster end-to-end than the train despite the airport overhead.",
    },
  ],

  guangzhou: [
    {
      q: "Which Guangzhou station do high-speed trains use?",
      a: "Almost all long-distance HSR services from Guangzhou — Beijing, Shanghai, Wuhan, Changsha, Kunming, and the high-speed link to Hong Kong West Kowloon — depart from Guangzhou South (Guangzhounan), 17 km south of the centre in Panyu district. Metro Line 2 connects the centre to Guangzhou South in around 30 minutes. The older Guangzhou Railway Station handles conventional services and a few HSR routes.",
    },
    {
      q: "Where should I stay in Guangzhou for the first time?",
      a: "The Tianhe / Zhujiang New Town district (Lines 1 and 3) is the modern CBD with the highest concentration of international five-star hotels and the best base for first-time business or leisure visitors. For a more historic alternative, the Yuexiu district around Beijing Road (Line 2) puts you close to the city's heritage sites and Cantonese-food districts at a lower price.",
    },
    {
      q: "How fast is the high-speed train from Guangzhou to Hong Kong?",
      a: "48 minutes on the express service from Guangzhou South to Hong Kong West Kowloon. Immigration is co-located inside West Kowloon — you clear both Chinese exit and Hong Kong entry inside the same building, so the journey is functionally door-to-door. Tickets from RMB 215 (around £24) one-way and there are 10–15 daily services in each direction.",
    },
    {
      q: "Do I need to learn Cantonese for Guangzhou?",
      a: "No. Cantonese is the historic local language and you'll hear it everywhere, but Mandarin is universally understood and most under-30s and all signage use Mandarin or English. A translation app handles everything else. Cantonese is much more useful in Hong Kong than in modern Guangzhou itself.",
    },
    {
      q: "What's the best month to visit Guangzhou?",
      a: "October–December and February–April are the best months — warm, dry, and comfortable. June–September is genuinely punishing (35°C+ with high humidity, frequent thunderstorms) and the autumn typhoon window means occasional days of disruption. Avoid Lunar New Year week (late January or February) when the city empties out and many small restaurants close.",
    },
  ],

  shenzhen: [
    {
      q: "Is it cheaper to stay in Shenzhen and visit Hong Kong as a day trip?",
      a: "Yes, significantly — a four-star hotel in Hong Kong's Tsim Sha Tsui costs HK$1,800–2,500 per night in peak season; the equivalent in Shenzhen's Futian district costs roughly RMB 600–900 (about HK$650–1,000), a 50–60 percent saving. The trade-off is the daily border crossing: 14 minutes on the high-speed train from Futian to Hong Kong West Kowloon, plus 20–30 minutes for immigration on each side. For a 4-day Hong Kong trip with daily outings, the Shenzhen base is one of Asia's best hotel arbitrages.",
    },
    {
      q: "Which Shenzhen station do I use for the fastest crossing to Hong Kong?",
      a: "Futian Railway Station (the high-speed station, not the metro Futian Checkpoint) — high-speed trains reach Hong Kong West Kowloon in 14 minutes with co-located immigration, so you only queue once. The older Luohu and Lok Ma Chau crossings are cheaper but slower (40 minutes plus the queues at both sides). For day trips to Hong Kong, the high-speed link is the right answer for almost everyone.",
    },
    {
      q: "Do I need a multi-entry Chinese visa for the Shenzhen-Hong Kong shuttle?",
      a: "If you're crossing back and forth daily, yes — every entry into mainland China counts as one entry on your visa. A standard 10-year US tourist visa allows multiple entries; a single-entry tourist visa does not. Some nationalities can use the 144- or 240-hour visa-free transit policy on each entry but the rules around \"transit\" can be tightened if you cross in and out repeatedly.",
    },
    {
      q: "Where should I stay in Shenzhen for first-time visitors?",
      a: "Futian district (Lines 1 and 4) is the modern administrative-and-CBD core and the right base for any trip that involves a Hong Kong day trip or HSR onward travel. Walking distance to Futian Checkpoint, Futian Railway Station, and the Civic Center area's international hotels. Luohu (Line 1) is cheaper but feels older and busier. Nanshan / OCT (Line 1 west) is quieter and closer to the airport.",
    },
    {
      q: "Is Shenzhen worth visiting on its own merits?",
      a: "Honestly, less than Beijing, Shanghai, or Guangzhou. Shenzhen is a remarkable economic story but it's a 40-year-old city without the historic depth of older Chinese destinations. For 2–3 days as a Hong Kong base, yes. As a standalone destination, only if you have a specific reason — Window of the World theme park, the Huaqiang electronics market, or business in the tech industry.",
    },
  ],

  chengdu: [
    {
      q: "What's the best base in Chengdu for visiting the panda research base?",
      a: "Any central hotel near Tianfu Square or Chunxi Road works fine — the Chengdu Research Base is 12 km north of the centre and most travellers reach it by taxi or organised tour rather than Metro. Aim to be at the entrance by 08:00 because the pandas retreat into shaded enclosures by mid-morning. A hotel with concierge tour-booking saves the language barrier.",
    },
    {
      q: "Which Chengdu station do high-speed trains use?",
      a: "Chengdu East Railway Station (Chengdudong) is the main HSR terminal and handles services to Chongqing (1h 13), Xi'an (3h 30), Shanghai (~11h), and Beijing (~8h). It's connected to Tianfu Square by Metro Line 2 in about 30 minutes. The older Chengdu Railway Station handles conventional and sleeper services. Chengdu South handles a smaller share of regional HSR routes.",
    },
    {
      q: "Is Chengdu food really as spicy as people say?",
      a: "Yes, and you should embrace it. Sichuan cuisine relies on the numbing-spicy combination of Sichuan peppercorns and chillies, and the most famous dishes — mapo tofu, kung pao chicken, hotpot, dan dan noodles — are all genuinely hot. Most restaurants in tourist areas can prepare \"micro-spicy\" or non-spicy versions on request, but the full-strength experience is the point of being in Chengdu.",
    },
    {
      q: "How easy is it to do a day trip to the Leshan Giant Buddha or Mount Emei?",
      a: "Very easy — both are HSR day trips from Chengdu South in around 1 hour each way. The Leshan Giant Buddha (the world's largest stone Buddha statue, 71 m tall) is the more accessible of the two and the right pick for a single day trip. Mount Emei is one of the four sacred Buddhist mountains of China and deserves at least an overnight stay if you want to see the summit at sunrise.",
    },
    {
      q: "When's the best time to visit Chengdu?",
      a: "March–June and September–November are the best months — mild temperatures and the panda base is most pleasant. Summer (July–August) is hot and humid with frequent rain. Winter (December–February) is cool and damp; Chengdu is famous for its overcast skies and the cloudy weather that makes the giant pandas comfortable but the sightseeing photos disappointing.",
    },
  ],

  xian: [
    {
      q: "Should I stay inside or outside the Xi'an city walls?",
      a: "For a first-time visit, inside the walls. The Bell Tower / Beidajie area has the highest density of mid-range and boutique hotels and the shortest walks to the Drum Tower, Muslim Quarter food district, and the wall itself. Hotels outside the walls (particularly the Big Wild Goose Pagoda district to the south) tend to be larger international five-stars but require a 10–15 minute Metro ride back to the historic core every time you go out.",
    },
    {
      q: "What's the easiest way to reach the Terracotta Army?",
      a: "Tour Bus 5 (游5) departs from outside Xi'an Railway Station's east parking lot for about RMB 7–9 each way and takes around 1 hour. This is the cheapest option for travellers willing to navigate a Chinese-language ticketing experience. For most international visitors, an organised half-day tour from your central hotel (RMB 250–500 with English-speaking guide and Huaqing Hot Springs stop) is the easier choice. Aim to arrive by 09:00 — Pit 1 is much less crowded in the morning.",
    },
    {
      q: "Which Xi'an station do high-speed trains use?",
      a: "Xi'an North (Xi'anbei) handles almost all long-distance HSR services — Beijing in 4h 30, Chengdu in 3h 30, Shanghai in around 6h, Lanzhou in around 3h. Connected to the centre by Metro Line 2 in about 25 minutes. The older Xi'an Railway Station handles conventional services and is the departure point for the Terracotta Army shuttle bus, so you may use both stations on the same trip.",
    },
    {
      q: "Can I cycle the Xi'an city wall?",
      a: "Yes — bike rental is available at the South Gate (Yongningmen) for around RMB 45 for 100 minutes, which is enough for the full 14 km circuit at a comfortable pace. This is one of the most distinctive activities in any Chinese city and well worth doing on a clear day. Tandem bikes are also available at slightly higher rates. Walking the full circuit takes around 4 hours and is harder work than it sounds.",
    },
    {
      q: "Is Xi'an worth visiting beyond the Terracotta Army?",
      a: "Yes, easily 2–3 days of content. The walled historic centre, the Muslim Quarter food district (one of the best night-food streets in China), the Big Wild Goose Pagoda, the Shaanxi History Museum, and the wall itself all justify time. Many visitors do a single day-and-night stop on the way between Beijing and Chengdu, but a 2–3 night stay is much more rewarding.",
    },
  ],

  hangzhou: [
    {
      q: "How long does the high-speed train from Shanghai to Hangzhou take?",
      a: "45 minutes on the express service from Shanghai Hongqiao to Hangzhou East. There are typically 2–3 trains an hour for most of the day and tickets start at around RMB 73 (£8). This frequency and price is what makes Hangzhou a viable Shanghai day trip in a way that no European destination at the same distance is.",
    },
    {
      q: "Where should I stay in Hangzhou for West Lake access?",
      a: "The Hubin Road / Longxiangqiao area on the eastern shore of West Lake is the densest cluster of high-end and mid-range hotels with direct lake walking access. The Four Seasons, Amanfayun, and the historic Shangri-La are the standout luxury choices here. For a slightly cheaper base 15 minutes' walk north of the lake, Wulin Square has a tighter cluster of mid-range business hotels with the same Metro Line 1 access.",
    },
    {
      q: "Can I do Hangzhou as a day trip from Shanghai?",
      a: "Yes — take the first HSR from Hongqiao around 07:00, arrive at West Lake by 08:30, walk the lake circuit, eat lunch at Lou Wai Lou, see the Lingyin Temple in the afternoon, and take a 17:30–18:30 train back to Shanghai. It's a long day but achievable. For a less rushed trip, stay one night near Hubin Road and return the next morning.",
    },
    {
      q: "When is the best time to visit West Lake?",
      a: "April–May and September–October are the best months — comfortable temperatures, clear skies, and the lake at its most photogenic. The Broken Bridge in snow (December–January) is the classic Hangzhou postcard image and is genuinely worth the cold if you can get the right week. Avoid June–August, when Hangzhou is hot, humid, and the lake is at its most uncomfortable.",
    },
    {
      q: "What's the difference between Hangzhou East and Hangzhou Railway Station?",
      a: "Hangzhou East (Hangzhoudong) is the modern HSR mega-station and is where almost all high-speed trains arrive. Hangzhou Railway Station (Chengzhan, the historic central terminal south of West Lake) handles a few conventional services and is closer to West Lake walking-wise. For HSR arrivals from Shanghai, you'll always be at Hangzhou East — connected to the centre by Metro Lines 1 and 4.",
    },
  ],

  hong_kong: [
    {
      q: "Which side of Victoria Harbour should I stay on?",
      a: "For a first Hong Kong trip with budget for premium hotels, Hong Kong Island (around Central, Admiralty, or Wan Chai on the Island Line) puts you in the financial-and-dining core. For a more interesting neighbourhood at lower cost, Tsim Sha Tsui in Kowloon offers the best skyline view back across the harbour and runs roughly 30 percent cheaper than equivalent-quality Hong Kong Island hotels.",
    },
    {
      q: "How fast is the Airport Express to Central?",
      a: "24 minutes from Hong Kong International Airport to the Hong Kong (Central) station, with departures every 10 minutes. Tickets are HK$115 one-way (around £11), or HK$205 return. Many airlines offer free in-town check-in at Hong Kong and Kowloon stations the morning of departure, which lets you drop your bags and travel light around the city until your flight. It's one of the best airport rail links in the world.",
    },
    {
      q: "Do I need to buy an Octopus card or can I use contactless?",
      a: "Since 2024, contactless Visa, Mastercard, Apple Pay, and Google Pay are accepted at every MTR fare gate and apply the same fares as Octopus. For a short trip (1–4 days), you don't need an Octopus card at all — just tap in and out with the card you already carry. The Octopus is still worth it for longer stays because it works for buses, trams, the Star Ferry, and most convenience stores.",
    },
    {
      q: "How easy is the high-speed train from Hong Kong to mainland China?",
      a: "Very easy. Hong Kong West Kowloon to Futian (Shenzhen) is 14 minutes; to Guangzhou South is 48 minutes; to Beijing or Shanghai around 8–9 hours. Immigration is co-located inside the West Kowloon building under a special arrangement — you clear both Hong Kong exit and Chinese mainland entry before boarding, then walk straight off the train on the mainland side. No second queue. The high-speed link is the right answer for any day trip from Hong Kong to Shenzhen or Guangzhou.",
    },
    {
      q: "Do UK or US passport holders need a visa for Hong Kong?",
      a: "No — Hong Kong is visa-free for UK passport holders for 180 days and for US, EU, Canadian, Australian, and most other Western nationalities for 90 days. This is a different and much more generous system than mainland China, which requires either a full visa or the 144/240-hour transit policy. You can fly into Hong Kong without any prior paperwork; you cannot do the same for Beijing or Shanghai.",
    },
  ],

  seoul: [
    {
      q: "Which Seoul neighbourhood is best for first-time visitors?",
      a: "Myeongdong on Line 4 is the safest first choice — central, walking distance to the palaces and Namsan Tower, dense with mid-range and upmarket hotels, and crammed with the street food and cosmetics shops every first-time visitor ends up browsing. For a more atmospheric alternative, Insadong and Anguk (Line 3) put you in the traditional craft district next to Gyeongbokgung and the Bukchon hanok village. For the cheapest comfortable base with the best nightlife and a direct AREX link, Hongdae (Hongik University on Line 2 and AREX).",
    },
    {
      q: "How do I get from Incheon Airport to central Seoul?",
      a: "AREX (Airport Railroad Express) is the default answer. The non-stop Express runs from Incheon International Airport Terminal 1 to Seoul Station in 43 minutes for ₩11,000, departing every 40 minutes. The All-Stop Commuter is slower (58 minutes, 10 stops) but cheaper (₩4,750) and more frequent (every 6–12 minutes). If you're staying in Hongdae, the All-Stop is faster end-to-end because it stops at Hongik University. Avoid the Airport Limousine Bus unless your hotel is specifically on its route.",
    },
    {
      q: "Do I need a K-ETA to visit Seoul?",
      a: "For most Western passports, technically yes — the K-ETA (Korea Electronic Travel Authorisation) is required for visa-free entry and should be applied for at least 72 hours before arrival at k-eta.go.kr (₩10,000, valid two years). However, as of 2024 several countries including the UK, US, most EU members, Canada and Australia are temporarily exempt through the end of 2025 — check the official site before travelling. Regardless, a return or onward ticket is still required at the border.",
    },
    {
      q: "KTX or SRT from Seoul to Busan?",
      a: "KTX from Seoul Station is the default — 2 hours 15 minutes on the fastest trains, ₩59,000 (~£34) economy, 10–15 departures a day, and the easiest to reach from any central Seoul hotel. SRT from Suseo station in southern Seoul is 10 percent cheaper and has newer rolling stock, but Suseo is only convenient if you're already staying in Gangnam — the subway transfer from central Seoul to Suseo eats the savings. Book KTX unless you're specifically based in the south of the city.",
    },
    {
      q: "How does T-money work and do I need one?",
      a: "T-money is Korea's universal transit card — ₩4,000 blank at any convenience store (CU, GS25, 7-Eleven), topped up with cash or a foreign Visa at the same counter or at subway vending machines. It works on every subway, bus, taxi, and most convenience-store purchases, and gives a ₩100 discount per trip vs paying per-ride. Contactless overseas Visa and Mastercard also work at subway gates since 2024 but at a slightly higher flat fare. For a trip longer than one or two days, T-money is worth the two minutes to buy.",
    },
  ],

  busan: [
    {
      q: "Which Busan neighbourhood should I stay in?",
      a: "Haeundae (Line 2) is the beach resort district and the right choice if beach-and-skyline is the whole point of your trip — the Park Hyatt, Signiel, Paradise and Westin are all here. Nampo (Line 1) is the old port district with Jagalchi fish market and Gamcheon Culture Village, cheaper and more atmospheric. Seomyeon (Lines 1 and 2) is downtown with the widest mid-range hotel selection and the best balance if you want to split time between the beach and the old city. For a single-night stopover between Seoul and Busan, stay near Busan Station (Line 1) for the KTX convenience.",
    },
    {
      q: "How long is the KTX from Seoul to Busan?",
      a: "2 hours 15 minutes on the fastest KTX services, up to 2 hours 40 minutes on the slower ones that stop at more intermediate stations. Economy class is ₩59,000 (~£34) one-way, with 10–15 departures a day in each direction. Tickets can be booked up to one month in advance on Korail's English site (letskorail.com) or via Trip.com for a small markup. For a same-day round trip Seoul–Busan is tight but possible; for any real visit, overnight.",
    },
    {
      q: "Is Haeundae Beach worth staying at, or is it a tourist trap?",
      a: "It's genuinely worth it if you like urban beaches and want the hotel-to-sand walk to be under five minutes. The beach itself is 1.5 km of clean white sand, the restaurant strip behind it is one of the best in Busan, and the neighbouring Gwangalli (10 minutes by bus or taxi) has the Diamond Bridge view that's the city's main photography shot. Avoid July and August if crowds bother you — it's genuinely packed. May, June, September and October are ideal.",
    },
    {
      q: "Can I take the ferry from Busan to Japan?",
      a: "Yes, and it's one of the best ways to combine a Korea–Japan trip. The overnight Camellia Line ferry (Busan Port to Hakata Port in Fukuoka, ~12 hours, around ¥10,000/₩100,000 one-way) is the slow cheap option with sleeping berths. The daytime JR Kyushu Beetle / Miraejet Kobee hydrofoils (~3 hours, around ¥13,000/₩130,000) are the fast option. Both arrive at Busan Port International Terminal, 15 minutes' walk from Busan Station. A valid onward or return ticket is required for visa-free entry in both directions.",
    },
    {
      q: "Is Gyeongju a good day trip from Busan?",
      a: "Yes — and Gyeongju is probably the strongest day-trip argument for staying in Busan at all. The UNESCO-listed Silla-dynasty capital (temples, tombs, Bulguksa, Seokguram) is 30 minutes on the KTX from Busan Station to Singyeongju, then a 15-minute city bus. Leave Busan at 09:00, spend 6 hours in Gyeongju, back by 18:00. Alternatively, spend a night in Gyeongju in a traditional hanok guesthouse and return the next day — more atmospheric but adds a hotel change.",
    },
  ],

  incheon: [
    {
      q: "Is it better to stay in Incheon near the airport, or in Seoul?",
      a: "For a layover of 8+ hours, commute to Seoul — the AREX Express is 43 minutes to Seoul Station and the experience of even half a day in central Seoul beats any transit hotel. For a layover under 8 hours or an early-morning departure before the AREX starts running (first train ~05:20), stay near Incheon Airport. The best value is Unseo station (one AREX stop east of the airport) with mid-range chain hotels and free shuttles; the most premium is the Grand Hyatt Incheon, physically closest to Terminal 1.",
    },
    {
      q: "How do I get from Incheon Airport Terminal 2 to Terminal 1?",
      a: "A free inter-terminal shuttle bus runs every 5 minutes from each terminal's arrivals level and takes about 5 minutes to complete the loop. The AREX also stops at both terminals on its way into Seoul — there's no extra charge to ride between them. Terminal 2 is the Korean Air / SkyTeam terminal; Terminal 1 handles most other international airlines. Most visitors won't need to switch terminals unless their outbound flight is on a different alliance.",
    },
    {
      q: "Is Incheon Chinatown worth visiting?",
      a: "Yes, but as a day trip from Seoul rather than an overnight. Incheon Chinatown is Korea's only officially-designated Chinatown, dating from the 1884 treaty port, and it's where jjajangmyeon (the Korean-Chinese black bean noodle dish) was invented — the Jjajangmyeon Museum is worth 30 minutes, and the surrounding Open Port Cultural District preserves the Japanese and Western colonial architecture from the 1880s–1910s. From Seoul it's an hour on Line 1 / Suin-Bundang to Incheon Station. Half a day is enough for the whole area including Wolmido Island.",
    },
    {
      q: "Does the Incheon Airport transit hotel work for visa-free layovers?",
      a: "Yes — there are two airside transit hotels, one in each terminal, both airside (inside the secure zone) and bookable by the hour or by the night. No visa or K-ETA is required to use them because you never pass through immigration. The Grand Hyatt Incheon, Paradise City, Nest Hotel, and the Unseo-area chains are all landside and require you to clear immigration to check in — which for most Western passports means a K-ETA (if one is currently required) or an exemption, and a re-entry at check-out.",
    },
    {
      q: "Is Songdo worth staying in?",
      a: "Only for specific reasons — the Convensia convention centre, the Jack Nicklaus Golf Club, or the smart-city architecture interest. Songdo is Korea's ambitious greenfield new city built on reclaimed land, with impressive Central Park canals, skyline photography, and several upmarket business hotels around the Convensia convention centre. For general Korea sightseeing it's the wrong choice — you're two transfers and 90+ minutes from central Seoul, and 45 minutes from Incheon Airport. For a business trip tied to Convensia, it's ideal.",
    },
  ],

  daegu: [
    {
      q: "Is Daegu worth an overnight on a Seoul–Busan trip?",
      a: "Yes, if you're already doing both Seoul and Busan on one trip. Daegu is roughly halfway on the Gyeongbu Line (1h 40m from Seoul, 40m from Busan), the hotels run 20–30 percent cheaper than equivalent Seoul rooms, and the Seomun Market night market is one of the best street-food experiences in Korea. It's also the strongest base for a day trip to Gyeongju (20 minutes on KTX from East Daegu to Singyeongju), which is probably the most important historical site in the country. A single-night stopover is the sweet spot.",
    },
    {
      q: "Which Daegu station should I book near?",
      a: "East Daegu (Dongdaegu) on Line 1 is the KTX terminus — the only station where Seoul–Busan high-speed services stop — so stay there if you arrive on a KTX and want walking distance from the platform to the hotel. For a proper visit, Banwoldang (Lines 1 and 2 interchange) or Jungangno (Line 1) put you in the heart of downtown, walking distance to Seomun Market and the old city. The five-minute subway ride from East Daegu to Banwoldang is negligible — pick based on neighbourhood preference, not KTX proximity.",
    },
    {
      q: "What's Seomun Market and is the night market really the main reason to visit?",
      a: "Seomun Market is Korea's largest traditional market by stall count — 4,000+ vendors across several multi-storey blocks — and it anchors the old-downtown district 10 minutes on foot from Banwoldang station. The night market (Fridays to Sundays, 19:00–00:00) is the main event: grilled meat on sticks, Daegu-style napjak mandu (flat dumplings), traditional Korean sweets, and the signature makchang grilled beef intestines that are a Daegu speciality. Yes — for most visitors, the night market is the single strongest reason to overnight here.",
    },
    {
      q: "How do I get to Gyeongju from Daegu?",
      a: "KTX from East Daegu to Singyeongju station is 20 minutes (₩8,400, 1–2 trains per hour), followed by a 15-minute city bus (bus 700) from Singyeongju to the Gyeongju historic core. End-to-end about an hour. You can also take the intercity bus from Daegu's Dongbu Bus Terminal (1h 15m, ₩6,000), which drops you closer to central Gyeongju but is less frequent. For a day trip, the KTX is the practical answer — leave Daegu at 09:00, spend 6 hours in Gyeongju, back in Daegu by 17:00 for dinner at Seomun.",
    },
    {
      q: "Is Daegu cheaper than Seoul for a similar hotel?",
      a: "Yes — noticeably so. A clean three-star business hotel in central Daegu runs ₩70,000–100,000 a night (£40–60) compared to ₩120,000–180,000 for the same class in central Seoul. The gap is sharper at the four-star tier: the Novotel Ambassador Daegu is typically 30–35 percent cheaper than the equivalent Novotel in Seoul on the same dates. The trade-off is a less internationalised experience (English-language signage thins out beyond the main shopping streets) but for travellers comfortable with basic Korean phrases, Daegu is one of the best-value Korean stops.",
    },
  ],

  daejeon: [
    {
      q: "Is Daejeon worth visiting or is it just a transfer station?",
      a: "For most tourists, Daejeon is primarily a rail junction — Korea's Gyeongbu and Honam high-speed lines physically split here, so if you're going Seoul→Gwangju you'll transfer at Daejeon anyway. As a destination, it's less famous than Seoul, Busan or Gyeongju, but it has one of the best hot-springs districts in Korea (Yuseong) and the country's main science and research centre. The strongest case for an overnight is when you're breaking a Seoul→Mokpo or Seoul→Gwangju trip in half, or when you want the Yuseong hot-springs experience without the Seoul crowds.",
    },
    {
      q: "Daejeon Station or Seo-Daejeon for my hotel?",
      a: "Daejeon Station, almost always. It handles essentially all Gyeongbu Line services (every Seoul→Busan KTX and SRT stops here), sits directly on Metro Line 1, and is walking distance to the downtown hotel and restaurant cluster. Seo-Daejeon is 8 km south-west, not on the metro, and only handles some Honam Line services to Gwangju and Mokpo. The only reason to stay near Seo-Daejeon is if you have a specific early-morning Honam departure from there — otherwise Daejeon Station wins on every axis.",
    },
    {
      q: "Are the Yuseong hot springs worth the detour?",
      a: "Yes if you enjoy Korean bath-house culture or Japanese-style onsen, no if you're expecting rural mountain views. Yuseong's hot-springs water is naturally radon-free alkaline, traditionally served in public bath houses (₩10,000–15,000 entrance, single-sex nude bathing in the Korean style), and most hotels in the district have either their own onsen-style spa or a partnership with a neighbouring bath house. It's 15 minutes west of Daejeon Station on Metro Line 1. For travellers who can't fit a visit to Beppu or Hakone on the Japan side, Yuseong is Korea's most atmospheric hot-springs base.",
    },
    {
      q: "How long is the KTX from Seoul to Daejeon?",
      a: "57 minutes on the fastest KTX services from Seoul Station to Daejeon Station, with 40+ departures a day — the highest-frequency intercity rail link in Korea. Tickets are ₩23,700 (~£14) one-way in economy. SRT from Suseo is similar in time and slightly cheaper. The frequency makes Daejeon an easy day trip from Seoul — leave at 09:00, spend 7 hours in Daejeon or nearby Gongju, back in Seoul by 18:00.",
    },
    {
      q: "What's actually worth seeing in Daejeon?",
      a: "The Yuseong hot-springs district for the bath-house experience. The Expo Science Park for the rebuilt 1993 Expo tower and the Daejeon Museum of Art. The Seomun Market area (not related to Daegu's market of the same name) for Daejeon-style kalguksu — the clear-broth knife-cut noodle dish the city is known for. And two day-trip options that are better than anything in Daejeon itself: Gongju (the Baekje-era capital and UNESCO royal tombs, 45 minutes by bus) and Buyeo (another Baekje capital with more UNESCO sites, 90 minutes by bus). Both are full-day trips.",
    },
  ],
};

export function getFaqs(slug) {
  return guideFaqs[slug] || null;
}
