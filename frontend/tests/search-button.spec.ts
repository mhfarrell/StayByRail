import { test, expect } from "@playwright/test";
import { mockAllAPIs, mockAPIsWithDelayedCities } from "./mocks";

test.describe("Search button behavior", () => {
  test("is disabled while cities are loading", async ({ page }) => {
    const releaseCities = await mockAPIsWithDelayedCities(page);

    await page.goto("/");

    // The button should be disabled and show "Connecting to server..."
    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeDisabled();
    await expect(btn).toContainText("Connecting to server");

    // Release cities data
    releaseCities();

    // Now the button should become enabled and show "Search Hotels"
    await expect(btn).toBeEnabled();
    await expect(btn).toHaveText("Search Hotels");
  });

  test("becomes enabled after cities load", async ({ page }) => {
    await mockAllAPIs(page);
    await page.goto("/");

    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeEnabled();
    await expect(btn).toHaveText("Search Hotels");
  });

  test("clicking search triggers an API request", async ({ page }) => {
    await mockAllAPIs(page);
    await page.goto("/");

    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeEnabled();

    // Wait for a search request when we click
    const [searchRequest] = await Promise.all([
      page.waitForRequest((req) => req.url().includes("/api/search")),
      btn.click(),
    ]);

    expect(searchRequest.url()).toContain("/api/search");
    expect(searchRequest.url()).toContain("city=london");
  });

  test("search button works after opening and closing a header dropdown", async ({
    page,
  }) => {
    await mockAllAPIs(page);
    await page.goto("/");

    // Open the About dropdown
    const aboutBtn = page.locator("button.header-nav-btn", {
      hasText: "About",
    });
    await aboutBtn.click();
    await expect(page.locator(".dropdown-about")).toBeVisible();

    // Close by clicking the backdrop
    await page.locator(".dropdown-backdrop").click();
    await expect(page.locator(".dropdown-about")).not.toBeVisible();

    // Now click search — it should still fire a request
    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeEnabled();

    const [searchRequest] = await Promise.all([
      page.waitForRequest((req) => req.url().includes("/api/search")),
      btn.click(),
    ]);

    expect(searchRequest.url()).toContain("/api/search");
  });
});

test.describe("Search button on mobile viewport", () => {
  test.use({ viewport: { width: 375, height: 812 } });

  test("search button is clickable and triggers search on mobile", async ({
    page,
  }) => {
    await mockAllAPIs(page);
    await page.goto("/");

    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeEnabled();
    await expect(btn).toBeVisible();

    const [searchRequest] = await Promise.all([
      page.waitForRequest((req) => req.url().includes("/api/search")),
      btn.click(),
    ]);

    expect(searchRequest.url()).toContain("/api/search");
  });

  test("search works after header dropdown interaction on mobile", async ({
    page,
  }) => {
    await mockAllAPIs(page);
    await page.goto("/");

    // Open Settings dropdown
    const settingsBtn = page.locator('button[aria-label="Settings"]');
    await settingsBtn.click();
    await expect(page.locator(".dropdown-settings")).toBeVisible();

    // Close it via the close button
    await page.locator(".dropdown-settings .dropdown-close").click();
    await expect(page.locator(".dropdown-settings")).not.toBeVisible();

    // Search button should still work
    const btn = page.locator('form.search-form button[type="submit"]');
    await expect(btn).toBeEnabled();

    const [searchRequest] = await Promise.all([
      page.waitForRequest((req) => req.url().includes("/api/search")),
      btn.click(),
    ]);

    expect(searchRequest.url()).toContain("/api/search");
  });
});
