'use strict';

import React, { Component, Link } from './Page';
import { Pages } from './index';
import Page from '../partials/Page';

export default class ClusterManagement extends Component {
  static get nav() {
    return {
      href: '/clustermanagement',
      label: 'Cluster Management'
    };
  }

  render() {
    return (
      <Page nav={ClusterManagement.nav}>
        <p className="lead">This is the Cluster Management link disambiguation page.</p>
        <p>I think you can only get here via breadcrumbs from one of the following pages:</p>
        <ul>
          <li><Link nav={Pages.ClusterManagementAgentStatus.nav} /></li>
          <li><Link nav={Pages.ClusterManagementHealthCheck.nav} /></li>
        </ul>
      </Page>
    );
  }
}
