import type { Metadata } from "next";

import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Portfolio from "@/components/Sections/Portfolio";
import Skills from "@/components/Sections/Skills";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/`,
  },
  description:
    "I'm a front-end web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript.",
  title: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
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
