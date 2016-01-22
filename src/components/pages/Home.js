'use strict';

import { Link } from 'react-router';

import React, { Component } from './Page';
import { Pages } from './index';
import Page from '../partials/Page';


class RunDetailsTable extends Component {
  render() {
    const results = this.props.results;
    const lastsync = this.props.lastsync;

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => <ResultRowWrapper data={result} />)}
        </tbody>
        <tfoot>
        <tr>
          <td colSpan="2" className="text-muted text-right small">Last sync: {lastsync.toLocaleString()}</td>
        </tr>
        </tfoot>
      </table>
    );
  }
}

class ResultRowWrapper extends Component {
  render() {
    const data = this.props.data;
    const href = Pages.RunDetails.nav.href.replace(/:id$/, data.id);

    return (
      <tr>
        <td><Link to={href}>{data.name}</Link></td>
        <td>{data.age}</td>
      </tr>
    );
  }
}

export default class Home extends Component {
  static get nav() {
    return {
      href: '/',
      label: 'Home'
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      lastsync: new Date()
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('data/results.json')
      .then((res) => res.json())
      .then((data) => {
        data.lastsync = new Date();
        this.setState(data);
      })
      .catch((err) => console.error(err));
  }

  render() {
    setTimeout(this.fetchData.bind(this), 5000);

    return (
      <Page breadcrumbs={null}>
        <p className="lead">This is the home page.  There are many like it, but this one is mein.</p>

        <RunDetailsTable results={this.state.results} lastsync={this.state.lastsync} />

        <div className="alert alert-danger" role="alert">
          <p><strong>DEBUG:</strong> See sample <a href="#/uhoh" className="alert-link">404</a> page.</p>
        </div>
      </Page>
    );
  }
}
