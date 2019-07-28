import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';

export default class ItemList extends Component {

  componentDidMount() {
    const { getItemsToDisplay } = this.props;
    getItemsToDisplay().then((peopleList) => { this.setState({ peopleList }); })
  }

  state = {
    peopleList: null
  };

  renderItemList = (items) => {
    return items.map((item) => {
      const { id } = item;
      const label = this.props.render(item)
      return (<li
        key={id}
        className="list-group-item"
        onClick={() => this.props.onPersonCLick(id)} >
        {label}
      </li>)
    })
  }

  render() {
    const { peopleList } = this.state;
    if (!peopleList) {
      return <Spinner />
    }
    const items = this.renderItemList(peopleList);
    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}