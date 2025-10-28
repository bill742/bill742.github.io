"use client";

import { useRef } from "react";

export const scrollToSection = (sectionId: string) => {
  const sectionRef = useRef(null);

  const isHome = window.location.pathname === "/";

  const section = document.getElementById(sectionId);
  if (section && isHome) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.href = `/#${sectionId}`;
  }
};
