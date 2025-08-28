import { FaGitAlt } from "react-icons/fa6";
import { FaGaugeHigh } from "react-icons/fa6";
import {
  SiCss3,
  SiDjango,
  SiGraphql,
  SiHtml5,
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
    {
      icon: SiHtml5,
      id: 1,
      label: "HTML",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiCss3,
      id: 2,
      label: "CSS",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiJavascript,
      id: 3,
      label: "JavaScript",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiReact,
      id: 4,
      label: "React",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiTypescript,
      id: 5,
      label: "TypeScript",
      role: iconRole,
      size: iconSize,
    },

    {
      icon: SiNextdotjs,
      id: 6,
      label: "NextJS",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiGraphql,
      id: 7,
      label: "GraphQL",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiJest,
      id: 8,
      label: "Jest",
      role: iconRole,
      size: iconSize,
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
    },
    {
      icon: FaGitAlt,
      id: 11,
      label: "Git",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiTailwindcss,
      id: 12,
      label: "TailwindCSS",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiPython,
      id: 13,
      label: "Python",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiDjango,
      id: 14,
      label: "Django",
      role: iconRole,
      size: iconSize,
    },
  ];

  return (
    <section id="skills" className="section">
      <h3 className="header">
        <FaGaugeHigh className="text-primary" />
        Skills
      </h3>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-center">
        The languages, tools & applications I currently use in my daily
        workflow.
      </p>

      <IconList
        iconInfos={stackIcons}
        hasText={false}
        className="m-auto flex flex-row flex-wrap justify-center gap-16 md:justify-between"
      />
    </section>
  );
}

Skills.displayName = "Skills";
