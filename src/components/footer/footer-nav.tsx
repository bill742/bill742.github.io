"use client";

import { FC, memo } from "react";

import HeaderNavItem from "@/components/header/header-nav-item";
import { footerNavItems } from "@/data/nav-links";
import { headerNavItemType } from "@/types/types";

const FooterNav: FC = memo(() => {
  return (
    <nav aria-label="Footer links">
      <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
        {footerNavItems.map((navItem: headerNavItemType) => (
          <li key={navItem.key}>
            <HeaderNavItem navItem={navItem} />
          </li>
        ))}
      </ul>
    </nav>
  );
});

FooterNav.displayName = "FooterNav";

export default FooterNav;
