import React from 'react';
import { Link } from 'react-router-dom';

import logoPath from '../../images/svg/logo.svg';
import { GH_PAGES_ROOT } from '../../utils/constans/gh-pages';

class SmallHeader extends React.Component {

  render() {
    return (
      <header className="small-header">
        <Link className="small-header__logo" to={GH_PAGES_ROOT + "/"}>
          <img src={logoPath} alt="Зелёное кольцо." />
        </Link>
        <h1 className="small-header__title medium-font medium-font_size_big">{this.props.headerTitle}</h1>
      </header>
    )
  }
}

export default SmallHeader;