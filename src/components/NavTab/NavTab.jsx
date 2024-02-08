import React from 'react';
import { Link } from 'react-router-dom';

class NavTab extends React.Component {
  render() {
    return (
      <nav className="navtab">
        <Link className="navtab__link">О проекте</Link>
        <Link className="navtab__link">Технологии</Link>
        <Link className="navtab__link">Студент</Link>
      </nav>
    )
  }
}

export default NavTab;
