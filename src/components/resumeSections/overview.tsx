import { FC, memo } from "react";
import { FaUser } from "react-icons/fa6";

const Overview: FC = memo(() => (
  <section className="resumeSection">
    <h2 className="resumeHeader">
      <FaUser /> Overview
    </h2>
    <p className="text-base">
      Innovative and detail-oriented React Developer with a strong foundation in
      front-end development, specializing in building dynamic and responsive
      user interfaces. Proficient in React.js, JavaScript, TypeScript, and
      modern UI frameworks, with experience in state management, API
      integration, and performance optimization. Passionate about crafting
      seamless user experiences and writing clean, maintainable code. Adept at
      collaborating with cross-functional teams to develop scalable web
      applications. Seeking an opportunity to leverage my expertise in React
      development to contribute to a forward-thinking organization.
    </p>
  </section>
));

Overview.displayName = "Overview";

export default Overview;
