import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  // return (
  //   <div className="App">
  //     <h>Hi</h>
  //   </div>
  return React.createElement('div', null, 'h1", "I...am a React App!');
  }
}

export default App;