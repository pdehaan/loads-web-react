'use strict';

import React, { Component } from './Page';
import Page from '../partials/Page';

export default class RunDetails extends Component {
  static get nav() {
    return {
      href: '/run/:id',
      label: 'Run Details'
    };
  }

  get id() {
    return this.props.params.id;
  }

  get pageTitle() {
    return `Run Details: ${this.id}`;
  }

  render() {
    return (
      <Page nav={RunDetails.nav} pageTitle={this.pageTitle}>
        <div>This is the Run details page for {this.id}.</div>
      </Page>
    );
  }
}
