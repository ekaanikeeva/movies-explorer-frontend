import React from "react";
import { useHistory, Route } from "react-router-dom";
import styles from "./MoviesCardList.module.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { BASE_URL } from "../../utils/MoviesApi";
import { UserContext } from "../../context/UserContext";
import classNames from "classnames";

function MoviesCardList({
  saveFilms,
  isSave,
  setIsSave,
  movies,
  request,
  convertTime,
  isCheck, 
  windowWidth,
  noFilmText,
}) {
  const user = React.useContext(UserContext);
  const history = useHistory();

  const [buttonText, setButtonText] = React.useState("Сохранить");
  const [showMovies, setShowMovies] = React.useState(windowWidth > 1170 ? 12 : windowWidth > 769 ? 8 : 5);
  const [addedByButton, setAddedByButton] = React.useState(windowWidth > 1170 ? 3 : 2);


  let filteredMovies =  movies
  .filter((item) => {
    if (request !== null) {
    if (isCheck && item.duration<=40 || !isCheck) {
      return item.nameRU.toLowerCase().includes(request)
    } else return;
  } else {
      if (isCheck && item.duration<=40 || !isCheck) {
        return item
      }
    } 
  });

  function addMoviesByButton() {
    setShowMovies(showMovies + addedByButton);
  }

  return (
    <section className={styles.movies}>
      { filteredMovies.length === 0 ?
          <p className={styles.noFilms__text}>{noFilmText}</p>
          :
      <ul className={styles.moviesCards}>
        <Route exact path="/movies">
           {
              filteredMovies
                .slice(0, showMovies)
                .map((movie) => {
                  return (
                    <MoviesCard
                      key={movie.id}
                      src={`${BASE_URL}${movie.image.url}`}
                      caption={movie.nameRU}
                      duration={convertTime(movie.duration)}
                      saveFilmsArray={saveFilms}
                      movie={movie}
                      moviesUrl={BASE_URL}
                      movieId={movie.id}
                      setIsSave={setIsSave}
                      isButtonText={buttonText}
                      setButtonText={setButtonText}
                      isCheck={isCheck}
                    />
                  );
                })
            }
        </Route>
        <Route exact path="/saved-movies">
          {saveFilms
          .slice(0, showMovies)
          .map((item) => {
            return (
              <MoviesCard
                key={item._id}
                duration={convertTime(item.duration)}
                saveFilmsArray={saveFilms}
                setIsSave={setIsSave}
                isButtonText={buttonText}
                setButtonText={setButtonText}
                movie={item}
                setIsSave={setIsSave}
                movieId={item._id}
              />
            );
          }) 
          }
        </Route>
      </ul>
}

        <Route path="/movies">
          <button className={filteredMovies.length > showMovies 
            ? classNames(styles.moviesBtn, styles.moviesBtn_active) 
            : styles.moviesBtn} onClick={ addMoviesByButton }
            >Ещё</button>
        </Route>
        <Route exact path="/saved-movies">
          <button className={saveFilms.length > showMovies 
            ? classNames(styles.moviesBtn, styles.moviesBtn_active) 
            : styles.moviesBtn} onClick={ addMoviesByButton }
            >Ещё</button>
        </Route>
    </section>
  );
}

export default MoviesCardList;
