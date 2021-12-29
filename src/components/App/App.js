import React from "react";
import styles from "./App.module.css";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import PageNotFound from "../PageNotFound/PageNotFound";
import { deleteFilm, getSavedMovies, saveFilm } from "../../utils/mainApi";
import { getMovies } from "../../utils/MoviesApi";
import { UserContext } from "../../context/UserContext";
import { useCookies } from "react-cookie";


import {
  register,
  login,
  token,
  editUserInfo,
  signOut,
} from "../../utils/mainApi";
import ProtectedRoute from "../ProtectedRoute.js";

function App() {
  const history = useHistory();

  const [cookies, setCookies, removeCookies] = useCookies(["movies"]);
  const [searchRequest, setSearchRequest] = React.useState(
    cookies.request || null
  );
  const [noFilmText, setNoFilmText] = React.useState("");
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [saveFilms, setSaveFilms] = React.useState([]);
  const [movies, setMovies] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');

  const [loggedIn, setLoggedIn] = React.useState(cookies.loggedIn || false);
  const [isSave, setIsSave] = React.useState(false);
  const [isCheck, setIsCheck] = React.useState(cookies.checkMovies || false);
  const [isError, setIsError] = React.useState(false);

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);


  function tokenCheck() {
    token()
      .then((res) => {
        setLoggedIn(true);
        setCookies("loggedIn", true)
        setUser(res.data[0]);
      })
      .catch(() => {
        history.push("/");
        removeCookies("loggedIn")
      });
  }
  React.useEffect(() => {
    tokenCheck();
  }, [history]);

  React.useEffect(() => {
    if (user !== {}) {
        getMovies()
        .then((res) => {
          setMovies(res);
          setIsLoaded(false);
          setTimeout(() => {setNoFilmText("НИЧЕГО НЕ НАЙДЕНО")} ,1500) 
        })
        .catch((err) => {
          console.log(`Не удалось загрузить фильмы ${err}`);
          setIsLoaded(false)
        })

      getSavedMovies()
        .then((res) => {
          
          setSaveFilms(res.filter((item) => item.owner === user._id));
          setIsLoaded(false);
          setTimeout(() => {setNoFilmText("НИЧЕГО НЕ НАЙДЕНО")} ,1500) 
        })
        .catch((err) => {
          console.log(`Не удалось загрузить сохраненные фильмы ${err}`);
          setIsLoaded(false)
        })

    }
  }, [isSave, loggedIn, user]);

  React.useEffect(() => {
    if (searchRequest !== null) {
      setCookies("request", searchRequest);
    }
  }, [searchRequest]);

  React.useEffect(() => {
    if(isCheck !== false) setCookies('checkMovies', !isCheck);
    else removeCookies('checkMovies')
  }, [isCheck])

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + "ч " + minutes + "м";
  }

  function handleRegister(name, email, password) {
    register(name, email, password)
      .then(() => {
        handleLogin(email, password);
        setErrorMessage('');
        setIsError(false);
      })
      .catch((err) => {
        if(err == 409) { setErrorMessage(`Пользователь с таким email уже существует ${err}`);}
        else setErrorMessage(`Не удалось зарегистрироваться ${err}`);
        return setIsError(true);
      });
  }

  function handleLogin(email, password) {
    login(email, password)
      .then((res) => {
        console.log("login", res);
        setCookies("jwt", res.token);
        setCookies("loggedIn", true)
        setLoggedIn(true);
        history.push("/movies");
        setErrorMessage('');
        setIsError(false);
      })
      .catch((err) => {
        setLoggedIn(false);
        console.log(`Не удалось войти ${err}`);
        setErrorMessage(`Не удалось войти ${err}`);
        setIsError(true);
      });
  }

  function handleChangeInfo(name, email) {
    editUserInfo(name, email)
      .then((res) => {
        setUser(res);
        setErrorMessage('');
        setIsError(false);
      })
      .catch((err) => {
        if(err == 409) { setErrorMessage(`Пользователь с таким email уже существует ${err}`);}
        else { setErrorMessage(`Не удалось обновить данные пользователя ${err}`); }
        setIsError(true);
      });
  }

  function lieveProfile() {
    signOut()
      .then(() => {
        history.goBack();
      })
      .catch(() => {
        setLoggedIn(false);
        removeCookies("loggedIn")
      });
  }

  function updateWindowWidth() {
    setWindowWidth(window.innerWidth);
  }


  React.useEffect(() => {
    setInterval( () => {
      window.addEventListener("resize", updateWindowWidth)
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    }}, 10000
    ) 
  });



  return (
    <div className={styles.root}>
      <UserContext.Provider value={user}>
        <Header loggedIn={loggedIn} />
        <Switch>
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            loggedIn={loggedIn}
            convertTime={getTimeFromMins}
            saveFilms={saveFilms}
            movies={movies}
            isSave={isSave} setIsSave={setIsSave}
            isCheck={isCheck} setIsCheck={setIsCheck}
            isLoaded={isLoaded}
            searchRequest={searchRequest}
            setSearchRequest={setSearchRequest}
            noFilmText={noFilmText}
          />

          <ProtectedRoute
            path="/saved-movies"
            loggedIn={loggedIn}
            component={SavedMovies}
            convertTime={getTimeFromMins}
            saveFilms={saveFilms}
            movies={movies}
            isSave={isSave} setIsSave={setIsSave}
            windowWidth={windowWidth}
            cookies={cookies}
            setCookies={setCookies}
            removeCookies={removeCookies}
            noFilmText={noFilmText}
          />

          <ProtectedRoute
            exact
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            lieveProfile={lieveProfile}
            onEdit={handleChangeInfo}
            errorMessage={errorMessage} isError={isError}
          />
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/signup">
            <Register handleRegister={handleRegister} errorMessage={errorMessage} isError={isError} />
          </Route>
          <Route path="/signin" >
            <Login handleLogin={handleLogin} errorMessage={errorMessage} isError={isError}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Route exact path={["/", "/movies", "/saved-movies"]}>
          <Footer />
        </Route>
      </UserContext.Provider>
    </div>
  );
}

export default App;
