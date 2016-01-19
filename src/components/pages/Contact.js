'use strict';

import React, { Component } from './Page';
import Page from '../partials/Page';

export default class Contact extends Component {
  static get nav() {
    return {
      href: '/contact',
      label: 'Contact'
    };
  }

  get pageTitle() {
    return (
      <span>Contact <small>(aka: <code>git blame</code>)</small></span>
    );
  }

  render() {
    return (
      <Page nav={Contact.nav} pageTitle={this.pageTitle}>
        <p>Site not working? Blame <a href="mailto:pdehaan@mozilla.com">pdehaan</a> and <a href="mailto:rpapa@mozilla.com">rpapa</a>!</p>
      </Page>
    );
  }
}
