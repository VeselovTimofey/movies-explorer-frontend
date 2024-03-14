import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import preloader from '../../images/svg/preloader.svg'
import useResizeWindow from '../../utils/ResizeWindow';

class MoviesCardList extends React.Component {

  componentDidMount() {
    this.props.inititalizationFirstsCards();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.widthWindow != this.props.widthWindow) {
      this.props.updateCardsWidthWindow();
    }
  }

  render() {
    return (
      <>
        <section className="movies__list" aria-label="Карточки фильмов.">
          {this.props.cards.map((cardInfo, i) => {
            if (i < this.props.numberCurrentMoviesCards || this.props.isMyMovies) {
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
              <button onClick={this.props.addCurrentMoviesCards} className={(this.props.numberCurrentMoviesCards >= this.props.cards.length) ? "movies__button movies__button_off" : "movies__button"} type="button">Ещё</button>
            </>
          )
        }
        {(this.props.isMyMovies) && (<div className="movies__space" />)}
      </>
    )
  }
}

export default useResizeWindow(MoviesCardList);