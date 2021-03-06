import React, { useState } from 'react'; //Usestate allows to manage state in functional component, usestate uses hawks and always - as an array - uses ALWAYS two elements
import './App.css';
import Person from './Person/Person'; //Import another Component to add to main Component (App.js)


const App = props => {
  //usestate (ALWAYS two elements array) and hook bellow 
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Max', age: 40 },
      { name: 'Angie', age: 20 },
      { name: 'James', age: 25 }
    ]
  });

const [ otherState, setOtherState ] = useState('some other value');

console.log(personsState, otherState);

  //switchNameHandler handles the button click event
  const switchNameHandler = () => {
    //setPersonsState can change personsState proporties
    setPersonsState( {
        persons: [
          { name: 'Pati', age: 6 },
          { name: 'Angie', age: 100 },
          { name: 'James', age: 200 }
        ],
      } )  
    }

    render () 
    {
      return 
      (
        <div className="App">
          <h1>Hi</h1>
          <p>This is really working!</p>
          <button onClick={() => this.switchNameHandler('MAX')}>Switch name</button> 
          <Person  
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person  
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age} 
            click={this.switchNameHandler}> I have a dog! </Person>
          <Person  
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> 
        </div>
      );
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'What is new?')); //React.createElement(component, props, ...children)
    }
}

export default App; 




