import React from 'react';
import logoPath from '../../images/svg/logo.svg';

class SmallHeader extends React.Component {

  render() {
    return (
      <header className="small-header">
        <img className="header__logo" src={logoPath} alt="Зелёное кольцо." />
        <h1 className="small-header__title">{this.props.headerTitle}</h1>
      </header>
    )
  }
}

export default SmallHeader;