import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import person from './StarWars/person';
import people from './StarWars';

export default combineReducers({
  people,
  person,
  routing
});
