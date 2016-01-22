'use strict';

import React, { Component } from './Page';
import Page from '../partials/Page';

export default class RunDetails extends Component {
  static get nav() {
    return {
      href: '/run/:id',
      label: 'Run Details'
    };
  }

  get id() {
    return this.props.params.id;
  }

  get pageTitle() {
    return `Run Details: ${this.id}`;
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      version: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => this.setState(data))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Page nav={RunDetails.nav} pageTitle={this.pageTitle}>
        <div>This is the Run details page for {this.id}.</div>
        <div className="well">name: {this.state.name};<br/>
          version: {this.state.version};</div>
      </Page>
    );
  }
}
