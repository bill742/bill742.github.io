import Link from "next/link";

const SiteHeading = () => {
  return (
    <div className="flex flex-col justify-center">
      <Link
        href={"/"}
        aria-label="Home"
        tabIndex={0}
        className="group text-foreground font-bold uppercase transition-colors duration-200"
      >
        <span className="site-heading-title">Bill Dean</span>
      </Link>
    </div>
  );
};

SiteHeading.displayName = "SiteHeading";

export default SiteHeading;
