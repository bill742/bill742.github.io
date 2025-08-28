"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { FC, memo } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
      link: "#portfolio",
      text: "Portfolio",
    },
    {
      key: 4,
      link: "#contact",
      text: "Contact",
    },
  ];

  return (
    <nav className="space-x-6">
      <ul className="hidden space-x-6 md:flex md:items-center">
        {navItems.map((navItem) => (
          <li key={navItem.key}>
            <Link
              href={navItem.link}
              className="group font-semibold lowercase text-foreground hover:text-primary transition-colors duration-200 relative"
            >
              {navItem.text}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
      </ul>

      <ModeToggle className="md:hidden" />
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon" className="border-border hover:bg-accent">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="md:hidden bg-card border-border">
          {navItems.map((navItem) => (
            <DropdownMenuItem key={navItem.key} className="justify-end hover:bg-accent">
              <Link
                href={navItem.link}
                className="font-semibold lowercase text-foreground hover:text-primary transition-colors duration-200"
              >
                {navItem.text}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
