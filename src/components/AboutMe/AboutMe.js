import React from "react";
import styles from "./AboutMe.module.css";
import { Link } from "react-router-dom";
import photo from "../../images/IMG_8754.jpg";

function AboutMe() {
  return (
    <section id="about-me" className={styles.aboutme}>
      <h2 className={styles.aboutme__heading}>Студент</h2>
      <h3 className={styles.aboutme__name}>Екатерина</h3>
      <p className={styles.aboutme__subtitle}>Фронтенд-разработчик, 29 лет</p>
      <p className={styles.aboutme__info}>
        Живу в Казани. Училась в КФУ, по направлению “Бизнес - информатика”.
        Сфера Веб-разработки всегда меня интересовала, поэтому зимой 2021 года я
        пошла обучаться в "Яндекс Практикум". За 9 месяцев учебы, научилась
        делать адаптивные сайты, с применением HTML5, CSS3, JS, React JS, Git. В
        свободное время, люблю кататься на горных лыжах, плавать,
        путешествовать, учиться новому в Веб-разработке и английском.
      </p>
      <div className={styles.aboutme__links}>
        <a className={styles.aboutme__link} target="_blank" href="https://www.facebook.com/profile.php?id=100041963924423">
          Facebook
        </a>
        <a
          className={styles.aboutme__link}
          target="_blank"
          href="https://github.com/ekaanikeeva"
        >
          Github
        </a>
      </div>
      <img className={styles.aboutme__photo} src={photo} alt="Фотография" />
    </section>
  );
}

export default AboutMe;
