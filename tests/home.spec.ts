/* eslint-disable no-console */
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Homepage does not have accessiblity issues", () => {
  test("Should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./");

    console.log("Running accessibility scan on homepage");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

test("Home page displays correct metadata", async ({ page }) => {
  await page.goto("./");

  console.log("Checking metadata on homepage");

  // Expect page title to be the same as in env variable
  await expect(page).toHaveTitle(process.env.NEXT_PUBLIC_SITE_TITLE || "");
});

test("Home page displays correct headings", async ({ page }) => {
  await page.goto("./");

  console.log("Checking headings on homepage");

  // Expect main heading to be the same as in env variable
  const mainHeading = page.locator("h1").first();
  const subHeading = page.locator("h2").first();
  await expect(mainHeading).toHaveText("Hello! My name is Bill.");
  await expect(subHeading).toHaveText("I'm a front-end web developer.");
});

test("Home page displays About section correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking About section on homepage");

  await page.getByRole("button", { name: "About Me" }).click();
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
});
