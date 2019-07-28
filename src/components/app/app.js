import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page';

import './app.css';
import Row from '../row';
import ItemDetails, {DetailsRecord} from '../item-details/item-details';
import SwapiService from '../../services/swapi-service';

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

    const personDeatails = (<ItemDetails selectedItemId={3}
      getData={(id) => { return this.swapiService.getPerson(id) }}
      getImage={(id) => { return this.swapiService.getPersonImageUrl(id) }} >
        <DetailsRecord label="Gender" property="gender"/>
        <DetailsRecord label="Birth Year" property="birthYear"/>
        <DetailsRecord label="Eye Color" property="eyeColor"/>
      </ItemDetails>)

    const starshipDetails = (<ItemDetails selectedItemId={5}
      getData={(id) => { return this.swapiService.getStraship(id) }}
      getImage={(id) => { return this.swapiService.getStarshipImageUrl(id) }} >
        <DetailsRecord label="Starship Class" property="starshipClass"/>
        <DetailsRecord label="Model" property="model"/>
      </ItemDetails>)

    return (
      <div>

        <Row left={personDeatails}
          right={starshipDetails}
        />

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