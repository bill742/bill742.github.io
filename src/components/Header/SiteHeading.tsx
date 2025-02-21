import Link from "next/link";

export default function SiteHeading() {
  return (
    <div className="flex flex-col justify-center">
      <Link href={"/"} aria-label="Home" tabIndex={0}>
        <h1 className="text-3xl font-bold">BD</h1>
      </Link>
      {/* <h2 className="font-normal text-xl">Front-End Web Developer</h2> */}
    </div>
  );
}
