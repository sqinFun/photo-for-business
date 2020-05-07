import React, { useState, useEffect } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider(props) {
  const settings = {
    dots: false,
    adaptiveHeight: true,
    fade: true,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        {props.imgList.map(img => (
          <div className="slider__slide" key={img.id} >
            <img className="slider__img" src={img.src} alt={img.title} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SlickSlider;