import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Post from './Post';
import './App.css';

const renderPost = ({ match }) => console.log(match) || <Post id={ match.params.id } />

const App = () => {

  return (<Switch>
    <Route path="/" exact component={ Dashboard } />
    <Route path="/post/:id" render={ renderPost } />
  </Switch>

  );
}

export default App;
