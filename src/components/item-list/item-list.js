import React from 'react';
import './item-list.css';

const ItemList = (props) => {
  const { data, children: renderLabel, onPersonCLick } = props;
  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item)
    return (
    <li
      key={id}
      className="list-group-item"
      onClick={() => onPersonCLick(id)} >
      {label}
    </li>)
  });

  return (
    <ul className="item-list list-group">
      {items}
    </ul>
  );
}

export default ItemList