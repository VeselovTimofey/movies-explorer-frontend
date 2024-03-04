import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <section className="portfolio">
        <h3 className="portfolio__title">Портфолио</h3>
        <a href="https://github.com/VeselovTimofey/how-to-learn" target="_blank" className="portfolio__link">
          <p className="portfolio__paragraph">Статичный сайт</p>
          <p className="portfolio__paragraph portfolio__paragraph_displacement_left">&#8599;</p>
        </a>
        <a href="https://github.com/VeselovTimofey/russian-travel" target="_blank" className="portfolio__link">
          <p className="portfolio__paragraph">Адаптивный сайт</p>
          <p className="portfolio__paragraph portfolio__paragraph_displacement_left">&#8599;</p>
        </a>
        <a href="https://github.com/VeselovTimofey/react-mesto-api-full-gha" target="_blank" className="portfolio__link">
          <p className="portfolio__paragraph">Одностраничное приложение</p>
          <p className="portfolio__paragraph portfolio__paragraph_displacement_left">&#8599;</p>
        </a>
      </section>
    )
  }
}

export default Portfolio;