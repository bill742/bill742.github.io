import { FaGitAlt } from "react-icons/fa6";
import {
  SiClaude,
  SiCss,
  SiDjango,
  SiEslint,
  SiGithubcopilot,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiPrettier,
  SiPython,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWagtail,
  SiWordpress,
} from "react-icons/si";

export const skillsHeadings = [
  "Front-end",
  "Back-end",
  "CMS",
  "Testing",
  "Other Tools",
  "AI",
];

const iconSize = "60";
const iconRole = "img";

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
    icon: SiCss,
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
  {
    icon: SiGraphql,
    id: 8,
    label: "GraphQL",
    role: iconRole,
    size: iconSize,
    text: "GraphQL",
  },
];

const testingIcons = [
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
  {
    icon: FaGitAlt,
    id: 10,
    label: "Git",
    role: iconRole,
    size: iconSize,
    text: "Git",
  },
  {
    icon: SiPrettier,
    id: 11,
    label: "Prettier",
    role: iconRole,
    size: iconSize,
    text: "Prettier",
  },
  {
    icon: SiEslint,
    id: 12,
    label: "ESLint",
    role: iconRole,
    size: iconSize,
    text: "ESLint",
  },
  {
    icon: SiVercel,
    id: 13,
    label: "Vercel",
    role: iconRole,
    size: iconSize,
    text: "Vercel",
  },
];

const backendIcons = [
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
];

const cmsIcons = [
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

const aiIcons = [
  {
    icon: SiClaude,
    id: 19,
    label: "Claude",
    role: iconRole,
    size: iconSize,
    text: "Claude",
  },
  {
    icon: SiGithubcopilot,
    id: 20,
    label: "Github Copilot",
    role: iconRole,
    size: iconSize,
    text: "Github Copilot",
  },
];

export const skillsIconSets = [
  frontEndIcons,
  backendIcons,
  cmsIcons,
  testingIcons,
  toolsIcons,
  aiIcons,
];
