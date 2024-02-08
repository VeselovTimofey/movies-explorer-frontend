import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer section">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <p className="footer__copyright">&#169; 2024</p>
        <div className="footer__links">
          <Link className="footer__link">Яндекс.Практикум</Link>
          <Link className="footer__link">Github</Link>
        </div>
      </footer>
    )
  }
}

export default Footer;