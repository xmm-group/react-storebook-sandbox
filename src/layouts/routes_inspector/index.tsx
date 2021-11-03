import React from 'react';
import RoutesList from './RoutesList';

const DefaultLayout = () => {
  return (
    <div>
      <RoutesList />
      <div style={{ height: '70px' }} />
    </div>
  );
};

export default DefaultLayout;
