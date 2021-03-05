import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  // return (
  //   <div className="App">
  //     <h>Hi</h>
  //   </div>
  // );
  return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'What is new?')); //React.createElement(component, props, ...children)
  }
}

export default App;