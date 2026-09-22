/* eslint-disable no-console */
import { expect, test } from "@playwright/test";

import { expectNoViolationsInAnyTheme, footerNav } from "./helpers";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

/** The headings the NextStarter study is built from, in the order they render. */
const studyHeadings = [
  /what shipped/i,
  /why build another starter/i,
  /accessibility as a tested guarantee/i,
  /optional by environment/i,
  /two tiers, one codebase/i,
  /internationalization, including right-to-left/i,
  /making the product findable/i,
  /what i took away/i,
];

test.describe("Case study pages do not have accessibility issues", () => {
  test.use({ contextOptions: { reducedMotion: "reduce" } });

  test("The index has no automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./projects");

    console.log("Running accessibility scan on the case study index");

    await expectNoViolationsInAnyTheme(page);
  });

  test("A case study has no automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./projects/nextstarter");

    console.log("Running accessibility scan on the NextStarter case study");

    await expectNoViolationsInAnyTheme(page);
  });
});

test("Case study index displays correct metadata", async ({ page }) => {
  await page.goto("./projects");

  console.log("Checking metadata on the case study index");

  await expect(page).toHaveTitle(`Case Studies | ${siteTitle}`);

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Long-form write-ups of the projects I've built — what the constraints were, the decisions I made, and what I'd carry into the next one."
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteUrl}/projects`
  );
});

test("NextStarter case study displays correct metadata", async ({ page }) => {
  await page.goto("./projects/nextstarter");

  console.log("Checking metadata on the NextStarter case study");

  await expect(page).toHaveTitle(`NextStarter — Case Study | ${siteTitle}`);

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteUrl}/projects/nextstarter`
  );

  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "article"
  );
});

test("NextStarter case study renders every section", async ({ page }) => {
  await page.goto("./projects/nextstarter");

  console.log("Checking the sections of the NextStarter case study");

  await expect(
    page.getByRole("heading", { level: 1, name: "NextStarter" })
  ).toBeVisible();

  for (const heading of studyHeadings) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading })
    ).toBeVisible();
  }

  // The at-a-glance panel pairs every label with a value.
  const facts = page.locator("main dl dt");
  await expect(facts.first()).toBeVisible();
  expect(await facts.count()).toBe(await page.locator("main dl dd").count());
});

/**
 * The write-up is the point of the page, so its structured data has to name the
 * project it's about rather than describing the site in general terms.
 */
test("NextStarter case study emits case study structured data", async ({
  page,
}) => {
  await page.goto("./projects/nextstarter");

  console.log("Checking JSON-LD on the NextStarter case study");

  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();

  const graphs = blocks.map((block) => JSON.parse(block));
  const nodes = graphs.flatMap((graph) => graph["@graph"] ?? []);

  const article = nodes.find((node) => node["@type"] === "Article");
  expect(article?.headline).toBe("NextStarter — Case Study");

  const project = nodes.find((node) => node["@type"] === "SoftwareSourceCode");
  expect(project?.name).toBe("NextStarter");
  expect(article?.about["@id"]).toBe(project?.["@id"]);
});

test("Case study is reachable from the project card on the homepage", async ({
  page,
}) => {
  await page.goto("./");

  console.log("Navigating to the case study from the homepage project card");

  await page.getByRole("link", { name: /NextStarter case study/i }).click();
  await page.waitForURL(/\/projects\/nextstarter$/);

  await expect(
    page.getByRole("heading", { level: 1, name: "NextStarter" })
  ).toBeVisible();
});

test("Case study index is reachable from the footer and links to a study", async ({
  page,
}) => {
  await page.goto("./");

  console.log("Navigating to the case study index from the footer");

  await footerNav(page).getByRole("link", { name: "Case Studies" }).click();
  await page.waitForURL(/\/projects$/);

  await expect(
    page.getByRole("heading", { level: 1, name: /case studies/i })
  ).toBeVisible();

  await page.getByRole("link", { name: "NextStarter" }).click();
  await page.waitForURL(/\/projects\/nextstarter$/);
});

test("Case study links back to the index", async ({ page }) => {
  await page.goto("./projects/nextstarter");

  console.log("Following the back link on the NextStarter case study");

  await page.getByRole("link", { name: "All case studies" }).click();
  await page.waitForURL(/\/projects$/);

  await expect(
    page.getByRole("heading", { level: 1, name: /case studies/i })
  ).toBeVisible();
});
