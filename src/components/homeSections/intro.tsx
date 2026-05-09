import Image from "next/image";

import ContactLink from "../contact-link";

const Intro = () => {
  return (
    <section className="section" id="top">
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-center md:justify-between">
        {/* ── Left: Text ── */}
        <div className="flex flex-col items-start gap-6 md:max-w-[58%]">
          {/* Headline */}
          <h1 className="animate-fade-up animate-delay-1 text-foreground text-5xl leading-tight font-bold tracking-tight opacity-0 lg:text-6xl xl:text-7xl">
            Hello! My name is{" "}
            <span className="bg-primary text-primary-foreground px-1 whitespace-nowrap">
              Bill.
            </span>
          </h1>

          <h2 className="animate-fade-up animate-delay-2 text-muted-foreground text-xl font-semibold opacity-0 sm:text-2xl">
            I'm a front-end web developer.
          </h2>

          <p className="animate-fade-up animate-delay-3 max-w-lg text-lg leading-relaxed opacity-0">
            I specialize in building modern, responsive websites and
            applications using React, Next.js, and TypeScript.
          </p>

          <ContactLink showResume={true} />
        </div>

        {/* ── Right: Photo ── */}
        <div className="relative shrink-0">
          {/* Glow blob */}
          <div
            className="absolute inset-[-10%] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, oklch(0.82 0.19 88 / 0.4) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          {/* Decorative ring */}
          <div
            className="border-primary/60 absolute inset-0 scale-[1.06] rounded-full border-4"
            style={{ transform: "scale(1.06) rotate(10deg)" }}
            aria-hidden="true"
          />
          {/* Photo */}
          <div className="relative h-56 w-56 overflow-hidden rounded-full sm:h-64 sm:w-64 lg:h-72 lg:w-72">
            <Image
              src="/images/bill-dean.jpg"
              alt="Bill Dean"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Intro.displayName = "Intro";

export default Intro;
