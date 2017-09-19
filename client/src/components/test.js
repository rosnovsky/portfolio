import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Updates from '../components/Updates';




class App extends Component {
  constructor(props){
    super(props);

    this.state = { 
      location: 'Locating...',
      book: 'Skimming through...',
      coding: 'Retrieving...',
      steps: 'Checking...' 
    }
}

componentWillMount(){
  /// LOCATION ///
      
  fetch("/data")
  .then(res => res.json())
  .then(res => console.log(res));
}



  render() {
    return (
      <div className="container">
        <Header />
        <Updates location={this.state.location} />
        <Intro />
        <Footer />
      </div>
    );
  }
}



export default App;
