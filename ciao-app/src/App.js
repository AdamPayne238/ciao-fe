import React from 'react';
import logo from './logo.svg';
import './App.css';

// EXTRA IMPORTS
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import Header from '../src/components/Header'
import Login from '../src/components/Login'
import Register from '../src/components/Register'

function App() {
  return (
    <div className="App">
        <Header />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
    </div>
  );
}

export default App;
