import React from "react";
import styles from "./Movies.module.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
function Movies() {
  return (
    <section className={styles.movies}>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
    </section>
  );
}

export default Movies;
