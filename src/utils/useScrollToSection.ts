"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

/**
 * Scrolls to a section on the homepage. When called from another route the
 * section isn't on the page, so this hands off to the homepage with the target
 * in the query string and ScrollOnLoad finishes the scroll there.
 */
export function useScrollToSection() {
  const router = useRouter();

  return useCallback(
    (sectionId: string) => {
      const isHomePage = window.location.pathname === "/";
      const section = document.getElementById(sectionId);

      if (section && isHomePage) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        router.push(`/?scrollTo=${sectionId}`);
      }
    },
    [router]
  );
}
