'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import PageLink from '../partials/PageLink';


export default class NotFound extends Component {
  static get href() {
    return '*';
  }

  static get title() {
    return 'Page Not Found';
  }

  render() {
    return (
      <Page breadcrumbs={null}>
        <section className="jumbotron main">
          <h1>Abandon All Hope!</h1>
          <p>Looks like we weren&#39;t able to find what you were looking for.</p>
        </section>

        <p className="lead">If you think this is a bug, check out the <PageLink component={Pages.Contact} /> page.</p>
        <PageLink component={Pages.Home} className="btn btn-primary btn-lg" />
      </Page>
    );
  }
}
