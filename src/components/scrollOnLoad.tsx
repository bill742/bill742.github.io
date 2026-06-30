"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ScrollOnLoad = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const sectionId = searchParams.get("scrollTo");
    if (!sectionId) return;

    // Strip the ?scrollTo= param from the URL without a client-side
    // navigation, then smooth-scroll to the target section.
    window.history.replaceState(null, "", "/");

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams]);

  return null;
};

ScrollOnLoad.displayName = "ScrollOnLoad";

export default ScrollOnLoad;
