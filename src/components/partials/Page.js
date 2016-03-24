'use strict';

import React from 'react';

import PageNav from './PageNav';


export default function Page(props) {
  return (
    <section className="main">
      <PageNav breadcrumbs={props.breadcrumbs} page={props.nav} pageTitle={props.pageTitle} />
      {props.children}
    </section>
  );
}
