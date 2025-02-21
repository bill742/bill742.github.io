import { FC, memo } from "react";
import { FaDesktop } from "react-icons/fa6";

const Experience: FC = memo(() => (
  <section className="resumeSection">
    <h2 className="resumeHeader">
      <FaDesktop /> Experience
    </h2>
    <div>
      <div className="resumeExperienceCompany">Pearson Embanet</div>
      <div className="resumeExperienceRole">
        Systems Support Analyst / Web Developer
      </div>
      <div className="resumeExperienceLocation">
        Toronto, ON | May 2009 - present
      </div>
      <ul className="resumeBulletList">
        <li>
          Supporting cloud based server infrastructure on AWS. Tasks include
          setting up new environments, maintaining version control systems and
          managing website deployments
        </li>
        <li>
          Automating everyday server maintenance tasks through Bash and Python
          scripting
        </li>
        <li>
          Coding and maintaining more than 200 responsive websites using HTML5,
          CSS3, JavaScript, jQuery, PHP and WordPress
        </li>
        <li>
          Collaborating with designers to meet business requirements and build
          websites based on PhotoShop mock-ups
        </li>
        <li>
          Debugging and performing QA for code across multiple browsers,
          operating systems and mobile platforms
        </li>
        <li>Monitoring incoming support requests through Jira</li>
      </ul>
    </div>

    <div>
      <div className="resumeExperienceCompany">
        The Law Society of Upper Canada
      </div>
      <div className="resumeExperienceRole">Web Developer</div>
      <span className="resumeExperienceLocation">
        Toronto, ON | 2005 - 2009
      </span>
      <ul className="resumeBulletList">
        <li>
          Worked with clients and content producers to update and maintain
          public and intranet websites
        </li>
        <li>
          Facilitated coding and development to ensure compliance with W3C
          accessibility standards
        </li>
        <li>
          Tested websites on multiple platforms including speech and text
          browsers
        </li>
      </ul>
    </div>
  </section>
));

Experience.displayName = "Experience";

export default Experience;
