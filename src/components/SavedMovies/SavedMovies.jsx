import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class SavedMovies extends React.Component {
  render() {
    return (
      <>
        <Header
          pageName="SavedMovies"
          isLoggedIn="true"  
        />
        <main className="movies">
          <SearchForm />
          <MoviesCardList
            cards={this.props.myMoviesCards}
            isMyMovies={true}  
          />
        </main>
        <Footer />
      </>
    )
  } 
}

export default SavedMovies;