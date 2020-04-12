import React, { useState } from 'react';

import Article from '../../components/Article/Article';


function CatalogShootingPage() {

  return (
    <Article>
      <div className="service-comparison service-comparison_size_s">
        <div className="service-comparison__col">
          <div className="product-card">
            <div className="product-card__content">
              <button className="btn btn_theme_light btn_size_x">Фотосъёмка на моделях</button>
              <img src="/img/stub.png" alt=""/>
              <h2 className="service-comparison__title">Условия</h2>
              <div className="service-comparison__content">
                <ul className="list list_position_center product-card__list">
                  <li className="list__item">
                    Стоимость — 3500 ₽
                  </li>
                  <li className="list__item">
                    Скорость съемки: до 300 артикулов в день
                  </li>
                </ul>
                <p>Минимальный заказ — 7000 р</p>
              </div>
            </div>
            <div className="product-card__footer">
              <button className="btn btn_theme_light btn_size_x">Рассчитать стоимость</button>
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
                    Стоимость съемки — 3500 р/час
                  </li>
                  <li className="list__item">
                    Скорость съемки: до 300 арт/день
                  </li>
                </ul>
                <p>Стоимость — от 700 ₽ / фото.</p>
              </div>
            </div>
            <div className="product-card__footer">
              <button className="btn btn_theme_light btn_size_x">Рассчитать стоимость</button>
            </div>
          </div>
        </div>
      </div>
    </Article>
  )
}

export default CatalogShootingPage;