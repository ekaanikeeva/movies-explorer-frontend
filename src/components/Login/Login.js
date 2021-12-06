import React from "react";
import styles from "./Login.module.css";
import Form from "../Form/Form";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // props.isRegister(true)
  function handleChangeEmail(change) {
    setEmail(change.target.value);
  }

  function handleChangePassword(change) {
    setPassword(change.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //   props.onRegister(email, password);
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
    >
      <h3 className={styles.form__hint}>Email</h3>
      <input
        value={email || ""}
        type="email"
        name="emailWithLogin"
        className={styles.form__input}
        id="input-log-email"
        minLength={2}
        maxLength={50}
        onChange={handleChangeEmail}
        required
      />
      <h3 className={styles.form__hint}>Пароль</h3>

      <input
        value={password || ""}
        onChange={handleChangePassword}
        type="password"
        name="passwordWithLogin"
        className={styles.form__input}
        minLength={8}
        id="input-log-password"
        required
      />
    </Form>
  );
}

export default Login;
