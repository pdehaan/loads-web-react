'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { Pages } from './components/pages';
import NotFound from './components/pages/NotFound';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import './components/assets/site.css';


class App extends Component {
  static get href() {
    return Pages.Home.href;
  }

  static get title() {
    return Pages.Home.title;
  }

  render() {
    return (
      <div>
        <Header />

        <Breadcrumb>
          { this.props.routes.map((item, idx) =>
            <LinkContainer key={ idx } to={ item.path || '' }>
              <BreadcrumbItem active={ true }>{ item.component.title }</BreadcrumbItem>
            </LinkContainer>
          )}
        </Breadcrumb>

        { this.props.children }

        <Footer />
      </div>
    );
  }
}


render(
  <Router history={hashHistory}>
    <Route path="/" component={App} title="Home">
      <IndexRoute component={Pages.Home} />
      <Route path={Pages.RunDetails.href} component={Pages.RunDetails} />
      <Route path={Pages.ClusterManagement.href} component={Pages.ClusterManagement}>
        <Route path={Pages.ClusterManagementAgentStatus.href} component={Pages.ClusterManagementAgentStatus} />
        <Route path={Pages.ClusterManagementHealthCheck.href} component={Pages.ClusterManagementHealthCheck} />
      </Route>
      <Route path={Pages.Reference.href} component={Pages.Reference} />
      <Route path={Pages.Contact.href} component={Pages.Contact} />
      <Route path={Pages.Logout.href} component={Pages.Logout} />
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>,
  document.getElementById('App')
);
