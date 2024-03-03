import React from 'react';

class FilterCheckbox extends React.Component {
  render() {
    return (
      <article className="filter" aria-label="Кнопка 'показывать только короткометражки'.">
        <label for="short-films" className="filter__checkbox" />
        <input className="filter__check-button" type="checkbox" name="short-films" id="short-films" />
        <div className="filter__check-space" />
        <div className="filter__checkmark" />
        <label for="short-films" className="filter__label">Короткометражки</label>
      </article>
    )
  }
}

export default FilterCheckbox;