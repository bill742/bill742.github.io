"use client";

import { Menu } from "lucide-react";
import { FC, memo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import IconList from "@/components/icon-list";
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
      isHomeSection: true,
      key: 1,
      link: "#about",
      text: "About Me",
    },
    {
      isHomeSection: true,
      key: 2,
      link: "#skills",
      text: "Skills",
    },
    {
      isHomeSection: true,
      key: 3,
      link: "#projects",
      text: "Projects",
    },
    {
      isHomeSection: true,
      key: 4,
      link: "#contact",
      text: "Contact",
    },
    ...(process.env.NEXT_PUBLIC_ALLOW_BLOG === "TRUE"
      ? [
          {
            isHomeSection: false,
            key: 5,
            link: "/blog",
            text: "Blog",
          },
        ]
      : []),
  ];

  const iconSize = "20";
  const iconRole = "img";
  const contactIcons = [
    // {
    //   icon: Mail,
    //   id: 1,
    //   label: "Email",
    //   link: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
    //   role: iconRole,
    //   size: iconSize,
    // },
    {
      icon: FaLinkedin,
      id: 2,
      label: "LinkedIn",
      link: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
      role: iconRole,
      size: iconSize,
    },
    {
      icon: FaGithub,
      id: 3,
      label: "GitHub",
      link: `https://github.com/${process.env.NEXT_PUBLIC_GH_USERNAME}`,
      role: iconRole,
      size: iconSize,
    },
  ];

  return (
    <nav className="flex gap-x-8">
      <IconList
        hasText={false}
        iconInfos={contactIcons}
        className="flex flex-row gap-x-2"
      />

      <ul className="hidden space-x-6 md:flex md:items-center">
        {navItems.map((navItem: headerNavItemType) => (
          <li key={navItem.key}>
            <HeaderNavItem navItem={navItem} />
          </li>
        ))}
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

      <ModeToggle />
    </nav>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
