import React, { useState } from 'react';

import Article from '../../components/Article/Article';

import { Link } from 'react-router-dom';

import SlickSlider from '../../components/SlickSlider/SlickSlider';

let imagesPremium = [
  {
    id: 1,
    src: "/img/slider/catalogShooting/premium/1.jpg",
  },
  {
    id: 2,
    src: "/img/slider/catalogShooting/premium/2.jpg",
  },
  {
    id: 3,
    src: "/img/slider/catalogShooting/premium/3.jpg",
  },
  {
    id: 4,
    src: "/img/slider/catalogShooting/premium/4.jpg",
  },
  {
    id: 5,
    src: "/img/slider/catalogShooting/premium/5.jpg",
  },
]

let imagesModel = [
  {
    id: 1,
    src: "/img/slider/catalogShooting/model/1.jpg",
  },
  {
    id: 2,
    src: "/img/slider/catalogShooting/model/2.jpg",
  },
  {
    id: 3,
    src: "/img/slider/catalogShooting/model/3.jpg",
  },
  {
    id: 4,
    src: "/img/slider/catalogShooting/model/4.jpg",
  },
]

function CatalogShootingPage() {

  return (
    <Article>
      <div className="service-comparison service-comparison_size_s">
        <div className="service-comparison__col">
          <div className="product-card">
            <div className="product-card__content">
              <button className="btn btn_theme_light btn_size_x">Фотосъёмка на моделях</button>
              <SlickSlider sliderId="4"></SlickSlider>
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
              <Link to="/calculation" className="btn btn_theme_light btn_size_x" title="Каталожная съёмка | Фотосъёмка на моделях">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
        <div className="service-comparison__col">
          <div className="product-card">
            <div className="product-card__content">
              <button className="btn btn_theme_light btn_size_x">Премиум</button>
              <SlickSlider sliderId="5"></SlickSlider>
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
              <Link to="/calculation" className="btn btn_theme_light btn_size_x" title="Каталожная съёмка | Премиум">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
      </div>
    </Article>
  )
}

export default CatalogShootingPage;