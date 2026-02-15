import icons from "../assets/icons.svg";
import { useTranslation } from "react-i18next";

export default function HomeSkills() {
  const { t } = useTranslation();

  return (
    <section className="home__skills__container">
      <h2 className="home__skills__title">{t("home.skills")}</h2>
      <ul className="home__skills__list">
        {/* Front-end podstawy */}
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#html`} />
          </svg>
          HTML
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#css`} />
          </svg>
          CSS / SASS
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#js`} />
          </svg>
          JavaScript
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#ts`} />
          </svg>
          TypeScript
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#react`} />
          </svg>
          React
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#vite`} />
          </svg>
          Vite
        </li>

        {/* Backend / fullstack */}
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#sql`} />
          </svg>
          SQL
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#postgresql`} />
          </svg>
          PostgreSQL
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#supabase`} />
          </svg>
          Supabase
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#node.js`} />
          </svg>
          Node.js
        </li>

        {/* Version control */}
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#git`} />
          </svg>
          Git / Github
        </li>

        {/* Design */}
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#figma`} />
          </svg>
          Figma
        </li>

        {/* Opcjonalne / mniej istotne */}
        {/* <li>
          <svg className="home__skills-image">
            <use href={`${icons}#icon-responsive-web-design`} />
          </svg>
          RWD
        </li>
        <li>
          <svg className="home__skills-image">
            <use href={`${icons}#icon-vscode`} />
          </svg>
          VS Code
        </li> */}
      </ul>
    </section>
  );
}
