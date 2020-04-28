import React from "react"
import {Link} from 'react-router-dom'

//Styles
import './LandingPage.scss'

const NavBar = () => {
    return(
        <div className="landing-nav-container">
            <div className="logo-div">
                <h1>Ciao</h1>
            </div>
            <div className="link-div">
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default NavBar

