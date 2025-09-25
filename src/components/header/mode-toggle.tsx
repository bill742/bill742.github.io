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
        return <Moon className="text-foreground h-[1.2rem] w-[1.2rem]" />;
      case "eightbit":
        return <Joystick className="text-foreground h-[1.2rem] w-[1.2rem]" />;
      default:
        return <Sun className="text-foreground h-[1.2rem] w-[1.2rem]" />;
    }
  };

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={className}>
        <Button
          variant="outline"
          size="icon"
          className="border-border hover:bg-accent hover:border-primary/30"
        >
          {getCurrentIcon()}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border-border">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-accent cursor-pointer justify-end"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-accent cursor-pointer justify-end"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("eightbit")}
          className="hover:bg-accent cursor-pointer justify-end"
        >
          8-bit Style
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

ModeToggle.displayName = "ModeToggle";

export default ModeToggle;
