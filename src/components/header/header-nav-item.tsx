import { usePathname } from "next/navigation";
import { FC } from "react";

import { headerNavItemType } from "@/types/types";
import { useActiveSection } from "@/utils/useActiveSection";
import { useScrollToSection } from "@/utils/useScrollToSection";

const HeaderNavItem: FC<{
  navItem: headerNavItemType;
  onClose?: () => void;
  mobile?: boolean;
}> = ({ navItem, onClose, mobile = false }) => {
  const active = useActiveSection(["about", "projects", "skills", "contact"]);
  const scrollToSection = useScrollToSection();
  const pathname = usePathname();
  const isActive = navItem.isHomeSection
    ? active === navItem.link.replace("#", "")
    : pathname.startsWith(navItem.link);

  // The active state carries the primary colour on the bottom border rather
  // than the text: the yellow only reaches 1.62:1 against the light theme's
  // background, well under the 4.5:1 WCAG AA needs for text.
  const baseClass = mobile
    ? // Mobile: larger text, right-aligned, full-width tap target
      `block w-full py-3 text-right text-base font-semibold uppercase tracking-widest transition-colors duration-200 border-b last:border-0 ${
        isActive
          ? "border-primary text-foreground"
          : "border-border text-muted-foreground hover:text-primary"
      }`
    : // Desktop: compact, uppercase, letter-spaced
      `border-b-2 pb-1 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
        isActive
          ? "border-primary text-foreground"
          : "border-transparent text-muted-foreground hover:text-primary"
      }`;

  if (navItem.isHomeSection) {
    return (
      <button
        type="button"
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
