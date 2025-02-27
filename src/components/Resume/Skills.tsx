import { FC, memo } from "react";
import { FaGaugeHigh } from "react-icons/fa6";

const Skills: FC = memo(() => (
  <section className="resumeSection">
    <h2 className="resumeHeader">
      <FaGaugeHigh /> Skills
    </h2>
    <div className="font-bold">Coding</div>
    <div>HTML5 - CSS3 - JavaScript - Python</div>
    <div className="font-bold">Frameworks and Libraries</div>
    <div>React - NextJS - TailwindCSS - TypeScript - EmotionJS</div>

    {/* <div class="skills-title">Tools and Applications</div>
          <p>Gulp - AWS - PhotoShop</p> */}

    <div className="font-bold">Databases</div>
    <div>MySQL</div>
    <div className="font-bold">Version Control</div>
    <div>Git</div>
    <div className="font-bold">CMS</div>
    <div>WordPress - WagTail</div>
  </section>
));

Skills.displayName = "Skills";

export default Skills;
