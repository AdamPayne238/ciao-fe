import React from 'react'
import ChatNav from './chatnav/ChatNav'
import Conversation from './conversation/Conversation'
import ChatInput from './chatinput/ChatInput'

import { useLocation } from 'react-router-dom'

// Styles
import './ActiveMessage.scss'

const ActiveMessage = () => {

    let { pathname } = useLocation()

    return(
        <>
            {pathname.includes('/ciao/messages') && (
                <div className="active-message-backdrop">
                    <div className="active-message-container">
                        <ChatNav />
                        <Conversation />
                        <ChatInput />
                    </div>
                </div>
            )}
        </>
    )
}

export default ActiveMessage