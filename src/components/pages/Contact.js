'use strict';

import React from 'react';

import Page from '../partials/Page';

const pageTitle = <span>Contact <small>(aka: <code>git blame</code>)</small></span>;

export default function Contact() {
  return (
    <Page nav={Contact.nav} pageTitle={pageTitle}>
      <p>Site not working? Blame pdehaan and rpapa.</p>
    </Page>
  );
}

Contact.nav = {
  href: '/contact',
  label: 'Contact'
};
