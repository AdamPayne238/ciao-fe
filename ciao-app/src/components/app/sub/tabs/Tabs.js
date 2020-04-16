import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import EmptyProfilePic from '../../../../images/empty-profile.png'



// Styling
import './Tabs.scss'


const Tabs = () => {
    const { pathname } = useLocation()

    return(
        <div className="tab-container">

            <div className="profile-button">
                <a href="#">...</a>
            </div>

            <div className="profile-picture">
               <img src={EmptyProfilePic}></img>
            </div>

            <div className="profile-name">
                <h2>Hello, User</h2>
            </div>

            <NavLink to="/home" activeClassName='active'>
                <div className="tab-row">
                <a color={pathname.includes('/home') ? 'black' : 'black'}>
                    Home
                </a>
                </div>
            </NavLink>

            <NavLink to="/messages">
                <div className="tab-row">
                <a color={pathname.includes('/messages') ? 'blue' : 'orange'}>
                    Messages
                </a>
                </div>
            </NavLink>

            <NavLink to="/contacts">
                <div className="tab-row">
                <a color={pathname.includes('/contacts') ? '#FB2046' : '#FB2046'}>
                    Contacts
                </a>
                </div>
            </NavLink>

            <NavLink to="/notifications">
                <div className="tab-row">
                <a color={pathname.includes('/notifications') ? '#FB2046' : '#FB2046'}>
                    Notifications
                </a>
                </div>
            </NavLink>

            <NavLink to="/settings">
                <div className="tab-row">
                <a color={pathname.includes('/settings') ? 'black' : 'black'}>
                    Settings
                </a>
                </div>
            </NavLink>

        </div>
    )
}

export default Tabs
