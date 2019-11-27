import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import Home from './containers/Pages/Home'
import Artists from './containers/Pages/Artists'
import Songs from './containers/Pages/Songs'
 const routes = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          exact
          path={'/'}
          component={Home}
        />
        <Route
          exact
          path={'/artists'}
          component={Artists}
        />
        <Route
          exact
          path={'/artists/:artistId/songs'}
          component={Songs}
        />                
      </Switch>
    </ConnectedRouter>
  );
};
export default routes