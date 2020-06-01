import React, { useState, useEffect } from 'react';
import axios from 'axios';


function SliderImages(props) {

  const [imgList, setImgList] = useState({});
  const [isLoaded, setIsLoaded] = useState(false)

  let getSliderImages = (id) => {
    setIsLoaded(false);

    fetch(`https://v333936.vps.mcdir.ru/api/v1/public/slider/${id}`)
      .then(res => res.json())
      .then(res => {
        setImgList(res);
        setIsLoaded(true);
      })
  }

  let deleteImg = (id) => {
    fetch(`https://v333936.vps.mcdir.ru/api/v1/private/photo/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => {
        getSliderImages(props.sliderId);
      })
  }

  let changeImg = (e) => {

    let formData = new FormData();
    formData.append('id', props.sliderId);
    formData.append('photo', e.target.files[0]);
    console.log(formData);

    fetch(`https://v333936.vps.mcdir.ru/api/v1/private/photo`, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        getSliderImages(props.sliderId);
      })
      .catch((error) => {
        console.log('err ' + error);
      })
  }

  useEffect(() => {
    getSliderImages(props.sliderId);
  }, [])

  return (
    <div className="flex-img-list">
      {isLoaded ? imgList.images.map(img =>
        <div className="flex-img-list__item" key={img.ID}>
          <img className="flex-img-list__close" src="/img/icon/close.svg" onClick={() => deleteImg(img.ID)} alt="" />
          <img className="flex-img-list__img" src={`https://v333936.vps.mcdir.ru${img.path}`} alt="" />
        </div>
      ) : <p>Загрузка...</p>}
      <label className="input-file flex-img-list__item">
        <img className="input-file__img flex-img-list__img" src="/img/icon/add.svg" alt="" />
        <input className="input-file__input" type="file" onChange={changeImg} />
      </label>
    </div>
  )
}

export default SliderImages;