import React from 'react';

import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import './app.css';
import Row from '../row';
import SwapiService from '../../services/swapi-service';
import { PersonList, PersonDetails, StarshipList, PlanetList, PlanetDetails, StarshipDetails } from '../sw-components';
import { DetailsRecord } from '../item-details/item-details';

export default class App extends React.Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet /> :
      null;


    return (
      <div>

      

        <StarshipList >
          {({name}) => <span>{name}</span>}
        </StarshipList>



        <PlanetList >
          {({name}) => <span>{name}</span>}
        </PlanetList>

        
        <PersonList >
          {({name}) => <span>{name}</span>}
        </PersonList>

        <PersonDetails selectedItemId={3}>
          <DetailsRecord label="Gender" property="gender" />
          <DetailsRecord label="Birth Year" property="birthYear" />
          <DetailsRecord label="Eye Color" property="eyeColor" />
        </PersonDetails>
        <PlanetDetails selectedItemId={7}>
          <DetailsRecord label="Name" property="name" />
        </PlanetDetails>
        <StarshipDetails selectedItemId={5}>
          <DetailsRecord label="Starship Class" property="starshipClass" />
          <DetailsRecord label="Model" property="model" />
        </StarshipDetails>


        {/* <Header />
        {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <PeoplePage /> */}
      </div>
    );
  }
};