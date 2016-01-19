'use strict';

import React, { Component } from './Page';
import { router } from './index';
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
      router.Home,
      router.ClusterManagement
    ];
  }

  render() {
    return (
      <Page breadcrumbs={this.breadcrumbs} nav={ClusterManagementAgentStatus.nav}>
        <p>BRING IT</p>
      </Page>
    );
  }
}
