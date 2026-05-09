import { BriefcaseBusiness } from "lucide-react";

import { portfolioData } from "@/data/portfolio";

import ProjectCard from "../project-card";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <h3 className="header">
        <BriefcaseBusiness className="text-primary" aria-label="Projects" />
        Projects
      </h3>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {portfolioData.map((item, i) => (
          <ProjectCard
            key={item.id}
            index={i + 1}
            title={item.title}
            description={item.description}
            content={item.content}
            githubLink={item.githubLink}
            demoLink={item.demoLink}
            techStack={item.techStack}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
};

Projects.displayName = "Projects";

export default Projects;
