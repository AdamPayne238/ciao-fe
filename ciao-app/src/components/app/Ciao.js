import React from 'react'
import Tabs from './tabs/Tabs'
import Messages from './messages-tab/messages/Messages'
import ActiveMessage from './messages-tab/active-message/ActiveMessage'

import './Ciao.scss'

const Ciao = () => {

    return(
        <div className="ciao-container">
            <Tabs />
            <Messages />
            <ActiveMessage />
        </div>
    )
}

export default Ciao


