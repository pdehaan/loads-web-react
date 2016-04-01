'use strict';

import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Pages } from './index';
import Page from '../partials/Page';


const NavItemLink = (props) => {
  return (
    <LinkContainer to={ props.component.href || '' }>
      <NavItem>{ props.component.title }</NavItem>
    </LinkContainer>
  );
};


export default class ClusterManagement extends Component {
  static get href() {
    return '/clustermanagement';
  }

  static get title() {
    return 'Cluster Management';
  }

  render() {
    return (
      <Page pageTitle={ ClusterManagement.title }>
        <Nav bsStyle="tabs">
          <NavItemLink component={ Pages.ClusterManagementAgentStatus } />
          <NavItemLink component={ Pages.ClusterManagementHealthCheck } />
        </Nav>

        { this.props.children }
      </Page>
    );
  }
}

/*
<LinkContainer to={ Pages.ClusterManagementAgentStatus.href }>
  <NavItem>{ Pages.ClusterManagementAgentStatus.title }</NavItem>
</LinkContainer>
<LinkContainer to={ Pages.ClusterManagementHealthCheck.href }>
  <NavItem>{ Pages.ClusterManagementHealthCheck.title }</NavItem>
</LinkContainer>
*/
