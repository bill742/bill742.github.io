import { FaGaugeHigh, FaGitAlt } from "react-icons/fa6";
import {
  SiDjango,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import IconList from "@/components/icon-list";

export default function Skills() {
  const iconSize = "60";
  const iconRole = "img";
  const stackIcons = [
    // {
    //   icon: SiHtml5,
    //   id: 1,
    //   label: "HTML",
    //   role: iconRole,
    //   size: iconSize,
    //   text: "HTML5",
    // },
    // {
    //   icon: SiCss3,
    //   id: 2,
    //   label: "CSS",
    //   role: iconRole,
    //   size: iconSize,
    //   text: "CSS3",
    // },
    {
      icon: SiJavascript,
      id: 3,
      label: "JavaScript",
      role: iconRole,
      size: iconSize,
      text: "JavaScript",
    },
    {
      icon: SiReact,
      id: 4,
      label: "React",
      role: iconRole,
      size: iconSize,
      text: "React",
    },
    {
      icon: SiTypescript,
      id: 5,
      label: "TypeScript",
      role: iconRole,
      size: iconSize,
      text: "TypeScript",
    },

    {
      icon: SiNextdotjs,
      id: 6,
      label: "NextJS",
      role: iconRole,
      size: iconSize,
      text: "Next.js",
    },
    {
      icon: SiGraphql,
      id: 7,
      label: "GraphQL",
      role: iconRole,
      size: iconSize,
      text: "GraphQL",
    },
    {
      icon: SiJest,
      id: 8,
      label: "Jest",
      role: iconRole,
      size: iconSize,
      text: "Jest",
    },
    // {
    //   icon: SiPlaywright,
    //   id: 9,
    //   label: 'Playwright',
    //   role: iconRole,
    //   size: iconSize,
    // },
    {
      icon: VscVscode,
      id: 10,
      label: "VSCode",
      role: iconRole,
      size: iconSize,
      text: "VSCode",
    },
    {
      icon: FaGitAlt,
      id: 11,
      label: "Git",
      role: iconRole,
      size: iconSize,
      text: "Git",
    },
    {
      icon: SiTailwindcss,
      id: 12,
      label: "TailwindCSS",
      role: iconRole,
      size: iconSize,
      text: "TailwindCSS",
    },
    {
      icon: SiPython,
      id: 13,
      label: "Python",
      role: iconRole,
      size: iconSize,
      text: "Python",
    },
    {
      icon: SiDjango,
      id: 14,
      label: "Django",
      role: iconRole,
      size: iconSize,
      text: "Django",
    },
  ];

  return (
    <section id="skills" className="section">
      <h3 className="header">
        <FaGaugeHigh className="text-primary" aria-label="Skills" />
        Skills
      </h3>
      <p className="mx-auto max-w-2xl text-center">
        The languages, tools & applications I currently use in my daily
        workflow.
      </p>

      <IconList
        iconInfos={stackIcons}
        hasText={true}
        className="m-auto flex flex-row flex-wrap justify-center gap-8 md:justify-between"
      />
    </section>
  );
}

Skills.displayName = "Skills";
