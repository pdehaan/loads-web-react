'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class Logout extends Component {
  static get nav() {
    return {
      href: '/logout',
      label: 'Logout'
    };
  }

  render() {
    return (
      <Page nav={Logout.nav}>
        <p className="text-danger">So you want to log out, eh?</p>
      </Page>
    );
  }
}
