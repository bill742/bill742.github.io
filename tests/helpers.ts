import { type Page } from "@playwright/test";

/**
 * The header's nav. The footer repeats the same links, so anything driving
 * navigation has to say which of the two it means.
 */
export const mainNav = (page: Page) =>
  page.getByRole("navigation", { name: "Main" });

/** The footer's link row. */
export const footerNav = (page: Page) =>
  page.getByRole("navigation", { name: "Footer links" });
