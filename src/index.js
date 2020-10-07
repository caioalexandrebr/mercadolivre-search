import React from 'react';
import ReactDOM from 'react-dom';
import './sass/style.scss';

import Header from './components/Header';
import List from './components/List';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <List />
  </React.StrictMode>,
  document.getElementById('root')
);
