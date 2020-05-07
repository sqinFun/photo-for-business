import React, { useState } from 'react';
import './style.css';
import Card from './Card/Card';

function TextCardList(props) {
  return (
    <div className="text-card-list">
      {props.cards.map( card => 
        <Card title={card.title}
              text={card.text}
              key={card.id}
              link={card.link}
        />
      )}
    </div>
  )
}

export default TextCardList;