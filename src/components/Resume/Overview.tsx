import { FC, memo } from "react";
import { FaUser } from "react-icons/fa6";

const Overview: FC = memo(() => (
  <section className="resumeSection">
    <h2 className="resumeHeader">
      <FaUser /> Overview
    </h2>
    <p className="mt-0">
      I am a skilled front-end web developer who has been building things on the
      web for a number of years. I have extensive experience coding responsive
      websites with mobile first in mind. I possess a passion for learning new
      technology and strive for clean, semantic code that makes sense.
    </p>
  </section>
));

Overview.displayName = "Overview";

export default Overview;
