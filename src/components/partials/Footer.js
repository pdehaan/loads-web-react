'use strict';

import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <footer className="small text-center text-muted">
        <hr />
        <p>&copy; Mozilla {new Date().getFullYear()}</p>
      </footer>
    );
  }
}
