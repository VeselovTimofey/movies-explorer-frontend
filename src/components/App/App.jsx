import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../../index.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';
import {ProtectedRouteElement, ProtectedRegisterAndLoginRouteElement} from '../../utils/ProtectedRoute';
import withRouter from '../../utils/WithRouter';
import useResizeWindow from '../../utils/ResizeWindow';
import CurrentUserContext from '../../context/CurrentUserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: {},
      allMoviesCards: [],
      myMoviesCards: [],
      myMoviesCardsId: [],
      isMoviesLoaded: false,
      numberCurrentMoviesCards: 0,
      oneInRow: false,
      twoInRow: false,
      threeInRow: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem("isLoggedIn")) {
      mainApi.authentication()
        .then((data) => {
          this.setState({currentUser: data.data, isLoggedIn: true})
        })
        .catch(console.error)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.isLoggedIn === true && prevState.isLoggedIn === false) {
      this.authenticationUser();
    }
  }

  handleAuthorizationUser(dataUser) {
    mainApi.signin(dataUser)
      .then(() => {
        localStorage.setItem("isLoggedIn", true);
        this.setState({isLoggedIn: true,});
        this.props.router.navigate("/movies");
      })
      .catch(console.error)
  }

  authenticationUser() {
    if (this.state.isLoggedIn) {
      mainApi.authentication()
        .then((data) => {
          this.setState({currentUser: data.data,})
        })
        .catch(console.error)
    }
  }

  handleRegister(newUser) {
    mainApi.signup(newUser)
      .then(() => {this.handleAuthorizationUser(newUser)})
      .catch(console.error)
  }

  handleSignOut() {
    mainApi.signout()
      .then(() => {
        localStorage.clear();
        this.setState({
          isLoggedIn: false,
          currentUser: {},
        })
        this.props.router.navigate("/");
      })
      .catch(console.error)
  }

  handlePatchUserInfo(newDataUser) {
    mainApi.patchUserInfo(newDataUser)
      .then((data) => {
        this.setState({currentUser: data.data})
      })
      .catch(console.error)
  }

  getMoviesCards() {
    moviesApi.getMovies()
      .then((data) => {
        data.forEach(cardInfo => {
          cardInfo.thumbnail = "https://api.nomoreparties.co" + cardInfo.image.formats.thumbnail.url
          cardInfo.image = "https://api.nomoreparties.co" + cardInfo.image.url
        });
        this.setState({
          allMoviesCards: data,
          isMoviesLoaded: true,
        })
      })
      .catch(console.error)
  }

  getMyMoviesCards() {
    mainApi.getMovies()
      .then((data) => {
        const moviesId = []
        data.data.forEach(cardInfo => {
          moviesId.push(cardInfo.movieId)
        });
        this.setState({
          myMoviesCards: data.data,
          myMoviesCardsId: moviesId,
        })
      })
      .catch(console.error)
  }

  handleSaveMovieCard(newCards) {
    mainApi.postMovie(newCards)
      .then((data) => {
        this.setState((prevState) => ({
          ...prevState,
          myMoviesCards: [...prevState.myMoviesCards, data.data],
          myMoviesCardsId: [...prevState.myMoviesCardsId, data.data.movieId],
        }))
      })
      .catch(console.error)
  }

  handleDeleteMyMovieCard(movieId, owner) {
    mainApi.deleteMovie(movieId, owner)
      .then(() => {
        this.getMyMoviesCards()
      })
      .catch(console.error)
  }

  handleChangeFilterInput(e) {
    const target = e.target.name;
    this.setState({[target]: e.target.value});
  }

  handleChangeFilterCheckBox(e) {
    this.setState({isCurrentShortFilms: !this.state.isCurrentShortFilms});

    const suitableMovieCards = [];
    this.props.allMoviesCards.forEach((movieCard) => {
      if ((movieCard.nameRU.toLowerCase().includes(this.state.nameFilter.toLowerCase())) && (this.state.isCurrentShortFilms || movieCard.duration <= 20)) {
        suitableMovieCards.push(movieCard)
      }
    });
    this.setState({filteredMovieCards: suitableMovieCards});
    this.props.inititalizationFirstsCards();
  }

  handleFilterSubmit(e) {
    e.preventDefault();

    const suitableMovieCards = [];
    this.props.allMoviesCards.forEach((movieCard) => {
      if ((movieCard.nameRU.toLowerCase().includes(this.state.nameFilter.toLowerCase())) && (!this.state.isCurrentShortFilms || movieCard.duration <= 20)) {
        suitableMovieCards.push(movieCard)
      }
    });
    this.setState({filteredMovieCards: suitableMovieCards});
    this.props.inititalizationFirstsCards();
  }

  inititalizationFirstsCards() {
    if (this.props.widthWindow >= 1280) {
      this.setState({
        numberCurrentMoviesCards: 12,
        threeInRow: true,
      })
    } else if (this.props.widthWindow >= 650) {
      this.setState({
        numberCurrentMoviesCards: 8,
        twoInRow: true,
      })
    } else {
      this.setState({
        numberCurrentMoviesCards: 5,
        oneInRow: true,
      })
    }
  }

  updateCardsWidthWindow () {
    if (this.state.threeInRow && this.props.widthWindow < 1280) {
      this.setState({
        threeInRow: false,
        twoInRow: true,
        numberCurrentMoviesCards: 8,
      })
    } else if (this.state.twoInRow && this.props.widthWindow >= 1280) {
      this.setState({
        twoInRow: false,
        threeInRow: true,
        numberCurrentMoviesCards: 12,
      })
    } else if (this.state.twoInRow && this.props.widthWindow < 650) {
      this.setState({
        twoInRow: false,
        oneInRow: true,
        numberCurrentMoviesCards: 5,
      })
    } else if (this.state.oneInRow && this.props.widthWindow >= 650) {
      this.setState({
        oneInRow: false,
        twoInRow: true,
        numberCurrentMoviesCards: 8,
      })
    }
  }

  addCurrentMoviesCards() {
    if (this.props.widthWindow >= 1280) {
      this.setState({numberCurrentMoviesCards: this.state.numberCurrentMoviesCards + 3})
    } else {
      this.setState({numberCurrentMoviesCards: this.state.numberCurrentMoviesCards + 2})
    }
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state.currentUser}>
        <Routes>
          <Route path="/" element={<Main
            isLoggedIn={this.state.isLoggedIn}
          />} />
          <Route path="/movies" element={<ProtectedRouteElement
            element={Movies}
            isLoggedIn={this.state.isLoggedIn}
            getMoviesCards={this.getMoviesCards.bind(this)}
            getMyMoviesCards={this.getMyMoviesCards.bind(this)}
            allMoviesCards={this.state.allMoviesCards}
            myMoviesCardsId={this.state.myMoviesCardsId}
            isMoviesLoaded={this.state.isMoviesLoaded}
            onSaveMovieCard={this.handleSaveMovieCard.bind(this)}
            onDeleteMyMovieCard={this.handleDeleteMyMovieCard.bind(this)}
            handleChangeFilterInput={this.handleChangeFilterInput} 
            handleChangeFilterCheckBox={this.handleChangeFilterCheckBox}
            handleFilterSubmit={this.handleFilterSubmit}
            inititalizationFirstsCards={this.inititalizationFirstsCards.bind(this)}
            updateCardsWidthWindow={this.updateCardsWidthWindow.bind(this)}
            addCurrentMoviesCards={this.addCurrentMoviesCards.bind(this)}
            numberCurrentMoviesCards={this.state.numberCurrentMoviesCards}
          />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            isLoggedIn={this.state.isLoggedIn}
            allMoviesCards={this.state.myMoviesCards}
            getMoviesCards={this.getMyMoviesCards.bind(this)}
            onDeleteMyMovieCard={this.handleDeleteMyMovieCard.bind(this)}
            handleChangeFilterInput={this.handleChangeFilterInput} 
            handleChangeFilterCheckBox={this.handleChangeFilterCheckBox}
            handleFilterSubmit={this.handleFilterSubmit}
            inititalizationFirstsCards={this.inititalizationFirstsCards.bind(this)}
            updateCardsWidthWindow={this.updateCardsWidthWindow.bind(this)}
            addCurrentMoviesCards={this.addCurrentMoviesCards.bind(this)}
            numberCurrentMoviesCards= {this.state.numberCurrentMoviesCards}
          />} />
          <Route path="/profile" element={<ProtectedRouteElement
            element={Profile}
            isLoggedIn={this.state.isLoggedIn}
            onSignOut={this.handleSignOut.bind(this)}
            onPatchUserInfo={this.handlePatchUserInfo.bind(this)}
          />} />
          <Route path="/signup" element={<ProtectedRegisterAndLoginRouteElement
            element={Register}
            onRegister={this.handleRegister.bind(this)}
          />} />
          <Route path="/signin" element={<ProtectedRegisterAndLoginRouteElement
            element={Login}
            onAuthorization={this.handleAuthorizationUser.bind(this)}
          />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    );
  }
}

export default useResizeWindow(withRouter(App));
