import React from "react";
import styles from "./Profile.module.css";
import classNames from "classnames";
import Form from "../Form/Form";
import { UserContext } from "../../context/UserContext";
import { useValidation } from "../../utils/Validate";

function Profile({ onEdit, lieveProfile, isError, errorMessage }) {

  const { values, handleChange, errors, isValid, setIsValid } = useValidation();

  const user = React.useContext(UserContext);

  React.useEffect(() => {
    if (
      values["email"] === user.email &&
      values["name"] === user.name
    ) {
      setIsValid(false);
    }
  }, [values]);

  React.useEffect(() => {
    values['name'] = user.name;
    values['email'] = user.email;
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    onEdit(values['name'] , values['email']);
    setIsValid(false);
  }

  return (
    <Form
      name="profile"
      title={`Привет, ${user.name}!`}
      submitName="Редактировать"
      exit={lieveProfile}
      onSubmit={handleSubmit}
      link="/"
      isValid={isValid}
      isError={isError}
      errorMessage={errorMessage}
    >
      <label className={styles.form__hint}>
        Имя
        <input
          type="text"
          name="name"
          className={styles.form__input}
          minLength={2}
          maxLength={50}
          onChange={handleChange}
          defaultValue={user.name}
          required
        />
      </label>
      <span className={errors["name"] === '' ? styles.form__tip : classNames(styles.form__tip, styles.form__tip_active)}>{errors["name"]}</span>
      <label className={styles.form__hint}>
        Email
        <input
          type="email"
          name="email"
          className={styles.form__input}
          minLength={2}
          maxLength={50}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          onChange={handleChange}
          defaultValue={user.email}
          required
        />
      </label>
      <span className={errors["email"] === '' ? styles.form__tip : classNames(styles.form__tip, styles.form__tip_active)}>{errors["email"]}</span>
    </Form>
  );
}

export default Profile;
