import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //Import another Component to add to main Component (App.js)

class App extends Component {
  //State is an internal component part.
  state = { 
    persons: [
      { name: 'Max', age: 40 },
      { name: 'Angie', age: 20 },
      { name: 'James', age: 25 }
    ]
  }

  //switchNameHandler handles the button click event
  switchNameHandler = () => {
    //setState changes state proporties
      this.setState( {
        persons: [
          { name: 'Pati', age: 6 },
          { name: 'Angie', age: 100 },
          { name: 'James', age: 200 }
        ]
      } )  
    }

  render() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <p>This is really working!</p>
      <button onClick={this.switchNameHandler}>Switch name</button> 
      <Person  name={this.state.persons[0].name} age={this.state.persons[0].age} > I have a dog! </Person>
      <Person  name={this.state.persons[1].name} age={this.state.persons[1].age} > I have a hamster! </Person>
      <Person  name={this.state.persons[2].name} age={this.state.persons[2].age} /> 
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'What is new?')); //React.createElement(component, props, ...children)
  }
}

export default App; 