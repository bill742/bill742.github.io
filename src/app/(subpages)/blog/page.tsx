// import Pagination from "@/components/pagination";
import Link from "next/link";
import { IoMegaphone } from "react-icons/io5";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";

export const blogSlugs = [
  {
    slug: "welcome",
    summary: "Some quick summary",
    title: "Welcome to the Blog",
  },
];

export default function Blog() {
  return (
    <div className="flex flex-col gap-y-12">
      <h1 className="header text-3xl">
        <IoMegaphone className="text-primary" /> Blog
      </h1>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {blogSlugs.map(({ slug, summary, title }) => (
          <li key={slug} className="mb-4 flex flex-col">
            <Card className="card-hover bg-card border-border hover:border-primary/30 justify-between">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">
                  <Link href={`/blog/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {summary}
              </CardContent>
              <CardFooter className="flex flex-col gap-8 sm:flex-row"></CardFooter>
            </Card>
          </li>
        ))}
      </ul>
      {/* <Pagination totalPages={10} basePath="/blog" /> */}
    </div>
  );
}
