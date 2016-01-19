'use strict';

import React, { Component } from 'react';
// import { Link } from 'react-router';

import { Pages } from '../pages';
import { Link } from '../pages/Page';

class ListItemWrapper extends Component {
  render() {
    return (
      <li><Link nav={this.props.data} /></li>
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
    const brandNav = {
      href: Pages.Home.nav.href,
      label: this.brandName
    };
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
            <Link className="navbar-brand" nav={brandNav} />
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <ListItemWrapper data={Pages.About.nav} />
              <DropdownItemWrapper data={Pages.Project.nav}>
                <ListItemWrapper data={Pages.ProjectLookup.nav} />
                <ListItemWrapper data={Pages.ProjectBuilder.nav} />
              </DropdownItemWrapper>
              <DropdownItemWrapper data={Pages.ClusterManagement.nav}>
                <ListItemWrapper data={Pages.ClusterManagementAgentStatus.nav} />
                <ListItemWrapper data={Pages.ClusterManagementHealthCheck.nav} />
              </DropdownItemWrapper>
              <ListItemWrapper data={Pages.Reference.nav} />
              <ListItemWrapper data={Pages.Contact.nav} />
              <ListItemWrapper data={Pages.Logout.nav} />
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default SiteNav;
