import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import { SiGithub } from "react-icons/si";

const ProjectCard: FC<{
  index: number;
  title: string;
  description: string;
  content: string;
  githubLink?: string;
  demoLink?: string;
  techStack?: string;
  image?: string;
}> = memo(
  ({
    index,
    title,
    description,
    content,
    githubLink,
    demoLink,
    techStack,
    image,
  }) => {
    return (
      <div className="card-hover bg-card relative flex flex-col gap-5 overflow-hidden p-6">
        {/* Ghost number — Direction B watermark */}
        <span
          className="text-muted/30 pointer-events-none absolute -top-2 -right-2 leading-none font-bold select-none"
          style={{ fontSize: "7rem" }}
          aria-hidden="true"
        >
          {String(index).padStart(2, "0")}
        </span>

        {/* Project image */}
        {image && (
          <div className="relative h-44 w-full overflow-hidden">
            <Image
              src={`/images/projects/${image}`}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        {/* Title + description */}
        <div className="relative z-10">
          <h4 className="text-foreground text-lg font-bold tracking-tight uppercase">
            {title}
          </h4>
          <p className="text-muted-foreground mt-1 text-sm font-medium">
            {description}
          </p>
        </div>

        {/* Content */}
        <p className="text-muted-foreground relative z-10 text-sm leading-relaxed">
          {content}
        </p>

        {/* Tech stack tags */}
        {techStack && (
          <div className="relative z-10 flex flex-wrap gap-2">
            {techStack.split("+").map((t) => (
              <span key={t} className="skill-tag visible text-xs">
                {t.trim()}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="relative z-10 mt-auto flex flex-wrap gap-2 pt-2">
          {githubLink && (
            <Link
              href={`https://github.com/bill742/${githubLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <SiGithub className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </Link>
          )}
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Live
            </Link>
          )}
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
