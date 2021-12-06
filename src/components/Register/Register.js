import React from "react";
import styles from "./Register.module.css";
import Form from "../Form/Form";

function Register(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  // props.isRegister(true)
  function handleChangeEmail(change) {
    setEmail(change.target.value);
  }

  function handleChangePassword(change) {
    setPassword(change.target.value);
  }

  function handleChangeName(change) {
    setName(change.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.onRegister(name, email, password);
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
    >
      <h3 className={styles.form__hint}>Имя</h3>
      <input
        value={name || ""}
        type="text"
        name="nameWithRegister"
        className={styles.form__input}
        id="input-reg-name"
        minLength={2}
        maxLength={50}
        onChange={handleChangeName}
      />
      <h3 className={styles.form__hint}>Email</h3>
      <input
        value={email || ""}
        type="email"
        name="emailWithRegister"
        className={styles.form__input}
        id="input-reg-email"
        minLength={2}
        maxLength={50}
        onChange={handleChangeEmail}
      />
      <h3 className={styles.form__hint}>Пароль</h3>
      {/* <span className="input-title-error form__input-error" /> */}
      <input
        value={password || ""}
        onChange={handleChangePassword}
        type="password"
        name="passwordWithRegister"
        className={styles.form__input}
        minLength={8}
        id="input-reg-password"
      />
      <p className={styles.form__tip}>Что-то пошло не так...</p>
      {/* <span className="input-link-error form__input-error" /> */}
    </Form>
  );
}

export default Register;
