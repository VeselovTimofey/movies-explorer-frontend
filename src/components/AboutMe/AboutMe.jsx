import React from 'react';
import { Link } from 'react-router-dom';
import avatarPath from '../../images/avatar.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <section className="about-me section">
        <h2 className="about-me__title section__title">Студент</h2>
        <h3 className="about-me__subtitle section__subtitle">Виталий</h3>
        <p className="about-me__paragraph">Фронтенд-разработчик, 30 лет</p>
        <p className="section__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className="about-me__link">Github</Link>
        <img className="about-me__img" src={avatarPath} alt="Анфас молодого человека."/>
      </section>
    )
  }
}

export default AboutMe;