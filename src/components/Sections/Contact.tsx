import { memo } from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

import IconList from "@/components/IconList";

const Contact = memo(() => {
  const iconSize = "60";
  const iconRole = "img";
  const contactIcons = [
    {
      icon: SiGithub,
      id: 1,
      label: "GitHub",
      link: "https://github.com/bill742",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiLinkedin,
      id: 2,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bill742",
      role: iconRole,
      size: iconSize,
    },
    {
      icon: SiGmail,
      id: 3,
      label: "Gmail",
      link: `mailto:${process.env.EMAIL_ADDRESS}`,
      role: iconRole,
      size: iconSize,
    },
  ];

  return (
    <section id="contact" className="w-full">
      <h3 className="header">Contact</h3>
      <div className="space-between flex flex-row flex-wrap">
        <IconList
          hasText={false}
          iconInfos={contactIcons}
          className="mt-8 flex w-full flex-row flex-wrap justify-start gap-8 md:justify-between"
        />
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
