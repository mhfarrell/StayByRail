// Neighbourhood-at-a-glance price bands for each city guide.
// Kept separate from cityGuides.js so the main data file stays focused
// on long-form content and editorial picks.
//
// Prices are typical advance-booking rates for a double room on a
// neutral mid-week night in 2026. They are guidance, not quotes —
// actual prices vary by season, event calendar, and the day of the week.
// Update the `notedAt` field whenever the numbers are refreshed.
//
// Bands:
//   budget  — clean, functional, chain or budget hostel-hotel
//   mid     — 3/4-star, chain or independent, breakfast usually included
//   premium — 4/5-star, boutique or international luxury brand

export const guidePriceBands = {
  notedAt: "2026-04",
  currency: {
    tokyo: "JPY",
    osaka: "JPY",
    kyoto: "JPY",
    hiroshima: "JPY",
    yokohama: "JPY",
    marseille: "EUR",
    valencia: "EUR",
    seville: "EUR",
    nagoya: "JPY",
    chiang_mai: "THB",
    london: "GBP",
    birmingham: "GBP",
    manchester: "GBP",
    edinburgh: "GBP",
    paris: "EUR",
    lyon: "EUR",
    berlin: "EUR",
    munich: "EUR",
    hamburg: "EUR",
    barcelona: "EUR",
    madrid: "EUR",
    bangkok: "THB",
  },
  bands: {
    tokyo: [
      { area: "Shinjuku / Shibuya", budget: "¥ 9,000", mid: "¥ 16,000", premium: "¥ 35,000+" },
      { area: "Tokyo Station / Marunouchi", budget: "¥ 10,000", mid: "¥ 20,000", premium: "¥ 45,000+" },
      { area: "Ueno / Asakusa", budget: "¥ 7,000", mid: "¥ 13,000", premium: "¥ 25,000" },
      { area: "Otsuka (StayByRail pick)", budget: "¥ 6,500", mid: "¥ 11,000", premium: "¥ 18,000" },
    ],
    london: [
      { area: "King's Cross / Bloomsbury (Zone 1)", budget: "£ 120", mid: "£ 200", premium: "£ 350+" },
      { area: "Paddington / Marylebone (Zone 1)", budget: "£ 115", mid: "£ 195", premium: "£ 340+" },
      { area: "Hammersmith / Earl's Court (Zone 2)", budget: "£ 85", mid: "£ 140", premium: "£ 230" },
      { area: "Bethnal Green / Canada Water (Zone 2)", budget: "£ 80", mid: "£ 130", premium: "£ 210" },
    ],
    paris: [
      { area: "1st / 4th arrondissement (central)", budget: "€ 130", mid: "€ 210", premium: "€ 380+" },
      { area: "Gare du Nord / 10th", budget: "€ 90", mid: "€ 150", premium: "€ 250" },
      { area: "Latin Quarter / 5th", budget: "€ 110", mid: "€ 180", premium: "€ 320" },
      { area: "11th / Bastille", budget: "€ 85", mid: "€ 145", premium: "€ 240" },
    ],
    osaka: [
      { area: "Umeda / Kita (north)", budget: "¥ 8,000", mid: "¥ 14,000", premium: "¥ 28,000+" },
      { area: "Namba / Minami (south)", budget: "¥ 8,500", mid: "¥ 15,000", premium: "¥ 30,000" },
      { area: "Shin-Osaka", budget: "¥ 7,500", mid: "¥ 12,000", premium: "¥ 22,000" },
      { area: "Tennoji", budget: "¥ 6,500", mid: "¥ 11,000", premium: "¥ 18,000" },
    ],
    barcelona: [
      { area: "Eixample / Passeig de Gràcia", budget: "€ 110", mid: "€ 180", premium: "€ 320+" },
      { area: "Gothic Quarter / Barri Gòtic", budget: "€ 100", mid: "€ 165", premium: "€ 290" },
      { area: "Gràcia", budget: "€ 85", mid: "€ 140", premium: "€ 230" },
      { area: "Sants area", budget: "€ 75", mid: "€ 125", premium: "€ 200" },
    ],
    bangkok: [
      { area: "Siam / Chit Lom", budget: "฿ 2,500", mid: "฿ 4,500", premium: "฿ 9,000+" },
      { area: "Sukhumvit (Nana–Phrom Phong)", budget: "฿ 2,200", mid: "฿ 4,200", premium: "฿ 8,500" },
      { area: "Silom / Sala Daeng", budget: "฿ 2,400", mid: "฿ 4,000", premium: "฿ 7,500" },
      { area: "Hua Lamphong / MRT Blue", budget: "฿ 1,800", mid: "฿ 3,200", premium: "฿ 6,000" },
    ],
    berlin: [
      { area: "Mitte (central)", budget: "€ 90", mid: "€ 150", premium: "€ 260+" },
      { area: "Prenzlauer Berg", budget: "€ 80", mid: "€ 135", premium: "€ 220" },
      { area: "Kreuzberg", budget: "€ 75", mid: "€ 125", premium: "€ 200" },
      { area: "Charlottenburg", budget: "€ 70", mid: "€ 120", premium: "€ 195" },
    ],
    kyoto: [
      { area: "Kyoto Station", budget: "¥ 9,000", mid: "¥ 16,000", premium: "¥ 32,000+" },
      { area: "Gion / Higashiyama", budget: "¥ 12,000", mid: "¥ 22,000", premium: "¥ 50,000+" },
      { area: "Downtown (Karasuma / Shijo)", budget: "¥ 9,500", mid: "¥ 17,000", premium: "¥ 34,000" },
      { area: "Arashiyama", budget: "¥ 10,000", mid: "¥ 18,000", premium: "¥ 40,000+" },
    ],
    madrid: [
      { area: "Sol / Gran Vía", budget: "€ 90", mid: "€ 150", premium: "€ 260+" },
      { area: "Salamanca", budget: "€ 100", mid: "€ 165", premium: "€ 290" },
      { area: "Malasaña / Chueca", budget: "€ 80", mid: "€ 135", premium: "€ 220" },
      { area: "Atocha area", budget: "€ 75", mid: "€ 130", premium: "€ 210" },
    ],
    birmingham: [
      { area: "New Street / Bullring", budget: "£ 75", mid: "£ 120", premium: "£ 200" },
      { area: "Jewellery Quarter", budget: "£ 70", mid: "£ 115", premium: "£ 185" },
      { area: "Broad Street / Brindleyplace", budget: "£ 85", mid: "£ 130", premium: "£ 220" },
      { area: "Digbeth / Moor Street", budget: "£ 65", mid: "£ 100", premium: "£ 170" },
    ],
    edinburgh: [
      { area: "Old Town / Royal Mile", budget: "£ 95", mid: "£ 160", premium: "£ 290+" },
      { area: "New Town", budget: "£ 90", mid: "£ 150", premium: "£ 280" },
      { area: "Haymarket / West End", budget: "£ 80", mid: "£ 135", premium: "£ 220" },
      { area: "Leith / Newhaven", budget: "£ 70", mid: "£ 115", premium: "£ 185" },
    ],
    manchester: [
      { area: "Piccadilly / Northern Quarter", budget: "£ 85", mid: "£ 130", premium: "£ 210" },
      { area: "Deansgate / Spinningfields", budget: "£ 90", mid: "£ 140", premium: "£ 225" },
      { area: "Oxford Road / Corridor", budget: "£ 75", mid: "£ 120", premium: "£ 190" },
      { area: "MediaCityUK / Salford", budget: "£ 70", mid: "£ 115", premium: "£ 180" },
    ],
    munich: [
      { area: "Hauptbahnhof", budget: "€ 95", mid: "€ 155", premium: "€ 260+" },
      { area: "Marienplatz / Altstadt", budget: "€ 110", mid: "€ 175", premium: "€ 320+" },
      { area: "Schwabing", budget: "€ 90", mid: "€ 145", premium: "€ 240" },
      { area: "Theresienwiese", budget: "€ 85", mid: "€ 140", premium: "€ 220" },
    ],
    hamburg: [
      { area: "Jungfernstieg / Altstadt", budget: "€ 100", mid: "€ 160", premium: "€ 280+" },
      { area: "HafenCity", budget: "€ 110", mid: "€ 175", premium: "€ 310" },
      { area: "St. Pauli / Reeperbahn", budget: "€ 85", mid: "€ 140", premium: "€ 220" },
      { area: "Altona", budget: "€ 80", mid: "€ 135", premium: "€ 210" },
    ],
    lyon: [
      { area: "Part-Dieu", budget: "€ 85", mid: "€ 140", premium: "€ 230" },
      { area: "Bellecour / Presqu'île", budget: "€ 95", mid: "€ 155", premium: "€ 260+" },
      { area: "Vieux Lyon", budget: "€ 100", mid: "€ 165", premium: "€ 280+" },
      { area: "Perrache", budget: "€ 80", mid: "€ 130", premium: "€ 210" },
    ],
    hiroshima: [
      { area: "Hiroshima Station (south exit)", budget: "¥ 7,000", mid: "¥ 12,000", premium: "¥ 22,000" },
      { area: "Hatchobori / downtown", budget: "¥ 8,000", mid: "¥ 13,500", premium: "¥ 25,000" },
      { area: "Peace Park area", budget: "¥ 7,500", mid: "¥ 12,500", premium: "¥ 23,000" },
      { area: "Miyajima (island)", budget: "¥ 11,000", mid: "¥ 20,000", premium: "¥ 40,000+" },
    ],
    yokohama: [
      { area: "Yokohama Station (west exit)", budget: "¥ 7,500", mid: "¥ 13,000", premium: "¥ 25,000" },
      { area: "Minato Mirai (waterfront)", budget: "¥ 10,000", mid: "¥ 17,000", premium: "¥ 40,000+" },
      { area: "Sakuragicho", budget: "¥ 7,000", mid: "¥ 12,000", premium: "¥ 22,000" },
      { area: "Motomachi-Chukagai", budget: "¥ 8,000", mid: "¥ 13,500", premium: "¥ 25,000" },
    ],
    marseille: [
      { area: "Vieux-Port", budget: "€ 95", mid: "€ 155", premium: "€ 280+" },
      { area: "Gare Saint-Charles", budget: "€ 70", mid: "€ 115", premium: "€ 180" },
      { area: "Castellane / Prado", budget: "€ 85", mid: "€ 140", premium: "€ 230" },
      { area: "Le Panier", budget: "€ 90", mid: "€ 150", premium: "€ 240" },
    ],
    valencia: [
      { area: "Ciutat Vella (old town)", budget: "€ 70", mid: "€ 115", premium: "€ 200" },
      { area: "Joaquín Sorolla / Ruzafa", budget: "€ 60", mid: "€ 100", premium: "€ 170" },
      { area: "Barrio del Carmen", budget: "€ 75", mid: "€ 120", premium: "€ 210" },
      { area: "Malvarrosa beach", budget: "€ 65", mid: "€ 110", premium: "€ 190" },
    ],
    seville: [
      { area: "Santa Cruz (old town)", budget: "€ 85", mid: "€ 140", premium: "€ 260+" },
      { area: "Arenal / riverside", budget: "€ 80", mid: "€ 135", premium: "€ 250+" },
      { area: "Triana (west bank)", budget: "€ 65", mid: "€ 110", premium: "€ 180" },
      { area: "Santa Justa station", budget: "€ 60", mid: "€ 95", premium: "€ 160" },
    ],
    nagoya: [
      { area: "Nagoya Station", budget: "¥ 7,500", mid: "¥ 13,500", premium: "¥ 28,000" },
      { area: "Sakae / downtown", budget: "¥ 7,000", mid: "¥ 12,000", premium: "¥ 24,000" },
      { area: "Kanayama", budget: "¥ 6,500", mid: "¥ 11,000", premium: "¥ 20,000" },
      { area: "Fushimi", budget: "¥ 7,000", mid: "¥ 11,500", premium: "¥ 22,000" },
    ],
    chiang_mai: [
      { area: "Old City", budget: "฿ 900", mid: "฿ 1,800", premium: "฿ 4,200" },
      { area: "Nimman", budget: "฿ 1,200", mid: "฿ 2,400", premium: "฿ 5,500" },
      { area: "Night Bazaar / riverside", budget: "฿ 1,100", mid: "฿ 2,300", premium: "฿ 6,500+" },
      { area: "Chiang Mai Station", budget: "฿ 700", mid: "฿ 1,300", premium: "฿ 2,800" },
    ],
  },
};

export function getPriceBands(slug) {
  return guidePriceBands.bands[slug] || null;
}
