import React, { useState, useEffect } from 'react';
import './style.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlickSlider(props) {
  const [imgList, setImgList] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  const settings = {
    dots: false,
    adaptiveHeight: true,
    fade: true,
  };

  useEffect(() => {
    fetch(`https://v333936.vps.mcdir.ru/api/v1/public/slider/${props.sliderId}`)
      .then(res => res.json())
      .then(res => {
        setImgList(res);
        setIsLoaded(true);
      })
  }, [])

  return (
    <div className="slider">
      <Slider {...settings}>
        {isLoaded ? imgList.images.map(img => (
          <div className="slider__slide" key={img.ID} >
            <img className="slider__img" src={`https://v333936.vps.mcdir.ru${img.path}`} alt="" />
          </div>
        )) : <h2>Загрузка...</h2>}
      </Slider>
    </div>
  )
}

export default SlickSlider;