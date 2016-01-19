'use strict';

import { Link } from 'react-router';

import React, { Component } from './Page';
import { router } from './index';
import Page from '../partials/Page';

export default class ClusterManagement extends Component {
  static get nav() {
    return {
      href: '/clustermanagement',
      label: 'Cluster Management'
    };
  }

  render() {
    const agentStatus = router.ClusterManagementAgentStatus;
    const healthCheck = router.ClusterManagementHealthCheck;

    return (
      <Page nav={ClusterManagement.nav}>
        <p className="lead">This is the Cluster Management link disambiguation page.</p>
        <p>I think you can only get here via breadcrumbs from one of the following pages:</p>
        <ul>
          <li><Link to={agentStatus.href}>{agentStatus.label}</Link></li>
          <li><Link to={healthCheck.href}>{healthCheck.label}</Link></li>
        </ul>
      </Page>
    );
  }
}
