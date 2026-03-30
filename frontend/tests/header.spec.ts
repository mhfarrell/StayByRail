import { test, expect } from "@playwright/test";
import { mockAllAPIs } from "./mocks";

test.describe("Header dropdowns", () => {
  test.beforeEach(async ({ page }) => {
    await mockAllAPIs(page);
    await page.goto("/");
  });

  test("About dropdown opens and closes", async ({ page }) => {
    const aboutBtn = page.locator("button.header-nav-btn", {
      hasText: "About",
    });
    const aboutPanel = page.locator(".dropdown-about");

    // Initially closed
    await expect(aboutPanel).not.toBeVisible();

    // Open
    await aboutBtn.click();
    await expect(aboutPanel).toBeVisible();
    await expect(aboutPanel).toContainText("About StayByRail");

    // Close by clicking the button again
    await aboutBtn.click();
    await expect(aboutPanel).not.toBeVisible();
  });

  test("Settings dropdown opens and closes", async ({ page }) => {
    const settingsBtn = page.locator('button[aria-label="Settings"]');
    const settingsPanel = page.locator(".dropdown-settings");

    // Initially closed
    await expect(settingsPanel).not.toBeVisible();

    // Open
    await settingsBtn.click();
    await expect(settingsPanel).toBeVisible();
    await expect(settingsPanel).toContainText("Theme");

    // Close by clicking the button again
    await settingsBtn.click();
    await expect(settingsPanel).not.toBeVisible();
  });

  test("clicking outside a dropdown closes it", async ({ page }) => {
    const aboutBtn = page.locator("button.header-nav-btn", {
      hasText: "About",
    });
    const aboutPanel = page.locator(".dropdown-about");

    await aboutBtn.click();
    await expect(aboutPanel).toBeVisible();

    // Click on the backdrop to close
    await page.locator(".dropdown-backdrop").click();
    await expect(aboutPanel).not.toBeVisible();
  });

  test("opening one dropdown closes the other", async ({ page }) => {
    const aboutBtn = page.locator("button.header-nav-btn", {
      hasText: "About",
    });
    const settingsBtn = page.locator('button[aria-label="Settings"]');
    const aboutPanel = page.locator(".dropdown-about");
    const settingsPanel = page.locator(".dropdown-settings");

    // Open About
    await aboutBtn.click();
    await expect(aboutPanel).toBeVisible();

    // Open Settings — About should close
    await settingsBtn.click();
    await expect(settingsPanel).toBeVisible();
    await expect(aboutPanel).not.toBeVisible();

    // Open About again — Settings should close
    await aboutBtn.click();
    await expect(aboutPanel).toBeVisible();
    await expect(settingsPanel).not.toBeVisible();
  });

  test("theme toggle switches between dark and light", async ({ page }) => {
    const settingsBtn = page.locator('button[aria-label="Settings"]');
    await settingsBtn.click();
    await expect(page.locator(".dropdown-settings")).toBeVisible();

    // Check current theme — the app defaults to dark unless system prefers light
    const html = page.locator("html");

    // Click the Light button
    const lightBtn = page.locator(".toggle-btn", { hasText: "Light" });
    await lightBtn.click();
    await expect(html).toHaveAttribute("data-theme", "light");

    // Click the Dark button
    const darkBtn = page.locator(".toggle-btn", { hasText: "Dark" });
    await darkBtn.click();
    await expect(html).toHaveAttribute("data-theme", "dark");
  });
});
