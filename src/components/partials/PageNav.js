'use strict';

import React, { Component } from 'react';
import Helmet from 'react-helmet';

// import Breadcrumbs from './Breadcrumbs';


export default class PageNav extends Component {
  render() {
    const pageTitle = this.props.pageTitle || (this.props.page && this.props.page.label);
    const meta = [
      {
        property: 'og:title',
        content: pageTitle
      },
      {
        property: 'charset',
        content: 'utf-8'
      }
    ];
    const htmlAttrs = {
      lang: 'en'
    };

    return (
      <header>
        <Helmet htmlAttributes={htmlAttrs}
          title={pageTitle}
          titleTemplate="Loads V2 - %s"
          defaultTitle="Loads V2 - Home"
          meta={meta} />

        { /* <Breadcrumbs links={this.props.breadcrumbs} nav={this.props.page} /> */ }
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
