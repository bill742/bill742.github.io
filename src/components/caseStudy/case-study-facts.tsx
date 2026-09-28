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
      {/* auto-fit rather than a fixed column count: the facts are authored per
          study, so a hardcoded grid orphans the last one the moment a study
          carries a different number of them. */}
      <dl className="grid grid-cols-[repeat(auto-fit,minmax(11rem,1fr))] gap-6">
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
