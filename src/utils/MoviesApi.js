export const BASE_URL = "https://api.nomoreparties.co";

const _checkResponse = (res) => {
  if (res.ok) return res.json();
  else return Promise.reject(res.status);
};

export const getMovies = () => {
    return fetch(`${BASE_URL}/beatfilm-movies`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(_checkResponse);
};