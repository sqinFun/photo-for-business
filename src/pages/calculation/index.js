import React, { useState, useEffect } from 'react';

import Article from '../../components/Article/Article';


function CalculationPage(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [details, setDetails] = useState('');
  console.log(props.title);

  function sendForm(e) {
    let data = {
      title: props.title,
      name: name,
      phone: phone,
      email: email,
      details: details
    }
    e.preventDefault();
    fetch('/courses', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(
        result => {
          console.log(result)
        }
      )
  }

  return (
    <Article maxWidth="m" title="Получить расчёт фотосъемки">
      <form action="" className="form" onSubmit={(e) => sendForm(e)}>
        <div className="form__row">
          <div className="form__col">
            <label className="form__field">
              <span className="form__sign">Впишите имя</span>
              <input className="form__input " type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label className="form__field">
              <span className="form__sign">Укажите телефон*</span>
              <input className="form__input" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </label>
            <label className="form__field">
              <span className="form__sign">Напишите email</span>
              <input className="form__input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>
          <div className="form__col">
            <label className="form__field">
              <span className="form__sign">Опишите детали съемки</span>
              <textarea className="form__textarea" name="" id="" cols="30" rows="10" onChange={(e) => setDetails(e.target.value)}></textarea>
            </label>
            <div className="item-list item-list_position_center ">
              <button type="submit" className="btn btn_theme_light mt-4">Отправить</button>
            </div>
          </div>
        </div>
      </form>
    </Article>
  )
}

export default CalculationPage;