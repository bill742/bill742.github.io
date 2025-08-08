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
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex gap-6">
        {githubLink && (
          <Button>
            <Link href={githubLink} target="_blank" rel="noopener noreferrer">
              <SiGithub className="mr-2 inline-block" />
              GitHub
            </Link>
          </Button>
        )}
        {demoLink && (
          <Button>
            <Link href={demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
});

PortfolioCard.displayName = "PortfolioCard";

export default PortfolioCard;
