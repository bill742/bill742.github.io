import { memo } from "react";

import HeaderNav from "@/components/header/header-nav";
import SiteHeading from "@/components/header/site-heading";

const Header = memo(() => {
  return (
    <div className="border-border/50 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b backdrop-blur">
      <header className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <SiteHeading />
        <HeaderNav />
      </header>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
