import React, { useState } from 'react';

import Article from '../../components/Article/Article';


function TraningPage() {

  return (
    <Article title="Курс предметной фотосъёмки">
      <div className="full-card">
        <div className="full-card__prev">
          <img src="/img/stub.png" alt=""/>
          <button className="btn btn_theme_light btn_size_x">Записаться</button>
        </div>
        <div className="full-card__content">
          <p class="m-0">В курсе предметной фотографии вы научитесь и будете знать:</p>
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