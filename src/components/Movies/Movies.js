import React from "react";
import styles from "./Movies.module.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import { getMovies } from "../../utils/MoviesApi"

function Movies({ convertTime, cookies, setCookies, ...props }) {

  const [movies, setMovies] = React.useState([]);
  const [searchRequest, setSearchRequest] = React.useState(null);
  const [suitableMovies, setSuitableMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies().then((res) => {
      setMovies(res)
  })
    .catch((err) => {
      console.log(`Не удалось загрузить фильмы ${err}`);
    })
  }, [])

React.useEffect(()=>{
  if(cookies.request) {
    setSearchRequest(cookies.request)
  }
},[])

React.useEffect(()=>{
  setCookies('request', searchRequest)

},[searchRequest])


  return (
    <section className={styles.movies}>
      <SearchForm searchRequest={setSearchRequest} />
      {/* <Preloader /> */}
      <MoviesCardList movies={movies} request={searchRequest} convertTime={convertTime} cookies={cookies}/>
    </section>
  );
}

export default Movies;
