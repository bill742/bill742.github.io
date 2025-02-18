import type { Metadata } from "next";

import Experience from "@/components/Resume/Experience";
import Overview from "@/components/Resume/Overview";
import Sidebar from "@/components/Resume/Sidebar";
import Skills from "@/components/Resume/Skills";

export const metadata: Metadata = {
  alternates: {
    canonical: "/resume",
  },
  description: "View my resume.",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_BASE_URL}`),
  title: `Resume - ${process.env.SITE_TITLE}`,
};

export default function Resume() {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row">
      <div className="flex flex-col gap-6">
        <Overview />
        <Experience />
        <Skills />
      </div>

      <Sidebar />
    </div>
  );
}
