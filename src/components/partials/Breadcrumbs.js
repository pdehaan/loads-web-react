'use strict';

import React, { Component } from 'react';

import { Pages } from '../pages';
import PageLink from './PageLink';


const ListItemWrapper = (props) => {
  if (!props.data.active) {
    return <li><PageLink nav={props.data} /></li>;
  }
  return <li className="active">{props.data.label}</li>;
};


export default class Breadcrumbs extends Component {
  render() {
    // If the `props.links` is set to `null` (ie: Home or NotFound routes), then
    // do not display the breadcrumb trail.
    if (this.props.links === null) {
      return null;
    }

    // If the `props.links` are falsey, set the default 'Home' breadcrumb.
    const breadcrumbs = this.props.links || [ Pages.Home.nav ];

    if (this.props.nav) {
      this.props.nav.active = true;
      breadcrumbs.push(this.props.nav);
    }
    return (
      <ol className="breadcrumb">
        {breadcrumbs.map((link, index) => <ListItemWrapper key={index} data={link} />)}
      </ol>
    );
  }
}
