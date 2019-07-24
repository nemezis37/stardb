import React, { Component } from 'react';
import Spinner from '../spinner'
import swapiService from "../../services/swapi-service";

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new swapiService();
  state = {
    person: null,
    loading: false
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevSate){
    if(this.props.selectedPersonId === prevSate.selectedPersonId) {
      return;
    }
    this.updatePerson();
  }

  updatePerson() {
    const {selectedPersonId} = this.props;
    if(!selectedPersonId) {
      return;
    }
    this.setState({loading: true})
    this.swapiService.getPerson(selectedPersonId)
    .then((person)=> {this.setState({person, loading: false})})
  }
  
  render() {

    if(!this.state.person){
      return (<span>Please select character</span>)
    }

    const {loading} = this.state;
    const spinner = loading ? <Spinner/> : null
    
    const personDetails = loading ? null : renderPerson(this.state.person)
   
    return (
      <div className="person-details card">
       {spinner}
       {personDetails}
      </div>
    )
  }
}

const renderPerson = (person) => {
  const { id, name, gender, birthYear, eyeColor } = person;
  return (
    <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>)
}
