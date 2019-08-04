import React from 'react';
import ItemDetails, {DetailsRecord} from '../item-details/item-details';
import SwapiService from '../../services/swapi-service'
import { detailsWithData } from '../hoc-helper';

const {getPerson, getPersonImageUrl, getStarshipImageUrl, getStraship, getPlanetImageUrl, getPlanet } = new SwapiService();

const PersonDetails  =  detailsWithData(ItemDetails, (id) => { return getPerson(id) }, (id) => { return getPersonImageUrl(id)})

const StarshipDetails = detailsWithData(ItemDetails,(id) => { return getStraship(id) }, (id) => { return getStarshipImageUrl(id) } )

const PlanetDetails  = detailsWithData(ItemDetails, (id) => { return getPlanet(id) }, (id) => { return getPlanetImageUrl(id) } )

export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}