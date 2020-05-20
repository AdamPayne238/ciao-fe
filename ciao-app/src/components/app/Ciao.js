import React from 'react'
import Tabs from './tabs/Tabs'
import Messages from './messages-tab/messages/Messages'
import ActiveMessage from './messages-tab/active-message/ActiveMessage'
import Home from './home-tab/Home'
import Contacts from './contacts-tab/Contacts'
import Notifications from './notifications-tab/Notifications'
import Settings from './settings-tab/Settings'

import './Ciao.scss'


const Ciao = () => {

    return(
     
            <div className="ciao-container">

                <Tabs />

                <Home />

                <Messages />
                <ActiveMessage />

                <Contacts />

                <Notifications />

                <Settings />
                
            </div>
    
    )
}

export default Ciao


