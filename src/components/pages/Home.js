'use strict';

import React, { Component } from './Page';
import Page from '../partials/Page';

export default class Home extends Component {
  static get nav() {
    return {
      href: '/',
      label: 'Home'
    };
  }

  render() {
    return (
      <Page breadcrumbs={null}>
        <p className="lead">This is the home page</p>
        <p>There are many like it, but this one is mein.</p>
        <p><a href="#/run/43">Run 43</a></p>
      </Page>
    );
  }
}
