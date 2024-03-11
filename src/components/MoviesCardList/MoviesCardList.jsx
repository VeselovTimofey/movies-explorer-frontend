import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import preloader from '../../images/svg/preloader.svg'

class MoviesCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberCurrentMoviesCards: 0,
    }
    this.addCurrentMoviesCards = this.addCurrentMoviesCards.bind(this);
  }

  componentDidMount() {
    if (window.innerWidth >= 1280) {
      this.setState({numberCurrentMoviesCards: 12})
    } else if (window.innerWidth >= 650) {
      this.setState({numberCurrentMoviesCards: 8})
    } else {
      this.setState({numberCurrentMoviesCards: 5})
    }
  }

  addCurrentMoviesCards() {
    if (window.innerWidth >= 1280) {
      this.setState({numberCurrentMoviesCards: this.state.numberCurrentMoviesCards + 3})
    } else if (window.innerWidth >= 650) {
      this.setState({numberCurrentMoviesCards: this.state.numberCurrentMoviesCards + 2})
    } else {
      this.setState({numberCurrentMoviesCards: this.state.numberCurrentMoviesCards + 1})
    }
  }

  render() {
    return (
      <>
        <section className="movies__list" aria-label="Карточки фильмов.">
          {this.props.cards.map((cardInfo, i) => {
            if (i < this.state.numberCurrentMoviesCards || this.props.isMyMovies) {
              return (<MoviesCard
                key={cardInfo.id || cardInfo.movieId}
                cardInfo={cardInfo}
                myMoviesCardsId={this.props.myMoviesCardsId}
                isMyMovies={this.props.isMyMovies}
                onSaveMovieCard={this.props.onSaveMovieCard}
                onDeleteMyMovieCard={this.props.onDeleteMyMovieCard}
              />)
            }
          })}
          {(this.props.cards.length == 0 && (this.props.isMoviesLoaded || this.props.isMyMovies)) && (
            <span className="movies__list-span medium-font medium-font_size_big">Ничего не найдено</span>
          )}
        </section>
        {(!this.props.isMyMovies) &&
          (
            <>
              <img className={(this.props.isMoviesLoaded) ? "movies__preloader" : "movies__preloader movies__preloader_active"} src={preloader} alt="Загрузка." />
              <button onClick={this.addCurrentMoviesCards} className={(this.state.numberCurrentMoviesCards >= this.props.cards.length) ? "movies__button movies__button_off" : "movies__button"} type="button">Ещё</button>
            </>
          )
        }
        {(this.props.isMyMovies) && (<div className="movies__space" />)}
      </>
    )
  }
}

export default MoviesCardList;