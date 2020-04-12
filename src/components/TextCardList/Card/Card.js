import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";

function Card(props) {
    let history = useHistory();

    const openPage = (link) => {
        if (link) history.push(link);
    }

    return (
        <div className="text-card-list__card" onClick={() => openPage(props.link)}>
            <h2 className="text-card-list__title">{props.title}</h2>
            <p className="text-card-list__text">{props.text}</p>
        </div>
    )
}

export default Card;