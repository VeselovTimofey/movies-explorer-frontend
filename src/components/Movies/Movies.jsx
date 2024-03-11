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
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allMoviesCards != this.props.allMoviesCards) {
      this.setState({filteredMovieCards: this.props.allMoviesCards})
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