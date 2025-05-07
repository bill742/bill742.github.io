import { ArrowUp } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";

export default function UpArrow() {
  return (
    <div className="flex justify-end">
      <Button asChild className="h-10 w-10 rounded-full border-2 p-2">
        <Link href="/#top">
          <ArrowUp />
        </Link>
      </Button>
    </div>
  );
}
