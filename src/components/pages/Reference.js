'use strict';

import React, { Component } from 'react';

import Page from '../partials/Page';


export default class Reference extends Component {
  static get nav() {
    return {
      href: '/reference',
      label: 'Reference'
    };
  }

  render() {
    return (
      <Page nav={Reference.nav}>
        <div>This is the Reference page.</div>
      </Page>
    );
  }
}
