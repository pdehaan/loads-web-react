'use strict';

import React from 'react';

import PageNav from './PageNav';


export default function Page(props) {
  return (
    <main className="main">
      <PageNav pageTitle={props.pageTitle} />
      {props.children}
    </main>
  );
}
