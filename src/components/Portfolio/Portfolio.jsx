import React from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends React.Component {
  render() {
    return (
      <section className="portfolio section">
        <h3 className="portfolio__title">Портфолио</h3>
        <Link className="portfolio__link">
          <p className="portfolio__paragraph">Статичный сайт</p>
          <p className="portfolio__paragraph">&#8599;</p>
        </Link>
        <Link className="portfolio__link">
          <p className="portfolio__paragraph">Адаптивный сайт</p>
          <p className="portfolio__paragraph">&#8599;</p>
        </Link>
        <Link className="portfolio__link">
          <p className="portfolio__paragraph">Одностраничное приложение</p>
          <p className="portfolio__paragraph">&#8599;</p>
        </Link>
      </section>
    )
  }
}

export default Portfolio;