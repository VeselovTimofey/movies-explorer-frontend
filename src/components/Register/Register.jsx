import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Register extends React.Component {
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
          />
        </main>
      </div>
    );
  }
}

export default Register;