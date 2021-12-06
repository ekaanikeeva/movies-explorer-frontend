import React from "react";
import classNames from "classnames";
import { Link, NavLink, Route } from "react-router-dom";
import logo from "../../images/logo.svg";
import burger_icon from "../../images/burger-icon.svg";
import styles from "./Header.module.css";
import user_icon from "../../images/icon__user.svg";
import MenuPopup from "../MenuPopup/MenuPopup";

function Header(props) {
  const [isMenuActive, setIsMenuActive] = React.useState(false);

  function handleClick() {
    if (isMenuActive) {
      setIsMenuActive(false);
    } else setIsMenuActive(true);
  }

  function closeMenu() {
    setIsMenuActive(false);
  }

  return (
    <header className={styles.header}>
      <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
        <Link to="/">
          <img
            className={styles.header__logo}
            src={logo}
            alt="Зеленый логотип"
          />
        </Link>
      </Route>
      <Route path={["/signin", "/signup"]}>
        <Link to="/" className={styles.header__logo_sign}>
          <img
            className={styles.header__logo}
            src={logo}
            alt="Зеленый логотип"
          />
        </Link>
      </Route>
      <nav className={styles.header__links}>
        <Route exact path="/">
          <Link
            to="/signup"
            className={classNames(
              styles.header__link,
              styles.header__link_register
            )}
          >
            Регистрация
          </Link>
          <Link
            to="/signin"
            className={classNames(
              styles.header__link,
              styles.header__link_enter
            )}
          >
            Войти
          </Link>
        </Route>

        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <button
            type="button"
            className={styles.header__burger}
            onClick={handleClick}
          >
            <img
              src={burger_icon}
              alt="Кнопка меню"
              className={styles.header__burgerIcon}
            ></img>
          </button>
          <MenuPopup isMenuActive={isMenuActive} closeMenu={closeMenu} />
          <NavLink
            activeClassName={styles.link_active}
            to="/movies"
            className={classNames(
              styles.header__link,
              styles.header__link_movies
            )}
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName={styles.link_active}
            to="/saved-movies"
            className={classNames(
              styles.header__link,
              styles.header__link_movies
            )}
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            activeClassName={styles.link_active}
            to="/profile"
            className={classNames(
              styles.header__link,
              styles.header__link_movies
            )}
          >
            Аккаунт
            <img
              className={styles.header__icon}
              src={user_icon}
              alt="иконка пользователя"
            />
          </NavLink>
        </Route>
      </nav>
    </header>
  );
}

export default Header;
