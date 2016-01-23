'use strict';

import React, { Component } from 'react';

import Breadcrumbs from './Breadcrumbs';


export default class PageNav extends Component {
  render() {
    const pageTitle = this.props.pageTitle || (this.props.page && this.props.page.label);

    document.title = 'Loads V2: ' + pageTitle || '';

    return (
      <header>
        <Breadcrumbs links={this.props.breadcrumbs} nav={this.props.page} />
        <PageTitleWrapper title={pageTitle} />
      </header>
    );
  }
}

class PageTitleWrapper extends Component {
  render() {
    const title = this.props.title;

    if (!title) {
      return null;
    }
    return (
      <div className="page-header">
        <h1>{title}</h1>
      </div>
    );
  }
}
