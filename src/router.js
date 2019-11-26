/* eslint-disable */
import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from './containers/Pages/Home'
 const routes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <>
        <Route
          exact
          path={'/'}
          component={Home}
        />
      </>
    </ConnectedRouter>
  );
};
export default routes