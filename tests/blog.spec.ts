/* eslint-disable no-console */
import { expect, test } from "@playwright/test";

import { getPost } from "@/lib/posts";

import { expectNoViolationsInAnyTheme } from "./helpers";

const siteTitle = process.env.NEXT_PUBLIC_SITE_TITLE || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

// Asserting against the post data rather than a copy of it: the point is that
// the post page reports its own metadata, which stays true when the copy is
// edited. The index's description is a separate literal in blog/page.tsx, so a
// regression to the old shared metadata still fails these.
const welcome = getPost("welcome");
if (!welcome) {
  throw new Error(
    "Expected a post with the slug 'welcome' in src/lib/posts.ts"
  );
}

test.describe("Blog pages do not have accessibility issues", () => {
  test.use({ contextOptions: { reducedMotion: "reduce" } });

  test("Blog index should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./blog");

    console.log("Running accessibility scan on blog index");

    await expectNoViolationsInAnyTheme(page);
  });

  test("Blog post should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("./blog/welcome");

    console.log("Running accessibility scan on blog post");

    await expectNoViolationsInAnyTheme(page);
  });
});

test("Blog index displays correct metadata", async ({ page }) => {
  await page.goto("./blog");

  console.log("Checking metadata on blog index");

  await expect(page).toHaveTitle(`Blog | ${siteTitle}`);

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "Blog posts about tech and my experience as a developer."
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteUrl}/blog`
  );
});

test("Blog index lists every published post", async ({ page }) => {
  await page.goto("./blog");

  console.log("Checking post list on blog index");

  await expect(
    page.getByRole("heading", { level: 1, name: /blog/i })
  ).toBeVisible();

  const postLinks = page.locator("main ul li a[href^='/blog/']");
  await expect(postLinks).toHaveCount(2);
  await expect(
    page.getByRole("link", { name: "Welcome to the Blog" })
  ).toHaveAttribute("href", "/blog/welcome");
  await expect(page.getByRole("link", { name: "Second Post" })).toHaveAttribute(
    "href",
    "/blog/second-post"
  );
});

/**
 * The post page used to export a static metadata object copied from the index,
 * so every post claimed the index's title, description and canonical URL.
 */
test("Blog post displays metadata specific to the post", async ({ page }) => {
  await page.goto("./blog/welcome");

  console.log("Checking metadata on blog post");

  await expect(page).toHaveTitle(`${welcome.title} | ${siteTitle}`);

  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    welcome.summary
  );

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${siteUrl}/blog/${welcome.slug}`
  );

  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
    "content",
    "article"
  );

  await expect(
    page.locator('meta[property="article:published_time"]')
  ).toHaveAttribute("content", welcome.date);
});

test("Blog post is reachable from the index", async ({ page }) => {
  await page.goto("./blog");

  console.log("Navigating from the blog index to a post");

  await page.getByRole("link", { name: welcome.title }).click();
  await page.waitForURL(new RegExp(`/blog/${welcome.slug}$`));
  await expect(
    page.getByRole("heading", { level: 1, name: welcome.title })
  ).toBeVisible();
});
