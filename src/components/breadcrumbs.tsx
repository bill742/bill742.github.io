import Link from "next/link";

type Crumb = { label: string; href: string };

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav>
      <Link href="/">Home</Link>
      {crumbs.map((crumb, index) => (
        <span key={crumb.href}>
          /
          {index === crumbs.length - 1 ? (
            <span>{crumb.label}</span>
          ) : (
            <Link href={crumb.href}>{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}
