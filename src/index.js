'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Pages } from './components/pages';
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
    <Route path={Pages.Home.nav.href} component={App}>
      <IndexRoute component={Pages.Home} />
      <Route path={Pages.About.nav.href} component={Pages.About} />
      <Route path={Pages.ClusterManagement.nav.href} component={Pages.ClusterManagement} />
      <Route path={Pages.ClusterManagementAgentStatus.nav.href} component={Pages.ClusterManagementAgentStatus} />
      <Route path={Pages.ClusterManagementHealthCheck.nav.href} component={Pages.ClusterManagementHealthCheck} />
      <Route path={Pages.Contact.nav.href} component={Pages.Contact} />
      <Route path={Pages.Logout.nav.href} component={Pages.Logout} />
      <Route path={Pages.Project.nav.href} component={Pages.Project} />
      <Route path={Pages.ProjectBuilder.nav.href} component={Pages.ProjectBuilder} />
      <Route path={Pages.ProjectLookup.nav.href} component={Pages.ProjectLookup} />
      <Route path={Pages.Reference.nav.href} component={Pages.Reference} />
      <Route path={Pages.RunDetails.nav.href} component={Pages.RunDetails} />
      <Route path={Pages.NotFound.nav.href} component={Pages.NotFound} />
    </Route>
  </Router>,
  document.getElementById('App')
);
