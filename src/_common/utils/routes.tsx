import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';

interface PageInterface {
  pageTitle: string;
}

interface RouteItemInterface {
  path: string;
  pageTitle: string;
  component: FunctionComponent<PageInterface>;
  exact?: boolean;
}
export type { RouteItemInterface };

interface RouteItemsInterface {
  [key: string]: RouteItemInterface;
}
export type { RouteItemsInterface };

export const RouteWithSubRoutes = ({
  path,
  pageTitle,
  component,
  exact = false,
}: RouteItemInterface) => (
  <Route
    path={path}
    exact={exact}
    render={() => {
      return (
        <>
          {pageTitle ? (
            <Helmet>
              <title>
                {pageTitle} | {process.env.REACT_APP_PROJECT_NAME}
              </title>
            </Helmet>
          ) : (
            <Helmet>
              <title>{process.env.REACT_APP_PROJECT_NAME}</title>
            </Helmet>
          )}
          {React.createElement(component, {
            pageTitle,
          })}
        </>
      );
    }}
  />
);

export default null;
