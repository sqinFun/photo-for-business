import React, { useState } from 'react';

import TextCardList from '../../components/TextCardList/TextCardList';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import ApplicationsPage from './applications';
import SliderListPage from './sliderList';


function AdminPage(props) {

  const [cards, setCards] = useState([
    {
      id: 0,
      title: "Слайдеры",
      text: "Редактирование слайдеров",
      link: "/admin/slider-list",
    },
    {
      id: 1,
      title: "Заявки",
      text: "Просмотр заявок",
      link: "/admin/applications",
    },
  ]);

  let { path, url } = useRouteMatch();

  return (
    <>
      <Switch path={path} >
        <Route exact path={`${path}/`}>
          <TextCardList cards={cards}></TextCardList>
        </Route>
        <Route path={`${path}/slider-list`} component={SliderListPage} />
        <Route path={`${path}/applications`} component={ApplicationsPage} />
      </Switch>
    </>
  )
}

export default AdminPage;