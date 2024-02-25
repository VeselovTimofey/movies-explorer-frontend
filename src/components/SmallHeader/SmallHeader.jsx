import React from 'react';
import { Link } from 'react-router-dom';

import logoPath from '../../images/svg/logo.svg';

class SmallHeader extends React.Component {

  render() {
    return (
      <header className="small-header">
        <Link className="header__logo" to="/">
          <img src={logoPath} alt="Зелёное кольцо." />
        </Link>
        <h1 className="small-header__title medium-font_size_big">{this.props.headerTitle}</h1>
      </header>
    )
  }
}

export default SmallHeader;