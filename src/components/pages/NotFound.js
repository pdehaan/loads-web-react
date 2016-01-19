'use strict';

import { Link } from 'react-router';

import React, { Component } from './Page';
import { router } from './index';
import Page from '../partials/Page';

export default class NotFound extends Component {
  static get nav() {
    return {
      href: '/404',
      label: 'Page Not Found'
    };
  }

  render() {
    return (
      <Page nav={NotFound.nav}>
        <section className="jumbotron main">
          <h1>Abandon All Hope!</h1>
          <p>Looks like we weren&#39;t able to find what you were looking for.</p>
        </section>

        <p className="lead">If you think this is a bug, check out the <Link to={router.Contact.href}>{router.Contact.label}</Link> page.</p>
        <Link to={router.Home.href} className="btn btn-primary btn-lg">{router.Home.label}</Link>
      </Page>
    );
  }
}
