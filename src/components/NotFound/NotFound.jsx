import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound(props) {
  const navigate = useNavigate();
  
  return (
    <main className="content">
      <section className="not-found">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__paragraph">Страница не найдена</p>
        <button onClick={() => {navigate(-1)}} className="not-found__link reqular-font_size_small" type="button">Назад</button>
      </section>
    </main>
  )
}

export default NotFound;