import Link from "next/link";

export default function SiteHeading() {
  return (
    <div className="flex flex-col justify-center">
      <Link
        href={"/"}
        aria-label="Home"
        tabIndex={0}
        className="group text-foreground hover:text-primary gradient-text text-3xl font-bold transition-colors duration-200"
      >
        <span className="text-primary">BD</span>
      </Link>
    </div>
  );
}
