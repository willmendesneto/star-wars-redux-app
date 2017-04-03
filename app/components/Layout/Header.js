import React, { PropTypes } from 'react';

const Header = ({ children }) => {
  return (
    <header className="header">
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          { children }
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
