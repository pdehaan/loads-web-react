'use strict';

import React, { Component } from 'react';

import SiteNav from './SiteNav';

class Header extends Component {
  render() {
    return (
      <SiteNav brandName={this.props.brandName} />
    );
  }
}

export default Header;
