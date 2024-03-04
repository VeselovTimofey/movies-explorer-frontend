import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h2 className="footer__title reqular-font_size_tiny">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <p className="footer__copyright reqular-font_size_tiny">&#169; 2024</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" target="_blank" className="footer__link reqular-font_size_tiny">Яндекс.Практикум</a>
          <a href="https://github.com/" target="_blank" className="footer__link reqular-font_size_tiny">Github</a>
        </div>
      </footer>
    )
  }
}

export default Footer;