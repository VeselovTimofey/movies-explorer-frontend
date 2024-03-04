import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedaction: false,
    }
    this.handleRedactionClick = this.handleRedactionClick.bind(this);
  }

  handleRedactionClick() {
    this.setState(prevState => ({
      isRedaction: !prevState.isRedaction
    }));
  }

  render() {
    return (
      <>
        <Header />
        <main className="profile log">
          <h1 className="profile__title medium-font medium-font_size_big">Привет, Виталий!</h1>
          <form className="profile__info">
            <h2 className="profile__subtitle">Имя</h2>
            {(!this.state.isRedaction) && (
              <p className="profile__data">Виталий</p> 
            )}
            {(this.state.isRedaction) && (
              <input className="profile__data profile__input" type="text" id="username" defaultValue="Виталий" />
            )}
            <div className="profile__line" />
            <h2 className="profile__subtitle">E-mail</h2>
            {(!this.state.isRedaction) && (
              <p className="profile__data">pochta@yandex.ru</p>
            )}
            {(this.state.isRedaction) && (
              <input className="profile__data profile__input" type="email" id="useremail" defaultValue="pochta@yandex.ru" />
            )}
          </form>
            {(!this.state.isRedaction) && (
              <>
                <button onClick={this.handleRedactionClick} className="profile__button profile__button_color_white reqular-font reqular-font_size_tiny">Редактировать</button>
                <Link to="/">
                  <button className="profile__button profile__button_color_red medium-font medium-font_size_small">Выйти из аккаунта</button>
                </Link>
              </>
            )}
            {(this.state.isRedaction) && (
              <>
                <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                <button className="profile__form-button log__form-button medium-font medium-font_size_medium" type="submit">Сохранить</button>
              </>
            )}
        </main>
      </>
    );
  }
}

export default Profile;