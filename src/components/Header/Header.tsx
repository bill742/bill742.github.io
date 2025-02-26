import HeaderNav from "@/components/Header/HeaderNav";
import SiteHeading from "@/components/Header/SiteHeading";

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
