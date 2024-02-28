import React from 'react';

class NavTab extends React.Component {
  render() {
    return (
      <nav className="navtab">
        <a href="#about-project" className="navtab__link medium-font_size_tiny">О проекте</a>
        <a href="#techs" className="navtab__link medium-font_size_tiny">Технологии</a>
        <a href="#about-me" className="navtab__link medium-font_size_tiny">Студент</a>
      </nav>
    )
  }
}

export default NavTab;
