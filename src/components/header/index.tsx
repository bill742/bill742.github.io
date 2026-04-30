import { memo } from "react";

import HeaderNav from "@/components/header/header-nav";
import SiteHeading from "@/components/header/site-heading";

import HeaderMobileNav from "./header-mobile-nav";
import ModeToggle from "./mode-toggle";

const Header = memo(() => {
  return (
    <div className="border-border/50 bg-background/85 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 border-b backdrop-blur-md">
      <header className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <SiteHeading />
        <HeaderNav />
        <div className="flex items-center gap-x-3">
          <ModeToggle className="hidden lg:flex" />
          <HeaderMobileNav />
        </div>
      </header>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
