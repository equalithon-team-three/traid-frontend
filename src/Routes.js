// Imports
import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Post from './Post';
import Auth from './Auth';
import LogOut from './LogOut';
import UserPosts from './UserPosts';
import PageNotFound from './PageNotFound';

// Initializations
const renderPost = ({ match }) => <Post id={match.params.id} />;
const renderAuth = (setAuthenticated, loggingIn) => renderProps => (
  <Auth
    {...renderProps}
    loggingIn={loggingIn}
    setAuthenticated={setAuthenticated}
  />
);

// Component
const Routes = ({
  authData,
  authsetAuthenticated: setAuthenticatedProp,
  history,
}) => {
  const setAuthenticated = data => {
    history.push('/');
    setAuthenticatedProp(data);
  };

  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/posts/:id" render={renderPost} />
      <Route path="/myposts" render={() => <UserPosts authData={authData} />} />
      <Route path="/login" render={renderAuth(setAuthenticated, true)} />
      <Route path="/register" render={renderAuth(setAuthenticated)} />
      <Route
        path="/logout"
        render={() => <LogOut setAuthenticated={setAuthenticated} />}
      />
      <Route path="/:wildcard" component={PageNotFound} />
    </Switch>
  );
};

export default withRouter(Routes);
