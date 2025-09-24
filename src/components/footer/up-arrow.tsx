"use client";
import { ArrowUp } from "lucide-react";

import { scrollToSection } from "@/utils/scrollToSection";

import { Button } from "../ui/button";

export default function UpArrow() {
  return (
    <div className="flex justify-end">
      <Button
        asChild
        className="h-10 w-10 rounded-full border-2 p-2"
        aria-label="Back to Top"
      >
        <button
          onClick={() => scrollToSection("top")}
          className="hover:text-accent-foreground transition-colors duration-200"
        >
          <ArrowUp />
        </button>
      </Button>
    </div>
  );
}
