import { BriefcaseBusiness } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import PortfolioCard from "../portfolio-card";

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
