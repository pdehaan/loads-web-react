'use strict';

import React from 'react';
import { Link } from 'react-router';


export default function PageLink(props) {
  return (
    <Link to={props.nav.href} className={props.className}>{props.nav.label}</Link>
  );
}
