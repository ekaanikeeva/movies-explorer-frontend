import React from "react";
import styles from "./MoviesCardList.module.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { BASE_URL } from "../../utils/MoviesApi";

function MoviesCardList({ movies, request, convertTime, ...props }) {

  const moviesList= Array.from(movies);


  return (
    <section className={styles.movies}>
      <ul className={styles.moviesCards}>
        {request!==null ? moviesList.filter(item => {
          return item.nameRU
          .toLowerCase()
          .includes(request)})
          .map((movie) => {
           return (<MoviesCard key={movie.id} src={`${BASE_URL}${movie.image.url}`} 
           caption={movie.nameRU} duration={convertTime(movie.duration)} />)
        }) : ""}
      </ul>

      <button className={styles.moviesBtn}>Ещё</button>
    </section>
  );
}

export default MoviesCardList;
