import React from 'react';
import { Link } from 'react-router-dom';

class LogForm extends React.Component {
  render() {
    return (
      <section className="log">
        <form className="log__form">
          <label className="log__form-label" for="username">Имя</label>
          <input className="log__form-input" type="text" id="username" />
          <label className="log__form-label" for="useremail">E-mail</label>
          <input className="log__form-input" type="email" id="useremail"/>
          <label className="log__form-label" for="userpassword">Пароль</label>
          <input className="log__form-input" type="password" id="userpassword" />
          <button className="log__form-button" type="submit">{this.props.formButton}</button>
        </form>
        <div className="log__bottom">
          <p className="log__paragraph">{this.props.bottomParagraph}</p>
          <Link className="log__link">{this.props.bottomLink}</Link>
        </div>
      </section>
    )
  }
}

export default LogForm;