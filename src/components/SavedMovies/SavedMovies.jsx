import React from 'react';

import Header from '../Header/Header';
import cards from '../../vendor/my-cards.json';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class SavedMovies extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="saved-movies">
          <SearchForm />
          <MoviesCardList cards={cards} isMyMovies={true} />
        </main>
        <Footer />
      </>
    )
  } 
}

export default SavedMovies;