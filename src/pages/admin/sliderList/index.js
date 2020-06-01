import React, { useState, useEffect } from 'react';
import Article from '../../../components/Article/Article';

import SliderList from '../../../components/SliderList/SliderList';
import SliderImages from '../../../components/SliderList/SliderImages/SliderImages';

function SliderListPage(props) {

  return (
    <Article title="Управление слайдерами">
      {/* <SliderImages id='1' sliderId="1" /> */}
      <SliderList></SliderList>
    </Article>
  )
}

export default SliderListPage;