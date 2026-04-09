import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import { SiGithub } from "react-icons/si";

import { Button } from "./ui/button";

const PortfolioCard: FC<{
  title: string;
  description: string;
  content: string;
  githubLink?: string;
  demoLink?: string;
  techStack?: string;
  image?: string;
}> = memo(
  ({ title, description, content, githubLink, demoLink, techStack, image }) => {
    return (
      <div className="text-muted-foreground flex flex-col gap-y-4 text-[1rem] leading-relaxed">
        <span className="text-muted-foreground text-base font-semibold">
          {description}
        </span>

        {image && (
          <div className="relative h-auto min-h-44 w-full md:min-h-80">
            <Image
              src={`/images/projects/${image}`}
              alt={title}
              fill
              className="object-cover object-top"
            />
          </div>
        )}

        {content}

        {techStack && (
          <div>
            <span className="font-semibold">Tech stack:</span> {techStack}
          </div>
        )}

        <div className="flex flex-col gap-8 sm:flex-row">
          {githubLink && (
            <Button asChild className="button-primary">
              <Link
                href={`https://github.com/bill742/${githubLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2"
              >
                <SiGithub className="mr-2 h-4 w-4" aria-label="Github" />
                GitHub
              </Link>
            </Button>
          )}
          {demoLink && (
            <Button asChild className="button-primary">
              <Link
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-1/2"
              >
                View Project
              </Link>
            </Button>
          )}
        </div>
      </div>
    );
  }
);

PortfolioCard.displayName = "PortfolioCard";

export default PortfolioCard;
