import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

/**
 * The header's nav. The footer repeats the same links, so anything driving
 * navigation has to say which of the two it means.
 */
export const mainNav = (page: Page) =>
  page.getByRole("navigation", { name: "Main" });

/** The footer's link row. */
export const footerNav = (page: Page) =>
  page.getByRole("navigation", { name: "Footer links" });

/**
 * Scans the current page with axe in each of the three themes, leaving the
 * page in 8-bit mode. Call it after the page under test has loaded.
 */
export async function expectNoViolationsInAnyTheme(page: Page) {
  const light = await new AxeBuilder({ page }).analyze();
  expect(light.violations, "light theme").toEqual([]);

  const themes = [
    ["Dark", "dark"],
    ["8-bit", "eightbit"],
  ] as const;

  for (const [label, className] of themes) {
    await page.locator("#themeToggle").first().click();
    await page.getByRole("menuitem", { name: label }).click();
    // Wait for the dropdown to fully close and the theme to apply before
    // scanning — Radix sets aria-hidden on the page body while the dropdown is
    // open/animating, which causes spurious axe failures.
    await page.waitForSelector(`html.${className}`);
    await page.waitForSelector("[data-radix-popper-content-wrapper]", {
      state: "detached",
    });

    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations, `${label} theme`).toEqual([]);
  }
}
