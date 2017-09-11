import React, { Component } from 'react';

export default class Header extends Component {
render() {
    return (
      <div>
        <div className="row justify-content-md-center"> 
          <h1>Artem Rosnovsky</h1>
          </div>
          
          <div className="row justify-content-md-center"> 
            <h2>Full Stack Javascript Developer</h2>
          </div>
          
          <div className="row justify-content-md-center"> 
          <p> <img src="../images/status.gif" className="status" /> Available for hire</p>
        </div>
      </div>
    )
  }
}