import { expect } from 'chai';
import { FETCH_PEOPLE, FILTER, FETCH_PERSON_DETAILS } from '../../../app/actions/StarWars/types';

describe('Star Wars: action types', () => {
  it('should have `FETCH_PEOPLE`', () => {
    expect(FETCH_PEOPLE).to.equal('FETCH_PEOPLE');
  });

  it('should have `FETCH_PERSON_DETAILS`', () => {
    expect(FETCH_PERSON_DETAILS).to.equal('FETCH_PERSON_DETAILS');
  });

  it('should have `FILTER`', () => {
    expect(FILTER).to.equal('FILTER');
  });
});
