'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import PageLink from '../partials/PageLink';


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
          <li><PageLink nav={Pages.ProjectLookup.nav} /></li>
          <li><PageLink nav={Pages.ProjectBuilder.nav} /></li>
        </ul>
      </Page>
    );
  }
}
