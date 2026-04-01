import { BriefcaseBusiness } from "lucide-react";

import PortfolioCard from "../portfolio-card";

const portfolioData = [
  {
    content:
      "A modern Next.js boilerplate to ship production-ready projects fast — with TypeScript, Tailwind CSS v4, accessibility, testing, and developer tooling pre-configured.",
    demoLink: "https://www.nextstarter.app/",
    description: "A boilerplate for quickly starting NextJS projects",
    githubLink: "nextstarter",
    id: "1",
    techStack: "Next.js + TypeScript + Tailwind CSS + ShadCN/UI + Playwright",
    title: "NextStarter",
  },
  {
    content:
      "An application to view and search information on movies premiere dates and upcoming releases.",
    demoLink: "https://movie-watchlist-flame.vercel.app/",
    description: "A resource for movie information.",
    githubLink: "MovieWatchlist",
    id: "2",
    techStack: "Next.js + TypeScript + Tailwind CSS",
    title: "Movie Watchlist",
  },
  {
    content:
      "Github Finder is an app that utilizes the GitHub API to search for GitHub users by username and view information about them and their public repositories.",
    demoLink: "https://github-finder-kohl-chi.vercel.app/",
    description: "GitHub user search and repository viewer",
    githubLink: "github-finder",
    id: "3",
    techStack:
      "React 18 + TypeScript + Vite + React Router v7 + TanStack Query v5, Tailwind CSS v4 + Shadcn/UI",
    title: "GitHub Finder",
  },
];

const Portfolio = () => {
  return (
    <section className="section" id="projects">
      <h3 className="header">
        <BriefcaseBusiness className="text-primary" aria-label="Projects" />{" "}
        Projects
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
        {portfolioData.map((item) => (
          <PortfolioCard
            key={item.id}
            title={item.title}
            description={item.description}
            content={item.content}
            githubLink={item.githubLink}
            demoLink={item.demoLink}
            techStack={item.techStack}
          />
        ))}
      </div>
    </section>
  );
};

Portfolio.displayName = "Portfolio";

export default Portfolio;
