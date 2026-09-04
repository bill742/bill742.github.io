import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import { SiGithub } from "react-icons/si";

const CaseStudyHero: FC<{
  demoLink?: string;
  githubLink?: string;
  image?: string;
  tagline: string;
  title: string;
}> = memo(({ demoLink, githubLink, image, tagline, title }) => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className="section-label">Case Study</span>
        <h1 className="header text-3xl">{title}</h1>
      </div>

      <p className="text-secondary-foreground max-w-3xl text-xl leading-relaxed">
        {tagline}
      </p>

      <div className="flex flex-wrap gap-2">
        {demoLink && (
          <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <ExternalLink className="size-3.5" aria-hidden="true" />
            Visit {title}
          </Link>
        )}
        {githubLink && (
          <Link
            href={`https://github.com/bill742/${githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <SiGithub className="size-3.5" aria-hidden="true" />
            View the source
          </Link>
        )}
      </div>

      {/* 2:1 matches the natural ratio of a wide screenshot closely enough that
          `cover` only ever trims the bottom — cropping the sides would clip a
          product's logo or nav, which is the part worth seeing. */}
      {image && (
        <div className="border-border relative aspect-[2/1] w-full overflow-hidden border">
          <Image
            src={`/images/projects/${image}`}
            alt={`The ${title} home page`}
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 976px) 100vw, 72rem"
          />
        </div>
      )}
    </div>
  );
});

CaseStudyHero.displayName = "CaseStudyHero";

export default CaseStudyHero;
