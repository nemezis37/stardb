import React, { Component } from 'react';

import './item-list.css';
import Spinner from '../spinner';
import SwapiService from '../../services/swapi-service';

export default class ItemList extends Component {

  swapiServicre = new SwapiService();

  componentDidMount() {
    this.swapiServicre.getAllPeople().then((peopleList)=>{this.setState({ peopleList });})
  }

  state = {
    peopleList: null
  };

  renderItemList = (people) => {
    return people.map((person) => {
      const { id, name } = person;
      return (<li 
          key={id} 
          className="list-group-item"
          onClick={()=>this.props.onPersonCLick(id)} >
        {name}
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