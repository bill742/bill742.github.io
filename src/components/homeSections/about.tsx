import { FaUser } from "react-icons/fa6";

export default function About() {
  return (
    <section className="section" id="about">
      <h3 className="header">
        <FaUser className="text-slate-500" /> About Me
      </h3>
      <p>
        I&apos;m a front-end web developer based in Toronto, Canada. I
        specialize in creating websites and applications using modern JavaScript
        with React, NextJS and TypeScript. I also have experience working with
        APIs through GraphQL.
      </p>
    </section>
  );
}
