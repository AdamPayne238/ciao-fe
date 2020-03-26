import React from 'react';
import './App.css';

// EXTRA IMPORTS
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import NavBar from './components/landing-page/NavBar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import UserHome from './components/landing-page/LandingPage'

function App() {
  return (
    <div className="App">
        <NavBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={UserHome} />
          </Switch>
    </div>
  );
}

export default App;
