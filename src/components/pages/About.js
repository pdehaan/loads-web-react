'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class About extends Component {
  static get href() {
    return '/about';
  }

  static get title() {
    return 'About';
  }

  render() {
    return (
      <Page pageTitle={About.title}>
        <div>This is the about page.</div>
      </Page>
    );
  }
}
