import type { Metadata } from "next";
import { FaToolbox } from "react-icons/fa6";

import { usesGroups } from "@/data/uses";

export const metadata: Metadata = {
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/uses`,
  },
  description:
    "The hardware, software and tools I use day to day as a front-end developer.",
  title: "Uses",
};

export default function Uses() {
  return (
    <div className="flex flex-col gap-y-12">
      <h1 className="header text-3xl">
        <FaToolbox className="text-primary" aria-label="Uses" /> Uses
      </h1>

      <p className="text-muted-foreground max-w-2xl leading-relaxed">
        The hardware, software and tools I reach for every day. If a piece of it
        is worth recommending, it is on this list.
      </p>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {usesGroups.map(({ heading, items }) => (
          <section key={heading}>
            <h2 className="border-primary/50 text-muted-foreground mb-6 border-b-2 pb-2 text-xs font-semibold tracking-widest uppercase">
              {heading}
            </h2>
            <dl className="flex flex-col gap-5">
              {items.map(({ name, note }) => (
                <div key={name}>
                  <dt className="text-foreground font-semibold">{name}</dt>
                  <dd className="text-muted-foreground leading-relaxed">
                    {note}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
