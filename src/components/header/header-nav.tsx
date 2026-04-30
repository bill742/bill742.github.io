"use client";

import { FC, memo } from "react";

import { headerNavItemType } from "@/types/types";

import HeaderNavItem from "./header-nav-item";
import { navItems } from "./nav-links";

const HeaderNav: FC = memo(() => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex items-center gap-x-8">
        {navItems.map((navItem: headerNavItemType) => (
          <li key={navItem.key}>
            <HeaderNavItem navItem={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
});

HeaderNav.displayName = "HeaderNav";

export default HeaderNav;
