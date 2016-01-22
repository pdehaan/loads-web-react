'use strict';

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Pages } from './components/pages';
import NotFound from './components/pages/NotFound';
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

// Dynamically generate our <Route>s using the `Pages` object.
const childRoutes = Object.keys(Pages)
  .map((page) => {
    const Page = Pages[page];
    return {
      path: Page.nav.href,
      component: Page
    };
  });

// Add our catch-all `NotFound` route last.
childRoutes.push({
  path: NotFound.nav.href,
  component: NotFound
});

const routes = {
  component: App,
  childRoutes: childRoutes
};

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('App')
);

/*
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
*/
