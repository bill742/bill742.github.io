"use client";

import { FC, memo } from "react";

import IconList from "@/components/icon-list";
import { headerNavItemType } from "@/types/types";

import HeaderNavItem from "./header-nav-item";
import ModeToggle from "./mode-toggle";
import { contactIcons, navItems } from "./nav-links";

const HeaderNav: FC = memo(() => {
  return (
    <nav className="flex items-center gap-x-8">
      <ul className="hidden space-x-6 lg:flex lg:items-center">
        {navItems.map((navItem: headerNavItemType) => (
          <li key={navItem.key}>
            <HeaderNavItem navItem={navItem} />
          </li>
        ))}
      </ul>

      <IconList
        hasText={false}
        iconInfos={contactIcons}
        className="hidden flex-row gap-x-2 lg:flex"
      />

      <ModeToggle className="hidden lg:flex" />
    </nav>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
