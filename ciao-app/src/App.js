import React from 'react';
import './App.css';

// EXTRA IMPORTS
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import NavBar from './components/landing-page/NavBar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import PrivateRoute from './components/auth/PrivateRoute'
import LandingPage from './components/landing-page/LandingPage'
import Features from './components/landing-page/Features'
import Ciao from './components/app/Ciao'


function App() {
  return (
    <div className="App">
      <NavBar />
          
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/features" component={Features} />
            <PrivateRoute exact path='/ciao' component={Ciao} />
         
 
    </div>
  )
}

export default App;
