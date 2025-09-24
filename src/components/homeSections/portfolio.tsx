import { BriefcaseBusiness } from "lucide-react";

import PortfolioCard from "../portfolio-card";

const portfolioData = [
  {
    content:
      "A resource that uses the GitHub API to allow users to find GitHub users by username and view their public repositories. Built using React.",
    demoLink: "https://github-finder-kohl-chi.vercel.app/",
    description: "GitHub user search and repository viewer",
    githubLink: "https://github.com/bill742/github-finder",
    title: "GitHub Finder",
  },
  {
    content:
      "This is a boilerplate I created to use for my NextJS projects. It includes TailwindCSS, TypeScript, and a few other libraries to get up and running quickly.",
    demoLink: "https://nextjs-boilerplate-three-iota-34.vercel.app/",
    description: "A boilerplate for quickly starting NextJS projects",
    githubLink: "https://github.com/bill742/nextjs-boilerplate",
    title: "NextJS Boilerplate",
  },
];

export default function Portfolio() {
  return (
    <section className="section" id="projects">
      <h3 className="header">
        <BriefcaseBusiness className="text-primary" /> Projects
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {portfolioData.map((item, index) => (
          <PortfolioCard
            key={index}
            title={item.title}
            description={item.description}
            content={item.content}
            githubLink={item.githubLink}
            demoLink={item.demoLink}
          />
        ))}
      </div>
    </section>
  );
}
