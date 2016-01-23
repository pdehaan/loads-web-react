'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';


export default class RunDetailsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      lastsync: new Date()
    };
  }

  componentDidMount() {
    this.fetchData();

    // If the `refreshInterval` was specified, set a refresh interval to reload
    // the data.
    if (this.props.refreshInterval) {
      this.timer = setInterval(this.fetchData.bind(this), this.props.refreshInterval);
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
      <table className="table">
      <thead>
        <tr>
          <th>WHAT</th>
          <th>WHEN</th>
          <th>WHO</th>
        </tr>
      </thead>
      <tbody>
        {this.state.results.map((result) => {
          const detailsHref = this.props.detailsUrl.replace(/:id$/, result.id);

          return (
            <tr key={result.id}>
              <td><Link to={detailsHref}>{result.name}</Link></td>
              <td>{result.age}</td>
              <td>&nbsp;</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="3" className="small text-right text-muted">Last sync: {this.state.lastsync.toLocaleString()}</td>
        </tr>
      </tfoot>
      </table>
    );
  }
}
