import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Card(props) {

    return (
        <Link to={props.link} className="text-card-list__card" >
            <h2 className="text-card-list__title">{props.title}</h2>
            <p className="text-card-list__text">{props.text}</p>
        </Link>
    )
}

export default Card;