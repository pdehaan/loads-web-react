'use strict';

import React, { Component } from 'react';
import ClusterManagement from './ClusterManagement';

export default class ClusterManagementAgentStatus extends Component {
  static get href() {
    return `${ClusterManagement.href}/agentstatus`;
  }

  static get title() {
    return 'Agent Status';
  }

  render() {
    return (
      <div>
        <h2>{ClusterManagementAgentStatus.title}</h2>
        <p>Agent status page!</p>
      </div>
    );
  }
}
