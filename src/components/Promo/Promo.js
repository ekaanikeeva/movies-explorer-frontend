import React from "react";
// import classNames from "classnames";
import styles from "./Promo.module.css";
import landingLogo from "../../images/landing-logo.svg";
import AboutProject from "../AboutProject/AboutProject";

function Promo() {
  return (
    <section className={styles.promo}>
      <h1 className={styles.promo__heading}>
        Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
      <p className={styles.promo__text}>
        Листайте ниже, чтобы узнать больше про этот проект и его создателя.
      </p>
      <a
        href="https://code.s3.yandex.net/web-developer/learning-materials/web-syllabus.pdf"
        className={styles.promo__button}
        target="_blank"
      >
        Узнать больше
      </a>
      <img
        src={landingLogo}
        alt="Планета web"
        className={styles.promo__image}
      />
    </section>
  );
}

export default Promo;
