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
import { headerNavItemType } from "@/types/types";

import HeaderNavItem from "./header-nav-item";
import ModeToggle from "./mode-toggle";

const HeaderNav: FC = memo(() => {
  const navItems = [
    {
      isHome: true,
      key: 1,
      link: "#about",
      text: "About Me",
    },
    {
      isHome: true,
      key: 2,
      link: "#skills",
      text: "Skills",
    },
    {
      isHome: true,
      key: 3,
      link: "#projects",
      text: "Projects",
    },
    {
      isHome: true,
      key: 4,
      link: "#contact",
      text: "Contact",
    },
    { isHome: false, key: 5, link: "/blog", text: "Blog" },
  ];

  return (
    <nav className="flex gap-x-2">
      <ul className="hidden space-x-6 md:flex md:items-center">
        {navItems.map((navItem: headerNavItemType) => (
          <li key={navItem.key}>
            <HeaderNavItem navItem={navItem} />
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
              <HeaderNavItem navItem={navItem} />
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
