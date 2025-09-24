import Typewriter from "@/components/ui/typewriter";

export default function Intro() {
  return (
    <section className="section" id="top">
      <div className="space-y-6 text-center">
        <h1 className="text-foreground text-6xl leading-20 font-bold">
          Hello! My name is <span className="text-primary">Bill</span>.
        </h1>
        <h2 className="text-muted-foreground text-5xl font-semibold">
          <Typewriter
            text="I'm a front-end web developer."
            speed={80}
            delay={100}
          />
        </h2>
        <p className="mx-auto max-w-2xl text-xl leading-relaxed">
          I specialize in building modern, responsive websites and applications
          using React, Next.js, and TypeScript.
        </p>
      </div>
    </section>
  );
}
