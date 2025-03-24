import { FileUser } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import Experience from "@/components/resumeSections/experience";
import Overview from "@/components/resumeSections/overview";
import Sidebar from "@/components/resumeSections/sidebar";
import Skills from "@/components/resumeSections/skills";
import { Button } from "@/components/ui/button";

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
      <Button
        variant={"outline"}
        asChild
        className="mx-auto my-6 flex justify-center font-bold md:mt-16 md:w-1/2"
      >
        <Link href="docs/Resume-BillDean.pdf" className="text-lg">
          <FileUser /> Download a PDF version
        </Link>
      </Button>

      <div className="flex flex-col-reverse gap-8 md:mt-16 md:flex-row">
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
