'use strict';

import React, { Component } from 'react';
import moment from 'moment';

import Page from '../partials/Page';


export default class RunDetails extends Component {
  static get href() {
    return '/run/:id';
  }

  static get title() {
    return 'Run Details';
  }

  get id() {
    return this.props.params.id;
  }

  get pageTitle() {
    return `Run Details: ${this.state.run.plan_name }`;
  }

  constructor(props) {
    super(props);

    /* eslint-disable camelcase */
    this.state = {
      lastsync: new Date(),
      run: {
        aborted: false,
        completed_at: moment(),
        created_at: moment(),
        creator: null,
        plan_id: null,
        plan_name: '',
        started_at: moment(),
        state: null,
        step_records: [],
        uuid: null
      }
    };
    /* eslint-enable camelcase */
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => {
        data.lastsync = new Date();
        this.setState(data);
      })
      .catch((err) => console.error(err));
  }

  render() {
    const details = this.state.run;
    return (
      <Page pageTitle={this.pageTitle}>
        <table className="table table-bordered table-hover">
        <tbody>
          <tr>
            <th>aborted:</th>
            <td>{!!details.aborted}</td>
          </tr>
          <tr>
            <th>completed_at:</th>
            <td>{moment(details.completed_at).fromNow()}</td>
          </tr>
          <tr>
            <th>created_at:</th>
            <td>{moment(details.created_at).fromNow()}</td>
          </tr>
          <tr>
            <th>creator:</th>
            <td>{details.creator}</td>
          </tr>
          <tr>
            <th>plan_id:</th>
            <td>{details.plan_id}</td>
          </tr>
          <tr>
            <th>plan_name:</th>
            <td>{details.plan_name}</td>
          </tr>
          <tr>
            <th>started_at:</th>
            <td>{moment(details.started_at).fromNow()}</td>
          </tr>
          <tr>
            <th>state:</th>
            <td>{details.state}</td>
          </tr>
          <tr>
            <th>step_records</th>
            <td><pre>{JSON.stringify(details.step_records, null, 2)}</pre></td>
          </tr>
          <tr>
            <th>uuid:</th>
            <td>{details.uuid}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="small text-right text-muted">Last sync: <em>{this.state.lastsync.toLocaleString()}</em></td>
          </tr>
        </tfoot>
        </table>
      </Page>
    );
  }
}
