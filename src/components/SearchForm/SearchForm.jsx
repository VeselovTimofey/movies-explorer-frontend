import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

class SearchForm extends React.Component {
  render() {
    return (
      <section className="search" aria-label="Фильтрация фильмов.">
        <form className="search__form" onSubmit={this.props.onSubmit}>
          <div className="search__fild">
            <input className="search__input" onChange={this.props.onChangeInput} type="text" placeholder="Фильм" name="nameFilter" />
            <button className="search__button" type="submit"></button>
          </div>
          <FilterCheckbox onChangeCheckBox={this.props.onChangeCheckBox} />
        </form>
      </section>
    )
  }
}

export default SearchForm;