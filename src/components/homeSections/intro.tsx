export default function Intro() {
  return (
    <section className="section">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-foreground">
          Hello! My name is <span className="gradient-text">Bill</span>.
        </h1>
        <h2 className="text-5xl font-semibold text-muted-foreground">
          I&apos;m a front-end web developer.
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          I specialize in building modern, responsive websites and applications using React, Next.js, and TypeScript.
        </p>
      </div>
    </section>
  );
}
