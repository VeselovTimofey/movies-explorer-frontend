import React from 'react';

import SmallHeader from '../SmallHeader/SmallHeader';
import LogForm from '../LogForm/LogForm';

class Register extends React.Component {
  render() {
    return (
      <section className="register">
        <SmallHeader headerTitle="Добро пожаловать!" />
        <LogForm 
          formButton="Зарегистрироваться"
          bottomParagraph="Уже зарегистрированы?"
          bottomLink="Войти"
          isName={true}
        />
      </section>
    );
  }
}

export default Register;