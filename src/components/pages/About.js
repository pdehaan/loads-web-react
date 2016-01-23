'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class About extends Component {
  static get nav() {
    return {
      href: '/about',
      label: 'About'
    };
  }

  render() {
    return (
      <Page nav={About.nav}>
        <div>This is the about page.</div>
      </Page>
    );
  }
}
