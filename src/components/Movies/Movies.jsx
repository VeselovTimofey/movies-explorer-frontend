import React from 'react';

import cards from '../../vendor/cards.json';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

class Movies extends React.Component {
  render() {
    return (
      <main className="movies">
        <SearchForm />
        <MoviesCardList cards={cards} isMyMovies={false} />
      </main>
    )
  } 
}

export default Movies;