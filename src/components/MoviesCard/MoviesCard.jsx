import React from 'react';
import { Link } from 'react-router-dom';

import checkLogoPath from '../../images/svg/check.svg'

class MoviesCard extends React.Component {
  render() {
    return (
      <article className="movies-card">
        <div className="movies-card__status">
          {(this.props.isMyMovies) && (<button className="movies-card__check movies-card__check_color_grey movies-card__check_hover_visible" type="button">&#215;</button>)}
          {(!this.props.isMyMovies) && (<button className="movies-card__save" type="button">Сохранить</button>)}
          {(!this.props.isMyMovies) && (this.props.cardInfo.save) && (
            <button className="movies-card__check movies-card__check_color_pink" type="button">
              <img className="movies-card__check-image" src={checkLogoPath} alt="Иконка в виде галочки." />
            </button>
          )}
        </div>
        <Link to="/movies" className="movies-card__link-image">
          <img className="movies-card__image" src={this.props.cardInfo.image} alt={this.props.cardInfo.name} />
        </Link>
        <h2 className="movies-card__name medium-font medium-font_size_small">{this.props.cardInfo.name}</h2>
        <p className="movies-card__time">{this.props.cardInfo.duration}</p>
      </article>
    )
  }
}

export default MoviesCard;