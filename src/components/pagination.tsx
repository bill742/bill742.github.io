"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({
  totalPages,
  basePath,
}: {
  totalPages: number;
  basePath: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((page) => (
        <Link
          key={page}
          href={`${pathname}?page=${page}`}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </Link>
      ))}
    </div>
  );
}
