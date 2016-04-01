'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class Logout extends Component {
  static get href() {
    return '/logout';
  }

  static get title() {
    return 'Logout';
  }

  render() {
    return (
      <Page pageTitle={Logout.title}>
        <p className="text-danger">So you want to log out, eh?</p>
      </Page>
    );
  }
}
