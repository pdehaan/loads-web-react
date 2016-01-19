'use strict';

import React, { Component as ReactComponent } from 'react';

import { router } from './index';

class Page extends ReactComponent {
  static get nav() {
    return {
      href: undefined,
      label: undefined
    };
  }

  get page() {
    return router[this.constructor.name];
  }

  get pageTitle() {
  }

  render() {
    return null;
  }
}

export default React;
export const Component = Page;
