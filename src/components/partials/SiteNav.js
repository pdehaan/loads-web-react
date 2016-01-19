'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

import { router } from '../pages';

class ListItemWrapper extends Component {
  render() {
    const link = this.props.data;

    return (
      <li><Link to={link.href}>{link.label}</Link></li>
    );
  }
}

class DropdownItemWrapper extends Component {
  render() {
    const link = this.props.data;

    return (
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{link.label} <span className="caret"></span></a>
        <ul className="dropdown-menu">
          {this.props.children}
        </ul>
      </li>
    );
  }
}

class SiteNav extends Component {
  get brandName() {
    return this.props.brandName || 'Loads v.DEUX';
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to={router.Home.href}>{this.brandName}</Link>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <ListItemWrapper data={router.About} />
              <DropdownItemWrapper data={router.Project}>
                <ListItemWrapper data={router.ProjectLookup} />
                <ListItemWrapper data={router.ProjectBuilder} />
              </DropdownItemWrapper>
              <DropdownItemWrapper data={router.ClusterManagement}>
                <ListItemWrapper data={router.ClusterManagementAgentStatus} />
                <ListItemWrapper data={router.ClusterManagementHealthCheck} />
              </DropdownItemWrapper>
              <ListItemWrapper data={router.Reference} />
              <ListItemWrapper data={router.Contact} />
              <ListItemWrapper data={router.Logout} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SiteNav;
