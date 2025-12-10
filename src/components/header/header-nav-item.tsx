import { FC } from "react";

import { headerNavItemType } from "@/types/types";
import { scrollToSection } from "@/utils/scrollToSection";

const HeaderNavItem: FC<{ navItem: headerNavItemType }> = ({ navItem }) => {
  const item = navItem.isHomeSection ? (
    <button
      onClick={() => scrollToSection(navItem.link.substring(1))}
      className="group text-foreground hover:text-primary gradient-text relative font-semibold lowercase transition-colors duration-200"
    >
      {navItem.text}
      <div className="bg-primary invisible absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full md:visible"></div>
    </button>
  ) : (
    <a
      href={navItem.link}
      className="group text-foreground hover:text-primary gradient-text relative font-semibold lowercase transition-colors duration-200"
    >
      {navItem.text}
      <div className="bg-primary invisible absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full md:visible"></div>
    </a>
  );

  return item;
};

HeaderNavItem.displayName = "HeaderNavItem";

export default HeaderNavItem;
