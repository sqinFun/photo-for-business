import React, { useState, useEffect } from 'react';
import Article from '../Article/Article';
import Modal from '../Modal/Modal';
import SliderImages from './SliderImages/SliderImages'


function SliderList(props) {
  const [sliderList, setSliderList] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // let getSliderList = (sliderId) => {
  //   fetch(`https://v333936.vps.mcdir.ru/api/v1/public/slider`)
  //     .then(res => res.json())
  //     .then(res => {
  //       setImgList(res);
  //       setIsLoaded(true);
  //     })
  // }

  // let getPrevImgPath = async (sliderId) => {
  //   let response  = await fetch(`https://v333936.vps.mcdir.ru/api/v1/public/slider/${sliderId}`);
  //   // let result = await response.json();    
  //   return await response.json();
  // }

  let getSliderList = () => {
    setSliderList([{
      id: 1,
      path: '/storage/1590612676_1.jpg',
      title: 'Предметная съемка стандарт'
    },
    {
      id: 2,
      path: '/storage/1590618204_1.jpg',
      title: 'Предметная съемка премиум'
    },
    {
      id: 3,
      path: '/storage/1590619859_1.jpg',
      title: 'Обучение съёмкам'
    },
    {
      id: 4,
      path: '/storage/1590620979_1-min.JPG',
      title: 'Фотосъемка на моделях'
    },
    {
      id: 5,
      path: '/storage/1590620027_1.jpg',
      title: 'Фотосъемка Flatlay'
    }
  ]);
  setIsLoaded(true);
  }

  let openModal = (id, title) => {
    setIsModalOpen(true);
    setModalContent(<SliderImages sliderId={id} title={title}/>)
  };

  let closeModal = () => {
    getSliderList();
    setIsModalOpen(false);
  }

  useEffect(() => {
    getSliderList();
  }, [])

  return (
    <div className="slider-list">
      {
        isModalOpen &&
        <Modal close={closeModal}>{modalContent}</Modal>
      }
      <div className="flex-img-list">
        {isLoaded ? sliderList.map(slider =>
          <div className="flex-img-list__item" key={slider.id} onClick={() => openModal(slider.id, slider.title)}>
            <h2 className="flex-img-list__name">{slider.title}</h2>
            <img className="flex-img-list__img" src={`https://v333936.vps.mcdir.ru${slider.path}`} alt="" />
          </div>
        ) : <p>Загрузка...</p>}
      </div>
    </div>
  )
}

export default SliderList;