"use client";
import { useForm, ValidationError } from "@formspree/react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "./ui/button";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const [state, handleSubmit] = useForm(
    `${process.env.NEXT_PUBLIC_FORMSPREE_CODE}`
  );
  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p>
        Send me a message and let me know how I can help you with your next
        project.
      </p>
      <Label htmlFor="email">Email:</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Label htmlFor="message">Message:</Label>
      <Textarea
        placeholder="Your message here"
        rows={4}
        required
        id="message"
        name="message"
      ></Textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button
        type="submit"
        disabled={state.submitting}
        className="button-primary mt-6 mb-6"
      >
        Send Message
      </Button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
