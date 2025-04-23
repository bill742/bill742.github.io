import Link from "next/link";

export default function SiteHeading() {
  return (
    <div className="flex flex-col justify-center">
      <Link
        href={"/"}
        aria-label="Home"
        tabIndex={0}
        className="group text-3xl font-bold"
      >
        BD
        <div className="h-[2px] w-0 bg-slate-500 transition-all duration-500 group-hover:w-full"></div>
      </Link>
    </div>
  );
}
