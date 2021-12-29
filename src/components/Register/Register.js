import React from "react";
import styles from "./Register.module.css";
import Form from "../Form/Form";
import { useValidation } from "../../utils/Validate";
import classNames from "classnames";

function Register({ handleRegister, isError, errorMessage, ...props }) {

  const { values, handleChange, errors, isValid } = useValidation();

  function handleSubmit(e) {
    e.preventDefault();

    handleRegister(values['name'] , values['email'] , values['password']);
  }

  return (
    <Form
      name="register"
      title="Добро пожаловать!"
      submitName="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="/signin"
      linkName="Войти"
      onSubmit={handleSubmit}
      isValid={isValid}
      isError={isError}
      errorMessage={errorMessage}
    >
      <h3 className={styles.form__hint}>Имя</h3>
      <input
        type="text"
        name="name"
        className={styles.form__input}
        minLength={2}
        maxLength={50}
        onChange={handleChange}
        required

      />
      <span className={errors["name"] === '' ? styles.form__tip : classNames(styles.form__tip, styles.form__tip_active)}>{errors["name"]}</span>
      
      <h3 className={styles.form__hint}>Email</h3>
      <input
        type="email"
        name="email"
        className={styles.form__input}
        minLength={2}
        maxLength={50}
        onChange={handleChange}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        required
      />
      <span className={errors["email"] === "" ? styles.form__tip : classNames(styles.form__tip, styles.form__tip_active)}>{errors["email"]}</span>

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

export default Register;
