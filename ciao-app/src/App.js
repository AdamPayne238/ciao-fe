import React from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Header from '../src/components/Header'
import Login from '../src/components/Login'
import Register from '../src/components/Register'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
        <Login />
        <Register />
      </header>
    </div>
  );
}

export default App;
