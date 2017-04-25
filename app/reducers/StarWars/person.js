import * as types from '../../actions/StarWars/types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_PERSON_DETAILS:
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return state;
  }
};
