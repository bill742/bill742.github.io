"use client";

import { FC, memo } from "react";

import { navItems } from "@/data/nav-links";
import { headerNavItemType } from "@/types/types";

import HeaderNavItem from "./header-nav-item";

const HeaderNav: FC = memo(() => {
  // The nav is named so it is distinguishable from the footer's, both to
  // assistive tech and to anything selecting one of the two.
  return (
    <nav aria-label="Main" className="hidden lg:flex">
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
