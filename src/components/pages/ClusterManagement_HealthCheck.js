'use strict';

import React, { Component } from './Page';
import { router } from './index';
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
      router.Home,
      router.ClusterManagement
    ];
  }

  render() {
    return (
      <Page breadcrumbs={this.breadcrumbs} nav={ClusterManagementHealthCheck.nav}>
        <p>Health Check details page</p>
      </Page>
    );
  }
}
