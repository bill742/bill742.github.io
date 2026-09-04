import { FC, memo } from "react";

import { caseStudyFactType } from "@/types/types";

const CaseStudyFacts: FC<{
  facts: Array<caseStudyFactType>;
  techStack: string[];
}> = memo(({ facts, techStack }) => {
  return (
    <aside
      aria-label="Project at a glance"
      className="bg-card border-border flex flex-col gap-8 border p-6"
    >
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(({ label, value }) => (
          <div key={label}>
            <dt className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
              {label}
            </dt>
            <dd className="text-foreground mt-2 leading-relaxed">{value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <h2 className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
          Built with
        </h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <li key={tech} className="skill-tag visible">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
});

CaseStudyFacts.displayName = "CaseStudyFacts";

export default CaseStudyFacts;
