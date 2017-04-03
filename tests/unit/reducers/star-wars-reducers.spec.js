import { expect } from 'chai';
import reducer from '../../../app/reducers';
import {
    FETCH_PEOPLE,
    FILTER,
    FETCH_PERSON_DETAILS
} from '../../../app/actions/StarWars/types';

describe('People Reducer', () => {

  it('should return default reducer object data if action does NOT exist', () => {
    const state = Object.freeze({});
    expect(reducer(state, {type: 'INVALID'})).to.eql({
      people: {
        all: [],
        next: '',
        previous: '',
        single: {},
      },
      routing: {
        locationBeforeTransitions: null
      }
    });
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
      people: {
        all: action.payload.data.results,
        next: action.payload.data.next,
        previous: action.payload.data.previous,
        single: {}
      },
      routing: {
        locationBeforeTransitions: null
      }
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
    expect(reducer(state, action)).to.eql({
      people: {
        all: [],
        next: '',
        previous: '',
        single: {},
        person: {
          person: action.payload.data.person
        }
      },
      routing: {
        locationBeforeTransitions: null
      }
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
      people: {
        all: [],
        filter: action.payload.filter,
        next: '',
        previous: '',
        single: {}
      },
      routing: {
        locationBeforeTransitions: null
      }
    });
  });
});
