import React, { Component } from 'react';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  constructor(){
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  async updatePlanet() {
    const planetId = Math.floor(Math.random() * 25 + 2)
    this.swapiService.getPlanet(planetId)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  state = {
    planet:{},
    loading: true,
    error: false
  }

  render() {
    const {loading, planet, error} = this.state;
    const errorIndicator = error? <ErrorIndicator/>: null;
    const hasData = !error && !loading;
    const spinner = loading? <Spinner/> : null;
    const contern = hasData?  <PlanetView planet={planet}/>: null;
    return (
      <div className="random-planet jumbotron rounded">
        {errorIndicator}
        {spinner}
        {contern}
      </div>
    );
  }
}

const PlanetView = ({planet})=> {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
      <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
};