import React, { Component } from 'react';

class Updates extends Component {

  render() {
    
    // <img src={this.props.book.cover} alt={this.props.book.title} /></div>

    return (  
      <div>
        <div className="updates container-fluid row justify-content-md-center">
          <div className="location col-12 col-md-auto">
            <div className="icon"><img src="../images/swarm.png" alt="swarm logo" /></div>
            <p className="data">{this.props.location.venue} in <small>{this.props.location.city}, {this.props.location.state}</small></p>
            <p className="comment">latest check-in</p>
          </div>
          
          <div className="fitness col-12 col-md-auto">
          <div className="icon"><img src="../images/fitbit.png" alt="fitbit logo" /></div>
          <p className="data">{this.props.steps.count}</p><p className="comment">steps today</p>
          </div>
          <div className="coding col-12 col-md-auto">
          <div className="icon"><img src="../images/wakatime.png" alt="wakatime logo" /></div>
          <p className="data">{this.props.coding.weekly}</p><p className="comment">of coding in last 7 days</p>
          </div>
          <div className="reading col-12 col-md-auto">
          <div className="icon"><img src="../images/google-books.png" alt="google books logo" /></div>
          <p className="data"><a href={this.props.book.url}>{this.props.book.title}</a></p><p>{this.props.book.author}</p>
          </div>
        </div>

        {/* <div className="update row justify-content-sm-center"><a href="/update" className="update-url">Click to update</a></div> */}
      </div>
    );
  }
}

export default Updates;