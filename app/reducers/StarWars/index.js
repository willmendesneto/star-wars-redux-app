import * as types from '../../actions/StarWars/types';
const INITIAL_STATE = { all: [], single: {}, next: '', previous: '' };

const starWarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return {
        ...state,
        all: action.payload.data.results,
        next: action.payload.data.next,
        previous: action.payload.data.previous
      };
    case types.FETCH_PERSON_DETAILS:
      return {
        ...state,
        person: action.payload.data,
      };
    case types.FILTER:
      return {
        ...state,
        filter: action.payload.filter
      };
    default:
      return state;
  }
};

export default starWarsReducer;
