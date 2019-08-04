import React, { Component } from 'react';
import Spinner from '../spinner'

import './item-details.css';
export {
  DetailsRecord
}

const DetailsRecord = ({ item, property, label }) => {
  return ( <li className="list-group-item">
    <span className="term">{label}</span>
    <span>{item[property]}</span>
  </li>);
}

const ItemDetails = (props) => {
  const {item, image, children} = props;
  const body = React.Children.map( children, (child) => {return React.cloneElement(child, {item})}) 
  return (
    <React.Fragment>
      <img className="item-image"
        src={image}/>

      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {body}
        </ul>
      </div>
    </React.Fragment>)
}

export default ItemDetails;
