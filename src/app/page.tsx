import type { Metadata } from "next";

import About from "@/components/homeSections/about";
import Contact from "@/components/homeSections/contact";
import Portfolio from "@/components/homeSections/portfolio";
import Skills from "@/components/homeSections/skills";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://billdean.me/",
  },
  description:
    "I'm a front-end web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript.",
};

export default function Home() {
  const portfolio = process.env.NEXT_PUBLIC_ALLOW_PORTFOLIO;

  return (
    <main className="row-start-2 mb-16 mt-16 flex flex-col items-center gap-20 sm:items-start">
      <About />
      <Skills />
      {portfolio && <Portfolio />}
      <Contact />
    </main>
  );
}
