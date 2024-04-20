import React from 'react';
import changeAndValidationForm from '../../utils/Validate';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {},
      isValid: false,
    }
    this.validation = this.props.validation.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
    this.validateElement = this.props.validateElement.bind(this);
    this.arrayValidationElements = ["username", "email", "password"];
  }

  componentDidUpdate(prevProps, prevState) {
    this.validation(this.arrayValidationElements, prevState);
  }

  handleSubmit(e) {
    e.preventDefault();

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }

    this.props.onRegister(newUser);
  }

  render() {
    return (
      <div className="register">
        <SmallHeader headerTitle="Добро пожаловать!" />
        <main className="content">
          <LogForm 
            formButton="Зарегистрироваться"
            bottomParagraph="Уже зарегистрированы?"
            bottomLink="/signin"
            bottomLinkName="Войти"
            isName={true}
            isValid={this.state.isValid}
            valueUserName={this.state.username}
            valueEmail={this.state.email}
            valuePassword={this.state.password}
            errors={this.state.errors}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </main>
      </div>
    );
  }
}

export default changeAndValidationForm(Register);