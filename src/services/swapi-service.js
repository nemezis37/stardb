export default class SwapiService {

    _apiBase = 'https://swapi.co/api';

    async getResouce(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url} resieved ${res.status} `)
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResouce(`/people/`)
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResouce(`/people/${id}`);
        return this._transformPerson(person);
    }

    _transformPerson = (person) =>{
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
          }
    }

    async getAllPlanets() {
        const res = await this.getResouce(`/planets/`)
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResouce(`/planets/${id}`)
        return this._transformPlanet(planet);
    }

    _extractId(apiEntity){
        const idRegex = /\/([0-9]*)\/$/;
        return apiEntity.url.match(idRegex)[1];
    }

    _transformPlanet = (planet)=>{
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
          }
    }

    async getAllStarships() {
        const res = await this.getResouce(`/starships/`)
        return res.results.map(this._transformStarship);
    }

    async getStraship(id) {
        const starship = await this.getResouce(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    _transformStarship = (straship) => {
        return {
            id: this._extractId(straship),
            name: straship.name
          }
    }
}