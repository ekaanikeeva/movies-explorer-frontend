import React from "react";
import styles from "./MenuPopup.module.css";
import { Route, NavLink } from "react-router-dom";
import classNames from "classnames";
import user_icon from "../../images/icon__user.svg";
import close_icon from "../../images/Group.svg";

function MenuPopup(props) {
  return (
    <section
      className={
        props.isMenuActive
          ? classNames(styles.menu, styles.menu_active)
          : styles.menu
      }
      onClick={props.closeMenu}
    >
      <div
        className={styles.nav__links}
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          type="button"
          className={styles.buttonClose}
          onClick={props.closeMenu}
        >
          <img className={styles.iconClose} src={close_icon} />
        </button>
        <Route exact path={["/", "/movies", "/saved-movies", "/profile"]}>
          <NavLink
            activeClassName={styles.activeLink}
            onClick={props.closeMenu}
            exact
            to="/"
            className={styles.link}
          >
            Главная
          </NavLink>
          <NavLink
            activeClassName={styles.activeLink}
            onClick={props.closeMenu}
            to="/movies"
            className={styles.link}
          >
            Фильмы
          </NavLink>
          <NavLink
            activeClassName={styles.activeLink}
            onClick={props.closeMenu}
            to="/saved-movies"
            className={styles.link}
          >
            Сохраненные фильмы
          </NavLink>
          <NavLink
            activeClassName={styles.activeLink}
            onClick={props.closeMenu}
            to="/profile"
            className={styles.link}
          >
            Аккаунт
            <img
              className={styles.header__icon}
              onClick={props.closeMenu}
              src={user_icon}
              alt="иконка пользователя"
            />
          </NavLink>
        </Route>
      </div>
    </section>
  );
}

export default MenuPopup;
