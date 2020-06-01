import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';


function Footer() {

  return (
    <div className="container-custom">
      <footer className="footer">
        <div className="footer__menu">
          <Link to="/about-us" className="btn btn_theme_light">О нас</Link>
          <Link to="/contacts" className="btn btn_theme_light ml-2">Контакты</Link>
        </div>
        <div className="footer__contact">
          <a href="" className="footer__link">©vetherevl</a>
        </div>
        <div className="footer__social">
          <a href="/"><img src="/img/insta.svg" alt="" /></a>
        </div>
      </footer>
    </div>
  )
}

export default Footer;