'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class Reference extends Component {
  static get href() {
    return '/reference';
  }

  static get title() {
    return 'Reference';
  }

  render() {
    return (
      <Page pageTitle={Reference.title}>
        <div>This is the Reference page.</div>
      </Page>
    );
  }
}
