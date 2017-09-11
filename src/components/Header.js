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
          <p> <span role="img" aria-label="Blue Avialability Icon">🔵</span> Available for hire</p>
        </div>
      </div>
    )
  }
}