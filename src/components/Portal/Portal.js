import React,  {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './style.css';

function Portal(props) {


  return (
    ReactDOM.createPortal(props.children, document.getElementById("modal"))
  )
}

export default Portal;