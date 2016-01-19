'use strict';

import React, { Component } from './Page';
import { Pages } from './index';
import Page from '../partials/Page';

export default class ClusterManagementAgentStatus extends Component {
  static get nav() {
    return {
      href: '/clustermanagement/agentstatus',
      label: 'Agent Status'
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
      <Page breadcrumbs={this.breadcrumbs} nav={ClusterManagementAgentStatus.nav}>
        <p>Agent Status details page</p>
      </Page>
    );
  }
}