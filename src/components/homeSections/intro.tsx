import ContactLink from "../contact-link";
import IntroPhoto from "../intro-photo";

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
        <IntroPhoto />
      </div>
    </section>
  );
};

Intro.displayName = "Intro";

export default Intro;
