import React from 'react'
import Tabs from './sub/tabs/Tabs'
import Messages from './sub/messages/Messages'
import ActiveMessage from './sub/active-message/ActiveMessage'

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


