import React from 'react';
import { Link } from 'react-router-dom';

import logoPath from '../../images/svg/logo.svg';

class SmallHeader extends React.Component {

  render() {
    return (
      <header className="small-header">
        <Link to="/">
          <img className="header__logo" src={logoPath} alt="Зелёное кольцо." />
        </Link>
        <h1 className="small-header__title">{this.props.headerTitle}</h1>
      </header>
    )
  }
}

export default SmallHeader;