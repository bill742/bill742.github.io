import { FaGithub, FaLinkedin } from "react-icons/fa";

export const navItems = [
  {
    isHomeSection: true,
    key: 1,
    link: "#about",
    text: "About Me",
  },
  {
    isHomeSection: true,
    key: 2,
    link: "#skills",
    text: "Skills",
  },
  {
    isHomeSection: true,
    key: 3,
    link: "#projects",
    text: "Projects",
  },
  {
    isHomeSection: true,
    key: 4,
    link: "#contact",
    text: "Contact",
  },
  ...(process.env.NEXT_PUBLIC_DISPLAY_BLOG === "TRUE"
    ? [
        {
          isHomeSection: false,
          key: 5,
          link: "/blog",
          text: "Blog",
        },
      ]
    : []),
];

const iconSize = "20";
const iconRole = "img";

export const contactIcons = [
  {
    icon: FaLinkedin,
    id: 2,
    label: "LinkedIn",
    link: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
    role: iconRole,
    size: iconSize,
  },
  {
    icon: FaGithub,
    id: 3,
    label: "GitHub",
    link: `https://github.com/${process.env.NEXT_PUBLIC_GH_USERNAME}`,
    role: iconRole,
    size: iconSize,
  },
];
