import React, { useState } from 'react';
import Article from '../../../components/Article/Article';


function AdminPage(props) {

  return (
    <Article title="Список заявок">
      <div className="container">
        <div className="row">
          <div className="col-md-3 py-3 border">Услуга</div>
          <div className="col-md-3 py-3 border">Имя</div>
          <div className="col-md-3 py-3 border">Телефон</div>
          <div className="col-md-3 py-3 border">Почта</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-3 py-3 border">Курс предметной фотосъёмки</div>
          <div className="col-md-3 py-3 border">Олег</div>
          <div className="col-md-3 py-3 border">+79104554716</div>
          <div className="col-md-3 py-3 border">OlegGykovsky1994@gmail.com</div>
          {/* <div className="col-md-12 border"><p className="mb-0 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae voluptatum libero qui necessitatibus nesciunt ducimus debitis iure sequi perspiciatis quo.</p></div> */}
        </div>
      </div>
    </Article>
  )
}

export default AdminPage;