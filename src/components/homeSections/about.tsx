import { FaUser } from "react-icons/fa6";

import ContactLink from "../contact-link";

const About = () => {
  return (
    <section className="section" id="about">
      <h3 className="header">
        <FaUser className="text-primary" aria-label="About Me" /> About Me
      </h3>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* ── Left: Bio + CTA ── */}
        <div className="flex flex-col gap-6">
          <p>
            I&apos;m a front-end-focused web developer with over 10 years of
            experience building dynamic, scalable, and accessible user
            interfaces. I specialize in React, TypeScript, and modern UI
            frameworks, with a strong background in state management, API
            integration, and performance optimization. Whether it&apos;s
            creating reusable components, improving accessibility, or
            collaborating with cross-functional teams, I&apos;m passionate about
            delivering high-quality, user-centered web experiences.
          </p>
          <p>
            Feel free to reach out regarding a role in your organization or to
            discuss your next project.
          </p>
          <div className="pt-2">
            <ContactLink showResume={false} />
          </div>
        </div>

        {/* ── Right: Currently Working On ── */}
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground font-700 text-xs tracking-widest uppercase">
            Currently Working On
          </p>
          <ul className="flex flex-col gap-3">
            {[
              "A new storefront app with Next.js and Strapi",
              "Adding AI to my workflow with OpenCode, GitHub Copilot, and Claude Code",
              "Building GitHub Actions workflows for my projects",
            ].map((item) => (
              <li
                key={item}
                className="card-hover bg-card flex items-start gap-3 p-4 text-sm"
              >
                {/* Accent dot */}
                <span
                  className="bg-primary mt-1.5 h-1.5 w-1.5 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

About.displayName = "About";

export default About;
