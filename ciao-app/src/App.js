import React from 'react';
import './App.css';

// EXTRA IMPORTS
import { Switch, Route, Redirect } from 'react-router-dom'

// Components
import PrivateRoute from './components/auth/PrivateRoute'
import LandingPage from './components/landing-page/LandingPage'
import Ciao from './components/app/Ciao'

function App() {
  return (
    <div className="App">
      <Route path="/home" component={LandingPage} />
      <PrivateRoute path='/ciao' component={Ciao} /> 
    </div>
  )
}

export default App;
