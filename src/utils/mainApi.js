export const BASE_URL = "https://api.movies-search.nomoredomains.rocks";

const _checkResponse = (res) => {
    if (res.ok) return res.json();
    else return Promise.reject(res.status);
  };

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        credentials: 'include',
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    }).then(_checkResponse);
}

export const login = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(_checkResponse);
  };

  export const token = () => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      },
    }).then(_checkResponse);
  };

  export const editUserInfo = (name, email) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "PATCH",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(_checkResponse);
  };

  export const signOut = () => {
      return fetch(`${BASE_URL}/signout`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      }).then(_checkResponse);
    };

    export const saveFilm = (film) => {
      return fetch(`${BASE_URL}/movies`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          film
        ),
      }).then(_checkResponse);
    };

    export const deleteFilm = (movieId) => {
      return fetch(`${BASE_URL}/movies/${movieId}`, {
        method: "DELETE",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ movieId }),
      }).then(_checkResponse);
    };

    export const getSavedMovies = () => {
      return fetch(`${BASE_URL}/movies`, {
        method: "GET",
        credentials: 'include',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(_checkResponse);
    }