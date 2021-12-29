import React from "react";
import styles from "./SavedMovies.module.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getSavedMovies } from "../../utils/mainApi";
import Preloader from "../Preloader/Preloader";

function SavedMovies({cookies, setCookies, removeCookies, movies, saveFilms, noFilmText,
  convertTime, isSave, setIsSave, windowWidth, isLoaded }) {

  const [request, setRequest] = React.useState(null);
const [isCheck, setIsCheck] = React.useState(cookies.shortSaveMovies || false);
const [showMovies, setShowMovies] = React.useState(windowWidth > 1170 ? 12 : windowWidth > 769 ? 8 : 5);
  const [addedByButton, setAddedByButton] = React.useState(windowWidth > 1170 ? 3 : 2);

let filteredSaveMovies = saveFilms.filter((item) => {
  if (request !== null) {
    if (isCheck && item.duration<=40 || !isCheck) {
    return item.nameRU.toLowerCase().includes(request)
  } else return
  } else {
    if (isCheck && item.duration<=40 || !isCheck) {
      return item
    }
  } 
  
})

React.useEffect(() => {
  if(isCheck !== false) setCookies('shortSaveMovies', !isCheck);
  else removeCookies('shortSaveMovies')
}, [isCheck])

  return (
    <section>
      <SearchForm nameInput="search" setRequest={setRequest} request={request} 
      isCheck={isCheck} setIsCheck={setIsCheck}/>
      { isLoaded ? <Preloader /> :
      <MoviesCardList request={request} saveFilms={filteredSaveMovies} movies={movies} convertTime={convertTime} 
      isCheck={isCheck} isSave={isSave} setIsSave={setIsSave} windowWidth={windowWidth} showMovies={showMovies}
      addedByButton={addedByButton} noFilmText={noFilmText}/>}
    </section>
  );
}

export default SavedMovies;
