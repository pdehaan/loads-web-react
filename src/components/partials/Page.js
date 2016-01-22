'use strict';

import React, { Component } from 'react';

import PageNav from './PageNav';

export default class Page extends Component {
  render() {
    return (
      <section className="main">
        <PageNav breadcrumbs={this.props.breadcrumbs} page={this.props.nav} pageTitle={this.props.pageTitle} />
        {this.props.children}
      </section>
    );
  }
}
