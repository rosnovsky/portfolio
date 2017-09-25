import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return(
        <div className="intro row justify-content-md-center">
          <div className="col-12 col-lg-auto">
           <p>This simple status application runs on Node server with Express. It is built with React, some vanilla asynchronous JavaScript (including ES6), Bootstrap as a styling framework, and some pure HTML5 and CSS3. It features Foursquare, Wakatime and Google Books APIs for data retrieval.</p>
           <p>To learn more about me and what I do visit my <a href="http://github.com/rosnovsky">Github</a>, <a href="https://linkedin.com/in/rosnovsky">LinkedIn</a>, and <a href="https://instagram.com/rosnovsky">Instagram</a>.</p>
          </div>
        </div>
    )
  }
}