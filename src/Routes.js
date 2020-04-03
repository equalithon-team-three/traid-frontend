// Imports
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Post from './Post';
import PageNotFound from './PageNotFound';

const renderPost = ({ match }) =>
  console.log(match) || <Post id={match.params.id} />;

// Component
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/posts/:id" render={renderPost} />
      <Route path="/:wildcard" component={PageNotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
