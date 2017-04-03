import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import StarWarsDetails from '../../../app/components/StarWars/StarWarsDetails';

describe('StarWars Component: StarWarsDetails', () => {
  let htmlWrapper;
  const person = {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    films: [
        'http://swapi.co/api/films/6/',
        'http://swapi.co/api/films/3/',
        'http://swapi.co/api/films/2/',
        'http://swapi.co/api/films/1/',
        'http://swapi.co/api/films/7/'
    ],
    species: [
        'http://swapi.co/api/species/1/'
    ],
    vehicles: [
        'http://swapi.co/api/vehicles/14/',
        'http://swapi.co/api/vehicles/30/'
    ],
    starships: [
        'http://swapi.co/api/starships/12/',
        'http://swapi.co/api/starships/22/'
    ]
  };;

  before(() => {
    const wrapper = shallow(<StarWarsDetails person={person} />);
    htmlWrapper = wrapper.html();
  });

  it('should render person information', () => {
    expect(htmlWrapper).to.contain(person.name);
    expect(htmlWrapper).to.contain(person.height);
    expect(htmlWrapper).to.contain(person.hair_color);
    expect(htmlWrapper).to.contain(person.skin_color);
    expect(htmlWrapper).to.contain(person.eye_color);
    expect(htmlWrapper).to.contain(person.birth_year);
    expect(htmlWrapper).to.contain(person.gender);
    expect(htmlWrapper).to.contain(person.films.length);
    expect(htmlWrapper).to.contain(person.species.length);
    expect(htmlWrapper).to.contain(person.vehicles.length);
    expect(htmlWrapper).to.contain(person.starships.length);
  });

  it('should render link for list page', () => {
    expect(htmlWrapper).to.contain('<a class="btn btn-primary">Back to list</a>');
  });
});
