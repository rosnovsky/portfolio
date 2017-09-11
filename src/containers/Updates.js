import React, { Component } from 'react';

export default class Footer extends Component {
  
  render() {
    return (
      <div>
        <div className="updates container-fluid row justify-content-md-center">
          <div className="location col-12 col-md-auto">
            <div className="icon"><img src="../images/swarm.png" alt="swarm logo" /></div>
            <p className="data">SportCuts</p><br />latest check-in
          </div>
          <div className="fitness col-12 col-md-auto">
          <div className="icon"><img src="../images/fitbit.png" alt="fitbit logo" /></div>
          <p className="data">3245</p><br />steps today
          </div>
          <div className="coding col-12 col-md-auto">
          <div className="icon"><img src="../images/wakatime.png" alt="wakatime logo" /></div>
          <p className="data">14 hours</p><br />of coding in last 7 days
          </div>
          <div className="reading col-12 col-md-auto">
          <div className="icon"><img src="../images/google-books.png" alt="google books logo" /></div>
          <p className="data">The One Device</p><br />by Brian Merchant
          </div>
        </div>

        <div className="update row justify-content-sm-center"><a href="/update" className="update-url">Click to update</a></div>
      </div>
    );
  }
}