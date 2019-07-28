import React from 'react'
import './people-page.css'

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry/error-boundry';


export default class PeoplePage extends React.Component {
    
    swapiService = new SwapiService();

    state = {
        selectedPersonId: null,
        hasError: false
      };

    componentDidCatch() {
        this.setState({ hasError: true })
      }
    
    onPersonCLick = (id) =>{
        this.setState({
          selectedPersonId: id
        })
      }
    
    const 

    render() {
        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
             onPersonCLick={this.onPersonCLick}
             getItemsToDisplay={this.swapiService.getAllPeople}
             render={(person) => {
               const { name, gender, birthYear } = person;
               return `${name} - ${gender} (${birthYear})`
             }} />
        )

        const personDeatails = (
            <ItemDetails selectedPersonId={this.state.selectedPersonId} />
        );

        return (
            <ErrorBoundry>
                <Row left = {itemList} right={personDeatails}/>
            </ErrorBoundry>
        )
    }
}