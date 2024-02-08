import React from 'react';

class Techs extends React.Component {
  render() {
    return (
      <section className="techs section">
        <h2 className="section__title">Технологии</h2>
        <h3 className="techs__subtitle section__subtitle">7 технологий</h3>
        <p className="techs__paragraph section__paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li>
            <div className="techs__element">HTML</div>
          </li>
          <li>
            <div className="techs__element">CSS</div>
          </li>
          <li>
            <div className="techs__element">JS</div>
          </li>
          <li>
            <div className="techs__element">React</div>
          </li>
          <li>
            <div className="techs__element">Git</div>
          </li>
          <li>
            <div className="techs__element">Express.js</div>
          </li>
          <li>
            <div className="techs__element">mongoDB</div>
          </li>
        </ul>
      </section>
    )
  }
}

export default Techs;