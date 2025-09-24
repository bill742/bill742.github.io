"use client";

import { FileUser, PhoneCall } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scrollToSection";

export default function ContactLink() {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Button asChild className="button-primary w-full py-6 md:w-1/2">
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-accent-foreground transition-colors duration-200"
        >
          <PhoneCall />
          Contact Me
        </button>
      </Button>

      <Button asChild className="button-primary w-full py-6 md:w-1/2">
        <Link
          href="docs/Bill-Dean-Web-Developer.pdf"
          target="_blank"
          className="hover:text-accent-foreground text-lg font-bold"
        >
          <FileUser /> View my resume
        </Link>
      </Button>
    </div>
  );
}
