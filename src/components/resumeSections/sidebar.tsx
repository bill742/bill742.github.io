import { Globe, GraduationCap, House, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";
import { FC, memo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import IconList from "@/components/icon-list";

const Sidebar: FC = memo(() => {
  const iconSize = "20";
  const iconRole = "img";

  const contactIcons = [
    {
      icon: House,
      id: 1,
      label: "Home",
      role: iconRole,
      size: iconSize,
      text: "Toronto, ON",
    },
    {
      icon: Mail,
      id: 2,
      label: "Email",
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
      role: iconRole,
      size: iconSize,
      text: "hello@billdean.me",
    },
    {
      icon: PhoneCall,
      id: 3,
      label: "Phone",
      role: iconRole,
      size: iconSize,
      text: "416.556.5238",
    },
    {
      icon: Globe,
      id: 4,
      label: "Website",
      link: "https://billdean.me",
      role: iconRole,
      size: iconSize,
      text: "billdean.me",
    },
    {
      icon: FaGithub,
      id: 5,
      label: "Github",
      link: `https://github.com/${process.env.NEXT_PUBLIC_GH_USERNAME}`,
      role: iconRole,
      size: iconSize,
      text: "Github",
    },
    {
      icon: FaLinkedin,
      id: 6,
      label: "LinkedIn",
      link: `https://www.linkedin.com/in/${process.env.NEXT_PUBLIC_LINKEDIN_USERNAME}`,
      role: iconRole,
      size: iconSize,
      text: "LinkedIn",
    },
  ];

  return (
    <div className="flex flex-col content-start gap-y-6 pe-8 ps-8">
      <div className="flex flex-col items-center">
        <Image
          src="/images/bill-dean.jpg"
          alt="Bill Dean - Front-End Web Developer"
          className="mb-5 rounded-full"
          width={120}
          height={120}
        />
        <h2 className="text-4xl font-bold">Bill Dean</h2>
        <h3 className="mt-3 text-center text-2xl font-bold">
          Front-End Web Developer
        </h3>
      </div>

      <IconList
        hasText
        iconInfos={contactIcons}
        className="font-0.875 flex w-full flex-col gap-x-1 gap-y-0.5"
      />

      <h2 className="resumeHeader">
        <GraduationCap className="w-8" /> Education
      </h2>

      <div className="font-0.875">
        <strong>International Academy of Design and Technology</strong>
        <div>Digital Media Design Program</div>
        <div>Toronto, ON</div>
      </div>

      <div className="font-0.875">
        <strong>Keyin Technical College</strong>
        <div>Diploma in Computer Science</div>
        <div>Halifax, NS</div>
      </div>

      <div className="font-0.875">
        <strong>St. Francis Xavier University</strong>
        <div>Bachelor of Arts in Music</div>
        <div>Antigonish, NS</div>
      </div>
    </div>
  );
});

Sidebar.displayName = "Sidebar";

export default Sidebar;
