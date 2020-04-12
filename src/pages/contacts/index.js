import React, { useState } from 'react';

import Article from '../../components/Article/Article'


function ContactsPage() {

  return (
    <Article title="Контакты">
      <div className="service-comparison">
        <div className="service-comparison__col">
          <h2 className="service-comparison__title">
            Часы работы:
          </h2>
          <div className="service-comparison__content">
            <p>
              ПН - ВС с 10:00 до 22:00 <br />
              Запись на съемки ПН - ПТ с 10:00 до 18:00.<br />
              Ночные часы по предварительной записи. 
            </p>
            <p>
              При себе необходимо иметь оригинал удостоверения личности, это может быть паспорт или водительское удостоверение.
            </p>
          </div>
        </div>
        <div className="service-comparison__col">
          <h2 className="service-comparison__title">
            Адрес:
          </h2>
          <div className="service-comparison__content">
            <p>
            115093, <br /> м.Серпуховская,<br /> Партийный переулок,<br /> дом 1,<br /> корпус 11
            </p>
          </div>
        </div>
      </div>
    </Article>
  )
}

export default ContactsPage;