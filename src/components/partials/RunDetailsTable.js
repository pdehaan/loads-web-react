'use strict';

import React, { Component, PropTypes } from 'react';
import ms from 'ms';

import PageLink from './PageLink';


function TableRow(props) {
  const data = props.result;

  const iconMap = (icon, classes) => {
    const icons = {
      'danger': 'remove',
      'info': 'question',
      'success': 'ok'
    };
    return `glyphicon glyphicon-${icons[icon]}-sign ${classes}`;
  };

  const nav = {
    href: props.detailsUrl.replace(/:id$/, data.id),
    label: data.name
  };
  const textClass = `text-${data.state}`;
  const iconClass = iconMap(data.state, textClass);

  return (
    <tr key={data.id} className={data.state}>
      <td><span className={iconClass} aria-hidden="true"></span> <b><PageLink nav={nav} className={textClass} /></b></td>
      <td className="small">{data.duration}</td>
      <td className="small">{data.finished}</td>
    </tr>
  );
}

export default class RunDetailsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
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
          <th>Duration</th>
          <th>Finished</th>
        </tr>
      </thead>
      <tbody>
        {this.state.results.map((result) => (
          <TableRow result={result} detailsUrl={this.props.detailsUrl} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="small text-right text-muted">Last sync: <em>{this.state.lastsync.toLocaleString()}</em></td>
        </tr>
      </tfoot>
      </table>
    );
  }
}
