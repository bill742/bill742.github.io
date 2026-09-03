/* eslint-disable no-console */
import { expect, test } from "@playwright/test";

import { expectNoViolationsInAnyTheme, mainNav } from "./helpers";

test.describe("Homepage does not have accessibility issues", () => {
  // The fade-up entrance animations mean axe can sample a half-faded element
  // and report a spurious colour-contrast failure against the blended pixels.
  // Reduced motion pins everything to its final state before the scan.
  test.use({ contextOptions: { reducedMotion: "reduce" } });

  test("Should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./");

    console.log("Running accessibility scan on homepage");

    await expectNoViolationsInAnyTheme(page);
  });
});

test("Home page displays correct metadata", async ({ page }) => {
  await page.goto("./");

  console.log("Checking metadata on homepage");

  // Expect page title to be the same as in env variable
  await expect(page).toHaveTitle(process.env.NEXT_PUBLIC_SITE_TITLE || "");

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "I'm a web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript."
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
  await expect(mainHeading).toHaveText(
    "Hello! My name is Bill. A web developer based in Toronto."
  );
  await expect(subHeading).toHaveText(
    "I specialize in building modern, responsive websites and applications using React, Next.js, and TypeScript."
  );
});

test("About section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking About section on homepage");

  await mainNav(page).getByRole("button", { name: "About Me" }).click();
  await expect(page.getByRole("heading", { name: "About Me" })).toBeVisible();
});

test("Skills section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking Skills section on homepage");

  await mainNav(page).getByRole("button", { name: "Skills" }).click();
  await expect(page.getByRole("heading", { name: "Skills" })).toBeVisible();
  await expect(page.locator("#skills span.skill-tag")).toHaveCount(22);
});

test("Projects section displays correctly", async ({ page }) => {
  await page.goto("./");

  console.log("Checking Projects section on homepage");

  await mainNav(page).getByRole("button", { name: "Projects" }).click();
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
  await mainNav(page).getByRole("button", { name: "Contact" }).click();
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

  const contactSection = page.locator("[id='contact']");
  // Check form elements are visible
  await expect(contactSection.getByLabel("Email")).toBeVisible();
  await expect(contactSection.getByLabel("Message")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Send Message" })
  ).toBeVisible();

  // Fill out the form
  await contactSection.getByLabel("Email").fill("test@example.com");
  await contactSection.getByLabel("Message").fill("This is a test message");

  // Verify the inputs contain the correct values
  await expect(contactSection.getByLabel("Email")).toHaveValue(
    "test@example.com"
  );
  await expect(contactSection.getByLabel("Message")).toHaveValue(
    "This is a test message"
  );

  await contactSection.getByRole("button", { name: "Send Message" }).click();

  await expect(
    contactSection.getByText("Message sent. I'll be in touch soon!")
  ).toBeVisible();
});
