import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Login extends React.Component {
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
          />
        </main>
      </div>
    )
  }
}

export default Login;