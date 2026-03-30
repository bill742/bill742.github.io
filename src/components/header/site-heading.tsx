import Link from "next/link";

const SiteHeading = () => {
  return (
    <div className="flex flex-col justify-center">
      <Link
        href={"/"}
        aria-label="Home"
        tabIndex={0}
        className="group text-foreground hover:text-primary gradient-text text-3xl font-bold transition-colors duration-200"
      >
        <span className="text-primary site-heading-title">Bill Dean</span>
      </Link>
      <span className="site-heading-subtitle">Front-end web developer</span>
    </div>
  );
};

SiteHeading.displayName = "SiteHeading";

export default SiteHeading;
