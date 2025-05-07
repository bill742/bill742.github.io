import { memo } from "react";

import HeaderNav from "@/components/header/header-nav";
import SiteHeading from "@/components/header/site-heading";

const Header = memo(() => {
  return (
    <header className="flex items-center justify-between" id="top">
      <SiteHeading />
      <HeaderNav />
    </header>
  );
});

Header.displayName = "Header";

export default Header;
