'use strict';

import React, { Component } from './Page';
import { router } from './index';
import Page from '../partials/Page';

export default class ProjectBuilder extends Component {
  static get nav() {
    return {
      href: '/project/builder',
      label: 'Project Builder'
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
      <Page breadcrumbs={this.breadcrumbs} nav={ProjectBuilder.nav}>
        <p>Project Builder details page.</p>
      </Page>
    );
  }
}
