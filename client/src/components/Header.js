import React, { Component } from 'react';

export default class Header extends Component {
render() {
    return (
      <div className="header">
        <div className="row justify-content-md-center">
          <h1>Artem Rosnovsky</h1>
        </div>

        <div className="row justify-content-md-center">
          <h2>Full Stack JavaScript Developer</h2>
        </div>

        <div className="row justify-content-md-center">
          <button type="button" className="btn btn-secondary"> <img src="../images/status.gif" alt="" className="status" /> Available for hire</button>
        </div>
      </div>
    )
  }
}