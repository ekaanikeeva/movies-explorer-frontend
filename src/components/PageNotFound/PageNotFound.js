import React from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
  const history = useHistory();

  return (
    <div className={styles.notFound}>
      <span className={styles.error}>404</span>
      <h3 className={styles.title}>Страница не найдена</h3>
      <Link
        className={styles.button}
        onClick={() => {
          history.goBack();
        }}
      >
        Назад
      </Link>
    </div>
  );
}

export default PageNotFound;
