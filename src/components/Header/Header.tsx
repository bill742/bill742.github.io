import HeaderNav from "@/components/Header/HeaderNav";
// import HeaderPhoto from "@/components/Header/HeaderPhoto";
import SiteHeading from "@/components/Header/SiteHeading";

export default function Header() {
  // TODO: Add colour mode toggle

  return (
    <header className="mb-16 flex items-center justify-between">
      {/* TODO: Add skip nav */}

      <div className="align-center flex flex-col gap-4 md:flex-row">
        {/* <HeaderPhoto /> */}
        <SiteHeading />
      </div>
      <HeaderNav />
    </header>
  );
}
