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

export default class ItemDetails extends Component {

  state = {
    item: null,
    image: null,
    loading: false
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevSate) {
    if (this.props.selectedItemId === prevSate.selectedItemId) {
      return;
    }
    this.updateItem();
  }

  updateItem() {
    const { selectedItemId } = this.props;
    if (!selectedItemId) {
      return;
    }
    this.setState({ loading: true })
    this.props.getData(selectedItemId)
      .then((item) => { this.setState({ item, loading: false, image: this.props.getImage(selectedItemId) }) })
  }

  render() {

    if (!this.state.item) {
      return (<span>Please select character</span>)
    }

    const { loading } = this.state;
    const spinner = loading ? <Spinner /> : null

    const body = React.Children.map( this.props.children, (child) => {return React.cloneElement(child, {item: this.state.item})}) 

    const itemDetails = loading ? null : renderItem(this.state.item, this.state.image, body )

    return (
      <div className="item-details card">
        {spinner}
        {itemDetails}
      </div>
    )
  }
}

const renderItem = (item, image, body) => {
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
