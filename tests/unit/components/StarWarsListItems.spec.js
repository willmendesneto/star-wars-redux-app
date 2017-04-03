import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import StarWarsListItems from '../../../app/components/StarWars/StarWarsListItems';

describe('StarWars Component: StarWarsListItems', () => {
  let htmlWrapper;
  const filteredPeople = [
    {
      name: 'Beru Whitesun lars',
      planet: { name: 'filtered planet' }
    },
    {
      name: 'Biggs Darklighter',
      planet: { name: 'filtered planet' }
    }
  ];
  const nonFilteredPeople = [{
    name: 'Luke Skywalker',
    planet: { name: 'non filtered planet' }
  }];

  before(() => {
    const filterText = 'B';
    const people = [].concat(
      nonFilteredPeople,
      filteredPeople
    );
    const wrapper = shallow(<StarWarsListItems
      filterText={filterText}
      people={people} />);
    htmlWrapper = wrapper.html();
  });

  it('should NOT render people information based on given filter', () => {
    nonFilteredPeople.forEach(nonFilteredPerson => {
      expect(htmlWrapper).to.not.contain(nonFilteredPerson.name);
      expect(htmlWrapper).to.not.contain(nonFilteredPerson.planet.name);
    });
  });

  it('should render people information based on given filter', () => {
    filteredPeople.forEach(filteredPerson => {
      expect(htmlWrapper).to.contain(filteredPerson.name);
      expect(htmlWrapper).to.contain(filteredPerson.planet.name);
    });
  });
});
