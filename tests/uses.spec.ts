/* eslint-disable no-console */
import { expect, test } from "@playwright/test";

import { expectNoViolationsInAnyTheme, footerNav } from "./helpers";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

const groupHeadings = [
  /hardware & desk/i,
  /editor, terminal & cli/i,
  /browser & extensions/i,
  /everyday apps/i,
];

test.describe("Uses page does not have accessibility issues", () => {
  test.use({ contextOptions: { reducedMotion: "reduce" } });

  test("Should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./uses");

    console.log("Running accessibility scan on uses page");

    await expectNoViolationsInAnyTheme(page);
  });
});

test("Uses page displays correct metadata", async ({ page }) => {
  await page.goto("./uses");

  console.log("Checking metadata on uses page");

  await expect(page).toHaveTitle(`Uses | ${siteTitle}`);

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "The hardware, software and tools I use day to day as a front-end developer."
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteUrl}/uses`
  );
});

test("Uses page lists every group of tools", async ({ page }) => {
  await page.goto("./uses");

  console.log("Checking tool groups on uses page");

  await expect(
    page.getByRole("heading", { level: 1, name: /uses/i })
  ).toBeVisible();

  for (const heading of groupHeadings) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading })
    ).toBeVisible();
  }

  // Every entry is a term paired with a description.
  const terms = page.locator("main dl dt");
  await expect(terms.first()).toBeVisible();
  expect(await terms.count()).toBe(await page.locator("main dl dd").count());
});

test("Uses page is reachable from the footer", async ({ page }) => {
  await page.goto("./");

  console.log("Navigating to the uses page from the footer");

  await footerNav(page).getByRole("link", { name: "Uses" }).click();
  await page.waitForURL(/\/uses$/);
  await expect(
    page.getByRole("heading", { level: 1, name: /uses/i })
  ).toBeVisible();
});

/**
 * Back to Top used to scroll to the element with id "top", which only exists on
 * the homepage, so pressing it anywhere else navigated away instead of
 * scrolling up.
 */
test("Back to Top scrolls the current page without navigating away", async ({
  page,
}) => {
  await page.goto("./uses");

  console.log("Checking Back to Top on the uses page");

  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(0);

  await page.getByRole("button", { name: "Back to Top" }).click();

  await expect
    .poll(() => page.evaluate(() => window.scrollY), { timeout: 10_000 })
    .toBe(0);
  expect(new URL(page.url()).pathname).toBe("/uses");
});

/**
 * The footer's section links point at homepage sections. Off the homepage they
 * hand off to it with ?scrollTo=, and ScrollOnLoad finishes the scroll there.
 */
test("Footer section links return to the homepage and scroll to the section", async ({
  page,
}) => {
  await page.goto("./uses");

  console.log("Following a footer section link away from the uses page");

  await footerNav(page).getByRole("button", { name: "Contact" }).click();

  await page.waitForURL((url) => url.pathname === "/");
  await expect(page.getByRole("heading", { name: "Contact" })).toBeVisible();

  await expect
    .poll(
      () =>
        page.evaluate(() => {
          const section = document.getElementById("contact");
          if (!section) return null;
          const { top } = section.getBoundingClientRect();
          return top > -100 && top < window.innerHeight * 0.6;
        }),
      { timeout: 10_000 }
    )
    .toBe(true);
});
