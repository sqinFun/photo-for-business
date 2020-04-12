import React, { useState } from 'react';

import Article from '../../components/Article/Article';


function CalculationPage() {

  return (
    <Article maxWidth="m" title="Получить расчёт фотосъемки">
      <form action="" className="form">
        <div className="form__row">
          <div className="form__col">
            <label className="form__field">
              <span className="form__sign">Впишите имя</span>
              <input className="form__input " type="text" />
            </label>
            <label className="form__field">
              <span className="form__sign">Укажите телефон*</span>
              <input className="form__input" type="text" required />
            </label>
            <label className="form__field">
              <span className="form__sign">Напишите email</span>
              <input className="form__input" type="text" />
            </label>
          </div>
          <div className="form__col">
          <label className="form__field">
              <span className="form__sign">Впишите имя</span>
              <textarea className="form__textarea" name="" id="" cols="30" rows="10"></textarea>
          </label>
          </div>
        </div>

      </form>

    </Article>
  )
}

export default CalculationPage;