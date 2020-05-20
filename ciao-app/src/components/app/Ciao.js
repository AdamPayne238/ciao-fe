import React from 'react'
import Tabs from './tabs/Tabs'
import Messages from './messages-tab/messages/Messages'
import ActiveMessage from './messages-tab/active-message/ActiveMessage'
import Home from './home-tab/Home'
import Contacts from './contacts-tab/Contacts'
import Notifications from './notifications-tab/Notifications'
import Settings from './settings-tab/Settings'

import './Ciao.scss'

// SVG
import Icon from '../../global/Icon'
import { ICONS } from '../../global/IconConstants'

import { useLocation } from 'react-router-dom'


const Ciao = () => {

    let { pathname } = useLocation()

    return(
        <>
            <div className="ciao-logo">
                <Icon
                    icon={ICONS.CIAO}
                    width={50}
                    height={36}
                    color={pathname.includes('/home') ? '#E1473E' : '#EFC2C6'}
                />
            </div>

            <div className="ciao-container">

                <Tabs />

                <Home />

                <Messages />
                <ActiveMessage />

                <Contacts />

                <Notifications />

                <Settings />
                
            </div>

        </>
    )
}

export default Ciao


