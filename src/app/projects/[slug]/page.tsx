import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CaseStudyFacts from "@/components/caseStudy/case-study-facts";
import CaseStudyHero from "@/components/caseStudy/case-study-hero";
import CaseStudyHighlights from "@/components/caseStudy/case-study-highlights";
import CaseStudySection from "@/components/caseStudy/case-study-section";
import { JsonLd } from "@/components/JsonLd";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { caseStudyGraph } from "@/lib/schema";

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="flex flex-col gap-16">
      <JsonLd schema={caseStudyGraph(study)} />

      <CaseStudyHero
        demoLink={study.demoLink}
        githubLink={study.githubLink}
        image={study.image}
        tagline={study.tagline}
        title={study.title}
      />

      <CaseStudyFacts facts={study.facts} techStack={study.techStack} />

      <p className="text-secondary-foreground max-w-3xl leading-relaxed">
        {study.intro}
      </p>

      <CaseStudyHighlights highlights={study.highlights} />

      {study.sections.map(({ body, heading, list }) => (
        <CaseStudySection
          key={heading}
          body={body}
          heading={heading}
          list={list}
        />
      ))}

      <section className="flex flex-col gap-6">
        <h2 className="header">What I took away</h2>
        <ul className="current-projects max-w-3xl">
          {study.takeaways.map((takeaway) => (
            <li key={takeaway}>{takeaway}</li>
          ))}
        </ul>
      </section>

      <Link href="/projects" className="button-secondary self-start">
        All case studies
      </Link>
    </article>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${study.slug}`,
    },
    description: study.summary,
    openGraph: {
      description: study.summary,
      images: "/opengraph-image.png",
      publishedTime: study.datePublished,
      title: `${study.title} — Case Study`,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${study.slug}`,
    },
    title: `${study.title} — Case Study`,
  };
}

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export const dynamicParams = false;
