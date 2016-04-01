'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

// import PageLink from './PageLink';
import { Pages } from '../pages';

const ListItemWrapper = (props) => (
  <li><Link to={props.href}>{props.title}</Link></li>
);

const DropdownItemWrapper = (props) => (
  <li className="dropdown">
    <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{props.title} <span className="caret"></span></a>
    <ul className="dropdown-menu">
      {props.children}
    </ul>
  </li>
);

const GitHubBanner = (props) => (
  <a href={props.url}><img id="githubBanner" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" /></a>
);

export default class SiteNav extends Component {
  get brandName() {
    return this.props.brandName || 'Loads v.DEUX';
  }

  get brandNav() {
    return {
      href: Pages.Home.href,
      title: this.brandName
    };
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
            <Link className="navbar-brand" to={Pages.Home.href}>{this.brandName}</Link>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {/* <ListItemWrapper data={Pages.About.nav} /> */}
              {/* <DropdownItemWrapper data={Pages.Project.nav}>
                <ListItemWrapper data={Pages.ProjectLookup.nav} />
                <ListItemWrapper data={Pages.ProjectBuilder.nav} />
              </DropdownItemWrapper> */}
              <DropdownItemWrapper href={Pages.ClusterManagement.href} title={Pages.ClusterManagement.title}>
                <ListItemWrapper href={Pages.ClusterManagementAgentStatus.href} title={Pages.ClusterManagementAgentStatus.title} />
                <ListItemWrapper href={Pages.ClusterManagementHealthCheck.href} title={Pages.ClusterManagementHealthCheck.title} />
              </DropdownItemWrapper>
              <ListItemWrapper href={Pages.Reference.href} title={Pages.Reference.title} />
              <ListItemWrapper href={Pages.Contact.href} title={Pages.Contact.title} />
              <ListItemWrapper href={Pages.Logout.href} title={Pages.Logout.title} />
            </ul>
            <GitHubBanner url={__CONFIG__.homepage} />
          </div>
        </div>
      </nav>
    );
  }
}


/*
function ListItemWrapper(props) {
  return (
    <li><PageLink nav={props.data} /></li>
  );
}

function DropdownItemWrapper(props) {
  return (
    <li className="dropdown">
      <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{props.data.label} <span className="caret"></span></a>
      <ul className="dropdown-menu">
        {props.children}
      </ul>
    </li>
  );
}

function GitHubBanner(props) {
  return (
    <a href={props.url}><img id="githubBanner" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" /></a>
  );
}
*/
