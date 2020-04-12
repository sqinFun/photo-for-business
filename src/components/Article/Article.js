import React, { useState } from 'react';

import './style.css'


function Article(props) {
    let classList = "";

    switch (props.maxWidth) {
        case "s":
            classList = "article_size_s";
            break;
        case "m":
            classList = "article_size_m";
            break;
        case "x":
            classList = "article_size_x";
            break;
        default:
            classList = "";
            break;
    }

    return (
        <div className={"article " + classList}>
            {props.title && <h1 className="article__title">{props.title}</h1>}
            <div className="article__content">{props.children}</div>
        </div>
    )
}

export default Article;