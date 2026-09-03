import type { Metadata } from "next";
import { Suspense } from "react";

import About from "@/components/homeSections/about";
import Contact from "@/components/homeSections/contact";
import Intro from "@/components/homeSections/intro";
import Portfolio from "@/components/homeSections/projects";
import Skills from "@/components/homeSections/skills";
import { JsonLd } from "@/components/JsonLd";
import ScrollOnLoad from "@/components/scrollOnLoad";
import { homeGraph } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  },
  description:
    "I'm a web developer based in Toronto, Canada. I specialize in building websites and applications using modern JavaScript with React, NextJS and TypeScript.",
};

export default function Home() {
  return (
    <div className="row-start-2 mt-16 flex flex-col items-center gap-20 sm:items-start">
      <JsonLd schema={homeGraph} />
      <Suspense>
        <ScrollOnLoad />
      </Suspense>
      <Intro />
      <About />
      {process.env.NEXT_PUBLIC_DISPLAY_PORTFOLIO === "TRUE" && <Portfolio />}
      <Skills />
      <Contact />
    </div>
  );
}
