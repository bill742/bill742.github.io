"use client";

import { Menu } from "lucide-react";
import { FC, memo } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { scrollToSection } from "@/utils/scrollToSection";

import ModeToggle from "./mode-toggle";

const HeaderNav: FC = memo(() => {
  const navItems = [
    {
      key: 1,
      link: "#about",
      text: "About Me",
    },
    {
      key: 2,
      link: "#skills",
      text: "Skills",
    },
    {
      key: 3,
      link: "#projects",
      text: "Projects",
    },
    {
      key: 4,
      link: "#contact",
      text: "Contact",
    },
  ];

  return (
    <nav className="flex gap-x-2">
      <ul className="hidden space-x-6 md:flex md:items-center">
        {navItems.map((navItem) => (
          <li key={navItem.key}>
            <button
              onClick={() => scrollToSection(navItem.link.substring(1))}
              className="group text-foreground hover:text-primary gradient-text relative font-semibold lowercase transition-colors duration-200"
            >
              {navItem.text}
              <div className="bg-primary absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></div>
            </button>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>

      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            className="border-border hover:bg-accent"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-card border-border md:hidden"
        >
          {navItems.map((navItem) => (
            <DropdownMenuItem
              key={navItem.key}
              className="hover:bg-accent justify-end"
            >
              <button
                onClick={() => scrollToSection(navItem.link.substring(1))}
                className="group text-foreground hover:text-primary gradient-text relative font-semibold lowercase transition-colors duration-200"
              >
                {navItem.text}
                <div className="bg-primary absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full"></div>
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle className="md:hidden" />
    </nav>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
