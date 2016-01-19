'use strict';

import React, { Component } from './Page';
import { router } from './index';
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
      router.Home,
      router.Project
    ];
  }

  render() {
    return (
      <Page breadcrumbs={this.breadcrumbs} nav={router.ProjectLookup}>
        <p>Project Lookup details page.</p>
      </Page>
    );
  }
}
