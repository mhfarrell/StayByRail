import { Page } from "@playwright/test";

export const CITIES_RESPONSE = {
  london: {
    lines: {
      london_central: "Central Line",
      london_victoria: "Victoria Line",
    },
    country: "United Kingdom",
  },
  tokyo: {
    lines: { yamanote: "JR Yamanote Line" },
    country: "Japan",
  },
};

export const SOURCES_RESPONSE = [
  {
    id: "google_hotels",
    name: "Google Hotels",
    description: "test",
    active: true,
  },
  {
    id: "booking.com",
    name: "Booking.com",
    description: "test",
    active: false,
  },
  {
    id: "tripadvisor",
    name: "TripAdvisor",
    description: "test",
    active: false,
  },
];

export const SEARCH_RESPONSE = {
  city: "london",
  line: "london_central",
  check_in: "2026-04-01",
  check_out: "2026-04-04",
  num_nights: 3,
  adults: 2,
  currency: "GBP",
  max_price: 100,
  results: [],
  total_hotels: 0,
  source_counts: {},
};

export const KEY_STATUS_RESPONSE = {
  serpapi: { configured: false },
  rapidapi: { configured: false },
};

/**
 * Sets up all standard API mocks for the app.
 * Returns a promise for the cities route that can be awaited
 * to control when cities data "arrives."
 */
export async function mockAllAPIs(page: Page) {
  await page.route("**/api/cities", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(CITIES_RESPONSE),
    })
  );
  await page.route("**/api/sources", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(SOURCES_RESPONSE),
    })
  );
  await page.route("**/api/search*", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(SEARCH_RESPONSE),
    })
  );
  await page.route("**/api/key-status*", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(KEY_STATUS_RESPONSE),
    })
  );
}

/**
 * Mock APIs but delay the cities response so we can test the loading state.
 * Call the returned function to release the cities response.
 */
export async function mockAPIsWithDelayedCities(page: Page) {
  let releaseCities: () => void;
  const citiesReady = new Promise<void>((resolve) => {
    releaseCities = resolve;
  });

  await page.route("**/api/cities", async (route) => {
    await citiesReady;
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(CITIES_RESPONSE),
    });
  });
  await page.route("**/api/sources", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(SOURCES_RESPONSE),
    })
  );
  await page.route("**/api/search*", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(SEARCH_RESPONSE),
    })
  );
  await page.route("**/api/key-status*", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(KEY_STATUS_RESPONSE),
    })
  );

  return releaseCities!;
}
