import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class SavedMovies extends React.Component {
  componentDidMount() {
    this.props.getMoviesCards();
  }

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
            onDeleteMyMovieCard={this.props.onDeleteMyMovieCard}
          />
        </main>
        <Footer />
      </>
    )
  } 
}

export default SavedMovies;