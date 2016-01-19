'use strict';

import React, { Component } from 'react';

import { Pages } from '../pages';
import { Link } from '../pages/Page';

class ListItemWrapper extends Component {
  render() {
    const link = this.props.data;

    if (!link.active) {
      return <li><Link nav={link} /></li>;
    }
    return <li className="active">{link.label}</li>;
  }
}

export default class Breadcrumbs extends Component {
  render() {
    if (this.props.links === null) {
      return null;
    }

    const breadcrumbs = this.props.links || [ Pages.Home.nav ];

    if (this.props.nav) {
      this.props.nav.active = true;
      breadcrumbs.push(this.props.nav);
    }
    return (
      <ol className="breadcrumb">
        {breadcrumbs.map((link) => <ListItemWrapper data={link} />)}
      </ol>
    );
  }
}
