import type { Metadata } from "next";
import Link from "next/link";

import Experience from "@/components/resumeSections/experience";
import Overview from "@/components/resumeSections/overview";
import Sidebar from "@/components/resumeSections/sidebar";
import Skills from "@/components/resumeSections/skills";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://billdean.me/resume",
  },
  description:
    "View my resume for more details about my experience and skills.",
  title: "Resume",
};

export default function Resume() {
  return (
    <>
      <div className="mx-auto my-6 flex w-1/2 justify-center rounded-xl bg-red-700 py-4 font-bold">
        <Link href="docs/Resume-BillDean.pdf">Download a PDF version</Link>
      </div>

      <div className="mt-16 flex flex-col-reverse gap-8 md:flex-row">
        <div className="flex flex-col gap-6">
          <Overview />
          <Experience />
          <Skills />
        </div>

        <Sidebar />
      </div>
    </>
  );
}
