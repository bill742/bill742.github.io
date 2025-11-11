import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Homepage does not have accessiblity issues", () => {
  test("Should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test("Home page displays correct metadata", async ({ page }) => {
  await page.goto("./");

  // Expect page title to be the same as in env variable
  await expect(page).toHaveTitle(process.env.NEXT_PUBLIC_SITE_TITLE || "");
});
