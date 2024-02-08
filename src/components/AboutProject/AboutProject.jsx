import React from 'react';

class AboutProject extends React.Component {
  render() {
    return (
      <section className="about-project section">
        <h2 className="about-project__title section__title">О проекте</h2>
        <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
        <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
        <p className="section__paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p className="section__paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        <div className="time-line">
          <div className="time-line__back-end">1 неделя</div>
          <div className="time-line__front-end">4 недели</div>
          <p className="time-line__description">Back-end</p>
          <p className="time-line__description">Front-end</p>
        </div>
      </section>
    )
  }
}

export default AboutProject;