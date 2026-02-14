import { useTranslation } from "react-i18next";
import icons from "../assets/icons.svg";

export default function ContactHero() {
  const { t } = useTranslation();

  return (
    <>
      <div className="contact__container">
        <h2 className="contact__title">{t("contact.title")}</h2>
        <ul className="contact__list">
          <li className="contact__list--item">
            <a
              className="contact__link"
              href="https://github.com/MikeL538"
              target="_blank"
            >
              <svg className="contact__icon">
                <use href={`${icons}#icon-github`}></use>
              </svg>
              Github: https://github.com/MikeL538
            </a>
          </li>
          <li className="contact__list--item">
            <a
              className="contact__link"
              href="https://github.com/MikeL538"
              target="_blank"
            >
              <svg className="contact__icon">
                <use href={`${icons}#icon-github`}></use>
              </svg>
              Github: https://github.com/MikeL538
            </a>
          </li>
          <li className="contact__list--item">
            <a
              className="contact__link"
              href="https://github.com/MikeL538"
              target="_blank"
            >
              <svg className="contact__icon">
                <use href={`${icons}#icon-github`}></use>
              </svg>
              Github: https://github.com/MikeL538
            </a>
          </li>
          <li className="contact__list--item">
            <a
              className="contact__link"
              href="https://github.com/MikeL538"
              target="_blank"
            >
              <svg className="contact__icon">
                <use href={`${icons}#icon-github`}></use>
              </svg>
              Github: https://github.com/MikeL538
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
