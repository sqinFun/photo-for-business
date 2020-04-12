import React, { useState } from 'react';

import Article from '../../components/Article/Article';


function AboutUsPage() {

  return (
    <Article title="О нас">
      <p className="text text_size_x">Мы занимаемся съемкой одежды и предметной съемкой
      для каталогов и интернет-магазинов с 2010 года.
      Помимо рекламной съемки, мы прекрасно справляемся
      с деловыми портретами, репортажной съемкой и
      любыми другими фотосессиями. Команда ретушеров всегда
      готова взять на себя большой объем обработки
      фотографий и выполнить его в кратчайшие сроки.
      За несколько лет работы мы провели более тысячи
      фотосъемок и собрали отзывы довольных клиентов,
      среди которых: ЦУМ, Modis, LaModa, Leroy Merlin,
      Blackstar, Экспедиция, Sultanna Frantsuzova, Связной, Dupont
      и многие другие.</p>
    </Article>
  )
}

export default AboutUsPage;