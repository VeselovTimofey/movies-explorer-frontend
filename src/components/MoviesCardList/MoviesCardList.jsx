import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import preloader from '../../images/svg/preloader.svg'

class MoviesCardList extends React.Component {
  render() {
    return (
      <>
        <section className="movies__list" aria-label="Карточки фильмов.">
          {this.props.cards.map((cardInfo, i) => (
            <MoviesCard key={cardInfo.id} cardInfo={cardInfo} isMyMovies={this.props.isMyMovies} />
          ))}
        </section>
        <img className={(this.props.isMoviesLoaded) ? "movies__preloader" : "movies__preloader movies__preloader_active"} src={preloader} alt="Загрузка." />
        {(!this.props.isMyMovies) &&
        (<button className="movies__button" type="button">Ещё</button>)}
        {(this.props.isMyMovies) && 
        (<div className="movies__space" />)}
      </>
    )
  }
}

export default MoviesCardList;