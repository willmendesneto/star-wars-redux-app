import * as types from '../../actions/StarWars/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PEOPLE:
      return {
        ...state,
        all: action.payload.data.results,
        next: action.payload.data.next,
        previous: action.payload.data.previous
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
