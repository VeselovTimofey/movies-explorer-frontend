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
            <Link to="/signup" className="header__link header__link_type_registration medium-font medium-font_size_tiny">Регистрация</Link>
            <Link to="/signin" className="header__link header__link_type_login">Войти</Link>
          </>
        )}
        {(this.state.isLogin) && (
          <>
            <button type="button" onClick={this.handleNavClick} className="header__button-open">
              <img className="header__image-open" src={popupPath} alt="Три горизонтальные линии." />
            </button>
            {(this.state.isNavOpen) && (
              <div className="header__cover" />
            )}
            <nav className={this.state.isNavOpen ? "header__nav header__nav_inline" : "header__nav"}>
              <button type="button" onClick={this.handleNavClick} className="header__nav-close header__popup-element">&#215;</button>
              <Link to="/" className={this.props.pageName == "Main" ? "header__link header__nav-link header__popup-element header__link_underline" : "header__link header__nav-link header__popup-element"}>Главная</Link>
              <Link to="/movies" className={this.props.pageName == "Movies" ? "header__link header__nav-link header__link_underline" : "header__link header__nav-link"}>Фильмы</Link>
              <Link to="/saved-movies" className={this.props.pageName == "SavedMovies" ? "header__link header__nav-link header__link_underline" : "header__link header__nav-link"}>Сохранённые фильмы</Link>
              <Link to="/profile" className={this.props.pageName == "Profile" ? "header__link header__link_type_account header__link_underline" : "header__link header__link_type_account"}>Аккаунт</Link>
            </nav>
          </>
        )}
      </header>
    );
  }
}

export default Header;