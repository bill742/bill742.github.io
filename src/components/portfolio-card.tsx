import Link from "next/link";
import { FC, memo } from "react";
import { SiGithub } from "react-icons/si";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PortfolioCard: FC<{
  title: string;
  description: string;
  content: string;
  githubLink?: string;
  demoLink?: string;
}> = memo(({ title, description, content, githubLink, demoLink }) => {
  return (
    <Card className="card-hover bg-card border-border hover:border-primary/30 justify-between">
      <CardHeader>
        <CardTitle className="text-foreground text-lg">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-base">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground leading-relaxed">
        {content}
      </CardContent>
      <CardFooter className="flex flex-col gap-8 sm:flex-row">
        {githubLink && (
          <Button asChild className="button-primary">
            <Link
              href={githubLink}
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
              Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});

PortfolioCard.displayName = "PortfolioCard";

export default PortfolioCard;
