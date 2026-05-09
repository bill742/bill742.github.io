"use client";

import { Joystick, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, memo, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ModeToggle: FC<{ className?: string }> = memo(({ className }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const getCurrentIcon = () => {
    switch (theme) {
      case "dark":
        return (
          <Moon
            className="text-foreground h-[1.2rem] w-[1.2rem]"
            aria-label="Dark Mode"
          />
        );
      case "eightbit":
        return (
          <Joystick
            className="text-foreground h-[1.2rem] w-[1.2rem]"
            aria-label="8-bit Style"
          />
        );
      default:
        return (
          <Sun
            className="text-foreground h-[1.2rem] w-[1.2rem]"
            aria-label="Light Mode"
          />
        );
    }
  };

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:bg-accent hover:border-primary hover:text-primary rounded-none"
          id="themeToggle"
        >
          {getCurrentIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-card border-border min-w-28 rounded-none p-1"
      >
        {(["light", "dark", "eightbit"] as const).map((t) => (
          <DropdownMenuItem
            key={t}
            onClick={() => setTheme(t)}
            className={`hover:bg-accent cursor-pointer justify-end rounded-none text-xs font-semibold tracking-widest uppercase ${
              theme === t ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {t === "eightbit"
              ? "8-bit"
              : t.charAt(0).toUpperCase() + t.slice(1)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

ModeToggle.displayName = "ModeToggle";

export default ModeToggle;
