import React, { useState, useEffect } from 'react';

import Article from '../../components/Article/Article';

function Courses(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function sendForm(e) {
    let data = {
      title: props.title,
      name: name,
      phone: phone,
      email: email,
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
    <Article title="Запись на курсы" maxWidth="s">
      <form action="" className="form" onSubmit={(e) => sendForm(e)}>
          <label className="form__field">
            <span className="form__sign">Впишите имя</span>
            <input className="form__input " type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          </label>
          <label className="form__field">
            <span className="form__sign">Укажите телефон*</span>
            <input className="form__input" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} required />
          </label>
          <label className="form__field">
            <span className="form__sign">Напишите email</span>
            <input className="form__input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </label>
          <button type="submit" className="btn btn_theme_light mt-4">
            Отправить
          </button>
      </form>

    </Article>
  )
}

export default Courses;