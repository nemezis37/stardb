import SwapiService from '../../services/swapi-service'
import {withData} from '../hoc-helper'
import ItemList from '../item-list'
import itemList from '../item-list/item-list';

const {getAllPeople, getAllPlanets, getAllStarships } = new SwapiService();

const PersonList = withData(ItemList, getAllPeople);

const StarshipList = withData(ItemList, getAllStarships);

const PlanetList = withData(itemList, getAllPlanets);

export {
    PersonList,
    StarshipList,
    PlanetList
}