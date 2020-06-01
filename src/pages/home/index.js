import React, { useState } from 'react';

import TextCardList from '../../components/TextCardList/TextCardList';



function HomePage() {
  
  const [cards, setCards] = useState([
    {
      id: 0,
      title: "Предметная съемка",
      text: "Снимаем для каталогов и интернет-магазинов в студии и на выезде.",
      link: "/object-shooting",
    },
    {
      id: 1,
      title: "Обучение съемкам",
      text: "(по отраслям).",
      link: "/training",
    },
    {
      id: 2,
      title: "Каталожная съемка",
      text: " Съемка одежды для каталогов и интернет-магазинов с 2010 года.",
      link: "/catalog-shooting",
    },
  ]);

  return (
    <TextCardList cards={cards}></TextCardList>
  )
}

export default HomePage;