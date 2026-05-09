"use client";

import { useForm, ValidationError } from "@formspree/react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_CODE}`
  );

  if (state.succeeded) {
    return (
      <p className="text-primary text-sm font-semibold tracking-widest uppercase">
        Message sent — I&apos;ll be in touch soon!
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="email"
          className="text-muted-foreground text-xs font-semibold tracking-widest uppercase"
        >
          Email
        </Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="you@example.com"
          required
          className="border-border bg-secondary focus:border-primary focus:ring-primary/20 rounded-none"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-destructive text-xs"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <Label
          htmlFor="message"
          className="text-muted-foreground text-xs font-semibold tracking-widest uppercase"
        >
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          required
          className="border-border bg-secondary focus:border-primary focus:ring-primary/20 min-h-32.5 resize-y rounded-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-destructive text-xs"
        />
      </div>

      <ValidationError
        errors={state.errors}
        className="text-destructive text-xs"
      />

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="button-primary disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state.submitting ? "Sending…" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

ContactForm.displayName = "ContactForm";

export default ContactForm;
