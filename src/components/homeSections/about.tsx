import { FaUser } from "react-icons/fa6";

import ContactLink from "../contact-link";

export default function About() {
  return (
    <section className="section" id="about">
      <h3 className="header">
        <FaUser className="text-primary" aria-label="About Me" /> About Me
      </h3>
      <p>
        I&apos;m a front-end-focused web developer with over 10 years of
        experience building dynamic, scalable, and accessible user interfaces. I
        specialize in React, TypeScript, and modern UI frameworks, with a strong
        background in state management, API integration, and performance
        optimization. Whether it’s creating reusable components, improving
        accessibility, or collaborating with cross-functional teams, I’m
        passionate about delivering high-quality, user-centered web experiences.
      </p>

      <div>
        <p className="font-bold">Projects I am currently working on:</p>
        <ul className="current-projects">
          <li>A new store front app with NextJS and Strapi</li>
          <li>
            Adding AI to my workflow with OpenCode, GitHub Copilot, and Claude
            Sonnet
          </li>
          <li>Building GitHub Actions workflows for my projects</li>
        </ul>
      </div>

      <p>
        Feel free to reach out to me regarding a role in your organization or to
        discuss your next project.
      </p>

      <ContactLink />
    </section>
  );
}
