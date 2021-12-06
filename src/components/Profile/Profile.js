import React from "react";
import styles from "./Profile.module.css";
import Form from "../Form/Form";

function Profile() {
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
      name="profile"
      title="Привет, Виталий!"
      submitName="Редактировать"
      onSubmit={handleSubmit}
      link="/"
    >
      <label className={styles.form__hint}>
        Имя
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
      </label>
      <label className={styles.form__hint}>
        Email
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
      </label>
    </Form>
  );
}

export default Profile;
