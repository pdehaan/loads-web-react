'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import RunDetailsTable from '../partials/RunDetailsTable';


export default class Home extends Component {
  static get href() {
    return '/';
  }

  static get title() {
    return 'Home';
  }

  render() {
    return (
      <Page pageTitle={Home.title}>
        <p className="lead">Welcome to loads-web UI.</p>

        <RunDetailsTable dataUrl="data/broker.json" refreshInterval="60s" detailsUrl={Pages.RunDetails.href} />

        <div className="alert alert-danger" role="alert">
          <p><strong>DEBUG:</strong> See sample <a href="#/uhoh" className="alert-link">404</a> page.</p>
        </div>
      </Page>
    );
  }
}
