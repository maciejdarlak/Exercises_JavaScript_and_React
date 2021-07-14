//import logo from './logo.svg';
import './App.css';
import React from 'react';


/*
// 1. Events 

class AppHeader extends React.Component {
  render() {
    return (
      <header className='ui fixed menu'>
        <nav className='ui container'>
          <a href='#' className='header item'>
            <img
              className='logo'
              src='https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png'
            />
            Lista kontaktów
          </a>
          <div className='header item'>
            <button className='ui button'>Dodaj</button>
          </div>
        </nav>
      </header>
    );
  }
}


class ContactList extends React.Component {
  render() {
    return(
      <ul className='ui relaxed divided list selection'>
        <ContactItem
          login='typeofweb1'
          name='Ala'
          department='JavaScript Developer'
        />
        <ContactItem
          login='typeofweb2'
          name='Maciek'
          department='Human Resources'
        />
        <ContactItem
          login='typeofweb3'
          name='Pati'
          department='QA'
        />
      </ul>
    );
  }
}


class ContactItem extends React.Component {
  render() {
    const { login, name, department } = this.props
    const imgUrl = 'https://api.hello-avatar.com/adorables/55/' + {login} + '.png';
    return (
      <li className="item">
        <img src={imgUrl} className="ui mini rounded image" />
        <div className="content">
        <NewButtons />
          <h4 className="header">{name}</h4>
          <div className="description">{department}</div>
        </div>
      </li>
    );
  }
}


class NewButtons extends React.Component {
  render() {
    return <button onClick={this.onClickHandler}>Kliknij!</button>;
  }
  onClickHandler() {
    alert("Kliknięto!");
  }
}


function App() { 
  return (
      <div>
        <AppHeader />
        <main className='ui main text container'>
          <ContactList />
        </main>
      </div>
    );
  }

export default App;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 1A. Below functions instead of classes + use of different avatars depending on whether the login is an e-mail or not

function AppHeader() {
  return (
    <header className='ui fixed menu'>
      <nav className='ui container'>
        <a href='#' className='header item'>
          <img
            className='logo'
            src='https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png'
          />
          Lista kontaktów
        </a>
        <div className='header item'>
          <button className='ui button'>Dodaj</button>
        </div>
      </nav>
    </header>
  );
}


function ContactList() {
  return(
    <ul className='ui relaxed divided list selection'>
      <ContactItem
        login='typeofweb1'
        name='Ala'
        department='JavaScript Developer'
      />
      <ContactItem
        login='typeofweb2'
        name='Maciek'
        department='Human Resources'
      />
      <ContactItem
        login='typeofweb3'
        name='Pati'
        department='QA'
      />
    </ul>
  );
}


function ContactItem({login, name, department}) {
  return (
    <li className='item'>
      <UserAvatar login={login}/>
      < div className='content'>
        <h4 className='header'>{name}</h4>
        <div className='description'>{department}</div>
      </div>
    </li>
  );
}


function UserAvatar({login}) {
  let avatar;

  if(login.includes('@'))
  {
    avatar='https://api.hello-avatar.com/adorables/55/' + {login} + '.png'; 
  }
  else
  {
    avatar='https://www.gravatar.com/avatar/sun';
  }
    
  return (
    <img src={avatar} className='ui mini rounded image' />
  )
}


function App() { 
  return (
      <div>
        <AppHeader />
        <main className='ui main text container'>
          <ContactList />
        </main>
      </div>
    );
  }

export default App;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 2. Forms - select in submit button

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'lime'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Remembers a chosen value
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  // Shows a new communicate
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault(); // Thx of it form doesn't show default value after alert exit (here 'Lime')
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function App() { 
  return (
      <div>
        <main className='ui main text container'>
          <FlavorForm />
        </main>
      </div>
    );
  }

  export default App;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3. State - sum, click counter and double click counter

class App extends React.Component {
  constructor() {
    super(); // super refers to the constructor of the parent class (React.Component)
    this.state = {sum: 0, clickCounter: 0, doubleClickCounter: 0}; // For the start the value is 0.
  }
  
    // These three functions below don't see 'this' that's why they have to be bind.
    increment() { 
      this.setState({
        sum: this.state.sum + 1,
        clickCounter: this.state.clickCounter + 1
      })
    }

    decrement() { 
      this.setState({
        sum: this.state.sum - 1,
        clickCounter: this.state.clickCounter + 1
      })
    }

    doubleClickIncrement() { 
      this.setState({
        doubleClickCounter: this.state.doubleClickCounter + 1,
      })
    }

  render() {
    return (
      <div>
        <output>sum {this.state.sum}</output>
        <button onClick={this.increment.bind(this)}>+</button> 
        <button onClick={this.decrement.bind(this)}>-</button>  
        
        <output>click counter {this.state.clickCounter}</output>

        <button onDoubleClick={this.doubleClickIncrement.bind(this)}>+</button> 
        <output>double click sum {this.state.doubleClickCounter}</output>
      </div>
    );
  }
}

export default App;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// 3A. State - sum, click counter and double click counter

class App extends React.Component {
  constructor() {
    super(); // super refers to the constructor of the parent class (React.Component)
    this.state = {sum: 0, clickCounter: 0, doubleClickCounter: 0}; // For the start the value is 0.
  }
  
    // These four functions below don't see 'this' that's why they have to be bind.
    increment() { 
      this.setState({
        sum: this.state.sum + 1,
        clickCounter: this.state.clickCounter + 1
      })
    }

    decrement() { 
      this.setState({
        sum: this.state.sum - 1,
        clickCounter: this.state.clickCounter + 1
      })
    }

    doubleClickIncrement() { 
      this.setState({
        doubleClickCounter: this.state.doubleClickCounter + 1,
      })
    }

  render() {
    return (
      <div>        
        <button onClick={this.increment.bind(this)}>+</button> 
        <button onClick={this.decrement.bind(this)}>-</button>  
        <div onDoubleClick={this.doubleClickIncrement.bind(this)}>
          <output>sum {this.state.sum}</output>
          <output> click counter {this.state.clickCounter}</output>
          <output> double click sum {this.state.doubleClickCounter}</output>
        </div>
      </div>
    );
  }
}

export default App;


// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// 4. State - passing a function instead of an object

class App extends React.Component {
 state = {
   firstName: "" 
  };
  
  firstNameChange = (e) => this.setState({ [e.target.name] : e.target.value });

  render() {
    return(
      <div>
        <input type="text" name="firstName" value={this.state.firstName} onInput={this.firstNameChange}/>
        <output>{this.state.firstName} </output>
      </div>
    );
  }
}

export default App;