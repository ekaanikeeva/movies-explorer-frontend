import React from "react";
import classNames from "classnames";
import styles from "./SearchForm.module.css";
import searchIcon from "../../images/search-icon.svg";
import findBtn from "../../images/find.svg";

function SearchForm({ setRequest, request, nameInput, isCheck, setIsCheck }) {
  const [result, setResult] = React.useState(request);

  function handleChangeSearch(change) {
    setResult(change.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setRequest(result);
  }

  return (
    <div className={styles.search}>
      <form
        className={styles.form}
        action=""
        method="get"
        onSubmit={handleSubmit}
      >
        <div className={styles.searchContainer}>
          <img
            className={styles.search__image}
            src={searchIcon}
            alt="Картинка лупа"
          />
          <input
            value={result || ""}
            type="text"
            className={styles.form__input}
            name={nameInput}
            placeholder="Фильм"
            type="search"
            onChange={handleChangeSearch}
          />
          <button className={styles.form__submit} type="submit">
            <img
              className={styles.form__findImg}
              src={findBtn}
              alt="Кнопка поиска фильмов"
            />
          </button>
        </div>
        <div className={styles.checkboxContainer}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              className={styles.checkbox}
              onChange={() => setIsCheck(!isCheck)}
              defaultChecked={isCheck}
            ></input>
            <span className={classNames(styles.slider, styles.round)}></span>
          </label>
          <p className={styles.checkbox__text}>Краткометражки</p>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
