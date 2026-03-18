"use client";

export const scrollToSection = (sectionId: string) => {
  const isHomePage = window.location.pathname === "/";

  const section = document.getElementById(sectionId);
  if (section && isHomePage) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    window.location.href = `/?scrollTo=${sectionId}`;
  }
};
