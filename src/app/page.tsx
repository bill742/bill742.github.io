import type { Metadata } from "next";

import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Portfolio from "@/components/Sections/Portfolio";
import Skills from "@/components/Sections/Skills";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description:
    "Hello World! My name is Bill Dean and I'm a web developer based in Toronto, Canada. I specialize in HTML5, CSS3, JavaScript, and WordPress.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_BASE_URL}`),
  title: `${process.env.SITE_TITLE}`,
};

export default function Home() {
  const portfolio = process.env.NEXT_PUBLIC_ALLOW_PORTFOLIO;

  return (
    <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
      <About />
      <Skills />
      {portfolio && <Portfolio />}
      <Contact />
    </main>
  );
}
