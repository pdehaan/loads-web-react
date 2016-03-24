'use strict';

import React from 'react';

import SiteNav from './SiteNav';


export default function Header(props) {
  return (
    <SiteNav brandName={props.brandName} />
  );
}
