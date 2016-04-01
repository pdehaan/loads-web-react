'use strict';

// import About from './About';
import ClusterManagement from './ClusterManagement';
import ClusterManagementAgentStatus from './ClusterManagement_AgentStatus';
import ClusterManagementHealthCheck from './ClusterManagement_HealthCheck';
import Contact from './Contact';
import Home from './Home';
import Logout from './Logout';
// import Project from './Project';
// import ProjectBuilder from './Project_Builder';
// import ProjectLookup from './Project_Lookup';
import Reference from './Reference';
import RunDetails from './RunDetails';

// import NotFound from './NotFound';

export const Pages = {
  // About,
  ClusterManagement,
  ClusterManagementAgentStatus,
  ClusterManagementHealthCheck,
  Contact,
  Home,
  Logout,
  // Project,
  // ProjectBuilder,
  // ProjectLookup,
  Reference,
  RunDetails
};

/*
// Dynamically generate our <Route>s using the `Pages` object.
const routes = Object.keys(Pages)
  .map((page) => {
    const Page = Pages[page];
    return {
      path: Page.href,
      component: Page
    };
  });

// Add our catch-all `NotFound` route last.
routes.push({
  path: NotFound.nav.href,
  component: NotFound
});

export { routes };
*/
