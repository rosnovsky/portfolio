import React, { Component } from 'react';
import './skeleton.css';
import './App.css';
import Nav from './components/nav';
import Welcome from './components/welcome';
import Name from './components/name';
import Skills from './components/skills';
import CurrentReading from './components/currentreading';

const year = new Date().getFullYear();

function Year(props) {
  return <div className="row footer"><p>Copyright © <span className="currentYear">{props.currentYear}</span> Artem Rosnovskiy.<br/> Online since 1996.</p></div>;
}

class App extends Component {
  render(props) {
    return (

<div className="container">

  <Nav />
  <Name />

  <div className="row content">
    
    <Welcome />
    <Skills />

  </div>

  <CurrentReading />


    <Year currentYear={year} />

</div>
      );
  }
}

export default App;
