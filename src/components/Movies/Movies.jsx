import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      isCurrentShortFilms: false,
      filteredMovieCards: [],
    }
  }

  componentDidMount() {
    this.props.getMoviesCards();
    this.props.getMyMoviesCards();

    if (localStorage.getItem("nameFilter")) {
      this.setState({nameFilter: localStorage.getItem("nameFilter")})
    }
    if (localStorage.getItem("isCurrentShortFilms") == "true") {
      this.setState({isCurrentShortFilms: true})
    }
    if (localStorage.getItem("filteredMovieCards")) {
      this.setState({filteredMovieCards: JSON.parse(localStorage.getItem("filteredMovieCards"))})
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if ((prevProps.allMoviesCards != this.props.allMoviesCards) && (!localStorage.getItem("filteredMovieCards"))) {
      this.setState({filteredMovieCards: this.props.allMoviesCards})
    }
    if (prevState.nameFilter != this.state.nameFilter) {
      localStorage.setItem("nameFilter", this.state.nameFilter)
    }
    if (prevState.isCurrentShortFilms != this.state.isCurrentShortFilms) {
      localStorage.setItem("isCurrentShortFilms", this.state.isCurrentShortFilms)
    }
    if (prevState.filteredMovieCards != this.state.filteredMovieCards) {
      localStorage.setItem("filteredMovieCards", JSON.stringify(this.state.filteredMovieCards))
    }
  }

  render() {
    return (
      <>
        <Header 
          pageName="Movies"
          isLoggedIn="true"
        />
        <main className="movies">
          <SearchForm 
            nameFilter={this.state.nameFilter}
            isCurrentShortFilms={this.state.isCurrentShortFilms}
            onChangeInput={this.props.handleChangeFilterInput.bind(this)} 
            onChangeCheckBox={this.props.handleChangeFilterCheckBox.bind(this)}
            onSubmit={this.props.handleFilterSubmit.bind(this)}
          />
          <MoviesCardList
            cards={this.state.filteredMovieCards}
            myMoviesCardsId={this.props.myMoviesCardsId}
            isMyMovies={false}
            isMoviesLoaded={this.props.isMoviesLoaded}
            onSaveMovieCard={this.props.onSaveMovieCard}
            onDeleteMyMovieCard={this.props.onDeleteMyMovieCard}
          />
        </main>
        <Footer />
      </>
    )
  } 
}

export default Movies;