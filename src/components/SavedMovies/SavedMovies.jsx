import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

class SavedMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: '',
      isCurrentShortFilms: false,
      filteredMovieCards: [],
    }
  }

  componentDidMount() {
    this.props.getMoviesCards();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.allMoviesCards != this.props.allMoviesCards) {
      this.setState({filteredMovieCards: this.props.allMoviesCards})
    }
  }

  render() {
    return (
      <>
        <Header
          pageName="SavedMovies"
          isLoggedIn="true"  
        />
        <main className="movies">
          <SearchForm 
            onChangeInput={this.props.handleChangeFilterInput.bind(this)} 
            onChangeCheckBox={this.props.handleChangeFilterCheckBox.bind(this)}
            onSubmit={this.props.handleFilterSubmit.bind(this)}
          />
          <MoviesCardList
            cards={this.state.filteredMovieCards}
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