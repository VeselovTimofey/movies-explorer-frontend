import React from 'react';

import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';

class Profile extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      oldContext: this.context,
      isRedaction: false,
    }
    this.handleRedactionClick = this.handleRedactionClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.context.name,
      email: this.context.email,
      oldContext: this.context,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.context !== prevState.oldContext) {
      this.setState({
        name: this.context.name,
        email: this.context.email,
        oldContext: this.context,
        isRedaction: false,
      })
    }
  }

  handleRedactionClick() {
    this.setState(prevState => ({
      isRedaction: !prevState.isRedaction
    }));
  }

  handleChange(e) {
    const target = e.target.name;
    this.setState({[target]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    const newDataUser = {
      name: this.state.name,
      email: this.state.email,
    }

    this.props.onPatchUserInfo(newDataUser);
  }

  render() {
    return (
      <>
        <Header 
          pageName="Profile"
          isLoggedIn="true"
        />
        <main className="content">
          <section className="profile log">
            <h1 className="profile__title medium-font medium-font_size_big">Привет, {this.context.name}!</h1>
            <form className="profile__form" onSubmit={this.handleSubmit.bind(this)}>
              <section className="profile__info">
                <h2 className="profile__subtitle">Имя</h2>
                {(!this.state.isRedaction) && (
                  <p className="profile__data">{this.state.name}</p> 
                )}
                {(this.state.isRedaction) && (
                  <input className="profile__data profile__input" type="text" id="username" name="name" placeholder="Имя" onChange={this.handleChange.bind(this)} value={this.state.name} minLength={2} maxLength={30} />
                )}
                <div className="profile__line" />
                <h2 className="profile__subtitle">E-mail</h2>
                {(!this.state.isRedaction) && (
                  <p className="profile__data">{this.state.email}</p>
                )}
                {(this.state.isRedaction) && (
                  <input className="profile__data profile__input" type="email" id="useremail" name="email" placeholder="Почта" onChange={this.handleChange.bind(this)} value={this.state.email} minLength={2} maxLength={30} />
                )}
              </section>
              {(this.state.isRedaction) && (
                <>
                  <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                  <button className="profile__form-button log__form-button medium-font medium-font_size_medium" type="submit">Сохранить</button>
                </>
              )}
            </form>
            {(!this.state.isRedaction) && (
              <>
                <button onClick={this.handleRedactionClick} className="profile__button profile__button_color_white reqular-font reqular-font_size_tiny" type="button">Редактировать</button>
                <button onClick={this.props.onSignOut} className="profile__button profile__button_color_red medium-font medium-font_size_small" type="button">Выйти из аккаунта</button>
              </>
            )}
          </section>
        </main>
      </>
    );
  }
}

export default Profile;