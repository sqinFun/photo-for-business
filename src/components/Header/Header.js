import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Header() {

  return (
    <div className="container-custom">
      <header className="header">
        <Link to="/" className="logo">
          <img className="logo__img" src="/img/logo.svg"/>
          <p className="logo__text">Фотосъемка для бизнеса</p>
        </Link>
          <div className="contact-card">
            <p className="contact-card__phone">+79169999999</p>
            <a className="btn btn_theme_light" href="">Написать в Whatsapp</a>
          </div>
          {/* <Link to="/admin" className="logo">Admin</Link> */}
      </header>
    </div>
  )
}

export default Header;