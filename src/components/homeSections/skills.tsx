import { FaGaugeHigh } from "react-icons/fa6";

import IconList from "@/components/icon-list";
import { skillsHeadings, skillsIconSets } from "@/data/skills";

const Skills = () => {
  const iconListClassName = "m-auto flex w-auto  flex-row flex-wrap  gap-8";
  const iconLabelClassName =
    "text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase";

  return (
    <section id="skills" className="section">
      <h3 className="header">
        <FaGaugeHigh className="text-primary" aria-label="Skills" />
        Skills
      </h3>
      <p>
        The languages, tools & applications I currently use in my daily
        workflow.
      </p>

      <div className="flex flex-wrap items-start gap-x-40 gap-y-10">
        {skillsIconSets.map((iconSet, index) => {
          const heading = skillsHeadings[index];

          return (
            <div key={index}>
              <h4 className={iconLabelClassName}>{heading}</h4>
              <IconList
                iconInfos={iconSet}
                hasText={true}
                className={iconListClassName}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

Skills.displayName = "Skills";

export default Skills;
