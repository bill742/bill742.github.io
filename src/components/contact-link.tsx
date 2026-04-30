"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/scrollToSection";

const ContactLink = ({ showResume }: { showResume: boolean }) => {
  return (
    <div className="animate-fade-up animate-delay-3 flex flex-col gap-3 pt-2 opacity-0 md:flex-row">
      <Button asChild className="button-primary py-6">
        <button
          onClick={() => scrollToSection("contact")}
          className="hover:text-accent-foreground transition-colors duration-200"
        >
          Contact Me
        </button>
      </Button>

      {showResume && (
        <Button asChild className="button-primary py-6">
          <Link
            href="docs/Bill-Dean-Web-Developer.pdf"
            target="_blank"
            className="hover:text-accent-foreground text-lg font-bold"
          >
            View resume
          </Link>
        </Button>
      )}
    </div>
  );
};

ContactLink.displayName = "ContactLink";

export default ContactLink;
