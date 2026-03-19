// import { FaGaugeHigh, FaGitAlt } from "react-icons/fa6";
import { FaGaugeHigh } from "react-icons/fa6";
import {
  SiAmazonwebservices,
  SiClaude,
  SiCss3,
  SiDjango,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWagtail,
  SiWordpress,
} from "react-icons/si";

// import { VscVscode } from "react-icons/vsc";
import IconList from "@/components/icon-list";

const Skills = () => {
  const iconSize = "60";
  const iconRole = "img";
  const iconListClassName = "m-auto flex w-auto  flex-row flex-wrap  gap-8";
  // const iconLabelClassName =
  //   "text-muted-foreground mb-4 text-sm font-semibold tracking-widest uppercase";

  const frontEndIcons = [
    {
      icon: SiHtml5,
      id: 1,
      label: "HTML",
      role: iconRole,
      size: iconSize,
      text: "HTML5",
    },
    {
      icon: SiCss3,
      id: 2,
      label: "CSS",
      role: iconRole,
      size: iconSize,
      text: "CSS3",
    },
    {
      icon: SiJavascript,
      id: 3,
      label: "JavaScript",
      role: iconRole,
      size: iconSize,
      text: "JavaScript",
    },
    {
      icon: SiTypescript,
      id: 4,
      label: "TypeScript",
      role: iconRole,
      size: iconSize,
      text: "TypeScript",
    },
    {
      icon: SiReact,
      id: 5,
      label: "React",
      role: iconRole,
      size: iconSize,
      text: "React",
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
      icon: SiTailwindcss,
      id: 7,
      label: "TailwindCSS",
      role: iconRole,
      size: iconSize,
      text: "TailwindCSS",
    },
  ];

  const dataAndTestingIcons = [
    {
      icon: SiGraphql,
      id: 8,
      label: "GraphQL",
      role: iconRole,
      size: iconSize,
      text: "GraphQL",
    },
    {
      icon: SiJest,
      id: 9,
      label: "Jest",
      role: iconRole,
      size: iconSize,
      text: "Jest",
    },
  ];

  const toolsIcons = [
    // {
    //   icon: FaGitAlt,
    //   id: 10,
    //   label: "Git",
    //   role: iconRole,
    //   size: iconSize,
    //   text: "Git",
    // },
    {
      icon: SiAmazonwebservices,
      id: 11,
      label: "AWS",
      role: iconRole,
      size: iconSize,
      text: "AWS",
    },
    // {
    //   icon: VscVscode,
    //   id: 12,
    //   label: "VSCode",
    //   role: iconRole,
    //   size: iconSize,
    //   text: "VSCode",
    // },
    {
      icon: SiVercel,
      id: 12,
      label: "Vercel",
      role: iconRole,
      size: iconSize,
      text: "Vercel",
    },
    {
      icon: SiClaude,
      id: 13,
      label: "Claude",
      role: iconRole,
      size: iconSize,
      text: "Claude",
    },
  ];

  const backendAndCmsIcons = [
    {
      icon: SiPython,
      id: 14,
      label: "Python",
      role: iconRole,
      size: iconSize,
      text: "Python",
    },
    {
      icon: SiDjango,
      id: 15,
      label: "Django",
      role: iconRole,
      size: iconSize,
      text: "Django",
    },
    {
      icon: SiWagtail,
      id: 16,
      label: "Wagtail CMS",
      role: iconRole,
      size: iconSize,
      text: "Wagtail",
    },
    {
      icon: SiWordpress,
      id: 17,
      label: "WordPress",
      role: iconRole,
      size: iconSize,
      text: "WordPress",
    },
    {
      icon: SiStrapi,
      id: 18,
      label: "Strapi",
      role: iconRole,
      size: iconSize,
      text: "Strapi",
    },
  ];

  const skillsIcons = [
    ...frontEndIcons,
    ...dataAndTestingIcons,
    ...toolsIcons,
    ...backendAndCmsIcons,
  ];

  return (
    <section id="skills" className="section">
      <h3 className="header">
        <FaGaugeHigh className="text-primary" aria-label="Skills" />
        Skills
      </h3>
      <p>
        The languages, tools & applications I currently use in my daily
        workflow.
      </p>

      <IconList
        iconInfos={skillsIcons}
        hasText={true}
        className={iconListClassName}
      />

      {/* TODO: COnsider breaking skills into categories  */}
      {/* <div className="space-y-10">
        <div>
          <h4 className={iconLabelClassName}>Front-End Development</h4>
          <IconList
            iconInfos={frontEndIcons}
            hasText={true}
            className={iconListClassName}
          />
        </div>
        <div>
          <h4 className={iconLabelClassName}>Data & Testing</h4>
          <IconList
            iconInfos={dataAndTestingIcons}
            hasText={true}
            className={iconListClassName}
          />
        </div>
        <div>
          <h4 className={iconLabelClassName}>Backend & CMS</h4>
          <IconList
            iconInfos={backendAndCmsIcons}
            hasText={true}
            className={iconListClassName}
          />
        </div>
        <div>
          <h4 className={iconLabelClassName}>Tools & Workflow</h4>
          <IconList
            iconInfos={toolsIcons}
            hasText={true}
            className={iconListClassName}
          />
        </div>
      </div> */}
    </section>
  );
};

Skills.displayName = "Skills";

export default Skills;
