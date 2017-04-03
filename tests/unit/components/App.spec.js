import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../../app/components/App';
import Header from '../../../app/components/Layout/Header';
import Main from '../../../app/components/Layout/Main';
import Footer from '../../../app/components/Layout/Footer';

describe('App component', () => {
  it('should render children components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsAllMatchingElements([
      <Header>
        <h1>SWAPI API</h1>
      </Header>,
      <Main />,
      <Footer />
    ])).to.eql(true);
  });
});
