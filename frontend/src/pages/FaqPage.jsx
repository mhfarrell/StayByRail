import PageMeta from "../components/PageMeta";

function FaqPage() {
  return (
    <div className="page-content">
      <PageMeta
        title="FAQ — StayByRail | Hotels Near Train Stations"
        description="Answers to common questions about StayByRail — how it works, which cities are covered, data sources, and how to use your own API keys."
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How does StayByRail work?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "StayByRail searches for hotels near the train or metro station you select. Choose a city, pick a rail line and station, enter your travel dates, and we query multiple booking platforms simultaneously. Results are sorted by walking distance to the station so you can quickly find the most convenient option at the best price."
              }
            },
            {
              "@type": "Question",
              "name": "Which cities and countries are covered?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "StayByRail currently covers 52 cities across six countries: Japan (12 cities including Tokyo, Osaka, and Kyoto), the United Kingdom (13 cities including London, Manchester, and Edinburgh), France (7 cities including Paris and Lyon), Germany (8 cities including Berlin and Munich), Spain (7 cities including Madrid and Barcelona), and Thailand (5 cities including Bangkok)."
              }
            },
            {
              "@type": "Question",
              "name": "Is StayByRail free to use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, StayByRail is completely free for all users. There are no registration requirements, no hidden fees, and no premium tiers. You search, compare, and then book directly through the booking platform of your choice."
              }
            },
            {
              "@type": "Question",
              "name": "What data sources does StayByRail use?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hotel listings and pricing come from Google Hotels (via SerpAPI), Booking.com, and TripAdvisor (via RapidAPI). Station locations and rail line data are sourced from official transit authorities and open data projects."
              }
            },
            {
              "@type": "Question",
              "name": "Can I book directly through StayByRail?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "StayByRail is a comparison tool, not a booking engine. When you find a hotel you like, clicking the booking link takes you directly to Google Hotels, Booking.com, or TripAdvisor to complete your reservation."
              }
            }
          ]
        }}
      />
      <h2 className="page-heading">Frequently Asked Questions</h2>
      <p className="page-intro">
        Everything you need to know about using StayByRail to find the perfect hotel
        near your train or metro station.
      </p>

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
        <div className="content-faq-item">
          <h3 className="content-faq-question">Why does the search take a while?</h3>
          <p className="content-faq-answer">
            StayByRail queries multiple booking platforms simultaneously and aggregates
            results in real time. Depending on the number of stations on your chosen
            line and the availability of external APIs, a first search can take up to
            30 seconds. Subsequent searches on the same day are typically faster.
          </p>
        </div>
        <div className="content-faq-item">
          <h3 className="content-faq-question">What are SerpAPI and RapidAPI keys for?</h3>
          <p className="content-faq-answer">
            StayByRail uses SerpAPI to access Google Hotels data and RapidAPI to access
            Booking.com and TripAdvisor data. Each service has a free tier with a monthly
            search allowance. You can optionally supply your own API keys in the Settings
            menu — this uses your personal quota rather than the shared server quota,
            which helps ensure searches keep working when the shared limits are reached.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
