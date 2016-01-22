'use strict';

import React, { Component } from './Page';
import { Pages } from './index';
import Page from '../partials/Page';

export default class ProjectLookup extends Component {
  static get nav() {
    return {
      href: '/project/lookup',
      label: 'Project Lookup'
    };
  }

  get breadcrumbs() {
    return [
      Pages.Home.nav,
      Pages.Project.nav
    ];
  }

  render() {
    return (
      <Page nav={ProjectLookup.nav} breadcrumbs={this.breadcrumbs}>
        <p>Project Lookup details page.</p>
      </Page>
    );
  }
}
