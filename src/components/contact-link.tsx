"use client";

import { Button } from "@/components/ui/button";
import { useScrollToSection } from "@/utils/useScrollToSection";

const ContactLink = ({ showResume }: { showResume: boolean }) => {
  const scrollToSection = useScrollToSection();

  return (
    <div className="animate-fade-up animate-delay-3 flex flex-row gap-3 pt-2 opacity-0">
      <Button asChild className="button-primary py-6">
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="hover:text-accent-foreground transition-colors duration-200"
        >
          Contact Me
        </button>
      </Button>

      {showResume && (
        <Button asChild className="button-primary py-6">
          {/* A plain anchor, not next/link: the PDF is a static asset, and
              the router would prefetch it as if it were a route, which 404s
              on the RSC payloads it looks for. */}
          <a
            href="/docs/Resume-Bill-Dean.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-foreground text-lg font-bold"
          >
            View resume
          </a>
        </Button>
      )}
    </div>
  );
};

ContactLink.displayName = "ContactLink";

export default ContactLink;
