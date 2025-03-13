import Link from "next/link";

export default function SiteHeading() {
  return (
    <div className="flex flex-col justify-center">
      <Link href={"/"} aria-label="Home" tabIndex={0}>
        <div className="text-3xl font-bold">BD</div>
      </Link>
    </div>
  );
}
