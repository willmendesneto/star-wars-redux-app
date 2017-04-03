import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';
import StarWarsItem from '../../../app/components/StarWars/StarWarsItem';

describe('StarWars Component: StarWarsItem', () => {
  let htmlWrapper;
  const person = {
    id: 1,
    name: 'person',
    planet: {
      name: 'planet'
    }
  };

  before(() => {
    const wrapper = shallow(<StarWarsItem key={0} person={person} />);
    htmlWrapper = wrapper.html();
  });

  it('should render person information', () => {
    expect(htmlWrapper).to.contain(person.name);
    expect(htmlWrapper).to.contain(person.planet.name);
  });

  it('should render link for details page', () => {
    expect(htmlWrapper).to.contain('<a class="btn btn-primary">Show details</a>');
  });
});
