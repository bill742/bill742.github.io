// import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold">Whoops!</h2>
      <p className="text-xl">You seem to have found a broken link.</p>
      {/* <Link href="/" className="text-xl underline">
        Return Home
      </Link> */}
    </div>
  );
}
