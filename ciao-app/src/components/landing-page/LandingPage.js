import React from "react"
import { Switch, Route, Redirect } from 'react-router-dom'

import NavBar from '../landing-page/NavBar'
import Login from '../auth/Login'
import Register from '../auth/Register'
import Features from '../landing-page/Features'

//Styles
import './LandingPage.scss'

const LandingPage = () => {
    
    return(
        <div className="landing-page-container">
            <NavBar />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/features" component={Features} />
        </div>
    )
}

export default LandingPage