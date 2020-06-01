import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Portal from '../Portal/Portal'

import './style.css';
import { Children } from 'react';
import Article from '../Article/Article';

function Modal(props) {

  // function findString() {
  //   if (props.children && props.children.indexOf()) {
  //     console.log("test");
  //     return true;
  //   } 
  //   return false;
  // }

  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   setIsOpen(findString());
  // });
  

  return (
      <Portal>
        <div className="modal">

            <Article className="modal__window" maxWidth="x">
              <div className="modal__header">
                <h2>{props.title}</h2>
                <img className="modal__close" onClick={props.close} src="/img/icon/close-white.svg" alt=""/>
              </div>
              <div className="modal__body">
                {props.children}
              </div>
              <div className="modal__footer">

              </div>
            </Article>

        </div>
      </Portal>
  )
}

export default Modal;