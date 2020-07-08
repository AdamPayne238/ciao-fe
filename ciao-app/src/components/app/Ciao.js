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

// Context
import { ActivityProvider } from '../../global/context/ActivityContext'

// CONTEXT STORE
import { StoreProvider } from '../../global/context/Store'



const Ciao = () => {

    let { pathname } = useLocation()

    return(
        <>
            <div className="ciao-logo">
                <Icon
                    icon={ICONS.CIAO}
                    width={50}
                    height={36}
                    color={pathname.includes('/home') ? '#E1473E' : '#E1473E'}
                />
            </div>

            <div className="ciao-container">

                <ActivityProvider>
                    
                    <StoreProvider>

                        <Tabs />
                        <Home />
                        <Messages />
                        <ActiveMessage />
                        <Contacts />
                        <Notifications />
                        <Settings />

                    </StoreProvider>

                </ActivityProvider>
                
            </div>

            {/* Upside down reverse color logo */}
            <div className="ciao-logo-upside">
                <Icon
                    icon={ICONS.CIAO}
                    width={50}
                    height={36}
                    color={pathname.includes('/home') ? '#181926' : '#181926'} // '#181926'
                />
            </div>


        </>
    )
}

export default Ciao


