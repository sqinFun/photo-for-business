import React, { useState, useEffect } from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider(props) {
  const [images, setImages] = useState([]);
  const settings = {
    dots: false,
    adaptiveHeight: true,
    fade: true,
  };

  useEffect(() => {
    let data = {
      sliderName: props.sliderName,
    };
    fetch('/slider', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        result => {
          setImages(result);
          console.log(images.src)
        }
      )
  })

  return (
    <div className="slider">
      <Slider {...settings}>

        {images.map(img => (
          <div className="slider__slide" key={img.key} >
            <img className="slider__img" src={img.src} alt={img.title} />
          </div>
        ))}



      </Slider>
    </div>
  )
}

export default SlickSlider;