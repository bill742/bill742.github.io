import { BriefcaseBusiness } from "lucide-react";

import PortfolioCard from "../portfolio-card";

const portfolioData = [
  {
    content:
      "This is a boilerplate I created to use for my NextJS projects. It includes TailwindCSS, TypeScript, Playwright testing, and a few other libraries to get up and running quickly.",
    demoLink: "https://nextjs-boilerplate-three-iota-34.vercel.app/",
    description: "A boilerplate for quickly starting NextJS projects",
    githubLink: "nextstarter",
    title: "NextStarter",
  },
  {
    content:
      "An application to view and search information on movies currently playing and upcoming releases. Built using NextJS and the TMDB API.",
    demoLink: "https://movie-watchlist-flame.vercel.app/",
    description: "A resource for movie information.",
    githubLink: "MovieWatchlist",
    title: "Movie Watchlist",
  },
  {
    content:
      "A resource that uses the GitHub API to allow users to find GitHub users by username and view their public repositories. Built using React.",
    demoLink: "https://github-finder-kohl-chi.vercel.app/",
    description: "GitHub user search and repository viewer",
    githubLink: "github-finder",
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
};

Portfolio.displayName = "Portfolio";

export default Portfolio;
