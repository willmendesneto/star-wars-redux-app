import React, { PropTypes } from 'react';

const LoadingContent = ({ children }) => {
  return (
    <div>
      <div className="loader">{ children || 'Loading...' }</div>
    </div>
  );
};

LoadingContent.propTypes = {
  children: PropTypes.node
};

export default LoadingContent;
