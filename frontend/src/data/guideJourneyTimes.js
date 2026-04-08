// Typical journey times from each key station in every city guide.
//
// Kept separate from cityGuides.js so the main data file stays focused on
// long-form editorial content. Consumed by GuidePage.jsx, which renders a
// three-item list under each key-station entry.
//
// Every station gets three journeys, chosen per the P1 roadmap:
//   1. to the city's primary airport
//   2. to the main tourist attraction
//   3. to another key station in the same city
//
// Times are typical weekday off-peak, rounded to the nearest minute, based
// on the fastest reasonable rail/tram route (`via` gives the line or mode).
// For Phuket there is no rail, so times are taxi estimates with `via` set
// accordingly. Refresh the `notedAt` field whenever the numbers change.

export const guideJourneyTimes = {
  notedAt: "2026-04",
  journeys: {
    tokyo: {
      "Shinjuku": [
        { to: "Haneda Airport", minutes: 28, via: "JR Yamanote → Tokyo Monorail" },
        { to: "Imperial Palace (Tokyo Station)", minutes: 14, via: "JR Chuo Rapid" },
        { to: "Shibuya", minutes: 7, via: "JR Yamanote" },
      ],
      "Tokyo Station": [
        { to: "Haneda Airport", minutes: 30, via: "JR Yamanote → Keikyu" },
        { to: "Imperial Palace", minutes: 5, via: "walk" },
        { to: "Shinjuku", minutes: 14, via: "JR Chuo Rapid" },
      ],
      "Shibuya": [
        { to: "Haneda Airport", minutes: 35, via: "JR Yamanote → Keikyu" },
        { to: "Meiji Shrine / Harajuku", minutes: 2, via: "JR Yamanote" },
        { to: "Shinjuku", minutes: 7, via: "JR Yamanote" },
      ],
      "Ueno": [
        { to: "Narita Airport", minutes: 41, via: "Keisei Skyliner" },
        { to: "Senso-ji / Asakusa", minutes: 5, via: "Tokyo Metro Ginza" },
        { to: "Tokyo Station", minutes: 4, via: "JR Yamanote" },
      ],
      "Shinagawa": [
        { to: "Haneda Airport", minutes: 14, via: "Keikyu Airport Express" },
        { to: "Imperial Palace (Tokyo Station)", minutes: 7, via: "JR Yamanote" },
        { to: "Shinjuku", minutes: 17, via: "JR Yamanote" },
      ],
      "Otsuka": [
        { to: "Haneda Airport", minutes: 45, via: "JR Yamanote → Keikyu" },
        { to: "Imperial Palace (Tokyo Station)", minutes: 19, via: "JR Yamanote" },
        { to: "Shinjuku", minutes: 10, via: "JR Yamanote" },
      ],
    },

    london: {
      "King's Cross St. Pancras": [
        { to: "Heathrow Airport", minutes: 50, via: "Piccadilly line" },
        { to: "British Museum", minutes: 10, via: "walk" },
        { to: "Paddington", minutes: 7, via: "Circle / H&C" },
      ],
      "Paddington": [
        { to: "Heathrow Airport", minutes: 15, via: "Heathrow Express" },
        { to: "Oxford Circus", minutes: 5, via: "Bakerloo line" },
        { to: "King's Cross St. Pancras", minutes: 7, via: "Circle / H&C" },
      ],
      "Victoria": [
        { to: "Gatwick Airport", minutes: 30, via: "Gatwick Express" },
        { to: "Buckingham Palace", minutes: 8, via: "walk" },
        { to: "Westminster", minutes: 4, via: "District / Circle" },
      ],
      "London Bridge": [
        { to: "Heathrow Airport", minutes: 55, via: "Jubilee → Piccadilly" },
        { to: "Tower of London", minutes: 5, via: "walk or Tower Hill" },
        { to: "Bank", minutes: 3, via: "Northern line" },
      ],
      "Bethnal Green": [
        { to: "Heathrow Airport", minutes: 60, via: "Central → Piccadilly" },
        { to: "Liverpool Street", minutes: 4, via: "Central line" },
        { to: "Oxford Circus", minutes: 10, via: "Central line" },
      ],
      "Hammersmith": [
        { to: "Heathrow Airport", minutes: 45, via: "Piccadilly line" },
        { to: "South Kensington", minutes: 8, via: "Piccadilly line" },
        { to: "Westminster", minutes: 15, via: "District line" },
      ],
    },

    paris: {
      "Châtelet–Les Halles": [
        { to: "CDG Airport", minutes: 35, via: "RER B" },
        { to: "Louvre", minutes: 5, via: "walk" },
        { to: "Gare du Nord", minutes: 5, via: "RER B/D" },
      ],
      "Gare du Nord": [
        { to: "CDG Airport", minutes: 30, via: "RER B" },
        { to: "Louvre", minutes: 10, via: "Métro 4 → Pyramides" },
        { to: "Châtelet–Les Halles", minutes: 5, via: "RER B/D" },
      ],
      "Opéra": [
        { to: "CDG Airport", minutes: 40, via: "RER A → RER B" },
        { to: "Louvre", minutes: 4, via: "Métro 7" },
        { to: "Gare du Nord", minutes: 9, via: "Métro 8 → RER B" },
      ],
      "Saint-Michel Notre-Dame": [
        { to: "CDG Airport", minutes: 40, via: "RER B" },
        { to: "Notre-Dame", minutes: 2, via: "walk" },
        { to: "Louvre", minutes: 5, via: "RER C" },
      ],
      "Denfert-Rochereau": [
        { to: "Orly Airport", minutes: 25, via: "RER B → Orlyval" },
        { to: "Catacombs", minutes: 2, via: "walk" },
        { to: "Châtelet–Les Halles", minutes: 10, via: "RER B" },
      ],
    },

    osaka: {
      "Osaka/Umeda": [
        { to: "Kansai Airport", minutes: 50, via: "JR Haruka Express" },
        { to: "Osaka Castle Park", minutes: 6, via: "JR Loop Line" },
        { to: "Namba", minutes: 9, via: "Midosuji subway" },
      ],
      "Namba": [
        { to: "Kansai Airport", minutes: 40, via: "Nankai Rapit" },
        { to: "Dotonbori", minutes: 2, via: "walk" },
        { to: "Osaka/Umeda", minutes: 9, via: "Midosuji subway" },
      ],
      "Shin-Osaka": [
        { to: "Kansai Airport", minutes: 50, via: "JR Haruka Express" },
        { to: "Osaka Castle", minutes: 15, via: "Midosuji → JR Loop" },
        { to: "Osaka/Umeda", minutes: 4, via: "Midosuji subway" },
      ],
      "Tennoji": [
        { to: "Kansai Airport", minutes: 35, via: "JR Haruka Express" },
        { to: "Shinsekai / Tsutenkaku", minutes: 5, via: "walk" },
        { to: "Namba", minutes: 6, via: "Midosuji subway" },
      ],
      "Shinsaibashi": [
        { to: "Kansai Airport", minutes: 50, via: "Midosuji → Nankai Rapit" },
        { to: "Dotonbori", minutes: 2, via: "walk" },
        { to: "Osaka/Umeda", minutes: 7, via: "Midosuji subway" },
      ],
    },

    barcelona: {
      "Passeig de Gràcia": [
        { to: "BCN Airport", minutes: 30, via: "RENFE R2 Nord" },
        { to: "Casa Batlló", minutes: 1, via: "walk" },
        { to: "Plaça de Catalunya", minutes: 3, via: "walk" },
      ],
      "Plaça de Catalunya": [
        { to: "BCN Airport", minutes: 30, via: "Aerobus" },
        { to: "La Rambla", minutes: 1, via: "walk" },
        { to: "Sagrada Família", minutes: 10, via: "Metro L5" },
      ],
      "Sagrada Família": [
        { to: "BCN Airport", minutes: 40, via: "Metro L5 → L9 Sud" },
        { to: "Park Güell", minutes: 20, via: "bus 92" },
        { to: "Plaça de Catalunya", minutes: 10, via: "Metro L5 → L1" },
      ],
      "Sants": [
        { to: "BCN Airport", minutes: 20, via: "RENFE R2 Nord" },
        { to: "La Rambla", minutes: 10, via: "Metro L3" },
        { to: "Passeig de Gràcia", minutes: 15, via: "Metro L3 → L2" },
      ],
      "Barceloneta": [
        { to: "BCN Airport", minutes: 35, via: "Metro L4 → L9 Sud" },
        { to: "Barceloneta beach", minutes: 2, via: "walk" },
        { to: "Plaça de Catalunya", minutes: 8, via: "Metro L4" },
      ],
    },

    bangkok: {
      "Asok / Sukhumvit": [
        { to: "Suvarnabhumi Airport", minutes: 25, via: "Airport Rail Link from Makkasan" },
        { to: "Grand Palace", minutes: 25, via: "MRT → taxi" },
        { to: "Siam", minutes: 6, via: "BTS Sukhumvit" },
      ],
      "Siam": [
        { to: "Suvarnabhumi Airport", minutes: 30, via: "BTS → Airport Rail Link" },
        { to: "Grand Palace", minutes: 25, via: "BTS → Chao Phraya boat" },
        { to: "Asok / Sukhumvit", minutes: 6, via: "BTS Sukhumvit" },
      ],
      "Phaya Thai": [
        { to: "Suvarnabhumi Airport", minutes: 23, via: "Airport Rail Link direct" },
        { to: "Grand Palace", minutes: 30, via: "BTS → river boat" },
        { to: "Siam", minutes: 4, via: "BTS Sukhumvit" },
      ],
      "Phrom Phong": [
        { to: "Suvarnabhumi Airport", minutes: 30, via: "BTS → Airport Rail Link" },
        { to: "Emporium / EmQuartier", minutes: 1, via: "walk" },
        { to: "Siam", minutes: 8, via: "BTS Sukhumvit" },
      ],
      "Silom / Sala Daeng": [
        { to: "Suvarnabhumi Airport", minutes: 35, via: "BTS → Airport Rail Link" },
        { to: "Lumphini Park", minutes: 2, via: "walk" },
        { to: "Siam", minutes: 5, via: "BTS Silom" },
      ],
    },

    berlin: {
      "Alexanderplatz": [
        { to: "BER Airport", minutes: 45, via: "S-Bahn S9/S45" },
        { to: "Museum Island", minutes: 4, via: "walk" },
        { to: "Brandenburg Gate", minutes: 6, via: "U5 or S-Bahn" },
      ],
      "Hackescher Markt": [
        { to: "BER Airport", minutes: 50, via: "S-Bahn S5 → S9" },
        { to: "Museum Island", minutes: 5, via: "walk" },
        { to: "Alexanderplatz", minutes: 2, via: "S-Bahn" },
      ],
      "Warschauer Strasse": [
        { to: "BER Airport", minutes: 40, via: "S-Bahn S9" },
        { to: "East Side Gallery", minutes: 2, via: "walk" },
        { to: "Alexanderplatz", minutes: 5, via: "S-Bahn" },
      ],
      "Hauptbahnhof": [
        { to: "BER Airport", minutes: 35, via: "FEX regional express" },
        { to: "Brandenburg Gate", minutes: 8, via: "bus 100 or S-Bahn" },
        { to: "Alexanderplatz", minutes: 7, via: "S-Bahn" },
      ],
      "Zoologischer Garten": [
        { to: "BER Airport", minutes: 50, via: "S-Bahn via Ostkreuz" },
        { to: "Kurfürstendamm / KaDeWe", minutes: 5, via: "walk" },
        { to: "Brandenburg Gate", minutes: 10, via: "S-Bahn" },
      ],
    },

    kyoto: {
      "Kyoto Station": [
        { to: "Kansai Airport", minutes: 75, via: "JR Haruka Express" },
        { to: "Kiyomizu-dera", minutes: 20, via: "city bus 206" },
        { to: "Fushimi Inari", minutes: 5, via: "JR Nara Line" },
      ],
      "Shijo": [
        { to: "Kansai Airport", minutes: 80, via: "Karasuma → Haruka Express" },
        { to: "Nishiki Market", minutes: 2, via: "walk" },
        { to: "Kyoto Station", minutes: 5, via: "Karasuma subway" },
      ],
      "Karasuma Oike": [
        { to: "Kansai Airport", minutes: 85, via: "Karasuma → Haruka Express" },
        { to: "Nijo Castle", minutes: 8, via: "Tozai subway" },
        { to: "Kyoto Station", minutes: 7, via: "Karasuma subway" },
      ],
      "Fushimi/Momoyama": [
        { to: "Kansai Airport", minutes: 90, via: "JR Nara → Haruka" },
        { to: "Fushimi Inari", minutes: 10, via: "Keihan Line" },
        { to: "Kyoto Station", minutes: 15, via: "JR Nara Line" },
      ],
      "Tofukuji": [
        { to: "Kansai Airport", minutes: 80, via: "JR Nara → Haruka" },
        { to: "Fushimi Inari", minutes: 3, via: "JR Nara Line" },
        { to: "Kyoto Station", minutes: 3, via: "JR Nara Line" },
      ],
    },

    madrid: {
      "Sol": [
        { to: "Madrid Barajas Airport", minutes: 40, via: "Metro L2 → L8" },
        { to: "Museo del Prado", minutes: 10, via: "walk" },
        { to: "Plaza Mayor", minutes: 5, via: "walk" },
      ],
      "Gran Vía": [
        { to: "Madrid Barajas Airport", minutes: 40, via: "Metro L5 → L8" },
        { to: "Plaza Mayor", minutes: 10, via: "walk" },
        { to: "Sol", minutes: 5, via: "walk" },
      ],
      "Atocha": [
        { to: "Madrid Barajas Airport", minutes: 25, via: "Cercanías C1" },
        { to: "Museo del Prado", minutes: 5, via: "walk" },
        { to: "Sol", minutes: 5, via: "Metro L1" },
      ],
      "Alonso Martínez": [
        { to: "Madrid Barajas Airport", minutes: 35, via: "Metro L4 → L8" },
        { to: "Museo del Prado", minutes: 15, via: "Metro L5 → walk" },
        { to: "Sol", minutes: 8, via: "Metro L4 → L1" },
      ],
      "Nuevos Ministerios": [
        { to: "Madrid Barajas Airport", minutes: 15, via: "Metro L8 direct" },
        { to: "Museo del Prado", minutes: 20, via: "Metro L10 → L2" },
        { to: "Sol", minutes: 12, via: "Metro L10 → L2" },
      ],
    },

    birmingham: {
      "Birmingham New Street": [
        { to: "Birmingham Airport", minutes: 10, via: "West Midlands train" },
        { to: "Bullring", minutes: 2, via: "walk" },
        { to: "Moor Street", minutes: 3, via: "walk" },
      ],
      "Birmingham Moor Street": [
        { to: "Birmingham Airport", minutes: 12, via: "walk to New Street → train" },
        { to: "Bullring", minutes: 2, via: "walk" },
        { to: "New Street", minutes: 3, via: "walk" },
      ],
      "Birmingham Snow Hill": [
        { to: "Birmingham Airport", minutes: 15, via: "tram → New Street → train" },
        { to: "Jewellery Quarter", minutes: 5, via: "West Midlands Metro tram" },
        { to: "New Street", minutes: 5, via: "walk" },
      ],
      "Five Ways": [
        { to: "Birmingham Airport", minutes: 15, via: "train via New Street" },
        { to: "Broad Street / Symphony Hall", minutes: 8, via: "walk" },
        { to: "New Street", minutes: 4, via: "West Midlands train" },
      ],
      "Birmingham International": [
        { to: "Birmingham Airport", minutes: 5, via: "AirRail Link people mover" },
        { to: "NEC exhibition centre", minutes: 3, via: "walk" },
        { to: "New Street", minutes: 10, via: "West Midlands train" },
      ],
    },

    edinburgh: {
      "Waverley": [
        { to: "Edinburgh Airport", minutes: 35, via: "Edinburgh Trams" },
        { to: "Edinburgh Castle", minutes: 8, via: "walk" },
        { to: "Haymarket", minutes: 4, via: "ScotRail" },
      ],
      "Haymarket": [
        { to: "Edinburgh Airport", minutes: 30, via: "Edinburgh Trams" },
        { to: "Edinburgh Castle", minutes: 15, via: "walk" },
        { to: "Waverley", minutes: 4, via: "ScotRail" },
      ],
      "Edinburgh Park": [
        { to: "Edinburgh Airport", minutes: 10, via: "Edinburgh Trams" },
        { to: "Edinburgh Castle", minutes: 25, via: "tram to Princes Street" },
        { to: "Haymarket", minutes: 15, via: "Edinburgh Trams" },
      ],
      "Edinburgh Gateway": [
        { to: "Edinburgh Airport", minutes: 8, via: "Edinburgh Trams" },
        { to: "Waverley", minutes: 15, via: "ScotRail" },
        { to: "Haymarket", minutes: 12, via: "ScotRail" },
      ],
      "South Gyle": [
        { to: "Edinburgh Airport", minutes: 15, via: "Lothian Bus 35" },
        { to: "Waverley", minutes: 12, via: "ScotRail" },
        { to: "Haymarket", minutes: 8, via: "ScotRail" },
      ],
    },

    manchester: {
      "Manchester Piccadilly": [
        { to: "Manchester Airport", minutes: 20, via: "TransPennine train" },
        { to: "Northern Quarter", minutes: 5, via: "walk" },
        { to: "Victoria", minutes: 5, via: "Metrolink tram" },
      ],
      "Manchester Victoria": [
        { to: "Manchester Airport", minutes: 30, via: "Metrolink → train at Piccadilly" },
        { to: "AO Arena", minutes: 1, via: "walk" },
        { to: "Piccadilly", minutes: 5, via: "Metrolink tram" },
      ],
      "Manchester Oxford Road": [
        { to: "Manchester Airport", minutes: 25, via: "Northern train" },
        { to: "Spinningfields", minutes: 10, via: "walk" },
        { to: "Piccadilly", minutes: 3, via: "Northern train" },
      ],
      "Deansgate": [
        { to: "Manchester Airport", minutes: 25, via: "train via Oxford Road" },
        { to: "Spinningfields", minutes: 5, via: "walk" },
        { to: "Piccadilly", minutes: 8, via: "walk" },
      ],
      "Manchester Airport": [
        { to: "Manchester Airport terminals", minutes: 5, via: "walk" },
        { to: "Manchester Piccadilly", minutes: 20, via: "TransPennine train" },
        { to: "Piccadilly Gardens", minutes: 55, via: "Metrolink tram" },
      ],
    },

    munich: {
      "München Hauptbahnhof": [
        { to: "Munich Airport", minutes: 45, via: "S-Bahn S1/S8" },
        { to: "Marienplatz", minutes: 3, via: "S-Bahn" },
        { to: "Theresienwiese", minutes: 3, via: "U4/U5" },
      ],
      "Marienplatz": [
        { to: "Munich Airport", minutes: 40, via: "S-Bahn S1/S8" },
        { to: "Old Town (Rathaus)", minutes: 0, via: "walk" },
        { to: "Hauptbahnhof", minutes: 3, via: "S-Bahn" },
      ],
      "Karlsplatz (Stachus)": [
        { to: "Munich Airport", minutes: 40, via: "S-Bahn S1/S8" },
        { to: "Marienplatz", minutes: 1, via: "S-Bahn" },
        { to: "Hauptbahnhof", minutes: 1, via: "S-Bahn" },
      ],
      "Ostbahnhof": [
        { to: "Munich Airport", minutes: 35, via: "S-Bahn S8" },
        { to: "Marienplatz", minutes: 5, via: "S-Bahn" },
        { to: "Hauptbahnhof", minutes: 6, via: "S-Bahn" },
      ],
      "Theresienwiese": [
        { to: "Munich Airport", minutes: 50, via: "U4/U5 → S-Bahn" },
        { to: "Oktoberfest grounds", minutes: 0, via: "walk" },
        { to: "Hauptbahnhof", minutes: 3, via: "U4/U5" },
      ],
      "Sendlinger Tor": [
        { to: "Munich Airport", minutes: 45, via: "U3/U6 → S-Bahn" },
        { to: "Marienplatz", minutes: 2, via: "U-Bahn" },
        { to: "Hauptbahnhof", minutes: 3, via: "U-Bahn" },
      ],
    },

    hamburg: {
      "Hamburg Hauptbahnhof": [
        { to: "Hamburg Airport", minutes: 25, via: "S-Bahn S1" },
        { to: "Elbphilharmonie", minutes: 10, via: "U3 to Baumwall" },
        { to: "Jungfernstieg", minutes: 2, via: "S-Bahn" },
      ],
      "Jungfernstieg": [
        { to: "Hamburg Airport", minutes: 27, via: "S-Bahn S1" },
        { to: "Elbphilharmonie", minutes: 8, via: "U3" },
        { to: "Hauptbahnhof", minutes: 2, via: "S-Bahn" },
      ],
      "Landungsbrücken": [
        { to: "Hamburg Airport", minutes: 35, via: "U3 → S-Bahn S1" },
        { to: "Elbphilharmonie", minutes: 5, via: "walk" },
        { to: "Hauptbahnhof", minutes: 6, via: "U3" },
      ],
      "Altona": [
        { to: "Hamburg Airport", minutes: 30, via: "S-Bahn S1" },
        { to: "Reeperbahn", minutes: 5, via: "S-Bahn S1/S3" },
        { to: "Hauptbahnhof", minutes: 10, via: "S-Bahn" },
      ],
      "Reeperbahn": [
        { to: "Hamburg Airport", minutes: 35, via: "S-Bahn S1" },
        { to: "St. Pauli / Reeperbahn", minutes: 1, via: "walk" },
        { to: "Hauptbahnhof", minutes: 6, via: "S-Bahn" },
      ],
      "Dammtor": [
        { to: "Hamburg Airport", minutes: 30, via: "S-Bahn via Hauptbahnhof" },
        { to: "Planten un Blomen", minutes: 2, via: "walk" },
        { to: "Hauptbahnhof", minutes: 3, via: "S-Bahn" },
      ],
    },

    lyon: {
      "Lyon Part-Dieu": [
        { to: "Lyon-Saint Exupéry Airport", minutes: 30, via: "Rhônexpress tram" },
        { to: "Bellecour", minutes: 5, via: "Metro B → A" },
        { to: "Vieux Lyon", minutes: 10, via: "Metro B → D" },
      ],
      "Lyon Perrache": [
        { to: "Lyon-Saint Exupéry Airport", minutes: 40, via: "Metro → Rhônexpress" },
        { to: "Vieux Lyon", minutes: 5, via: "Metro A → D" },
        { to: "Bellecour", minutes: 2, via: "Metro A" },
      ],
      "Bellecour": [
        { to: "Lyon-Saint Exupéry Airport", minutes: 35, via: "Metro A → Rhônexpress" },
        { to: "Vieux Lyon", minutes: 3, via: "Metro D" },
        { to: "Part-Dieu", minutes: 5, via: "Metro A → B" },
      ],
      "Vieux Lyon": [
        { to: "Lyon-Saint Exupéry Airport", minutes: 40, via: "Metro D → A → Rhônexpress" },
        { to: "Fourvière Basilica", minutes: 5, via: "funicular" },
        { to: "Bellecour", minutes: 3, via: "Metro D" },
      ],
      "Hôtel de Ville": [
        { to: "Lyon-Saint Exupéry Airport", minutes: 35, via: "Metro A → Rhônexpress" },
        { to: "Bellecour", minutes: 3, via: "Metro A" },
        { to: "Vieux Lyon", minutes: 5, via: "Metro A → D" },
      ],
    },

    hiroshima: {
      "Hiroshima Station": [
        { to: "Hiroshima Airport", minutes: 45, via: "Limousine bus" },
        { to: "Peace Memorial Park", minutes: 15, via: "tram line 2" },
        { to: "Miyajimaguchi (ferry)", minutes: 25, via: "JR Sanyo Line" },
      ],
      "Genbaku Dome-mae": [
        { to: "Hiroshima Airport", minutes: 55, via: "tram → bus" },
        { to: "A-Bomb Dome", minutes: 1, via: "walk" },
        { to: "Hiroshima Station", minutes: 15, via: "tram line 2" },
      ],
      "Hatchobori": [
        { to: "Hiroshima Airport", minutes: 50, via: "tram → bus" },
        { to: "Peace Memorial Park", minutes: 10, via: "tram line 2" },
        { to: "Hiroshima Station", minutes: 8, via: "tram line 1/2/5" },
      ],
      "Kamiyacho-nishi / Kamiyacho-higashi": [
        { to: "Hiroshima Airport", minutes: 50, via: "tram → bus" },
        { to: "Peace Memorial Park", minutes: 5, via: "tram line 2" },
        { to: "Hiroshima Station", minutes: 10, via: "tram line 2" },
      ],
      "Miyajimaguchi": [
        { to: "Hiroshima Airport", minutes: 80, via: "JR → bus" },
        { to: "Miyajima Island", minutes: 10, via: "JR ferry" },
        { to: "Hiroshima Station", minutes: 25, via: "JR Sanyo Line" },
      ],
    },

    yokohama: {
      "Yokohama Station": [
        { to: "Haneda Airport", minutes: 25, via: "Keikyu Airport Line" },
        { to: "Minato Mirai / Landmark Tower", minutes: 3, via: "Minatomirai Line" },
        { to: "Shin-Yokohama", minutes: 10, via: "JR Yokohama Line" },
      ],
      "Minatomirai": [
        { to: "Haneda Airport", minutes: 30, via: "Minatomirai → Keikyu" },
        { to: "Landmark Tower", minutes: 1, via: "walk" },
        { to: "Yokohama Station", minutes: 3, via: "Minatomirai Line" },
      ],
      "Motomachi-Chukagai": [
        { to: "Haneda Airport", minutes: 35, via: "Minatomirai → Keikyu" },
        { to: "Yokohama Chinatown", minutes: 1, via: "walk" },
        { to: "Yokohama Station", minutes: 8, via: "Minatomirai Line" },
      ],
      "Sakuragicho": [
        { to: "Haneda Airport", minutes: 30, via: "JR → Keikyu" },
        { to: "Landmark Tower", minutes: 5, via: "walk" },
        { to: "Yokohama Station", minutes: 3, via: "JR Negishi Line" },
      ],
      "Shin-Yokohama": [
        { to: "Haneda Airport", minutes: 40, via: "JR → Keikyu" },
        { to: "Yokohama Station", minutes: 10, via: "JR Yokohama Line" },
        { to: "Tokyo Station", minutes: 18, via: "Tokaido Shinkansen" },
      ],
    },

    marseille: {
      "Gare Saint-Charles": [
        { to: "Marseille Provence Airport", minutes: 30, via: "Navette L100 shuttle" },
        { to: "Vieux-Port", minutes: 5, via: "Metro M1" },
        { to: "MuCEM", minutes: 10, via: "Metro M1 → tram" },
      ],
      "Vieux-Port": [
        { to: "Marseille Provence Airport", minutes: 35, via: "Metro → L100 shuttle" },
        { to: "Notre-Dame de la Garde", minutes: 10, via: "bus 60" },
        { to: "MuCEM", minutes: 10, via: "walk" },
      ],
      "Castellane": [
        { to: "Marseille Provence Airport", minutes: 35, via: "Metro M1 → L100 shuttle" },
        { to: "Vieux-Port", minutes: 5, via: "Metro M1" },
        { to: "Gare Saint-Charles", minutes: 4, via: "Metro M1" },
      ],
      "Joliette": [
        { to: "Marseille Provence Airport", minutes: 30, via: "Metro → L100 shuttle" },
        { to: "MuCEM", minutes: 5, via: "walk" },
        { to: "Gare Saint-Charles", minutes: 7, via: "Metro M2" },
      ],
      "Rond-Point du Prado": [
        { to: "Marseille Provence Airport", minutes: 40, via: "Metro → L100 shuttle" },
        { to: "Plage du Prado", minutes: 10, via: "bus 19" },
        { to: "Vieux-Port", minutes: 8, via: "Metro M2 → M1" },
      ],
    },

    valencia: {
      "València Nord": [
        { to: "Valencia Airport", minutes: 25, via: "Metro L3/L5" },
        { to: "Valencia Cathedral", minutes: 10, via: "walk" },
        { to: "Mercado Central", minutes: 5, via: "walk" },
      ],
      "Joaquín Sorolla": [
        { to: "Valencia Airport", minutes: 30, via: "shuttle to Nord → Metro" },
        { to: "Valencia Cathedral", minutes: 15, via: "walk" },
        { to: "València Nord", minutes: 5, via: "free AVE shuttle" },
      ],
      "Xàtiva": [
        { to: "Valencia Airport", minutes: 25, via: "Metro L3/L5" },
        { to: "Valencia Cathedral", minutes: 8, via: "walk" },
        { to: "Mercado Central", minutes: 5, via: "walk" },
      ],
      "Colón": [
        { to: "Valencia Airport", minutes: 30, via: "Metro L5 → L3" },
        { to: "Valencia Cathedral", minutes: 12, via: "walk" },
        { to: "City of Arts and Sciences", minutes: 15, via: "Metro L5 → tram" },
      ],
      "Marítim - Serrería": [
        { to: "Valencia Airport", minutes: 40, via: "Metro L5 → L3/L5" },
        { to: "Malvarrosa beach", minutes: 8, via: "tram 6" },
        { to: "Valencia Cathedral", minutes: 20, via: "tram → metro" },
      ],
    },

    seville: {
      "Santa Justa": [
        { to: "Seville Airport", minutes: 35, via: "bus EA" },
        { to: "Seville Cathedral", minutes: 15, via: "bus C5 + walk" },
        { to: "Puerta de Jerez", minutes: 5, via: "Metro L1" },
      ],
      "Puerta de Jerez": [
        { to: "Seville Airport", minutes: 40, via: "bus EA" },
        { to: "Seville Cathedral", minutes: 5, via: "walk" },
        { to: "Real Alcázar", minutes: 5, via: "walk" },
      ],
      "Prado de San Sebastián": [
        { to: "Seville Airport", minutes: 40, via: "bus EA" },
        { to: "Plaza de España", minutes: 5, via: "walk" },
        { to: "Seville Cathedral", minutes: 10, via: "MetroCentro tram" },
      ],
      "Plaza Nueva": [
        { to: "Seville Airport", minutes: 40, via: "bus EA" },
        { to: "Seville Cathedral", minutes: 5, via: "walk" },
        { to: "Real Alcázar", minutes: 7, via: "walk" },
      ],
      "Archivo de Indias": [
        { to: "Seville Airport", minutes: 40, via: "bus EA" },
        { to: "Seville Cathedral", minutes: 1, via: "walk" },
        { to: "Real Alcázar", minutes: 1, via: "walk" },
      ],
    },

    nagoya: {
      "Nagoya Station": [
        { to: "Chubu Centrair Airport", minutes: 28, via: "Meitetsu μ-SKY" },
        { to: "Nagoya Castle", minutes: 5, via: "Tsurumai subway" },
        { to: "Sakae", minutes: 5, via: "Higashiyama subway" },
      ],
      "Sakae": [
        { to: "Chubu Centrair Airport", minutes: 35, via: "Higashiyama → Meitetsu" },
        { to: "Oasis 21 / TV Tower", minutes: 1, via: "walk" },
        { to: "Nagoya Station", minutes: 5, via: "Higashiyama subway" },
      ],
      "Kanayama": [
        { to: "Chubu Centrair Airport", minutes: 25, via: "Meitetsu direct" },
        { to: "Atsuta Shrine", minutes: 5, via: "walk" },
        { to: "Nagoya Station", minutes: 5, via: "JR Tokaido" },
      ],
      "Fushimi": [
        { to: "Chubu Centrair Airport", minutes: 35, via: "Higashiyama → Meitetsu" },
        { to: "Nagoya Station", minutes: 3, via: "Higashiyama subway" },
        { to: "Sakae", minutes: 2, via: "Higashiyama subway" },
      ],
      "Shiyakusho": [
        { to: "Chubu Centrair Airport", minutes: 40, via: "Meijo → Higashiyama → Meitetsu" },
        { to: "Nagoya Castle", minutes: 1, via: "walk" },
        { to: "Nagoya Station", minutes: 10, via: "Meijo → Higashiyama" },
      ],
    },

    chiang_mai: {
      "Chiang Mai Station": [
        { to: "Chiang Mai Airport", minutes: 20, via: "taxi" },
        { to: "Old City (Tha Phae Gate)", minutes: 10, via: "tuk-tuk" },
        { to: "Night Bazaar", minutes: 10, via: "tuk-tuk" },
      ],
      "Old City (Chedi Luang)": [
        { to: "Chiang Mai Airport", minutes: 15, via: "taxi" },
        { to: "Wat Chedi Luang", minutes: 1, via: "walk" },
        { to: "Nimmanhaemin", minutes: 10, via: "taxi" },
      ],
      "Tha Phae Gate": [
        { to: "Chiang Mai Airport", minutes: 15, via: "taxi" },
        { to: "Old City", minutes: 1, via: "walk" },
        { to: "Night Bazaar", minutes: 10, via: "walk" },
      ],
      "Nimmanhaemin (Nimman)": [
        { to: "Chiang Mai Airport", minutes: 10, via: "taxi" },
        { to: "Old City", minutes: 10, via: "taxi" },
        { to: "Chiang Mai University", minutes: 5, via: "walk" },
      ],
      "Night Bazaar": [
        { to: "Chiang Mai Airport", minutes: 15, via: "taxi" },
        { to: "Old City", minutes: 10, via: "walk" },
        { to: "Tha Phae Gate", minutes: 10, via: "walk" },
      ],
    },

    phuket: {
      "Patong Beach": [
        { to: "Phuket Airport", minutes: 55, via: "taxi (no rail on island)" },
        { to: "Bangla Road", minutes: 1, via: "walk" },
        { to: "Kata Beach", minutes: 20, via: "taxi" },
      ],
      "Kata Beach": [
        { to: "Phuket Airport", minutes: 60, via: "taxi (no rail on island)" },
        { to: "Kata viewpoint", minutes: 10, via: "taxi" },
        { to: "Patong", minutes: 20, via: "taxi" },
      ],
      "Old Phuket Town": [
        { to: "Phuket Airport", minutes: 45, via: "taxi (no rail on island)" },
        { to: "Sino-Portuguese quarter", minutes: 0, via: "on foot" },
        { to: "Patong", minutes: 30, via: "taxi" },
      ],
      "Karon Beach": [
        { to: "Phuket Airport", minutes: 60, via: "taxi (no rail on island)" },
        { to: "Patong", minutes: 15, via: "taxi" },
        { to: "Kata Beach", minutes: 5, via: "taxi" },
      ],
      "Bang Tao Beach": [
        { to: "Phuket Airport", minutes: 25, via: "taxi (no rail on island)" },
        { to: "Laguna complex", minutes: 0, via: "on foot" },
        { to: "Patong", minutes: 30, via: "taxi" },
      ],
      "Surin Beach": [
        { to: "Phuket Airport", minutes: 30, via: "taxi (no rail on island)" },
        { to: "Bang Tao", minutes: 10, via: "taxi" },
        { to: "Patong", minutes: 25, via: "taxi" },
      ],
    },
  },
};

export function getJourneyTimes(slug, stationName) {
  return guideJourneyTimes.journeys[slug]?.[stationName] || null;
}
