'use strict';

import React, { Component } from 'react';

import { Pages } from './index';
import Page from '../partials/Page';
import PageLink from '../partials/PageLink';


export default class NotFound extends Component {
  static get nav() {
    return {
      href: '*',
      label: 'Page Not Found'
    };
  }

  render() {
    return (
      <Page breadcrumbs={null}>
        <section className="jumbotron main">
          <h1>Abandon All Hope!</h1>
          <p>Looks like we weren&#39;t able to find what you were looking for.</p>
        </section>

        <p className="lead">If you think this is a bug, check out the <PageLink nav={Pages.Contact.nav} /> page.</p>
        <PageLink nav={Pages.Home.nav} className="btn btn-primary btn-lg" />
      </Page>
    );
  }
}
