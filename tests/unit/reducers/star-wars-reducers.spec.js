import { expect } from 'chai';
import reducer from '../../../app/reducers/StarWars/index';
import person from '../../../app/reducers/StarWars/person';
import {
    FETCH_PEOPLE,
    FILTER,
    FETCH_PERSON_DETAILS
} from '../../../app/actions/StarWars/types';

describe('People Reducer', () => {

  it('should return default reducer object data if action does NOT exist', () => {
    const state = Object.freeze({});
    expect(reducer(state, {type: 'INVALID'})).to.eql({});
  });

  it('should return a reduced data based in "fetch people" state', () => {
    const state = Object.freeze({state: 'VALID'});
    const noop = function () {};
    const action = {
      type: FETCH_PEOPLE,
      payload: {
        data: {
          results: [],
          next: noop,
          previous: noop
        }
      }
    };
    expect(reducer(state, action)).to.eql({
      state: 'VALID',
      all: action.payload.data.results,
      next: action.payload.data.next,
      previous: action.payload.data.previous
    });
  });

  it('should return a reduced data based in "fetch person" details state', () => {
    const state = Object.freeze({state: 'VALID'});
    const action = {
      type: FETCH_PERSON_DETAILS,
      payload: {
        data: {
          person: {}
        }
      }
    };
    expect(person(state, action)).to.eql({
      person: action.payload.data.person,
      state: 'VALID'
    });
  });

  it('should return a reduced data based in "filter" state', () => {
    const state = Object.freeze({state: 'VALID'});
    const action = {
      type: FILTER,
      payload: {
        filter: 'some-text'
      }
    };
    const data = reducer(state, action);
    expect(data).to.eql({
      state: 'VALID',
      filter: action.payload.filter
    });
  });
});
