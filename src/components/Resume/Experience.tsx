import { FC, memo } from "react";
import { FaDesktop } from "react-icons/fa6";

const Experience: FC = memo(() => (
  <section className="resumeSection">
    <h2 className="resumeHeader">
      <FaDesktop /> Experience
    </h2>

    <div>
      <div className="resumeExperienceCompany">ASL19</div>
      <div className="resumeExperienceRole">Web Developer</div>
      <span className="resumeExperienceLocation">
        Toronto, ON | 2017 - 2025
      </span>
      <ul className="resumeBulletList">
        <li>
          Developed and maintained diverse projects utilizing a range of
          languages and frameworks, including React, NextJS, TypeScript,
          GraphQL, Emotion CSS, and Python.
        </li>
        <li>
          Designed and implemented efficient layouts and reusable components,
          ensuring optimized site performance and scalability.
        </li>
        <li>
          Conducted thorough code reviews for front-end team members, providing
          feedback aligned with best practices for coding standards, quality,
          and maintainability.
        </li>
        <li>
          Collaborated closely with design, back-end, and DevOps teams to gather
          requirements and deliver effective, high-quality solutions.
        </li>
        <li>
          Wrote and executed comprehensive end-to-end tests using Jest and
          Playwright to ensure application reliability and functionality.
        </li>
      </ul>
    </div>

    <div>
      <div className="resumeExperienceCompany">Pearson Embanet</div>
      <div className="resumeExperienceRole">
        Systems Support Analyst / Web Developer
      </div>
      <div className="resumeExperienceLocation">
        Toronto, ON | May 2009 - 2017
      </div>
      <ul className="resumeBulletList">
        <li>
          Supported cloud-based server infrastructure on AWS. Tasks included
          setting up new environments, maintaining version control systems and
          managing website deployments
        </li>
        <li>
          Automated everyday server maintenance tasks through Bash and Python
          scripting.
        </li>
        <li>
          Coded and maintained more than 200 responsive websites using HTML5,
          CSS3, JavaScript, jQuery, PHP and WordPress.
        </li>
        <li>
          Collaborated with designers to meet business requirements and build
          websites based on PhotoShop mock-ups.
        </li>
      </ul>
    </div>
  </section>
));

Experience.displayName = "Experience";

export default Experience;
