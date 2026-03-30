import { test, expect } from "@playwright/test";
import { mockAllAPIs, CITIES_RESPONSE } from "./mocks";

test.describe("Search form", () => {
  test.beforeEach(async ({ page }) => {
    await mockAllAPIs(page);
    await page.goto("/");
  });

  test("country dropdown is populated from API data", async ({ page }) => {
    const countrySelect = page.locator("select").first();
    await expect(countrySelect).toBeVisible();

    // Our mock has "United Kingdom" and "Japan"
    const options = countrySelect.locator("option");
    await expect(options).toHaveCount(2);
    await expect(options.nth(0)).toHaveText("Japan");
    await expect(options.nth(1)).toHaveText("United Kingdom");
  });

  test("city dropdown is populated for selected country", async ({ page }) => {
    // Default country is "United Kingdom" (set in SearchForm)
    const citySelect = page.locator("select").nth(1);
    await expect(citySelect).toBeVisible();

    // UK has only "london" in our mock
    const ukOptions = citySelect.locator("option");
    await expect(ukOptions).toHaveCount(1);
    await expect(ukOptions.first()).toHaveText("London");
  });

  test("changing country updates city list", async ({ page }) => {
    const countrySelect = page.locator("select").first();
    const citySelect = page.locator("select").nth(1);

    // Switch to Japan
    await countrySelect.selectOption("Japan");

    // City should now show "Tokyo"
    const jpOptions = citySelect.locator("option");
    await expect(jpOptions).toHaveCount(1);
    await expect(jpOptions.first()).toHaveText("Tokyo");
  });

  test("changing city updates line list", async ({ page }) => {
    const lineSelect = page.locator("select").nth(2);

    // Default is UK -> London — lines: Central Line, Victoria Line
    const londonLines = lineSelect.locator("option");
    await expect(londonLines).toHaveCount(2);

    // Switch to Japan -> Tokyo
    const countrySelect = page.locator("select").first();
    await countrySelect.selectOption("Japan");

    // Tokyo has one line: JR Yamanote Line
    const tokyoLines = lineSelect.locator("option");
    await expect(tokyoLines).toHaveCount(1);
    await expect(tokyoLines.first()).toHaveText("JR Yamanote Line");
  });

  test("date inputs are pre-populated", async ({ page }) => {
    const checkInInput = page.locator('input[type="date"]').first();
    const checkOutInput = page.locator('input[type="date"]').nth(1);

    // They should have values (tomorrow and tomorrow+3)
    const checkInVal = await checkInInput.inputValue();
    const checkOutVal = await checkOutInput.inputValue();

    expect(checkInVal).toBeTruthy();
    expect(checkOutVal).toBeTruthy();

    // check-out should be after check-in
    expect(new Date(checkOutVal).getTime()).toBeGreaterThan(
      new Date(checkInVal).getTime()
    );
  });

  test("amenity wishlist opens and chips can be selected (max 5)", async ({
    page,
  }) => {
    // Click the amenities toggle button
    const toggleBtn = page.locator("button.wishlist-toggle");
    await expect(toggleBtn).toBeVisible();
    await toggleBtn.click();

    // Amenity grid should be visible
    const grid = page.locator(".wishlist-grid");
    await expect(grid).toBeVisible();

    // Select 5 amenities
    const chips = grid.locator("button.wishlist-chip");
    const chipCount = await chips.count();
    expect(chipCount).toBeGreaterThanOrEqual(5);

    for (let i = 0; i < 5; i++) {
      await chips.nth(i).click();
    }

    // All 5 should be selected
    const selected = grid.locator("button.chip-selected");
    await expect(selected).toHaveCount(5);

    // The 6th chip should be disabled (not selected => disabled)
    const sixthChip = chips.nth(5);
    await expect(sixthChip).toHaveClass(/chip-disabled/);

    // Clicking a disabled chip should not increase the count
    await sixthChip.click({ force: true });
    await expect(selected).toHaveCount(5);

    // Deselecting one should re-enable others
    await chips.nth(0).click();
    await expect(grid.locator("button.chip-selected")).toHaveCount(4);
    await expect(sixthChip).not.toHaveClass(/chip-disabled/);
  });
});
