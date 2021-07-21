import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <React.StrictMode>
    <App numbers={numbers}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();