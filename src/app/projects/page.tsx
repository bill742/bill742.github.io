import { BriefcaseBusiness } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
  },
  description:
    "Long-form write-ups of the projects I've built — what the constraints were, the decisions I made, and what I'd carry into the next one.",
  title: "Case Studies",
};

export default function Projects() {
  return (
    <div className="flex flex-col gap-y-12">
      <h1 className="header text-3xl">
        <BriefcaseBusiness className="text-primary" aria-label="Case Studies" />
        Case Studies
      </h1>

      <p className="text-muted-foreground max-w-2xl leading-relaxed">
        A closer look at a few of the projects on my{" "}
        <Link
          href="/#projects"
          className="text-foreground decoration-primary underline decoration-2 underline-offset-4"
        >
          home page
        </Link>{" "}
        — the constraints I set, the decisions those forced, and what I took
        away from building them.
      </p>

      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {caseStudies.map(({ slug, summary, title }) => (
          <li key={slug} className="flex flex-col">
            <Card className="card-hover bg-card border-border hover:border-primary/30 justify-between">
              <CardHeader>
                <CardTitle className="text-foreground text-lg">
                  <Link href={`/projects/${slug}`} className="hover:underline">
                    {title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Case study
                </CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                {summary}
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}
