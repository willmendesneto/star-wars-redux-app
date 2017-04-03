import axios from 'axios';
import config from '../helpers/config';
import { FETCH_PEOPLE, FETCH_PERSON_DETAILS, FILTER } from './StarWars/types';
import { CONFIG_DISCOVERY_URL_KEY, CONFIG_DISCOVERY_PEOPLE_KEY } from '../constants';

const ROOT_URL = config(CONFIG_DISCOVERY_URL_KEY);
let _links = {};
const params = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const dispatchToAction = (payload, action) => {
  return {
    type: action,
    payload
  };
};

const getDiscoveryURL = (key) => {
  if (!!Object.keys(_links).length) {
    return Promise.resolve(_links[key]);
  }
  return axios.get(`${ROOT_URL}/?format=json`).then(response => {
    _links = response.data;
    return _links[key];
  });
};

const mapPersonWithPlanet = (results, planets) => {
  return results.map((person, index) => {
    return {
      ...person,
      id: Number(person.url.replace(/\D/g, '')),
      planet: {
        name: planets[index]
      }
    };
  });
};

const getPlanetByPerson = (results) => {
  return axios.all(results.map(person => {
    return axios.get(person.homeworld, params).then(planetResponse => {
      return planetResponse.data.name;
    });
  }));
};

export function fetchPeople(url) {
  const callback = !!url ? Promise.resolve(url) : getDiscoveryURL(CONFIG_DISCOVERY_PEOPLE_KEY);
  return callback
    .then(currentURL => axios.get(currentURL, params))
    .then(response => {
      return getPlanetByPerson(response.data.results)
        .then(planets => {
          response.data.results = mapPersonWithPlanet(response.data.results, planets);
          return response;
        })
        .then(res => dispatchToAction(res, FETCH_PEOPLE));
    });
}

export function fetchPeopleByPaginationURL(url) {
  return fetchPeople(url);
}

export function fetchPersonDetails(id) {
  return getDiscoveryURL(CONFIG_DISCOVERY_PEOPLE_KEY)
    .then(currentURL => `${currentURL}${id}`)
    .then(url => axios.get(url, params))
    .then(res => {
      return axios.get(res.data.homeworld)
        .then(planetResponse => {
          res.data.planet = { name: planetResponse.data.name };
          return dispatchToAction(res, FETCH_PERSON_DETAILS);
        });
    });
}

export function filterTable(filterBy) {
  return dispatchToAction(filterBy, FILTER);
}
