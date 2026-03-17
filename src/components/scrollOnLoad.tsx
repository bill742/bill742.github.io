"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ScrollOnLoad = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const sectionId = searchParams.get("scrollTo");
    if (!sectionId) return;

    router.replace("/", { scroll: false });

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams, router]);

  return null;
};

ScrollOnLoad.displayName = "ScrollOnLoad";

export default ScrollOnLoad;
