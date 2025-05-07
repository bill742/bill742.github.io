import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-end">
      <Link href="#top">
        <ArrowUp className="h-10 w-10 rounded-full border-2 p-2" />
      </Link>
    </div>
  );
}
