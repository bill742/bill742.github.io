import type { Metadata } from "next";

import Experience from "@/components/Resume/Experience";
import Overview from "@/components/Resume/Overview";
import Sidebar from "@/components/Resume/Sidebar";
import Skills from "@/components/Resume/Skills";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://billdean.me/resume",
  },
  description:
    "View mmore details about my experience and skills on my resume.",
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="mt-16 flex flex-col-reverse gap-8 md:flex-row">
      <div className="flex flex-col gap-6">
        <Overview />
        <Experience />
        <Skills />
      </div>

      <Sidebar />
    </div>
  );
}
