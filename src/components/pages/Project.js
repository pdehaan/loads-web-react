'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import PageLink from '../partials/PageLink';


export default class Project extends Component {
  static get href() {
    return '/project';
  }

  static get title() {
    return 'Project';
  }

  render() {
    return (
      <Page pageTitle={Project.title}>
        <ul>
          <li><PageLink component={Pages.ProjectLookup} /></li>
          <li><PageLink component={Pages.ProjectBuilder} /></li>
        </ul>

        { this.props.children }
      </Page>
    );
  }
}
