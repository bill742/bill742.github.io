import { Mail, PhoneCall } from "lucide-react";
import { memo } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import ContactForm from "@/components/contact-form";
import IconList from "@/components/icon-list";

const Contact = memo(() => {
  const iconSize = "50";
  const iconRole = "img";
  const contactIcons = [
    {
      icon: Mail,
      id: 1,
      label: "Email",
      link: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
      role: iconRole,
      size: iconSize,
    },
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

  return (
    <section id="contact" className="section">
      <h3 className="header">
        <PhoneCall className="text-primary" aria-label="Contact" /> Contact
      </h3>

      <p>
        Send me a message and let me know how I can help you with your next
        project.
      </p>
      <ContactForm />
      <div className="text-center">
        <p className="mb-6">Or connect with me through the links below:</p>
        <IconList
          hasText={false}
          iconInfos={contactIcons}
          className="flex w-full flex-row flex-wrap justify-center gap-8"
        />
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
