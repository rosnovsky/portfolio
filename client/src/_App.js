import React, { Component } from 'react';
import './App.css';

class App extends Component {
  

  componentWillMount() {
    fetch('/data')
      .then(res => res.json())
      .then(data => {
        this.setState({ data });
  });
}



  render() {
      
    return (
      
      <div className="App">
        <h1>Data</h1>
        <h3>{this.state.data.location.venue}</h3>
        <p><small>{this.state.data.location.city} {this.state.data.location.state}</small></p>
        <h3>{this.state.data.book.title}</h3>
        <p><small>by {this.state.data.book.author}</small></p>
        <h3>Steps</h3>
        <p>{this.state.data.steps.count}</p>
        <h3>Coding</h3>
        <p>{this.state.data.coding.weekly}</p>
      </div>
    );
  }
}

export default App;
