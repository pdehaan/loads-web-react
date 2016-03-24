'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import RunDetailsTable from '../partials/RunDetailsTable';


export default class Home extends Component {
  static get nav() {
    return {
      href: '/',
      label: 'Home'
    };
  }

  render() {
    return (
      <Page breadcrumbs={null}>
        <p className="lead">This is the home page.  There are many like it, but this one is mein.</p>

        <RunDetailsTable dataUrl="data/results.json" refreshInterval="5s" detailsUrl={Pages.RunDetails.nav.href} />

        <div className="alert alert-danger" role="alert">
          <p><strong>DEBUG:</strong> See sample <a href="#/uhoh" className="alert-link">404</a> page.</p>
        </div>
      </Page>
    );
  }
}
