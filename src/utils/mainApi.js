export const BASE_URL = "https://api.movies-search.nomoredomains.rocks";

const _checkResponse = (res) => {
    if (res.ok) return res.json();
    else return Promise.reject(res.status);
  };

export const register = () => {
    return fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(_checkResponse);
}