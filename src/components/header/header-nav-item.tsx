import { FC } from "react";

import { headerNavItemType } from "@/types/types";
import { scrollToSection } from "@/utils/scrollToSection";
import { useActiveSection } from "@/utils/useActiveSection";

const HeaderNavItem: FC<{
  navItem: headerNavItemType;
  onClose?: () => void;
  mobile?: boolean;
}> = ({ navItem, onClose, mobile = false }) => {
  const active = useActiveSection(["about", "projects", "skills", "contact"]);
  const isActive = active === navItem.link.replace("#", "");

  console.log(active);
  console.log(isActive);

  const baseClass = mobile
    ? // Mobile: larger text, right-aligned, full-width tap target
      `block w-full py-3 text-right text-base font-semibold uppercase tracking-widest transition-colors duration-200 border-b border-border last:border-0 ${
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
      }`
    : // Desktop: compact, uppercase, letter-spaced
      `text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
      }`;

  if (navItem.isHomeSection) {
    return (
      <button
        onClick={() => {
          scrollToSection(navItem.link.substring(1));
          onClose?.();
        }}
        className={baseClass}
      >
        {navItem.text}
      </button>
    );
  }

  return (
    <a href={navItem.link} className={baseClass} onClick={() => onClose?.()}>
      {navItem.text}
    </a>
  );
};

HeaderNavItem.displayName = "HeaderNavItem";

export default HeaderNavItem;
