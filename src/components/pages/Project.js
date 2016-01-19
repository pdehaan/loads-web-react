'use strict';

import React, { Component, Link } from './Page';
import { Pages } from './index';
import Page from '../partials/Page';

export default class Project extends Component {
  static get nav() {
    return {
      href: '/project',
      label: 'Project'
    };
  }

  render() {
    return (
      <Page nav={Project.nav}>
        <p className="lead">This is the Project link disambiguation page.</p>
        <p>I think you can only get here via breadcrumbs from one of the following pages:</p>
        <ul>
          <li><Link nav={Pages.ProjectLookup.nav} /></li>
          <li><Link nav={Pages.ProjectBuilder.nav} /></li>
        </ul>
      </Page>
    );
  }
}
