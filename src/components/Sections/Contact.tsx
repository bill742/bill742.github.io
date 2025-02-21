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
      label: "Email",
      link: `mailto:${process.env.EMAIL_ADDRESS}`,
      role: iconRole,
      size: iconSize,
    },
  ];

  return (
    <section id="contact" className="flex w-full flex-col items-center gap-y-8">
      <h3 className="header">Contact</h3>
      <p className="text-center">
        Send me a message or view some code samples at the links below.
      </p>
      <div className="space-between flex flex-row flex-wrap">
        <IconList
          hasText={false}
          iconInfos={contactIcons}
          className="flex w-full flex-col flex-wrap justify-start gap-16 md:flex-row md:justify-between"
        />
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
