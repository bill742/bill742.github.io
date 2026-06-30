"use client";
import { ArrowUp } from "lucide-react";

import { scrollToSection } from "@/utils/scrollToSection";

import { Button } from "../ui/button";

const UpArrow = () => {
  return (
    <div className="flex justify-end">
      <Button
        asChild
        className="hover:text-accent-foreground h-10 w-10 rounded-full border-2 p-2 transition-colors duration-200"
        aria-label="Back to Top"
        onClick={() => scrollToSection("top")}
      >
        <ArrowUp />
      </Button>
    </div>
  );
};

UpArrow.displayName = "UpArrow";

export default UpArrow;
