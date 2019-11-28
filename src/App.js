import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Js/login';
import Linput from './Js/login_input'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Linput/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
