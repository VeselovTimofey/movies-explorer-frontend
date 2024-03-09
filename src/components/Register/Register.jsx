import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    }
  }

  handleChange(e) {
    const target = e.target.name;
    this.setState({[target]: e.target.value});
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
            valueUserName={this.state.username}
            valueEmail={this.state.email}
            valuePassword={this.state.password}
            onChange={this.handleChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </main>
      </div>
    );
  }
}

export default Register;