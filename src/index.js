import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

import Header from './components/Header';
import Breadcrumb from './components/Breadcrumb';
import List from './components/List';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Breadcrumb />
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);
