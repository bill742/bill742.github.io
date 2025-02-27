// import { Heading } from '@chakra-ui/react';
import {
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  // SiPlaywright,
} from "react-icons/si";

import IconList from "@/components/IconList";

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
  ];

  return (
    <section id="skills" className="flex w-full flex-col gap-y-12">
      <h3 className="header">Skills</h3>
      <p className="text-center">
        Languages, tools & applications I use in my daily workflow.
      </p>

      <IconList
        iconInfos={stackIcons}
        hasText={false}
        className="m-auto flex max-w-sm flex-row flex-wrap justify-center gap-8 md:justify-between"
      />
    </section>
  );
}

Skills.displayName = "Skills";
