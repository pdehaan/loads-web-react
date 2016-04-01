'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class ProjectBuilder extends Component {
  static get href() {
    return '/project/builder';
  }

  static get title() {
    return 'Project Builder';
  }

  render() {
    return (
      <Page pageTitle={ProjectBuilder.title}>
        <p>Project Builder details page.</p>
      </Page>
    );
  }
}
