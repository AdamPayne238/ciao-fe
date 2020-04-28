import React from 'react';
import './App.css';

// EXTRA IMPORTS
import { Switch, Route, Redirect, useLocation} from 'react-router-dom'

// Components
import PrivateRoute from './components/auth/PrivateRoute'
import LandingPage from './components/landing-page/LandingPage'
import Ciao from './components/app/Ciao'

function App() {

  let { pathname } = useLocation();

  return (
    <div className="App">

      {pathname.includes('/') && !pathname.includes('/ciao') && (
      <Route path="/" component={LandingPage} />
      )}
      <PrivateRoute exact path='/ciao' component={Ciao} /> 
      
    </div>
  )
}

export default App;
