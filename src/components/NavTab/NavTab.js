import React from "react";
import styles from "./NavTab.module.css";

function NavTab() {
  return (
    <section className={styles.techs}>
      <a className={styles.techs__link} href="#about-project">
        О проекте
      </a>
      <a className={styles.techs__link} href="#techs">
        Технологии
      </a>
      <a className={styles.techs__link} href="#about-me">
        Студент
      </a>
    </section>
  );
}

export default NavTab;
