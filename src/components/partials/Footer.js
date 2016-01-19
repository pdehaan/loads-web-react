'use strict';

import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="text-center text-muted">
        <hr />
        <small>&copy; Mozilla {new Date().getFullYear()}</small>
      </footer>
    );
  }
}
