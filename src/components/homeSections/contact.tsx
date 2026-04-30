import { PhoneCall } from "lucide-react";
import { memo } from "react";

import ContactForm from "@/components/contact-form";

const Contact = memo(() => {
  return (
    <section id="contact" className="section">
      <h3 className="header">
        <PhoneCall className="text-primary" aria-label="Contact" /> Contact
      </h3>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.5fr] md:gap-16">
        <div className="flex flex-col gap-4 pt-1">
          <p>
            Whether you&apos;re hiring, have a project in mind, or just want to
            connect — my inbox is open.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
