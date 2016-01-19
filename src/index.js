'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Pages, router } from './components/pages';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import './components/assets/site.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

render(
  <Router history={browserHistory}>
    <Route path={router.Home.href} component={App}>
      <IndexRoute component={Pages.Home} />
      <Route path={router.About.href} component={Pages.About} />
      <Route path={router.ClusterManagement.href} component={Pages.ClusterManagement} />
      <Route path={router.ClusterManagementAgentStatus.href} component={Pages.ClusterManagementAgentStatus} />
      <Route path={router.ClusterManagementHealthCheck.href} component={Pages.ClusterManagementHealthCheck} />
      <Route path={router.Contact.href} component={Pages.Contact} />
      <Route path={router.Logout.href} component={Pages.Logout} />
      <Route path={router.Project.href} component={Pages.Project} />
      <Route path={router.ProjectBuilder.href} component={Pages.ProjectBuilder} />
      <Route path={router.ProjectLookup.href} component={Pages.ProjectLookup} />
      <Route path={router.Reference.href} component={Pages.Reference} />
      <Route path={router.RunDetails.href} component={Pages.RunDetails} />
      <Route path='*' component={Pages.NotFound} />
    </Route>
  </Router>,
  document.getElementById('App')
);
