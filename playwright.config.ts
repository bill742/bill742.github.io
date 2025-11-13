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
console.log(process.env.NEXT_PUBLIC_SITE_URL);

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

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

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
  reporter: "html",

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  testDir: "./tests",
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.NEXT_PUBLIC_SITE_URL,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: "on-first-retry",
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Opt out of parallel tests on CI. */
  // workers: process.env.CI ? 1 : undefined,
});
