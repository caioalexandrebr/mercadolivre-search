import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import List from './components/List';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/search">
          <Breadcrumb />
          <List />
        </Route>
        <Route path="/product">
          <Breadcrumb />
          <h1>Product</h1>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
