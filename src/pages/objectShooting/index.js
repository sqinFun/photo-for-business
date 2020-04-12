import React, { useState } from 'react';

import Article from '../../components/Article/Article';

import { Link } from 'react-router-dom';


function ObjectShootingPage() {

  return (
    <Article>
      <div className="service-comparison service-comparison_size_s">
        <div className="service-comparison__col">
          <div className="product-card">
            <div className="product-card__content">
              <button className="btn btn_theme_light btn_size_x">Стандарт</button>
              <img src="/img/stub.png" alt=""/>
              <h2 className="service-comparison__title">Условия</h2>
              <div className="service-comparison__content">
                <ul className="list list_position_center product-card__list">
                  <li className="list__item">
                    Индивидуальная световая схема
                  </li>
                  <li className="list__item">
                    Минимальный заказ 3000 ₽
                  </li>
                  <li className="list__item">
                    Подходит для объектов до 30 см
                  </li>
                  <li className="list__item">
                    Перенос на белый фон
                  </li>
                  <li className="list__item">
                    Корректировки принимаются
                  </li>
                </ul>
                <p>Стоимость — от 100 ₽ / фото.</p>
              </div>
            </div>
            <div className="product-card__footer">
              <Link to="/calculation" className="btn btn_theme_light btn_size_x">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
        <div className="service-comparison__col">
          <div className="product-card">
            <div className="product-card__content">
              <button className="btn btn_theme_light btn_size_x">Премиум</button>
              <img src="/img/stub.png" alt=""/>
              <h2 className="service-comparison__title">Условия</h2>
              <div className="service-comparison__content">
                <ul className="list list_position_center product-card__list">
                  <li className="list__item">
                    Индивидуальная световая схема
                  </li>
                  <li className="list__item">
                    Минимальный заказ — 6000 ₽
                  </li>
                  <li className="list__item">
                    Подходит для любых объектов
                  </li>
                  <li className="list__item">
                    Перенос на белый фон
                  </li>
                  <li className="list__item">
                    Индивидуальная обработка каждого снимка
                  </li>
                  <li className="list__item">
                    Проработка мелких деталей
                  </li>
                </ul>
                <p>Стоимость — от 300 ₽ / фото.</p>
              </div>
            </div>
            <div className="product-card__footer">
              <Link to="/calculation" className="btn btn_theme_light btn_size_x">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
      </div>
    </Article>
  )
}

export default ObjectShootingPage;