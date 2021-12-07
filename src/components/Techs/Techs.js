import React from "react";
import styles from "./Techs.module.css";

function Techs() {
  return (
    <section id="techs" className={styles.techs}>
      <h2 className={styles.techs__heading}>Технологии</h2>
      <h3 className={styles.techs__subheading}>7 технологий</h3>
      <p className={styles.techs__paragraph}>
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className={styles.table}>
        <p className={styles.table__cell}>HTML</p>
        <p className={styles.table__cell}>CSS</p>
        <p className={styles.table__cell}>JS</p>
        <p className={styles.table__cell}>React</p>
        <p className={styles.table__cell}>Git</p>
        <p className={styles.table__cell}>Express.js</p>
        <p className={styles.table__cell}>mongoDB</p>
      </div>
    </section>
  );
}

export default Techs;
