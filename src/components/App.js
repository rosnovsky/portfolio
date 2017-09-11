import React, { Component } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import Updates from '../containers/Updates';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Updates />
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
