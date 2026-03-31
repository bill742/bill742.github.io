/* eslint-disable no-console */
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Homepage does not have accessibility issues", () => {
  test("Should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./");

    console.log("Running accessibility scan on homepage");

    // Test light mode
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);

    // Test dark mode
    const themeToggle = page.locator("#themeToggle");
    await themeToggle.first().click();
    console.log("Switching to Dark mode for accessibility testing");
    await page.getByRole("menuitem", { name: "Dark" }).click();
    // Wait for the dropdown to fully close and the dark theme to apply before
    // scanning — Radix sets aria-hidden on the page body while the dropdown is
    // open/animating, which causes spurious axe failures.
    await page.waitForSelector("html.dark");
    await page.waitForSelector("[data-radix-popper-content-wrapper]", {
      state: "detached",
    });
    const darkModeAccessibilityScanResults = await new AxeBuilder({
      page,
    }).analyze();
    expect(darkModeAccessibilityScanResults.violations).toEqual([]);

    // Test 8-bit mode
    await themeToggle.first().click();
    await page.getByRole("menuitem", { name: "8-bit Style" }).click();
    // Wait for the dropdown to fully close and the eightbit theme to apply before
    // scanning — Radix sets aria-hidden on the page body while the dropdown is
    // open/animating, which causes spurious axe failures.
    await page.waitForSelector("html.eightbit");
    await page.waitForSelector("[data-radix-popper-content-wrapper]", {
      state: "detached",
    });
    console.log("Switched to 8-bit mode for accessibility testing");
    const eightBitModeAccessibilityScanResults = await new AxeBuilder({
      page,
    }).analyze();
    expect(eightBitModeAccessibilityScanResults.violations).toEqual([]);
  });
});

test("Home page displays correct metadata", async ({ page }) => {
  await page.goto("./");

  console.log("Checking metadata on homepage");

  // Expect page title to be the same as in env variable
  await expect(page).toHaveTitle(process.env.NEXT_PUBLIC_SITE_TITLE || "");

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "I'm a front-end web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript."
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    process.env.NEXT_PUBLIC_SITE_URL || ""
  );
});

test("Intro section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking headings on homepage");

  const mainHeading = page.locator("h1").first();
  const subHeading = page.locator("h2").first();
  await expect(mainHeading).toHaveText("Hello! My name is Bill.");
  await expect(subHeading).toHaveText("I'm a front-end web developer.");
});

test("About section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking About section on homepage");

  await page.getByRole("button", { name: "About Me" }).click();
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
});

test("Skills section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking Skills section on homepage");

  await page.getByRole("button", { name: "Skills" }).click();
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  await expect(page.locator("#skills").getByRole("listitem")).toHaveCount(16);
});

test("Projects section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking Projects section on homepage");

  await page.getByRole("button", { name: "Projects" }).click();
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
  // Add more checks for projects section as more projects are added
});

test("Contact form displays correctly, accepts input, and displays successful confirmation message", async ({
  page,
}) => {
  await page.goto("./");

  console.log("Checking contact form on homepage");

  // Mock the form submission API endpoint
  await page.route("**/api/contact", async (route) => {
    await route.fulfill({
      body: JSON.stringify({
        message: "Message sent successfully",
        success: true,
      }),
      contentType: "application/json",
      status: 200,
    });
  });

  // Navigate to Contact section
  await page
    .getByRole("navigation")
    .getByRole("button", { name: "Contact" })
    .click();
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

  // Check form elements are visible
  await expect(page.getByLabel("Email:")).toBeVisible();
  await expect(page.getByLabel("Message:")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send Message" })
  ).toBeVisible();

  // Fill out the form
  await page.getByLabel("Email:").fill("test@example.com");
  await page.getByLabel("Message:").fill("This is a test message");

  // Verify the inputs contain the correct values
  await expect(page.getByLabel("Email:")).toHaveValue("test@example.com");
  await expect(page.getByLabel("Message:")).toHaveValue(
    "This is a test message"
  );

  await page.getByRole("button", { name: "Send Message" }).click();

  await expect(page.getByText("Thanks for your submission!")).toBeVisible();
});
