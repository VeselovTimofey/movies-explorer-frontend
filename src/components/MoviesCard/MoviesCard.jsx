import React from 'react';

import checkLogoPath from '../../images/svg/check.svg'

class MoviesCard extends React.Component {
  render() {
    return (
      <template>
        <article className="movies-card">
          <button className="movies-card__save" type="button">сохранить</button>
          <button className="movies-card__unsave" type="button">
            <img src={checkLogoPath} alt="Иконка в виде галочки." />
          </button>
          <img className="movies-card__image" />
          <h2 className="movies-card__name"></h2>
          <p className="movies-card__time"></p>
        </article>
      </template>
    )
  }
}

export default MoviesCard;