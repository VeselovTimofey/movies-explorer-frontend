import React from 'react';

class Techs extends React.Component {
  render() {
    return (
      <section className="techs" id="techs">
        <h2 className="section__title reqular-font_size_big">Технологии</h2>
        <h3 className="techs__subtitle section__subtitle reqular-font_size_huge">7 технологий</h3>
        <p className="techs__paragraph section__paragraph reqular-font_size_medium">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="techs__list">
          <li>
            <div className="techs__element reqular-font_size_small">HTML</div>
          </li>
          <li>
            <div className="techs__element reqular-font_size_small">CSS</div>
          </li>
          <li>
            <div className="techs__element reqular-font_size_small">JS</div>
          </li>
          <li>
            <div className="techs__element reqular-font_size_small">React</div>
          </li>
          <li>
            <div className="techs__element reqular-font_size_small">Git</div>
          </li>
          <li>
            <div className="techs__element reqular-font_size_small">Express.js</div>
          </li>
          <li>
            <div className="techs__element reqular-font_size_small">mongoDB</div>
          </li>
        </ul>
      </section>
    )
  }
}

export default Techs;