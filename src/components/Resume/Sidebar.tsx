import Image from "next/image";
import { FC, memo } from "react";
import { FaGraduationCap } from "react-icons/fa6";
import {
  TiHome,
  TiMail,
  TiPhone,
  TiSocialGithubCircular,
  TiSocialLinkedin,
  TiWorld,
} from "react-icons/ti";

import IconList from "@/components/IconList";

const Sidebar: FC = memo(() => {
  const iconSize = "1.44rem";
  const iconRole = "img";

  const contactIcons = [
    {
      icon: TiHome,
      id: 1,
      label: "Home",
      role: iconRole,
      size: iconSize,
      text: "Toronto, ON",
    },
    {
      icon: TiMail,
      id: 2,
      label: "Email",
      link: "mailto:hello@billdean.me",
      role: iconRole,
      size: iconSize,
      text: "hello@billdean.me",
    },
    {
      icon: TiPhone,
      id: 3,
      label: "Phone",
      role: iconRole,
      size: iconSize,
      text: "416.556.5238",
    },
    {
      icon: TiWorld,
      id: 4,
      label: "Website",
      link: "https://billdean.me",
      role: iconRole,
      size: iconSize,
      text: "billdean.me",
    },
    {
      icon: TiSocialGithubCircular,
      id: 5,
      label: "Github",
      link: "https://github.com/bill742",
      role: iconRole,
      size: iconSize,
      text: "Github",
    },
    {
      icon: TiSocialLinkedin,
      id: 6,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bill742",
      role: iconRole,
      size: iconSize,
      text: "LinkedIn",
    },
  ];

  return (
    <div className="flex flex-col content-start gap-y-6 bg-red-700 py-8 pe-8 ps-8">
      <div className="flex flex-col items-center">
        <Image
          src="/images/bill-dean.jpg"
          alt="Bill Dean - Front-End Web Developer"
          className="mb-5 rounded-full"
          width={120}
          height={120}
        />
        <h2 className="text-4xl font-bold">Bill Dean</h2>
        <h3 className="mt-3 text-2xl font-bold">Front-End Web Developer</h3>
      </div>

      <IconList
        hasText
        iconInfos={contactIcons}
        className="font-0.875 flex w-full flex-col gap-x-1 gap-y-0.5"
      />

      <h2 className="resumeHeader">
        <FaGraduationCap /> Education
      </h2>

      <div className="font-0.875">
        <div>
          <strong>International Academy of Design and Technology</strong>
        </div>
        <div>
          <div>Digital Media Design Program</div>
          <div>January 2002 - June 2002 Toronto, ON</div>
        </div>
      </div>

      <div className="font-0.875">
        <strong>Keyin Technical College</strong>
        <div>Diploma in Computer Science</div>
        <div>January 1997 - July 1998 Halifax, NS</div>
      </div>

      <div className="font-0.875">
        <strong>St. Francis Xavier University</strong>
        <div>Bachelor of Arts in Music</div>
        <div>September 1991 - April 1995 Antigonish, NS</div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
