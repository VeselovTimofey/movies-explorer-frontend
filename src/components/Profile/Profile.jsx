import React from 'react';
import changeAndValidationForm from '../../utils/Validate';

import Header from '../Header/Header';
import CurrentUserContext from '../../context/CurrentUserContext';

class Profile extends React.Component {
  static contextType = CurrentUserContext;
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      oldContext: this.context,
      isRedaction: false,
      errors: {},
      isValid: false,
      isSuccess: false,
    }
    this.handleRedactionClick = this.handleRedactionClick.bind(this);
    this.validation = this.props.validation.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
    this.validateElement = this.props.validateElement.bind(this);
    this.arrayValidationElements = ["username", "email"];
  }

  componentDidMount() {
    this.setState({
      username: this.context.name,
      email: this.context.email,
      oldContext: this.context,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.context !== prevState.oldContext) {
      this.setState({
        username: this.context.name,
        email: this.context.email,
        oldContext: this.context,
        isRedaction: false,
      })
    }

    if ((this.context !== prevState.oldContext) && (this.state.isRedaction)) {
      this.setState({isSuccess: true})
    }

    if ((this.state.username !== prevState.username) || (this.state.email !== prevState.email)) {
      this.setState({isSuccess: false})
    }

    this.validation(this.arrayValidationElements, prevState);
  }

  handleRedactionClick() {
    this.setState(prevState => ({
      isRedaction: !prevState.isRedaction
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const newDataUser = {
      name: this.state.username,
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
            <span className={(this.state.isSuccess) ? "profile__success profile__success_activate medium-font medium-font_size_big" : "profile__success medium-font medium-font_size_big"}>Данные успешно сохранены.</span>
            <h1 className="profile__title medium-font medium-font_size_big">Привет, {this.context.name}!</h1>
            <form className="profile__form" onSubmit={this.handleSubmit.bind(this)} noValidate>
              <section className="profile__info">
                <h2 className="profile__subtitle">Имя</h2>
                {(!this.state.isRedaction) && (
                  <p className="profile__data">{this.state.username}</p> 
                )}
                {(this.state.isRedaction) && (
                  <>
                    <input className={(this.state.errors.username) ? "profile__data profile__input profile__input_error" : "profile__data profile__input"} type="text" id="username" name="username" placeholder="Имя" onChange={this.handleChange} value={this.state.username} minLength={2} maxLength={30} required/>
                    <span className="profile__input-error" aria-live="polite">{(this.state.errors.username)}</span>
                  </>
                )}
                <div className="profile__line" />
                <h2 className="profile__subtitle">E-mail</h2>
                {(!this.state.isRedaction) && (
                  <p className="profile__data">{this.state.email}</p>
                )}
                {(this.state.isRedaction) && (
                  <>
                    <input className={(this.state.errors.email) ? "profile__data profile__input profile__input_error" : "profile__data profile__input"} type="email" id="useremail" name="email" placeholder="Почта" onChange={this.handleChange} value={this.state.email} minLength={2} maxLength={30} required/>
                    <span className="profile__input-error" aria-live="polite">{(this.state.errors.email)}</span>
                  </>
                )}
              </section>
              {(this.state.isRedaction) && (
                <>
                  <span className="profile__error" aria-live="polite"></span>
                  <button className="profile__form-button log__form-button medium-font medium-font_size_medium" type="submit" disabled={(!this.state.isValid) || (this.state.username == this.context.name && this.state.email == this.context.email)}>Сохранить</button>
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

export default changeAndValidationForm(Profile);