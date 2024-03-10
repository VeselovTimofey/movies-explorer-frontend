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
import ProtectedRouteElement from '../../utils/ProtectedRoute';
import withRouter from '../../utils/WithRouter';
import CurrentUserContext from '../../context/CurrentUserContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: {},
      allMoviesCards: [],
      isMoviesLoaded: false,
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
        this.setState({
          allMoviesCards: data,
          isMoviesLoaded: true,
        })
      })
      .catch(console.error)
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
            allMoviesCards={this.state.allMoviesCards}
            isMoviesLoaded={this.state.isMoviesLoaded}
          />} />
          <Route path="/saved-movies" element={<ProtectedRouteElement
            element={SavedMovies}
            isLoggedIn={this.state.isLoggedIn}
          />} />
          <Route path="/profile" element={<ProtectedRouteElement
            element={Profile}
            isLoggedIn={this.state.isLoggedIn}
            onSignOut={this.handleSignOut.bind(this)}
            onPatchUserInfo={this.handlePatchUserInfo.bind(this)}
          />} />
          <Route path="/signup" element={<Register
            onRegister={this.handleRegister.bind(this)}
          />} />
          <Route path="/signin" element={<Login
            onAuthorization={this.handleAuthorizationUser.bind(this)}
          />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    );
  }
}

export default withRouter(App);
