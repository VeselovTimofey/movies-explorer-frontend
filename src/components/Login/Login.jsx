import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
            bottomLink="/signup"
            bottomLinkName="Регистрация"
            isName={false}
            valueEmail={this.state.email}
            valuePassword={this.state.password}
            onChange={this.handleChange.bind(this)}
            onSubmit={this.handleSubmit.bind(this)}
          />
        </main>
      </div>
    )
  }
}

export default Login;