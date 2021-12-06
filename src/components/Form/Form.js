import React from "react";
import classNames from "classnames";
import styles from "./Form.module.css";
import { Route, Link } from "react-router-dom";

function From(props) {
  return (
    <form
      action="#"
      name={props.name}
      className={styles.form}
      onSubmit={props.onSubmit}
    >
      <Route exact path={["/signin", "/signup"]}>
        <h2 className={styles.form__title}>{props.title}</h2>
      </Route>
      <Route exact path="/profile">
        <h2
          className={classNames(styles.form__title, styles.form__profileTitle)}
        >
          {props.title}
        </h2>
      </Route>
      {props.children}
      <Route exact path={["/signin", "/signup"]}>
        <button type="submit" className={styles.form__submit}>
          {props.submitName}
        </button>
        <p className={classNames(styles.form__link, styles.form__link_text)}>
          {props.question}
          <Link to={props.link} className={styles.form__link}>
            {props.linkName}
          </Link>
        </p>
      </Route>
      <Route exact path="/profile">
        <div className={styles.form__linkContainer}>
          <button type="submit" className={styles.form__submitProfile}>
            {props.submitName}
          </button>
          <Link to={props.link} className={styles.form__exitLink}>
            Выйти из аккаунта
          </Link>
        </div>
      </Route>
    </form>
  );
}

export default From;
