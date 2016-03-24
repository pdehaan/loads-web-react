'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { routes as childRoutes } from './components/pages';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import './components/assets/site.css';

const App = (props) => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
);

const routes = {
  component: App,
  childRoutes
};

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('App')
);
