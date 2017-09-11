import React, { Component } from 'react';

export default class Footer extends Component {
  
  render() {
    const currentYear = new Date().getFullYear();
    return(
      <div className="copyright row justify-content-sm-center">&copy; {currentYear} Artem Rosnovsky. Online since 1996</div>
    )
  }
}