'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';


export default class ClusterManagementHealthCheck extends Component {
  static get nav() {
    return {
      href: '/clustermanagement/healthcheck',
      label: 'Launch Agent Health Check'
    };
  }

  get breadcrumbs() {
    return [
      Pages.Home.nav,
      Pages.ClusterManagement.nav
    ];
  }

  render() {
    return (
      <Page nav={ClusterManagementHealthCheck.nav} breadcrumbs={this.breadcrumbs}>
        <p>Health Check details page</p>
      </Page>
    );
  }
}
