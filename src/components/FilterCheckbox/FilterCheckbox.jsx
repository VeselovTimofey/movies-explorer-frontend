import React from 'react';

class FilterCheckbox extends React.Component {
  render() {
    return (
      <article className="filter" aria-label="Кнопка 'показывать только короткометражки'.">
        <label htmlFor="short-films" className="filter__checkbox" />
        <input className="filter__check-button" onChange={this.props.onChangeCheckBox} checked={this.props.isCurrentShortFilms} type="checkbox" name="isCurrentShortFilms" id="short-films"/>
        <div className="filter__check-space" />
        <div className="filter__checkmark" />
        <label htmlFor="short-films" className="filter__label">Короткометражки</label>
      </article>
    )
  }
}

export default FilterCheckbox;