'use strict';

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import ms from 'ms';

// import PageLink from './PageLink';

const stateMap = [
  'initializing',
  'running',
  'terminating',
  'completed'
];

function TableRow(props) {
  const data = props.result;

  const iconMap = (icon, classes) => {
    const icons = {
      'initializing': 'remove',
      'running': 'question',
      'terminating': 'remove',
      'aborted': 'remove',
      'completed': 'ok'
    };
    return `glyphicon glyphicon-${icons[icon]}-sign ${classes}`;
  };

  const textMap = {
    'initializing': 'info',
    'running': 'info',
    'terminating': 'danger',
    'aborted': 'danger',
    'completed': 'success'
  };

  const nav = {
    href: props.detailsUrl.replace(/:id$/, data.uuid),
    title: data.plan_name
  };
  const textClass = `text-${textMap[data.state]}`;
  const iconClass = iconMap(data.state, textClass);

  return (
    <tr key={data.uuid} className={textMap[data.state]}>
      <td><span className={iconClass} aria-hidden="true"></span> <b><Link to={nav.href} className={textClass}>{nav.title}</Link></b> <small>{data.creator ? `(${data.creator})` : ''}</small></td>
      <td>{data.state.toUpperCase()}</td>
      <td className="small">{data.completed_at ? moment(data.completed_at).to(data.created_at, true) : ''}</td>
      <td className="small">{data.completed_at ? moment(data.completed_at).calendar() : ''}</td>
    </tr>
  );
}

export default class RunDetailsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runs: [],
      success: true,
      lastsync: new Date()
    };
    this.fetchJsonData = this.fetchData.bind(this);
  }

  static get propTypes() {
    return {
      detailsUrl: PropTypes.string.isRequired,
      refreshInterval: PropTypes.string
    };
  }

  componentDidMount() {
    this.fetchData();

    // If the `refreshInterval` was specified, set a refresh interval to reload
    // the data.
    if (this.props.refreshInterval) {
      this.timer = setInterval(this.fetchJsonData, ms(this.props.refreshInterval));
    }
  }

  componentWillUnmount() {
    // Clear any existing timers if the page is "unloaded".
    this.timer && clearInterval(this.timer);
  }

  fetchData() {
    fetch(this.props.dataUrl)
      .then((res) => res.json())
      .then((data) => {
        data.lastsync = new Date();
        data.runs = data.runs.map((run) => {
          run.completed_at = run.completed_at && new Date(run.completed_at); // eslint-disable-line camelcase
          run.created_at = run.created_at && new Date(run.created_at); // eslint-disable-line camelcase
          run.started_at = run.started_at && new Date(run.started_at); // eslint-disable-line camelcase
          run.state = stateMap[run.state].toLowerCase();
          if (run.aborted) {
            run.state = 'aborted';
          }
          return run;
        });
        this.setState(data);
        return data;
      })
      .catch((err) => {
        console.error(err);
        // Clear the timer if we get an error.
        this.timer && clearInterval(this.timer);
      });
  }

  render() {
    return (
      <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th>Test</th>
          <th>State</th>
          <th>Duration</th>
          <th>Finished</th>
        </tr>
      </thead>
      <tbody>
        {this.state.runs.map((result) => (
          <TableRow key={result.uuid} result={result} detailsUrl={this.props.detailsUrl} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4" className="small text-right text-muted">Last sync: <em>{this.state.lastsync.toLocaleString()}</em></td>
        </tr>
      </tfoot>
      </table>
    );
  }
}
