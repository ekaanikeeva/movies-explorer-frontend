import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footer__heading}>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className={styles.footer__info}>
        <p className={styles.footer__date}>© {year}</p>
        <nav className={styles.footer__nav}>
          <a
            className={styles.footer__link}
            href="https://practicum.yandex.ru/web"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
          <a
            className={styles.footer__link}
            href="https://github.com/ekaanikeeva"
            target="_blank"
          >
            Github
          </a>
          <a
            className={styles.footer__link}
            href="https://www.facebook.com/profile.php?id=100041963924423"
            target="_blank"
          >
            Facebook
          </a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
