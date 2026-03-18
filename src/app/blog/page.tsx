// import Pagination from "@/components/pagination";
import Link from "next/link";
import { IoMegaphone } from "react-icons/io5";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const blogSlugs = [
  {
    date: "2024-07-01",
    slug: "second-post",
    summary: "Some quick summary",
    title: "Second Post",
  },
  {
    date: "2024-06-01",
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
        {blogSlugs.map(({ date, slug, summary, title }) => (
          <li key={slug} className="mb-4 flex flex-col">
            <Card className="card-hover bg-card border-border hover:border-primary/30 justify-between">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">
                  <Link href={`/blog/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Published on {date}
                </CardDescription>
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
