import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class Movies extends React.Component {
  componentDidMount() {
    this.props.getMoviesCards();
    this.props.getMyMoviesCards();
  }

  render() {
    return (
      <>
        <Header 
          pageName="Movies"
          isLoggedIn="true"
        />
        <main className="movies">
          <SearchForm />
          <MoviesCardList
            cards={this.props.allMoviesCards}
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