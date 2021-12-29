import React from "react";
import { Route, useHistory } from "react-router-dom";
import styles from "./MoviesCard.module.css";
import closeImg from "../../images/closeicon.svg";
import { saveFilm, deleteFilm } from "../../utils/mainApi";
import { UserContext } from "../../context/UserContext";
import classNames from "classnames";
//
function MoviesCard({
  setIsSave,
  saveFilmsArray,
  moviesUrl,
  isButtonText,
  movie,
  caption,
  src,
  duration,
  movieId,
  isCheck,
  shortMovie,
  ...props
}) {
  const user = React.useContext(UserContext);

  const [buttonText, setButtonText] = React.useState("Сохранить");
  const [usersFilms, setUsersFilms] = React.useState([]);
  const [savedMovie, setSavedMovie] = React.useState("");
  const [isMovieSave, setIsMovieSave] = React.useState(false);
  const [isMovieDelete, setIsMovieDelete] = React.useState(false);
  const [buttonDisaled, setButtonDisabled] = React.useState(false);
const history=useHistory();

  React.useEffect(() => {
    setUsersFilms(
      saveFilmsArray.filter((item) => {
        if (item.movieId === movie.id) {
          setSavedMovie(item);
          setIsSave(true);
          setButtonText("✓");
          setIsMovieSave(true);
          setIsSave(true);
        } else {
          setIsSave(false);
        }
      })
    );
  }, [saveFilmsArray]);


  function savedFilm(film) {
    setButtonDisabled(true)
    saveFilm(film)
      .then((res) => {
        console.log("сохранен");
        setButtonText("✓");
        setIsMovieSave(true);
        setIsSave(true);
        setButtonDisabled(false)
      })
      .catch((err) => {
        console.log(`Не удалось сохранить фильм ${err}`);
        setButtonDisabled(false)
      });
  }

  function removeFilm() {
    setButtonDisabled(true)
    deleteFilm(movie._id)
        .then((res) => {
          console.log("фильм удален");
          setIsMovieSave(true);
          setIsSave(true);
          setIsMovieDelete(true)
          setButtonDisabled(false)
        })
        .catch((err) => {
          setButtonDisabled(false)
        });
  }

  function handleSave() {
    setButtonDisabled(true)
    if (isMovieSave) {
      deleteFilm(savedMovie._id)
        .then((res) => {
          console.log("фильм удален");
          setButtonText("Сохранить");
          setIsMovieSave(false);
          setIsSave(true);
          setButtonDisabled(false)
        })
        .catch((err) => {
          setButtonDisabled(false)
          console.log(err)
        });
    } else {
      savedFilm({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `${moviesUrl}${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `${moviesUrl}${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      });
    }
  }

  return (
    <li className={isMovieDelete ? classNames(styles.card, styles.card_disactive) : styles.card}>
      <Route exact path="/movies">
        <button
            className={isMovieSave ? styles.pinkBtn : styles.saveBtn}
            onClick={handleSave} disabled={buttonDisaled}
          >
            {buttonText}
          </button>
            <a className={styles.photo} href={movie.trailerLink ? movie.trailerLink : movie.thumbnail} target="_blank"><img className={styles.photo} src={src} alt={caption}/></a>
          <h3 className={styles.caption}>{caption}</h3>
          
          <p className={styles.filmDuration}>{duration}</p>
      </Route>
      <Route exact path="/saved-movies">
      <button className={styles.closeButton} onClick={removeFilm} disabled={buttonDisaled}>
            <img src={closeImg} alt="закрыть"></img>
          </button>
      <a className={styles.photo} target="_blank" href={movie.trailerLink ? movie.trailerLink : movie.thumbnail}><img
            className={styles.photo}
            src={movie.image}
            alt={movie.nameRU}
          /></a>
          <h3 className={styles.caption}>{movie.nameRU}</h3>
          <p className={styles.filmDuration}>{duration}</p>
      </Route>
    </li>
  );
}

export default MoviesCard;
