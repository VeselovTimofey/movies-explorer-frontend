import React from 'react';

import avatarPath from '../../images/avatar.jpg';

class AboutMe extends React.Component {
  render() {
    return (
      <section className="about-me section" id="about-me">
        <h2 className="about-me__title section__title reqular-font reqular-font_size_big">Студент</h2>
        <img className="about-me__img" src={avatarPath} alt="Анфас молодого человека."/>
        <h3 className="about-me__subtitle section__subtitle reqular-font reqular-font_size_huge">Веселов Тимофей</h3>
        <p className="about-me__paragraph">Фронтенд-разработчик, 29 лет</p>
        <p className="about-me__description section__paragraph">Я родился и живу в Санкт-Петербурге, закончил университет ИТМО по специальности "автоматизация технологических процессов и производств". В 2020 году служил в 2 научной роте ВВС, писал скрипты на языке Python в операционной системе ROS(Robot Operation System). В 2021 закончил курсы Яндекс.практикума по направлению Python разработчик. В 2023 закончил курсы Яндекс.практикума по направлению веб разработчик.</p>
        <a href="https://github.com/VeselovTimofey/" target="_blank" className="about-me__link medium-font medium-font_size_medium">Github</a>
      </section>
    )
  }
}

export default AboutMe;