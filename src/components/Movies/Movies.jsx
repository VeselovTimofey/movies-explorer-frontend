import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

class Movies extends React.Component {
  render() {
    return (
      <main className="movies">
        <SearchForm />
        <MoviesCardList />
      </main>
    )
  } 
}

export default Movies;