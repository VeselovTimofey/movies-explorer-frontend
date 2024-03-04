import React from 'react';
import { Link } from 'react-router-dom';

class LogForm extends React.Component {
  render() {
    return (
      <section className="log" aria-label="Форма входа или регистрации.">
        <form className="log__form">
          {(this.props.isName) && (
            <>
              <label className="log__form-label" htmlFor="username">Имя</label>
              <input className="log__form-input reqular-font reqular-font_size_tiny" type="text" id="username" />
              <span className="log__form-error"></span>
            </>
          )}
          <label className="log__form-label" htmlFor="useremail">E-mail</label>
          <input className="log__form-input reqular-font reqular-font_size_tiny" type="email" id="useremail"/>
          <span className="log__form-error"></span>
          <label className="log__form-label" htmlFor="userpassword">Пароль</label>
          <input className="log__form-input reqular-font reqular-font_size_tiny" type="password" id="userpassword" />
          <span className="log__form-error">Что-то пошло не так...</span>
          <button className="log__form-button medium-font medium-font_size_medium" type="submit">{this.props.formButton}</button>
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