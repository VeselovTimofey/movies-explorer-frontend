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
        <Link className="header__logo" to="/">
          <img src={logoPath} alt="Зелёное кольцо." />
        </Link>
        {(!this.state.isLogin) && (
          <>
            <Link to="/signup" className="header__link header__link_type_registration medium-font_size_tiny">Регистрация</Link>
            <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
          </>
        )}
        {(this.state.isLogin) && (
          <>
            <nav className="header__nav">
              <Link to="/movies" className="header__nav-link">Фильмы</Link>
              <Link to="/saved-movies" className="header__nav-link">Сохранённые фильмы</Link>
            </nav>
          <Link to="/profile" className="header__link header__link_type_account">Аккаунт</Link>
          </>
        )}
      </header>
    );
  }
}

export default Header;