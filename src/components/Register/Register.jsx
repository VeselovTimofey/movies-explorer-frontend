import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Register extends React.Component {
  render() {
    return (
      <section className="register">
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
      </section>
    );
  }
}

export default Register;