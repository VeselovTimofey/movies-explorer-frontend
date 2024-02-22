import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <p className="footer__copyright">&#169; 2024</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          <a href="https://github.com/" className="footer__link">Github</a>
        </div>
      </footer>
    )
  }
}

export default Footer;