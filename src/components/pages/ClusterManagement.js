'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import PageLink from '../partials/PageLink';


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
          <li><PageLink nav={Pages.ClusterManagementAgentStatus.nav} /></li>
          <li><PageLink nav={Pages.ClusterManagementHealthCheck.nav} /></li>
        </ul>
      </Page>
    );
  }
}
