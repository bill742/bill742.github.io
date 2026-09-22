import { FC, memo } from "react";

const CaseStudySection: FC<{
  body: string[];
  heading: string;
  list?: string[];
}> = memo(({ body, heading, list }) => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="header">{heading}</h2>

      <div className="flex max-w-3xl flex-col gap-4">
        {body.map((paragraph) => (
          <p key={paragraph} className="leading-relaxed">
            {paragraph}
          </p>
        ))}

        {list && (
          <ul className="current-projects">
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
});

CaseStudySection.displayName = "CaseStudySection";

export default CaseStudySection;
