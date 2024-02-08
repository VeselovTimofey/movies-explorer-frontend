import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/svg/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logoPath} alt="Зелёное кольцо." />
        <Link className="header__link header__link_type_registration">Регистрация</Link>
        <Link className="header__link header__link_type_login">Войти</Link>
      </header>
    );
  }
}

export default Header;