import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //Import another Component to add to main Component (App.js)

class App extends Component {
  render() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <p>This is really working!</p>
      <Person /> 
      <Person />
      <Person />
      <Person />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'What is new?')); //React.createElement(component, props, ...children)
  }
}

export default App;