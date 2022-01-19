import React from "react";
import classNames from "classnames";
import styles from "./Form.module.css";
import { Route, Link } from "react-router-dom";

function From(props) {
  const isValid = props.isValid;
  const isError = props.isError;
  const errorMessage = props.errorMessage;

  return (
    <form
      noValidate
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
        <button
          type="submit"
          className={
            isValid
              ? styles.form__submit
              : classNames(styles.form__submit, styles.form__submit_disabled)
          }
          disabled={!isValid}
        >
          {props.submitName}
        </button>
        <span
          className={
            !isError
              ? styles.form__tip
              : classNames(styles.form__tip, styles.form__tip_active)
          }
        >
          {errorMessage}
        </span>

        <p className={classNames(styles.form__link, styles.form__link_text)}>
          {props.question}
          <Link to={props.link} className={styles.form__link}>
            {props.linkName}
          </Link>
        </p>
      </Route>
      <Route exact path="/profile">
        <div className={styles.form__linkContainer}>
          <span
            className={
              !isError
                ? styles.form__tip
                : classNames(styles.form__tip, styles.form__tip_active)
            }
          >
            {errorMessage}
          </span>
          <button
            type="submit"
            disabled={!isValid}
            className={
              isValid
                ? styles.form__submitProfile
                : classNames(
                    styles.form__submitProfile,
                    styles.form__submit_disabled
                  )
            }
          >
            {props.submitName}
          </button>
          <Link
            to={props.link}
            className={styles.form__exitLink}
            onClick={props.exit}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </Route>
    </form>
  );
}

export default From;
