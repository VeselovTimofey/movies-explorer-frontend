import React from 'react';
import { Link } from 'react-router-dom';

class LogForm extends React.Component {
  render() {
    return (
      <section className="log" aria-label="Форма входа или регистрации.">
        <form className="log__form" onSubmit={this.props.onSubmit} noValidate>
          {(this.props.isName) && (
            <>
              <label className="log__form-label" htmlFor="username">Имя</label>
              <input className={(this.props.errors.username) ? "log__form-input reqular-font reqular-font_size_tiny log__form-input_error" : "log__form-input reqular-font reqular-font_size_tiny"} type="text" name="username" placeholder="Имя" value={this.props.valueUserName} onChange={this.props.onChange} minLength={2} maxLength={30} required />
              <span className="log__form-error" aria-live="polite">{(this.props.errors.username)}</span>
            </>
          )}
          <label className="log__form-label" htmlFor="useremail">E-mail</label>
          <input className={(this.props.errors.email) ? "log__form-input reqular-font reqular-font_size_tiny log__form-input_error" : "log__form-input reqular-font reqular-font_size_tiny"} type="email" name="email" placeholder="Почта" value={this.props.valueEmail} onChange={this.props.onChange} minLength={2} maxLength={30} required />
          <span className="log__form-error" aria-live="polite">{(this.props.errors.email)}</span>
          <label className="log__form-label" htmlFor="userpassword">Пароль</label>
          <input className={(this.props.errors.password) ? "log__form-input reqular-font reqular-font_size_tiny log__form-input_error" : "log__form-input reqular-font reqular-font_size_tiny"} type="password" name="password" placeholder="Пароль" value={this.props.valuePassword} onChange={this.props.onChange} minLength={2} maxLength={30} required />
          <span className="log__form-error" aria-live="polite">{(this.props.errors.password)}</span>
          <button className="log__form-button medium-font medium-font_size_medium" type="submit" disabled={!this.props.isValid}>{this.props.formButton}</button>
        </form>
        <div className="log__bottom">
          <p className="log__paragraph reqular-font reqular-font_size_small">{this.props.bottomParagraph}</p>
          <Link to={this.props.bottomLink} className="log__link reqular-font reqular-font_size_small">{this.props.bottomLinkName}</Link>
        </div>
      </section>
    )
  }
}

export default LogForm;