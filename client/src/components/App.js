import React, { Component } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Updates from '../components/Updates';




class App extends Component {

state = { data: 
  {
    location: {
      venue: "Checking Swarm...",
      city: "",
      state: ""
    },

    book: {
      authors: "Looking...", 
      title: "Cheking Google Books...",
      cover: "img.png",
      url: "#"
    },
    coding: {
      weekly: "Pinging Wakatime",
      dailyAverage: "hours and hours",
      language: "",
      languageRunnerUp: ""
    }
  }};

  componentWillMount() {
    fetch('/data')
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
  });
}

  render() {
    return (
      <div className="container">
        <Header />
        <Updates location={this.state.data.location} book={this.state.data.book} coding={this.state.data.coding} />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
