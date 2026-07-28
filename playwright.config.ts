import { defineConfig, devices } from "@playwright/test";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from "dotenv";
dotenv.config({
  path: [".env", "github-pages"],
});
console.log("Loaded environment variables.");

require("dotenv").config();

/**
 * The suite runs against a real build of the working tree, served as static
 * files — the same artifact GitHub Pages hosts.
 *
 * The port deliberately avoids 3000. A dev server for another project sitting
 * on 3000 used to be picked up as the test target, which silently ran the
 * whole suite against the wrong site. `reuseExistingServer` is off for the
 * same reason: a stray listener should surface as a bind error, not as a
 * confusing wall of assertion failures. Override with PLAYWRIGHT_PORT.
 */
const port = Number(process.env.PLAYWRIGHT_PORT ?? 3100);
const baseURL = `http://localhost:${port}`;

/**
 * Canonical/OG URLs are baked in at build time and asserted by the metadata
 * test, so the build and the assertions have to be given the same value.
 * This intentionally overrides NEXT_PUBLIC_SITE_URL from .env (and from the
 * workflow, where it points at the production domain) — tests describe the
 * build under test, not the deployed site.
 */
process.env.NEXT_PUBLIC_SITE_URL = baseURL;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [["github"], ["html", { open: "never" }]]
    : "html",

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  testDir: "./tests",
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Build the site and serve the static export for the duration of the run. */
  webServer: {
    command: `pnpm build && pnpm exec serve out --listen ${port} --no-clipboard`,
    env: { ...process.env, NEXT_PUBLIC_SITE_URL: baseURL } as Record<
      string,
      string
    >,
    reuseExistingServer: false,
    stderr: "pipe",
    stdout: "pipe",
    // A cold `next build` dominates this; the serve step is near-instant.
    timeout: 180_000,
    url: baseURL,
  },

  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
});
