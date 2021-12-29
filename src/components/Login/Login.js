import React from "react";
import classNames from "classnames";
import styles from "./Login.module.css";
import Form from "../Form/Form";
import { useValidation } from "../../utils/Validate";

function Login({ handleLogin, isError, errorMessage }) {

  const { values, handleChange, errors, isValid } = useValidation();

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(values['email'] , values['password']);
  }

  return (
    <Form
      name="login"
      title="Рады видеть!"
      submitName="Войти"
      question=" Еще не зарегистрированы?"
      link="/signup"
      linkName="Регистрация"
      onSubmit={handleSubmit}
      isValid={isValid}
      isError={isError}
      errorMessage={errorMessage}
    >
      <h3 className={styles.form__hint}>Email</h3>
      <input
        type="email"
        name="email"
        className={styles.form__input}
        minLength={2}
        maxLength={50}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        onChange={handleChange}
        required
      />
      <span className={errors["email"] === '' ? styles.form__tip : classNames(styles.form__tip, styles.form__tip_active)}>{errors["email"]}</span>

      <h3 className={styles.form__hint}>Пароль</h3>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        className={styles.form__input}
        minLength={8}
        required
      />
      <span className={errors["password"] === '' ? styles.form__tip : classNames(styles.form__tip, styles.form__tip_active)}>{errors["password"]}</span>
    </Form>
  );
}

export default Login;
