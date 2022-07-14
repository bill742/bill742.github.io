import JavaScriptSvg from '../icons/skills/javascriptSvg';
import styles from '../../styles/Skills.module.css';

export default function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-tech">
        {/* <svg>
          <use xlink:href="/images/icons.svg#html5"></use>
        </svg>
        <svg>
          <use xlink:href="/images/icons.svg#css3"></use>
        </svg> */}
        <JavaScriptSvg />
      </div>

      <div className="skills-tech">
        {/* <svg>
          <use xlink:href="/images/icons.svg#python"></use>
        </svg>
        <svg>
          <use xlink:href="/images/icons.svg#react"></use>
        </svg> */}
      </div>

      <div className="skills-tech">
        {/* <svg>
          <use xlink:href="/images/icons.svg#aws"></use>
        </svg>
        <svg>
          <use xlink:href="/images/icons.svg#gulp"></use>
        </svg>
        <svg>
          <use xlink:href="/images/icons.svg#git"></use>
        </svg>
        <svg>
          <use xlink:href="/images/icons.svg#wordpress"></use>
        </svg> */}
      </div>
    </section>
  );
}
