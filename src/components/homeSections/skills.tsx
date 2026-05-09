import { FaGaugeHigh } from "react-icons/fa6";

import { skillsData, skillsHeadings } from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h3 className="header">
        <FaGaugeHigh className="text-primary" aria-label="Skills" />
        Skills
      </h3>
      <p>
        The languages, tools &amp; applications I currently use in my daily
        workflow.
      </p>

      <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {skillsData.map((group: string[], index: number) => (
          <div key={index}>
            <h4 className="border-primary/50 text-muted-foreground mb-4 border-b-2 pb-2 text-xs font-semibold tracking-widest uppercase">
              {skillsHeadings[index]}
            </h4>
            <div className="flex flex-wrap gap-2">
              {group.map((skill: string) => (
                <span key={skill} className="skill-tag visible text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Skills.displayName = "Skills";

export default Skills;
