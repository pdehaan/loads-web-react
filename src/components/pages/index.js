'use strict';

import About from './About';
import ClusterManagement from './ClusterManagement';
import ClusterManagementAgentStatus from './ClusterManagement_AgentStatus';
import ClusterManagementHealthCheck from './ClusterManagement_HealthCheck';
import Contact from './Contact';
import Home from './Home';
import Logout from './Logout';
import NotFound from './NotFound';
import Project from './Project';
import ProjectBuilder from './Project_Builder';
import ProjectLookup from './Project_Lookup';
import Reference from './Reference';
import RunDetails from './RunDetails';

const Pages = {
  About,
  ClusterManagement,
  ClusterManagementAgentStatus,
  ClusterManagementHealthCheck,
  Contact,
  Home,
  Logout,
  NotFound,
  Project,
  ProjectBuilder,
  ProjectLookup,
  Reference,
  RunDetails
};

const router = {};
Object.keys(Pages).forEach((page) => {
  return router[page] = Pages[page].nav;
});

export { Pages, router };
