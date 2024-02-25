import React from 'react';

import Header from '../Header/Header';
import cards from '../../vendor/cards.json';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class Movies extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="movies">
          <SearchForm />
          <MoviesCardList cards={cards} isMyMovies={false} />
        </main>
        <Footer />
      </>
    )
  } 
}

export default Movies;