class ApiMovies {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }
  
  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.message}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(this._baseUrl + "/beatfilm-movies", {
      method: "GET",
      headers: {"Content-Type": "application/json"},
    })
    .then((response) => {
      return this._getResponseData(response)
    })
  }
}

const moviesApi = new ApiMovies("https://api.nomoreparties.co")

export default moviesApi;