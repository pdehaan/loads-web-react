'use strict';

import { Link } from 'react-router';

import React, { Component } from './Page';
import { router } from './index';
import Page from '../partials/Page';

export default class Project extends Component {
  static get nav() {
    return {
      href: '/project',
      label: 'Project'
    };
  }

  render() {
    const lookup = router.ProjectLookup;
    const builder = router.ProjectBuilder;

    return (
      <Page nav={Project.nav}>
        <p className="lead">This is the Project link disambiguation page.</p>
        <p>I think you can only get here via breadcrumbs from one of the following pages:</p>
        <ul>
          <li><Link to={lookup.href}>{lookup.label}</Link></li>
          <li><Link to={builder.href}>{builder.label}</Link></li>
        </ul>
      </Page>
    );
  }
}
