import React from "react";
import { Route } from "react-router-dom";
import styles from "./MoviesCard.module.css";
import closeImg from "../../images/closeicon.svg";

function MoviesCard(props) {
  const [isSave, setIsSave] = React.useState(false);

  const [buttonText, setButtonText] = React.useState("Сохранить");

  function handleSave() {
    console.log(isSave);
    if (isSave) {
      setButtonText("Сохранить");
      setIsSave(false);
    } else {
      setButtonText("✓");
      setIsSave(true);
    }
  }

  return (
    <>
      <li className={styles.card}>
        <img className={styles.photo} src={props.src} alt={props.caption} />
        <h3 className={styles.caption}>{props.caption}</h3>
        <Route exact path="/movies">
          <button
            className={isSave ? styles.pinkBtn : styles.saveBtn}
            onClick={handleSave}
          >
            {buttonText}
          </button>
        </Route>
        <Route exact path="/saved-movies">
          <button className={styles.closeButton} onClick={handleSave}>
            <img src={closeImg} alt="закрыть"></img>
          </button>
        </Route>
        <p className={styles.filmDuration}>{props.duration}</p>
      </li>
    </>
  );
}

export default MoviesCard;
