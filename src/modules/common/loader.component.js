import React from 'react';

const LoaderComponent = ({ isLoading, children }) => {
  if (isLoading) {
    return <div>loading .... </div>;
  }
  // Render nothing if no children present
  return children ? children : null;
};

export default LoaderComponent;
