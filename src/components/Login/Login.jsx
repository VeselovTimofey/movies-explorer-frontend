import React from 'react';
import changeAndValidationForm from '../../utils/Validate';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

import { GH_PAGES_ROOT } from '../../utils/constans/gh-pages';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isValid: false,
    }
    this.validation = this.props.validation.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
    this.validateElement = this.props.validateElement.bind(this);
    this.arrayValidationElements = ["email", "password"];
  }

  componentDidUpdate(prevProps, prevState) {
    this.validation(this.arrayValidationElements, prevState);
  }

  handleSubmit(e) {
    e.preventDefault();

    const dataUser = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.onAuthorization(dataUser);
  }

  render() {
    return (
      <div className="login">
        <SmallHeader headerTitle="Рады видеть!" />
        <main className="content">
          <LogForm
            formButton="Войти"
            bottomParagraph="Ещё не зарегистрированы?"
            bottomLink={GH_PAGES_ROOT + "/signup"}
            bottomLinkName="Регистрация"
            isName={false}
            isValid={this.state.isValid}
            valueEmail={this.state.email}
            valuePassword={this.state.password}
            errors={this.state.errors}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </main>
      </div>
    )
  }
}

export default changeAndValidationForm(Login);