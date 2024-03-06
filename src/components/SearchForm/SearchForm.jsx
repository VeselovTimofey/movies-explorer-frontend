import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

class SearchForm extends React.Component {
  render() {
    return (
      <section className="search" aria-label="Фильтрация фильмов.">
        <form className="search__form">
          <div className="search__fild">
            <input className="search__input" type="text" placeholder="Фильм" name="movie" required />
            <button className="search__button" type="submit"></button>
          </div>
          <FilterCheckbox />
        </form>
      </section>
    )
  }
}

export default SearchForm;