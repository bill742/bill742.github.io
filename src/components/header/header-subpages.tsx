import { memo } from "react";

import HeaderNav from "@/components/header/header-nav-subpages";
// import SiteHeading from "@/components/header/site-heading";

const SubPagesHeader = memo(() => {
  return (
    <header className="flex items-center justify-between">
      SUBPAGES!!
      <HeaderNav />
    </header>
  );
});

SubPagesHeader.displayName = "Header";

export default SubPagesHeader;
