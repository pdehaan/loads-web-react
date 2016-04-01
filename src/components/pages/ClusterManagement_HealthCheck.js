'use strict';

import React, { Component } from 'react';
import ClusterManagement from './ClusterManagement';


export default class ClusterManagementHealthCheck extends Component {
  static get href() {
    return `${ClusterManagement.href}/healthcheck`;
  }

  static get title() {
    return 'Health Check';
  }

  render() {
    return (
      <div>
        <h2>{ClusterManagementHealthCheck.title}</h2>
        <p>Health Check details page</p>
      </div>
    );
  }
}
