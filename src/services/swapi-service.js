export default class SwapiService {

    _apiBase = 'https://swapi.com/api';
    
    async getResouce (url) {
        const res = await fetch(`_apiBase${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url} resieved ${res.status} `)
        }
        const body = await res.json();
        return body;
    }

    async getAllPeople(){
        const res = await this.getResouce(`/people/`)
        return res.results;
    }

    getPerson(id){
        this.getResouce(`/people/${id}`)
    }

    async getAllPlanets(){
        const res = await this.getResouce(`/planets/`)
        return res.results;
    }

    getPlanet(id){
        this.getResouce(`/plane/${id}`)
    }

    async getAllStarships(){
        const res = await this.getResouce(`/starships/`)
        return res.results;
    }

    getStraship(id){
        this.getResouce(`/starships/${id}`)
    }
}