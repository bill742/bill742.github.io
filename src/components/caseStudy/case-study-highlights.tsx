import { FC, memo } from "react";

import { caseStudyHighlightType } from "@/types/types";

const CaseStudyHighlights: FC<{
  highlights: Array<caseStudyHighlightType>;
}> = memo(({ highlights }) => {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="header">What shipped</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {highlights.map(({ description, title }) => (
          <div
            key={title}
            className="card-hover bg-card flex flex-col gap-3 p-6"
          >
            <h3 className="text-foreground text-lg font-semibold tracking-tight uppercase">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

CaseStudyHighlights.displayName = "CaseStudyHighlights";

export default CaseStudyHighlights;
