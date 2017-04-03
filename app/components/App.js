import React, { PropTypes } from 'react';
import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';
import { mergeConfig } from '../helpers/config';

import { CONFIG_DISCOVERY_URL, CONFIG_DISCOVERY_URL_KEY } from '../constants';

mergeConfig({
  [CONFIG_DISCOVERY_URL_KEY]: CONFIG_DISCOVERY_URL
});

const App = ({ children }) => {
  return (
    <div>
      <Header>
        <h1>SWAPI API</h1>
      </Header>
      <Main>
        { children }
      </Main>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;
