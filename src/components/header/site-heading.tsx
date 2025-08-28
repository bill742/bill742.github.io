import Link from "next/link";

export default function SiteHeading() {
  return (
    <div className="flex flex-col justify-center">
      <Link
        href={"/"}
        aria-label="Home"
        tabIndex={0}
        className="group text-3xl font-bold text-foreground hover:text-primary transition-colors duration-200"
      >
        <span className="gradient-text">BD</span>
        <div className="h-[2px] w-0 bg-primary transition-all duration-500 group-hover:w-full"></div>
      </Link>
    </div>
  );
}
