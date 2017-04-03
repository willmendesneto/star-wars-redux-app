import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import { Router } from 'react-router';
import routes from '../routes';

const Root = ({ store, history }) => {
  const debugContent = process.env.NODE_ENV === 'development' ?
                                  <DevTools /> :
                                  null;
  return (
    <Provider store={store}>
      <div>
        <Router history={history} routes={routes} />
        {debugContent}
      </div>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Root;
