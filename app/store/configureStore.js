import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';
import promiseMiddleware from 'redux-promise-middleware';

import DevTools from '../containers/DevTools';

export default function configureStore(initialState) {
  const createStoreWithMiddleware = applyMiddleware(promiseMiddleware(), promise)(createStore);
  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development' ? DevTools.instrument() : null
  );

  return store;
}
