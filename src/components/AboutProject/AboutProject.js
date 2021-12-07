import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import styles from "./AboutProject.module.css";

function AboutProject() {
  return (
    <section className={styles.about} id="about-project">
      <h2 className={styles.about__heading}>О проекте</h2>
      <div className={styles.about__info}>
        <h3 className={styles.about__head}>
          Дипломный проект включал 5 этапов
        </h3>
        <p className={styles.about__text}>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
      </div>
      <div className={styles.about__info}>
        <h3 className={styles.about__head}>
          На выполнение диплома ушло 5 недель
        </h3>
        <p className={styles.about__text}>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className={styles.timetable}>
        <h4 className={styles.timetable__text}>1 неделя</h4>
        <p className={styles.timetable__text}>Back-end</p>
        <h4 className={styles.timetable__text}>4 недели</h4>
        <p className={styles.timetable__text}>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
