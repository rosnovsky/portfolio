console.time('index.js load time');
import React from 'react';
import ReactDOM from 'react-dom';
// import './normalize.css';

//CSS 

import './skeleton.css';
import './App.css';

import App from './App';


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
console.timeEnd('index.js load time');
