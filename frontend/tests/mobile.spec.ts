import { test, expect } from "@playwright/test";
import { mockAllAPIs } from "./mocks";

test.describe("Mobile-specific tests", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await mockAllAPIs(page);
    await page.goto("/");
  });

  test("all form elements are visible and tappable", async ({ page }) => {
    // Country select
    const countrySelect = page.locator("select").first();
    await expect(countrySelect).toBeVisible();
    await expect(countrySelect).toBeEnabled();

    // City select
    const citySelect = page.locator("select").nth(1);
    await expect(citySelect).toBeVisible();
    await expect(citySelect).toBeEnabled();

    // Line select
    const lineSelect = page.locator("select").nth(2);
    await expect(lineSelect).toBeVisible();
    await expect(lineSelect).toBeEnabled();

    // Check-in
    const checkIn = page.locator('input[type="date"]').first();
    await expect(checkIn).toBeVisible();

    // Check-out
    const checkOut = page.locator('input[type="date"]').nth(1);
    await expect(checkOut).toBeVisible();

    // Max price
    const maxPrice = page.locator('input[type="number"]').first();
    await expect(maxPrice).toBeVisible();

    // Guests
    const guests = page.locator('input[type="number"]').nth(1);
    await expect(guests).toBeVisible();

    // Search button
    const searchBtn = page.locator('form.search-form button[type="submit"]');
    await expect(searchBtn).toBeVisible();
    await expect(searchBtn).toBeEnabled();
  });

  test("search button is clickable and triggers search on mobile", async ({
    page,
  }) => {
    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeEnabled();

    // Scroll to button if needed
    await btn.scrollIntoViewIfNeeded();

    const [searchRequest] = await Promise.all([
      page.waitForRequest((req) => req.url().includes("/api/search")),
      btn.click(),
    ]);

    expect(searchRequest.url()).toContain("/api/search");
  });

  test("header dropdowns work on mobile", async ({ page }) => {
    // Open About
    const aboutBtn = page.locator("button.header-nav-btn", {
      hasText: "About",
    });
    await aboutBtn.click();
    await expect(page.locator(".dropdown-about")).toBeVisible();

    // Close by tapping the About button again (toggle)
    await aboutBtn.click();
    await expect(page.locator(".dropdown-about")).not.toBeVisible();

    // Open Settings
    const settingsBtn = page.locator('button[aria-label="Settings"]');
    await settingsBtn.click();
    await expect(page.locator(".dropdown-settings")).toBeVisible();

    // Close by tapping the Settings button again (toggle)
    await settingsBtn.click();
    await expect(page.locator(".dropdown-settings")).not.toBeVisible();
  });

  test("scrolling works after interacting with dropdowns", async ({
    page,
  }) => {
    // Open and close About dropdown
    const aboutBtn = page.locator("button.header-nav-btn", {
      hasText: "About",
    });
    await aboutBtn.click();
    await expect(page.locator(".dropdown-about")).toBeVisible();
    await page.locator(".dropdown-backdrop").click();
    await expect(page.locator(".dropdown-about")).not.toBeVisible();

    // Scroll down — the search button should come into view
    const searchBtn = page.locator('form.search-form button[type="submit"]');
    await searchBtn.scrollIntoViewIfNeeded();
    await expect(searchBtn).toBeInViewport();

    // Verify we can still interact after scrolling
    const [searchRequest] = await Promise.all([
      page.waitForRequest((req) => req.url().includes("/api/search")),
      searchBtn.click(),
    ]);
    expect(searchRequest.url()).toContain("/api/search");
  });
});
