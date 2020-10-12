import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Product from './pages/Product';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/:id' component={Search} />
        <Route exact path='/p/:id' component={Product} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
