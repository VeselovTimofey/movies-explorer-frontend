import React from 'react';

class Profile extends React.Component {
  render() {
    return (
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <section className="profile__info">
          <h2 className="profile__subtitle">Имя</h2>
          <p className="profile__data">Виталий</p>
          <div className="profile__line" />
          <h2 className="profile__subtitle">E-mail</h2>
          <p className="profile__data">pochta@yandex.ru</p>
        </section>
        <button className="profile__button profile__button_color_white">Редактировать</button>
        <button className="profile__button profile__button_color_red">Выйти из аккаунта</button>
      </main>
    );
  }
}

export default Profile;