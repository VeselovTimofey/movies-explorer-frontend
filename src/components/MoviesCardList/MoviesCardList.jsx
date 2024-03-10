import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import preloader from '../../images/svg/preloader.svg'

class MoviesCardList extends React.Component {

  render() {
    return (
      <>
        <section className="movies__list" aria-label="Карточки фильмов.">
          {this.props.cards.map((cardInfo, i) => (
            <MoviesCard
              key={cardInfo.id}
              cardInfo={cardInfo} 
              isMyMovies={this.props.isMyMovies}
              onSaveMoviesCards={this.props.onSaveMoviesCards}  
            />
          ))}
        </section>
        {(!this.props.isMyMovies) &&
          (
            <>
              <img className={(this.props.isMoviesLoaded) ? "movies__preloader" : "movies__preloader movies__preloader_active"} src={preloader} alt="Загрузка." />
              <button className="movies__button" type="button">Ещё</button>
            </>
          )
        }
        {(this.props.isMyMovies) && (<div className="movies__space" />)}
      </>
    )
  }
}

export default MoviesCardList;