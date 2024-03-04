import React from 'react';

import avatarPath from '../../images/avatar.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <section className="about-me" id="about-me">
        <h2 className="about-me__title section__title reqular-font_size_big">Студент</h2>
        <img className="about-me__img" src={avatarPath} alt="Анфас молодого человека."/>
        <h3 className="about-me__subtitle section__subtitle reqular-font_size_huge">Виталий</h3>
        <p className="about-me__paragraph">Фронтенд-разработчик, 30 лет</p>
        <p className="about-me__description section__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <a href="https://github.com/VeselovTimofey/" target="_blank" className="about-me__link medium-font_size_medium">Github</a>
      </section>
    )
  }
}

export default AboutMe;