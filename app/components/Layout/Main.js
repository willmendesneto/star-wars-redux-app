import React, { PropTypes } from 'react';

const Main = ({ children }) => {
  return (
    <main>
      { children }
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
