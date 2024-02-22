import React from 'react';

import cards from '../../vendor/my-cards.json';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

class SavedMovies extends React.Component {
  render() {
    return (
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList cards={cards} isMyMovies={true} />
      </main>
    )
  } 
}

export default SavedMovies;