import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Login extends React.Component {
  render() {
    return (
      <section className="login">
        <SmallHeader headerTitle="Рады видеть!" />
        <LogForm
          formButton="Войти"
          bottomParagraph="Ещё не зарегистрированы?"
          bottomLink="/signup"
          bottomLinkName="Регистрация"
          isName={false}
        />
      </section>
    )
  }
}

export default Login;