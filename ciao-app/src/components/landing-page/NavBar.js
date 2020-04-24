import React from "react"
import {Link} from 'react-router-dom'

//Styles
import './LandingPage.scss'

const NavBar = () => {
    return(
        <div className="landing-nav-container">
            <div className="logo-div">
                <h1>LOGO</h1>
            </div>
            <div className="link-div">
                <Link to="/home">Home</Link>
                <Link to="/home/features">Features</Link>
                <Link to='/home/register'>Register</Link>
                <Link to='/home/login'>Login</Link>
            </div>
        </div>
    )
}

export default NavBar

