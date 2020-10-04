import React from 'react';
import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import ParentMenu from "./Components/ParentMenu"
function App() {
  return (
    <div className="app-container">
      <ParentMenu/>
=======
import Home from './Home'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Home/>
>>>>>>> 8ed37055f4a895476dfd5d70ab5890092a5ab464
    </div>
  );
}

export default App;
