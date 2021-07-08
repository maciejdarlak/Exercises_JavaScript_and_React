import logo from './logo.svg';
import './App.css';


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
        login='typeofweb1@'
        name='Lena'
        department='JavaScript Developer'
      />
      <ContactItem
        login='@typeofweb2'
        name='Brian'
        department='Human Resources'
      />
      <ContactItem
        login='typeofweb3'
        name='Rick'
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