import React from 'react';
import { Link } from 'react-router-dom';

class LogForm extends React.Component {
  render() {
    return (
      <section className="log">
        <form className="log__form">
          {(this.props.isName) && (
            <>
              <label className="log__form-label" for="username">Имя</label>
              <input className="log__form-input reqular-font_size_tiny" type="text" id="username" />
            </>
          )}
          <label className="log__form-label" for="useremail">E-mail</label>
          <input className="log__form-input reqular-font_size_tiny" type="email" id="useremail"/>
          <label className="log__form-label" for="userpassword">Пароль</label>
          <input className="log__form-input reqular-font_size_tiny" type="password" id="userpassword" />
          <button className="log__form-button medium-font_size_medium" type="submit">{this.props.formButton}</button>
        </form>
        <div className="log__bottom">
          <p className="log__paragraph reqular-font_size_small">{this.props.bottomParagraph}</p>
          <Link to={this.props.bottomLink} className="log__link reqular-font_size_small">{this.props.bottomLinkName}</Link>
        </div>
      </section>
    )
  }
}

export default LogForm;