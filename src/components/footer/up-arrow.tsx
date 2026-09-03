"use client";
import { ArrowUp } from "lucide-react";

import { Button } from "../ui/button";

const UpArrow = () => {
  return (
    <div className="flex justify-end">
      <Button
        className="hover:text-accent-foreground h-10 w-10 rounded-full border-2 p-2 transition-colors duration-200 [&_svg]:size-6"
        aria-label="Back to Top"
        onClick={() => window.scrollTo({ behavior: "smooth", left: 0, top: 0 })}
      >
        <ArrowUp />
      </Button>
    </div>
  );
};

UpArrow.displayName = "UpArrow";

export default UpArrow;
