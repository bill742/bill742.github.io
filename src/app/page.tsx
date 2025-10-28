import type { Metadata } from "next";

import About from "@/components/homeSections/about";
import Contact from "@/components/homeSections/contact";
import Intro from "@/components/homeSections/intro";
import Portfolio from "@/components/homeSections/portfolio";
import Skills from "@/components/homeSections/skills";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  description:
    "I'm a front-end web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript.",
};

export default function Home() {
  return (
    <div className="row-start-2 mt-16 flex flex-col items-center gap-20 sm:items-start">
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}
