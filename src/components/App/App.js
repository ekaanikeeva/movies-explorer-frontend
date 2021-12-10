import React from "react";
import styles from "./App.module.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import { getMovies } from "../../utils/MoviesApi";
import { MoviesContext } from "../../context/MoviesContext";
import { useCookies } from 'react-cookie';

function App() {
  
  // const [movies, setMovies] = React.useState("");
  const [cookies, setCookies] = useCookies(['movies']);
  // const [searchResultCookies, setSearchResultCookies, removeCookies] =useCookies('search')
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
};

  // console.log(cookies)

  return (
    <div className={styles.root}>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        {/* <MoviesContext.Provider value={movies}> */}
          <Route path="/movies">
            <Movies cookies={cookies} setCookies={setCookies} convertTime={getTimeFromMins} />
          </Route>
          <Route path="/saved-movies">
            <SavedMovies  convertTime={getTimeFromMins} />
          </Route>
        {/* </MoviesContext.Provider> */}
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Route exact path={["/", "/movies", "/saved-movies"]}>
        <Footer />
      </Route>
    </div>
  );
}

export default App;
