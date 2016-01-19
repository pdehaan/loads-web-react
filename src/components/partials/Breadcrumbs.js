'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import { router } from '../pages';

class ListItemWrapper extends Component {
  render() {
    const link = this.props.data;

    if (!link.active) {
      return <li><Link to={link.href}>{link.label}</Link></li>;
    }
    return <li className="active">{link.label}</li>;
  }
}

export default class Breadcrumbs extends Component {
  render() {
    if (this.props.links === null) {
      return null;
    }

    const breadcrumbs = this.props.links || [ router.Home ];

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
