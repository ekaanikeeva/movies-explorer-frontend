import React from "react";
import classNames from "classnames";
import styles from "./Portfolio.module.css";

function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2 className={styles.portfolio__heading}>Портфолио</h2>
      <a
        className={classNames(
          styles.portfolio__link,
          styles.portfolio__link_border
        )}
        href="https://github.com/ekaanikeeva/how-to-learn"
        target="_blank"
      >
        Статичный сайт<p className={styles.portfolio__link}>↗</p>
      </a>
      <a
        className={classNames(
          styles.portfolio__link,
          styles.portfolio__link_border
        )}
        href="https://github.com/ekaanikeeva/russian-travel"
        target="_blank"
      >
        Адаптивный сайт<p className={styles.portfolio__link}>↗</p>
      </a>
      <a
        className={classNames(
          styles.portfolio__link,
          styles.portfolio__link_border
        )}
        href="https://github.com/ekaanikeeva/mesto"
        target="_blank"
      >
        Одностраничное приложение<p className={styles.portfolio__link}>↗</p>
      </a>
    </section>
  );
}

export default Portfolio;
