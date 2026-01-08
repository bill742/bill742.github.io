import { PhoneCall } from "lucide-react";
import { memo } from "react";

import ContactForm from "@/components/contact-form";

const Contact = memo(() => {
  return (
    <section id="contact" className="section">
      <h3 className="header">
        <PhoneCall className="text-primary" aria-label="Contact" /> Contact
      </h3>

      <ContactForm />
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
