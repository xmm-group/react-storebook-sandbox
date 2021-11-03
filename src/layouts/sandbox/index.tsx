import React from 'react';
import { RouteWithSubRoutes } from '_common/utils/routes';
import { Switch } from 'react-router-dom';

import routes from './routes';

const SandboxLayout = () => {
  return (
    <div>
      <Switch>
        {Object.keys(routes).map((routeKey) => {
          const route = routes[routeKey];
          return routes[routeKey] ? (
            <RouteWithSubRoutes
              key={`route${route.path}`}
              path={route.path}
              pageTitle={route.pageTitle}
              component={route.component}
              exact={route.exact}
            />
          ) : null;
        })}
      </Switch>
    </div>
  );
};

export default SandboxLayout;
