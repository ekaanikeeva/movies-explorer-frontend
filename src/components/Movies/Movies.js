import React from "react";
import { Route, useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi";
import styles from "./Movies.module.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getSavedMovies, saveFilm } from "../../utils/mainApi";

function Movies({
  movies,
  convertTime,
  saveFilms,
  isSave, 
  setIsSave,
  isCheck, setIsCheck,
  windowWidth,
  searchRequest,
  setSearchRequest,
  isLoaded,
  setIsLoaded,
  noFilmText,
  ...props
}) {
  const user = React.useContext(UserContext);
  const history = useHistory();

  return (
    <section className={styles.movies}>
      <SearchForm setRequest={setSearchRequest} request={searchRequest} isCheck={isCheck} setIsCheck={setIsCheck}
          nameInput="search" />
      {isLoaded ? (
        <Preloader />
      ) : (
        <>
        <Route exact path="/movies">
          
          <MoviesCardList
          isCheck={isCheck}
            movies={movies}
            request={searchRequest}
            isSave={isSave}
            setIsSave={setIsSave}
            saveFilms={saveFilms}
            convertTime={convertTime}
            windowWidth={windowWidth}
            noFilmText={noFilmText}
          />
        </Route>
      </>
      )}
      
      
    </section>
  );
}

export default Movies;
