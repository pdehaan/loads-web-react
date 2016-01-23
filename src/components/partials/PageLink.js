'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';


export default class PageLink extends Component {
  render() {
    return (
      <Link to={this.props.nav.href} className={this.props.className}>{this.props.nav.label}</Link>
    );
  }
}
