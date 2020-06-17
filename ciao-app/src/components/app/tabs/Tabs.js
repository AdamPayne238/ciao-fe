import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import EmptyProfilePic from '../../../images/empty-profile.png'

// SVG
import Icon from '../../../global/Icon'
import { ICONS } from '../../../global/IconConstants'

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

            <NavLink to="/ciao/home" activeClassName='active'>
                <div className="tab-row">
                    <Icon
                        icon={ICONS.HOME}
                        width={32}
                        height={32}
                        color={pathname.includes('/home') ? '#E1473E' : '#EFC2C6'}
                    />
                    <a color={pathname.includes('/home') ? '#FB2046' : '#FB2046'}>
                        Home
                    </a>
                </div>
            </NavLink>

            {/* NEW */}
            <NavLink to="/ciao/social">
                <div className="tab-row">
                <Icon
                        icon={ICONS.WORLD}
                        width={32}
                        height={32}
                        color={pathname.includes('/social') ? '#E1473E' : '#EFC2C6'}
                    />
                <a color={pathname.includes('/social') ? '#FB2046' : '#FB2046'}>
                    Social
                </a>
                </div>
            </NavLink>

            <NavLink to="/ciao/messages">
                <div className="tab-row">
                <Icon
                        icon={ICONS.BUBBLE}
                        width={32}
                        height={32}
                        color={pathname.includes('/messages') ? '#E1473E' : '#EFC2C6'}
                    />
                <a color={pathname.includes('/messages') ? '#FB2046' : '#FB2046'}>
                    Messages
                </a>
                </div>
            </NavLink>



            <NavLink to="/ciao/contacts">
                <div className="tab-row">
                <Icon
                        icon={ICONS.NOTEBOOK}
                        width={32}
                        height={32}
                        color={pathname.includes('/contacts') ? '#E1473E' : '#EFC2C6'}
                    />
                <a color={pathname.includes('/contacts') ? '#FB2046' : '#FB2046'}>
                    Friends
                </a>
                </div>
            </NavLink>

            <NavLink to="/ciao/notifications">
                <div className="tab-row">
                <Icon
                        icon={ICONS.BELL}
                        width={32}
                        height={32}
                        color={pathname.includes('/notifications') ? '#E1473E' : '#EFC2C6'}
                    />
                <a color={pathname.includes('/notifications') ? '#FB2046' : '#FB2046'}>
                    Notifications
                </a>
                </div>
            </NavLink>

            <NavLink to="/ciao/settings">
                <div className="tab-row">
                <Icon
                        icon={ICONS.SETTINGS}
                        width={32}
                        height={32}
                        color={pathname.includes('/settings') ? '#E1473E' : '#EFC2C6'}
                    />
                <a color={pathname.includes('/settings') ? '#FB2046' : '#FB2046'}>
                    Settings
                </a>
                </div>
            </NavLink>

        </div>
    )
}

export default Tabs
