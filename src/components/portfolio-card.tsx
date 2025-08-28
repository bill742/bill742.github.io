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
    <Card className="card-hover bg-card border-border hover:border-primary/30">
      <CardHeader>
        <CardTitle className="text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground leading-relaxed">{content}</CardContent>
      <CardFooter className="flex gap-4">
        {githubLink && (
          <Button asChild className="button-secondary">
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <SiGithub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
        {demoLink && (
          <Button asChild className="button-primary">
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
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
