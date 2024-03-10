class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.message}`);
    }
    return res.json();
  }

  signup(newUser) {
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: newUser.email,
        password: newUser.password,
        name: newUser.username,
      })
    })
    .then((response) => {
      return this._getResponseData(response)
    })
  }

  signin(user) {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      credentials: "include",
      secure: true,
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })
    })
    .then((response) => {
      return this._getResponseData(response)
    })
  }

  authentication() {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => {
      return this._getResponseData(response)
    })
  }

  signout() {
    return fetch(this._baseUrl + "/signout", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
    })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  patchUserInfo(newDataUser) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        email: newDataUser.email,
        name: newDataUser.name,
      })
    })
    .then((response) => {
      return this._getResponseData(response)
    })
  }

  postMovie(newMovie) {
    return fetch(this._baseUrl + "/movies", {
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newMovie)
    })
    .then((response) => {
      return this._getResponseData(response)
    })
  }
}

const mainApi = new Api('https://api.veselov.diplom.nomoredomainsmonster.ru')

export default mainApi;