import React from "react"
import {Link} from 'react-router-dom'

//Styles
import './LandingPage.scss'

import Icon from '../../global/Icon'
import { ICONS } from '../../global/IconConstants'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

    let { pathname } = useLocation()

    return(
        <div className="landing-nav-container">
            <div className="logo-div">
            <Icon
                icon={ICONS.CIAO}
                width={50}
                height={36}
                color={pathname.includes('/home') ? '#E1473E' : '#E1473E'}
            />
            </div>
            <div className="link-div">
                <Link to="/">Home</Link>
                {/* <Link to="/features">Features</Link> */}
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}

export default NavBar

