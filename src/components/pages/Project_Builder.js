'use strict';

import React, { Component } from './Page';
import { Pages } from './index';
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
      Pages.Home.nav,
      Pages.Project.nav
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