import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';

export default class App extends React.Component {

  state = {
    showRandomPlanet: true,
    selectedPersonId: null
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonCLick = (id) =>{
    this.setState({
      selectedPersonId:id
    })
  }

  render() {
    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;
    return (
      <div>
        <Header />
        { planet }
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onPersonCLick={this.onPersonCLick}/>
          </div>
          <div className="col-md-6">
            <PersonDetails selectedPersonId={this.state.selectedPersonId}/>
          </div>
        </div>
      </div>
    );
  }
};