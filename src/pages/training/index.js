import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Article from '../../components/Article/Article';
import SlickSlider from '../../components/SlickSlider/SlickSlider';

let images = [
  {
    id: 1,
    src: "/img/slider/training/1.jpg",
  },
  {
    id: 2,
    src: "/img/slider/training/2.jpg",
  },
  {
    id: 3,
    src: "/img/slider/training/3.png",
  },
]

function TraningPage() {

  return (
    <Article title="Курс предметной фотосъёмки">
      <div className="full-card">
        <div className="full-card__prev">
          <SlickSlider imgList={images}></SlickSlider>
          <Link to="/courses" className="btn btn_theme_light btn_size_x" title="Курс предметной фотосъёмки">Записаться</Link>
        </div>
        <div className="full-card__content">
          <p className="m-0">В курсе предметной фотографии вы научитесь и будете знать:</p>
          <ul className="list list_style_marked full-card__list">
            <li className="list__item">
              Как с ограниченным бюджетом организовать фотостудию для работы.
            </li>
            <li className="list__item">
              Как настраивать оборудование, выставлять световые схемы.
            </li>
            <li className="list__item">
              Как эффективно обрабатывать полученные фотографии
            </li>
            <li className="list__item">
              Что востребовано сейчас на рынке коммерческой фотографии.
            </li>
            <li className="list__item">
              Как общаться и договариваться с заказчиком.
            </li>
            <li className="list__item">
              Как стабильно и хорошо зарабатывать на предметной фотосъемке.
            </li>
          </ul>
          <p>Стоимость курса: <br />15000 ₽
          </p>
        </div>
        
      </div>
    </Article>
  )
}

export default TraningPage;