import React from "react";
import { Link } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  return (
    <div className={styles.notFound}>
      <span className={styles.error}>404</span>
      <h3 className={styles.title}>Страница не найдена</h3>
      <Link className={styles.button} to="/">
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
