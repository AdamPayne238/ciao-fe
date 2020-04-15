import React from 'react'
import ChatNav from './chatinput/ChatInput'
import Conversation from './conversation/Conversation'
import ChatInput from './chatinput/ChatInput'

// Styles
import './ActiveMessage.scss'

const ActiveMessage = () => {

    return(
        <div className="active-message-backdrop">
            <div className="active-message-container">
                <ChatNav />
                <Conversation />
                <ChatInput />
            </div>
        </div>
    )
}

export default ActiveMessage