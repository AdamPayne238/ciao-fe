import React from "react"
import { Route } from 'react-router-dom'

import Home from '../landing-page/Home'
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
            <Route exact path="/" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    )
}

export default LandingPage