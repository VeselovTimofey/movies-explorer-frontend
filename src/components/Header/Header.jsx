import React from 'react';
import { Link } from 'react-router-dom';
import logoPath from '../../images/svg/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
    }
  }

  render() {
    return (
      <header className="header">
        <img className="header__logo" src={logoPath} alt="Зелёное кольцо." />
        {(!this.state.isLogin) && (
          <>
            <Link className="header__link header__link_type_registration">Регистрация</Link>
            <Link className="header__link header__link_type_login">Войти</Link>
          </>
        )}
        {(this.state.isLogin) && (
          <>
            <nav className="header__nav">
              <Link className="header__nav-link">Фильмы</Link>
              <Link className="header__nav-link">Сохранённые фильмы</Link>
            </nav>
          <Link className="header__link header__link_type_account">Аккаунт</Link>
          </>
        )}
      </header>
    );
  }
}

export default Header;