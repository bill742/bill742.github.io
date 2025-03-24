import HeaderNav from "@/components/header/header-nav";
import SiteHeading from "@/components/header/site-heading";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="align-center flex flex-col gap-4 md:flex-row">
        <SiteHeading />
      </div>
      <HeaderNav />
    </header>
  );
}
