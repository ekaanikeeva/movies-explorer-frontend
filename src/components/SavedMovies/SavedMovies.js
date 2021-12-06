import React from "react";
import styles from "./SavedMovies.module.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <section>
      <SearchForm />
      <MoviesCardList />
    </section>
  );
}

export default SavedMovies;
