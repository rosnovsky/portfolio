import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Current Year', () => {
  it('2016', () => {
    
    ReactDOM.render(<App />, expect(Year(props)).toBe("2016"));
  });
});
