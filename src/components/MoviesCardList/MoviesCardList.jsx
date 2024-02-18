import React from 'react';

import preloader from '../../images/svg/preloader.svg'

class MoviesCardList extends React.Component {
  render() {
    return (
      <>
        <section className="movies__list" aria-label="Карточки фильмов.">
        </section>
        <img className="movies__preloader" src={preloader} alt="Загрузка." />
        <button className="movies__button">Ещё</button>
      </>
    )
  }
}

export default MoviesCardList;