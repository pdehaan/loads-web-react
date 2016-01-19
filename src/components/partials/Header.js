'use strict';

import React, { Component } from 'react';

import SiteNav from './SiteNav';

export default class Header extends Component {
  render() {
    return (
      <SiteNav brandName={this.props.brandName} />
    );
  }
}
