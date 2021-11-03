import React from 'react';

import SandboxRoutes from 'layouts/sandbox/routes';

const RoutesList = () => {
  const getRoutesList = (routes: any) => {
    return Object.keys(routes).map((key) => {
      const routeItem = routes[key];
      const pathIsArray = routeItem.path instanceof Array;
      return (
        <li className="list-group-item">
          {!routeItem.demoVariantsPaths && !pathIsArray ? (
            <a href={routeItem.path} rel="noopener noreferrer" target="_blank">
              {routeItem.pageTitle}
            </a>
          ) : (
            routeItem.pageTitle
          )}{' '}
          <p className="text-gray-600" style={{ fontSize: '12px', margin: 0 }}>
            <b>route path:</b>{' '}
            {pathIsArray ? routeItem.path.join(', ') : routeItem.path}
          </p>
          {routeItem.demoVariantsPaths ? (
            <ul className="list-inside list-square pt-2">
              {routeItem.demoVariantsPaths.map((variantPath: any) => (
                <li>
                  <a
                    href={variantPath.path}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {variantPath.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </li>
      );
    });
  };
  return (
    <>
      <div>
        <h2>Sandbox layout pages</h2>
        <ul className="list-group">{getRoutesList(SandboxRoutes)}</ul>
      </div>
    </>
  );
};

export default RoutesList;
