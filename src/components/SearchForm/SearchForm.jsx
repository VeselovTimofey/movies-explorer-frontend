import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

class SearchForm extends React.Component {
  render() {
    return (
      <section className="search">
        <form className="search__form">
          <input className="search__input" type="text" placeholder="Фильм" name="movie" required />
          <button className="search__button" type="submit"></button>
        </form>
        <FilterCheckbox />
      </section>
    )
  }
}

export default SearchForm;