import React from 'react';

import checkLogoPath from '../../images/svg/check.svg'

class MoviesCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaveMovieCardClick = this.handleSaveMovieCardClick.bind(this);
    this.handleDeleteMyMovieCard = this.handleDeleteMyMovieCard.bind(this);
  }

  handleSaveMovieCardClick() {
    const newMovieCard = {
      contry: this.props.cardInfo.country,
      director: this.props.cardInfo.director,
      duration: this.props.cardInfo.duration,
      year: this.props.cardInfo.year,
      description: this.props.cardInfo.description,
      image: this.props.cardInfo.image,
      trailerLink: this.props.cardInfo.trailerLink,
      thumbnail: this.props.cardInfo.thumbnail,
      movieId: this.props.cardInfo.id,
      nameRU: this.props.cardInfo.nameRU,
      nameEN: this.props.cardInfo.nameEN,
    }

    this.props.onSaveMovieCard(newMovieCard);
  }

  handleDeleteMyMovieCard() {
    this.props.onDeleteMyMovieCard(this.props.cardInfo.movieId || this.props.cardInfo.id);
  }

  render() {
    return (
      <article className="movies-card">
        <div className="movies-card__status">
          {(this.props.isMyMovies) && (<button onClick={this.handleDeleteMyMovieCard} className="movies-card__check movies-card__check_color_grey movies-card__check_hover_visible" type="button">&#215;</button>)}
          {(!this.props.isMyMovies) && !(this.props.myMoviesCardsId.includes(this.props.cardInfo.id)) && (
            <button onClick={this.handleSaveMovieCardClick} className="movies-card__save" type="button">Сохранить</button>
          )}
          {(!this.props.isMyMovies) && (this.props.myMoviesCardsId.includes(this.props.cardInfo.id)) && (
            <button onClick={this.handleDeleteMyMovieCard} className="movies-card__check movies-card__check_color_pink" type="button">
              <img className="movies-card__check-image" src={checkLogoPath} alt="Иконка в виде галочки." />
            </button>
          )}
        </div>
        <a href={this.props.cardInfo.trailerLink} target="_blank" className="movies-card__link-image">
          <img className="movies-card__image" src={this.props.cardInfo.image} alt={this.props.cardInfo.nameRU} />
        </a>
        <h2 className="movies-card__name medium-font medium-font_size_small">{this.props.cardInfo.nameRU}</h2>
        <p className="movies-card__time">{this.props.cardInfo.duration} м</p>
      </article>
    )
  }
}

export default MoviesCard;