function ContentSections() {
  return (
    <div className="content-sections">

      {/* ---- How StayByRail Works ---- */}
      <section className="content-how-it-works">
        <h2 className="content-heading">How StayByRail Works</h2>
        <p className="content-intro">
          StayByRail makes it simple to find accommodation within walking distance of
          major train and metro stations. Compare prices from Google Hotels, Booking.com,
          and TripAdvisor — all in one search — so you spend less time planning and more
          time exploring.
        </p>
        <div className="content-steps">
          <div className="content-step-card">
            <div className="content-step-number">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="content-step-title">1. Choose Your City and Line</h3>
            <p className="content-step-text">
              Select from 52 cities across Japan, the United Kingdom, France, Germany,
              Spain, and Thailand. Pick a specific train or metro line and station to
              search around.
            </p>
          </div>
          <div className="content-step-card">
            <div className="content-step-number">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="content-step-title">2. Set Your Dates and Budget</h3>
            <p className="content-step-text">
              Enter your check-in and check-out dates, choose your preferred currency,
              and optionally set a maximum nightly budget to filter results to your
              price range.
            </p>
          </div>
          <div className="content-step-card">
            <div className="content-step-number">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="content-step-title">3. Compare Hotels by Distance</h3>
            <p className="content-step-text">
              Results are sorted by walking distance to the station. Compare prices
              from multiple booking platforms side by side, view amenities, and book
              directly through your preferred site.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Popular Destinations ---- */}
      <section className="content-destinations">
        <h2 className="content-heading">Popular Destinations</h2>
        <p className="content-intro">
          From the high-speed Shinkansen network in Japan to the London Underground,
          StayByRail covers the most-travelled rail networks in the world. Here are
          some of the most popular cities our travellers search for.
        </p>
        <div className="content-city-grid">
          <div className="content-city-card" data-accent="red">
            <h3 className="content-city-name">Tokyo</h3>
            <p className="content-city-text">
              Explore Japan's capital via the iconic Yamanote Line, which loops through
              major hubs like Shinjuku, Shibuya, and Tokyo Station. With over 100
              stations across dozens of lines, finding a hotel near a convenient stop
              means easy access to everything from Akihabara's electronics district to
              the serene Meiji Shrine. Budget business hotels near JR stations offer
              excellent value for travellers.
            </p>
          </div>
          <div className="content-city-card" data-accent="blue">
            <h3 className="content-city-name">London</h3>
            <p className="content-city-text">
              Navigate the Tube and find hotels near Underground stations across all
              zones. Staying near a Central, Victoria, or Piccadilly line station puts
              you minutes from attractions like the British Museum, Buckingham Palace,
              and the West End. Hotels near major terminuses such as King's Cross and
              Paddington also provide direct links to the rest of the UK.
            </p>
          </div>
          <div className="content-city-card" data-accent="purple">
            <h3 className="content-city-name">Paris</h3>
            <p className="content-city-text">
              Stay near Metro stations in the City of Light and reach the Eiffel Tower,
              Louvre, and Montmartre without relying on taxis. The Paris Metro's 16
              lines cover every arrondissement, so a well-placed hotel means you can
              walk to the platform in minutes. Areas around Gare du Nord and Gare de
              Lyon offer good mid-range accommodation with national rail connections.
            </p>
          </div>
          <div className="content-city-card" data-accent="green">
            <h3 className="content-city-name">Berlin</h3>
            <p className="content-city-text">
              Find hotels along the U-Bahn and S-Bahn networks in Germany's capital.
              Berlin's efficient public transport makes it easy to hop between the
              Brandenburg Gate, Museum Island, and the East Side Gallery. Neighbourhoods
              like Mitte and Kreuzberg have abundant hotel options near stations, and
              the S-Bahn ring connects you to every corner of the city.
            </p>
          </div>
          <div className="content-city-card" data-accent="orange">
            <h3 className="content-city-name">Barcelona</h3>
            <p className="content-city-text">
              Hotels near Metro stops in Catalonia's vibrant capital put you within
              easy reach of the Sagrada Familia, Las Ramblas, and the Gothic Quarter.
              Lines L3 and L4 are especially useful for visitors, connecting the
              beachfront to the city centre. Staying near Passeig de Gracia gives you
              walking access to Gaudi's masterpieces and upscale shopping.
            </p>
          </div>
          <div className="content-city-card" data-accent="teal">
            <h3 className="content-city-name">Bangkok</h3>
            <p className="content-city-text">
              Stay near BTS Skytrain and MRT stations to avoid Bangkok's legendary
              traffic. The Sukhumvit line passes through the city's main hotel and
              nightlife districts, while the Silom line connects to the business
              centre and the Chao Phraya riverfront. Hotels near BTS stations often
              offer excellent value compared to other major Asian capitals.
            </p>
          </div>
          <div className="content-city-card" data-accent="red">
            <h3 className="content-city-name">Osaka</h3>
            <p className="content-city-text">
              Budget-friendly stays near Midosuji Line stations make Osaka an ideal base
              for exploring Kansai. The Midosuji Line runs directly from Shin-Osaka
              (Shinkansen hub) through Umeda and Namba, Osaka's two major entertainment
              districts. The famous Dotonbori street food scene is a short walk from
              Namba Station, and day trips to Kyoto and Nara are under an hour away.
            </p>
          </div>
          <div className="content-city-card" data-accent="purple">
            <h3 className="content-city-name">Kyoto</h3>
            <p className="content-city-text">
              Traditional ryokan and modern hotels cluster near Karasuma Line stations in
              Japan's cultural capital. The Karasuma Line connects Kyoto Station to the
              northern temple district, while the Tozai Line provides east-west access
              to landmarks like the Philosophers' Path and Nijo Castle. Staying near
              Kyoto Station gives you direct Shinkansen access for day trips to Tokyo
              and Hiroshima.
            </p>
          </div>
          <div className="content-city-card" data-accent="blue">
            <h3 className="content-city-name">Madrid</h3>
            <p className="content-city-text">
              Spain's capital boasts one of Europe's most extensive metro systems, with
              13 lines serving over 300 stations. Hotels near Sol or Gran Via stations
              place you at the heart of the city, within walking distance of the Prado
              Museum, Retiro Park, and the Royal Palace. The Cercanias commuter rail
              also connects to Toledo and other nearby cities for easy day trips.
            </p>
          </div>
          <div className="content-city-card" data-accent="green">
            <h3 className="content-city-name">Manchester</h3>
            <p className="content-city-text">
              Find hotels near Metrolink tram stops across Greater Manchester. The
              tram network connects Manchester Piccadilly and Victoria stations to
              MediaCityUK, the Etihad Campus, and the Trafford Centre. Staying near
              the city centre's tram stops gives you easy access to the Northern Quarter,
              Deansgate, and direct trains to London, Liverpool, and the Lake District.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Why Book Near Train Stations ---- */}
      <section className="content-benefits">
        <h2 className="content-heading">Why Book Near Train Stations?</h2>
        <p className="content-intro">
          Choosing a hotel close to a train or metro station is one of the smartest
          decisions you can make when travelling. Here is why proximity to public
          transit matters.
        </p>
        <div className="content-benefit-grid">
          <div className="content-benefit-card">
            <div className="content-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 8l-4 4-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="content-benefit-title">Save on Transport Costs</h3>
            <p className="content-benefit-text">
              When your hotel is a short walk from the station, you eliminate the need
              for expensive taxi rides or airport shuttle services. In cities like
              Tokyo and London, where a single taxi fare from the airport can exceed
              the cost of a night's accommodation, this adds up quickly. Walking to the
              nearest station keeps your daily transport budget low.
            </p>
          </div>
          <div className="content-benefit-card">
            <div className="content-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="content-benefit-title">More Time Exploring</h3>
            <p className="content-benefit-text">
              Less time commuting means more time experiencing your destination. A
              hotel within five minutes' walk of a metro stop lets you head out
              spontaneously, return to drop off shopping bags, or squeeze in a quick
              rest before an evening outing. You gain flexibility that distant hotels
              simply cannot match.
            </p>
          </div>
          <div className="content-benefit-card">
            <div className="content-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="content-benefit-title">Easy Airport Connections</h3>
            <p className="content-benefit-text">
              Most major airports are connected to the city centre by express train
              services. Hotels near key interchange stations — such as Shin-Osaka,
              Gare du Nord, or London Paddington — let you reach the terminal in under
              an hour without transfers. This is especially valuable for early-morning
              flights or late-night arrivals.
            </p>
          </div>
          <div className="content-benefit-card">
            <div className="content-benefit-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3 className="content-benefit-title">Access Multiple Neighbourhoods</h3>
            <p className="content-benefit-text">
              A central station hotel acts as a launchpad to every part of the city.
              Rather than being confined to one district, you can reach markets, museums,
              parks, and nightlife areas across town in minutes. In cities with radial
              networks like Paris or Madrid, one well-chosen station puts the entire
              metro map within easy reach.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Frequently Asked Questions ---- */}
      <section className="content-faq">
        <h2 className="content-heading">Frequently Asked Questions</h2>
        <div className="content-faq-list">
          <div className="content-faq-item">
            <h3 className="content-faq-question">How does StayByRail work?</h3>
            <p className="content-faq-answer">
              StayByRail searches for hotels near the train or metro station you
              select. Choose a city, pick a rail line and station, enter your travel
              dates, and we query multiple booking platforms simultaneously. Results
              are sorted by walking distance to the station so you can quickly find the
              most convenient option at the best price.
            </p>
          </div>
          <div className="content-faq-item">
            <h3 className="content-faq-question">Which cities and countries are covered?</h3>
            <p className="content-faq-answer">
              StayByRail currently covers 52 cities across six countries: Japan (12
              cities including Tokyo, Osaka, Kyoto, and Hiroshima), the United Kingdom
              (13 cities including London, Manchester, and Edinburgh), France (7 cities
              including Paris, Lyon, and Marseille), Germany (8 cities including Berlin,
              Munich, and Hamburg), Spain (7 cities including Madrid, Barcelona, and
              Seville), and Thailand (5 cities including Bangkok and Chiang Mai). We are
              actively expanding to additional countries and cities.
            </p>
          </div>
          <div className="content-faq-item">
            <h3 className="content-faq-question">How are hotel prices compared?</h3>
            <p className="content-faq-answer">
              We pull real-time pricing from Google Hotels, Booking.com, and TripAdvisor
              for your exact dates. Each hotel listing shows prices from every available
              source, letting you compare per-night rates and total costs side by side.
              Prices are displayed in your chosen currency and reflect the rates
              available at the time of your search.
            </p>
          </div>
          <div className="content-faq-item">
            <h3 className="content-faq-question">Is StayByRail free to use?</h3>
            <p className="content-faq-answer">
              Yes, StayByRail is completely free for all users. There are no registration
              requirements, no hidden fees, and no premium tiers. You search, compare,
              and then book directly through the booking platform of your choice. We do
              not handle payments or collect personal information beyond what is needed
              for the search.
            </p>
          </div>
          <div className="content-faq-item">
            <h3 className="content-faq-question">What data sources do you use?</h3>
            <p className="content-faq-answer">
              Hotel listings and pricing come from Google Hotels (via the SerpAPI
              service), Booking.com, and TripAdvisor (via the RapidAPI marketplace).
              Station locations and rail line data are sourced from official transit
              authorities and open data projects. Walking distances are calculated using
              geographic coordinates to give you an accurate picture of how far each
              hotel is from the platform.
            </p>
          </div>
          <div className="content-faq-item">
            <h3 className="content-faq-question">Can I book directly through StayByRail?</h3>
            <p className="content-faq-answer">
              StayByRail is a comparison tool, not a booking engine. When you find a
              hotel you like, clicking the booking link takes you directly to Google
              Hotels, Booking.com, or TripAdvisor to complete your reservation. This
              means you benefit from each platform's own cancellation policies, loyalty
              programmes, and customer support.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Coverage ---- */}
      <section className="content-coverage">
        <h2 className="content-heading">Our Coverage</h2>
        <p className="content-intro">
          StayByRail covers major rail and metro networks across six countries and
          52 cities. Whether you are planning a Shinkansen trip through Japan, a
          Eurostar connection through France, or a backpacking route through Thailand,
          we have station-level hotel data to help you choose the right place to stay.
        </p>
        <div className="content-country-grid">
          <div className="content-country-card">
            <div className="content-country-flag" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#fff" stroke="currentColor" strokeWidth="1"/>
                <circle cx="16" cy="16" r="5.5" fill="#bc002d"/>
              </svg>
            </div>
            <h3 className="content-country-name">Japan</h3>
            <p className="content-country-cities">12 cities</p>
            <p className="content-country-text">
              Tokyo, Osaka, Kyoto, Hiroshima, Yokohama, Nagoya, Sapporo, Fukuoka,
              Kobe, Sendai, Kawasaki, and Kitakyushu. Covering JR, metro, and private
              railway lines.
            </p>
          </div>
          <div className="content-country-card">
            <div className="content-country-flag" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="4" width="28" height="24" rx="2" fill="#012169"/>
                <path d="M2 4l28 24M30 4L2 28" stroke="#fff" strokeWidth="4"/>
                <path d="M2 4l28 24M30 4L2 28" stroke="#C8102E" strokeWidth="2"/>
                <path d="M16 4v24M2 16h28" stroke="#fff" strokeWidth="6"/>
                <path d="M16 4v24M2 16h28" stroke="#C8102E" strokeWidth="3"/>
              </svg>
            </div>
            <h3 className="content-country-name">United Kingdom</h3>
            <p className="content-country-cities">13 cities</p>
            <p className="content-country-text">
              London, Manchester, Birmingham, Edinburgh, Glasgow, Liverpool, Leeds,
              Bristol, Sheffield, Newcastle, Nottingham, Cardiff, and Leicester.
              Covering the Underground, Overground, Metrolink, and national rail.
            </p>
          </div>
          <div className="content-country-card">
            <div className="content-country-flag" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="4" width="9.3" height="24" rx="1" fill="#002395"/>
                <rect x="11.3" y="4" width="9.4" height="24" fill="#fff"/>
                <rect x="20.7" y="4" width="9.3" height="24" rx="1" fill="#ED2939"/>
              </svg>
            </div>
            <h3 className="content-country-name">France</h3>
            <p className="content-country-cities">7 cities</p>
            <p className="content-country-text">
              Paris, Lyon, Marseille, Toulouse, Nice, Bordeaux, and Strasbourg.
              Covering the Metro, RER, tramway, and TGV station areas.
            </p>
          </div>
          <div className="content-country-card">
            <div className="content-country-flag" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="4" width="28" height="8" rx="1" fill="#000"/>
                <rect x="2" y="12" width="28" height="8" fill="#DD0000"/>
                <rect x="2" y="20" width="28" height="8" rx="1" fill="#FFCE00"/>
              </svg>
            </div>
            <h3 className="content-country-name">Germany</h3>
            <p className="content-country-cities">8 cities</p>
            <p className="content-country-text">
              Berlin, Munich, Hamburg, Frankfurt, Cologne, Stuttgart, Dusseldorf,
              and Dresden. Covering U-Bahn, S-Bahn, and Deutsche Bahn stations.
            </p>
          </div>
          <div className="content-country-card">
            <div className="content-country-flag" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="4" width="28" height="8" rx="1" fill="#AA151B"/>
                <rect x="2" y="12" width="28" height="8" fill="#F1BF00"/>
                <rect x="2" y="20" width="28" height="8" rx="1" fill="#AA151B"/>
              </svg>
            </div>
            <h3 className="content-country-name">Spain</h3>
            <p className="content-country-cities">7 cities</p>
            <p className="content-country-text">
              Madrid, Barcelona, Valencia, Seville, Bilbao, Malaga, and Zaragoza.
              Covering Metro, Cercanias, and AVE high-speed rail stations.
            </p>
          </div>
          <div className="content-country-card">
            <div className="content-country-flag" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="4" width="28" height="4" fill="#A51931"/>
                <rect x="2" y="8" width="28" height="4" fill="#F4F5F8"/>
                <rect x="2" y="12" width="28" height="8" fill="#2D2A4A"/>
                <rect x="2" y="20" width="28" height="4" fill="#F4F5F8"/>
                <rect x="2" y="24" width="28" height="4" fill="#A51931"/>
              </svg>
            </div>
            <h3 className="content-country-name">Thailand</h3>
            <p className="content-country-cities">5 cities</p>
            <p className="content-country-text">
              Bangkok, Chiang Mai, Pattaya, Phuket, and Hat Yai. Covering BTS
              Skytrain, MRT, Airport Rail Link, and national rail stations.
            </p>
          </div>
        </div>
        <p className="content-expanding">
          We are continually expanding our coverage. New cities and rail networks are
          added regularly as data sources become available. Have a city you would like
          to see? We welcome suggestions from the travel community.
        </p>
      </section>

    </div>
  );
}

export default ContentSections;
