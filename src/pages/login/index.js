import React, { useState, useEffect } from 'react';

import Article from '../../components/Article/Article';


function LoginPage(props) {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");

  function sendForm(e) {
    let data = {
      login: login,
      pass: pass,
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
    <Article maxWidth="s" title="Авторизация">
      <form action="" className="form" onSubmit={(e) => sendForm(e)}>
        <label className="form__field">
          <span className="form__sign">Логин</span>
          <input className="form__input " type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
        </label>
        <label className="form__field">
          <span className="form__sign">Пароль</span>
          <input className="form__input" type="password" value={pass} onChange={(e) => setPass(e.target.value)} required />
        </label>
        <button type="submit" className="btn btn_theme_light mt-4">
          Отправить
          </button>
      </form>
    </Article>
  )
}

export default LoginPage;