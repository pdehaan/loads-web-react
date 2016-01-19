'use strict';

import React, { Component, Link } from './Page';
import { Pages } from './index';
import Page from '../partials/Page';

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

        <p className="lead">If you think this is a bug, check out the <Link nav={Pages.Contact.nav} /> page.</p>
        <Link nav={Pages.Home.nav} className="btn btn-primary btn-lg" />
      </Page>
    );
  }
}
