import React from 'react';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {
  render() {
    return (
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__paragraph">Страница не найдена</p>
        <Link className="not-found__link reqular-font_size_small" to="/">Назад</Link>
      </section>
    )
  }
}

export default NotFound;