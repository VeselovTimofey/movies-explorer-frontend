import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

class SavedMovies extends React.Component {
  render() {
    return (
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    )
  } 
}

export default SavedMovies;