import React from 'react';
import { Link } from 'react-router-dom';

import popupPath from '../../images/svg/popup.svg';
import logoPath from '../../images/svg/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isNavOpen: false,
    }
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick() {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }));
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
            <button onClick={this.handleNavClick} className="header__button-open">
              <img className="header__image-open" src={popupPath} alt="Три горизонтальные линии." />
            </button>
            <nav className={this.state.isNavOpen ? "header__nav header__popup_inline" : "header__nav"}>
              <button onClick={this.handleNavClick} className="header__nav-close header__popup-element">&#215;</button>
              <Link to="/" className="header__nav-link header__popup-element">Главная</Link>
              <Link to="/movies" className="header__nav-link header__link_underline">Фильмы</Link>
              <Link to="/saved-movies" className="header__nav-link">Сохранённые фильмы</Link>
              <Link to="/profile" className="header__link header__link_type_account">Аккаунт</Link>
            </nav>
          </>
        )}
      </header>
    );
  }
}

export default Header;