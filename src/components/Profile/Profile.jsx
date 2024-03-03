import React from 'react';

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
        <main className="profile">
          <h1 className="profile__title medium-font_size_big">Привет, Виталий!</h1>
          <form className="profile__info">
            <h2 className="profile__subtitle">Имя</h2>
            {(!this.state.isRedaction) && (
              <p className="profile__data">Виталий</p> 
            )}
            {(this.state.isRedaction) && (
              <input className="profile__data profile__input" type="text" id="username" value="Виталий" />
            )}
            <div className="profile__line" />
            <h2 className="profile__subtitle">E-mail</h2>
            {(!this.state.isRedaction) && (
              <p className="profile__data">pochta@yandex.ru</p>
            )}
            {(this.state.isRedaction) && (
              <input className="profile__data profile__input" type="email" id="useremail" value="pochta@yandex.ru" />
            )}
          </form>
            {(!this.state.isRedaction) && (
              <>
                <button onClick={this.handleRedactionClick} className="profile__button profile__button_color_white reqular-font_size_tiny">Редактировать</button>
                <button className="profile__button profile__button_color_red medium-font_size_small">Выйти из аккаунта</button>
              </>
            )}
            {(this.state.isRedaction) && (
              <>
                <span class="profile__error">При обновлении профиля произошла ошибка.</span>
                <button className="profile__form-button log__form-button medium-font_size_medium" type="submit">Сохранить</button>
              </>
            )}
        </main>
      </>
    );
  }
}

export default Profile;