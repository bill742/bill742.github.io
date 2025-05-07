import { FileUser, PhoneCall } from "lucide-react";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";

import { Button } from "../ui/button";

export default function About() {
  return (
    <section className="section" id="about">
      <h3 className="header">
        <FaUser className="text-slate-500" /> About Me
      </h3>
      <p>
        I&apos;m a web developer specializing in front-end development currently
        based in Toronto, Canada. I specialize in creating websites and
        applications using modern JavaScript with React, NextJS and TypeScript.
        I also have experience working with GraphQL to query APIs.
      </p>

      <p>
        Feel free to reach out to me regarding a role in your organization or to
        discuss your next project.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <Button asChild className="w-full bg-slate-500 md:w-1/2">
          <Link href="#contact">
            <PhoneCall />
            Contact Me
          </Link>
        </Button>

        <Button asChild className="w-full bg-slate-500 md:w-1/2">
          <Link
            href="docs/Resume-BillDean.pdf"
            target="_blank"
            className="text-lg font-bold"
          >
            <FileUser /> View my resume
          </Link>
        </Button>
      </div>
    </section>
  );
}
