'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';

export default class Contact extends Component {
  static get href() {
    return '/contact';
  }

  static get title() {
    return 'Contact';
  }

  render() {
    return (
      <Page pageTitle={Contact.title}>
        <p>Site not working? Blame pdehaan and rpapa.</p>
      </Page>
    );
  }
}
