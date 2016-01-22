'use strict';

import React, { Component as ReactComponent } from 'react';
import { Link as ReactLink } from 'react-router';

export default React;

export class Component extends ReactComponent {
  static get nav() {
    return {
      href: undefined,
      label: undefined
    };
  }

  get pageTitle() {
  }

  render() {
    return null;
  }
}

export class Link extends ReactComponent {
  render() {
    return (
      <ReactLink to={this.props.nav.href} className={this.props.className}>{this.props.nav.label}</ReactLink>
    );
  }
}
