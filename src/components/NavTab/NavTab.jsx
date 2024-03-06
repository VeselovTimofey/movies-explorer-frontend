import React from 'react';

class NavTab extends React.Component {
  render() {
    return (
      <nav className="navtab">
        <ul className="navtab__list">
          <li>
            <a href="#about-project" className="navtab__link medium-font medium-font_size_tiny">О проекте</a>
          </li>
          <li>
            <a href="#techs" className="navtab__link medium-font medium-font_size_tiny">Технологии</a>
          </li>
          <li>
            <a href="#about-me" className="navtab__link medium-font medium-font_size_tiny">Студент</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavTab;
