import React from 'react';

import Header from '../Header/Header';
import cards from '../../vendor/cards.json';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class Movies extends React.Component {
  componentDidMount() {
    this.props.getMoviesCards();
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
            isMyMovies={false}
            isMoviesLoaded={this.props.isMoviesLoaded}
            onSaveMoviesCards={this.props.onSaveMoviesCards}
          />
        </main>
        <Footer />
      </>
    )
  } 
}

export default Movies;