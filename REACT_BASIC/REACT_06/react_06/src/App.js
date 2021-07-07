import logo from './logo.svg';
import './App.css';

function App({ title, content }) { 
  return (
      <div>
        <dialog open>
          <h1>{title}</h1>
          <p>{content}</p>
        </dialog>
      </div>
    );
  }

export default App;
