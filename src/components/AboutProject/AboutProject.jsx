import React from 'react';

class AboutProject extends React.Component {
  render() {
    return (
      <section className="about-project" id="about-project">
        <h2 className="about-project__title section__title reqular-font_size_big">О проекте</h2>
        <section className="time-description">
          <h3 className="time-description__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="section__paragraph reqular-font_size_medium">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </section>
        <section className="time-description">
          <h3 className="time-description__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="section__paragraph reqular-font_size_medium">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </section>
        <section className="time-line" aria-label="График выполнения.">
          <div className="time-line__back-end reqular-font_size_small">1 неделя</div>
          <div className="time-line__front-end reqular-font_size_small">4 недели</div>
          <p className="time-line__description">Back-end</p>
          <p className="time-line__description">Front-end</p>
        </section>
      </section>
    )
  }
}

export default AboutProject;