"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const Pagination = ({ totalPages }: { totalPages: number }) => {
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
};

Pagination.displayName = "Pagination";

export default Pagination;
