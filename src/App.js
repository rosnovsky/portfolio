import React, { Component } from 'react';
import './skeleton.css';
import './App.css';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Name from './components/Name';
import Skills from './components/Skills';
import CurrentReading from './components/CurrentReading';
import Footer from './components/Footer';

const year = new Date().getFullYear();

class App extends Component {
  render(props) {
    return (

<div className="container">

  <Navigation>
  </Navigation>

  <Name name="Artem Rosnovskiy" position="Front-End Developer" />

  <div className="row content">
    
    <Welcome avialable={false} />
    <Skills />

  </div>

  <CurrentReading />


    <Footer currentYear={year} />

</div>
      );
  }
}

export default App;
