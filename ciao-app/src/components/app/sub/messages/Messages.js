import React from 'react'
import Message from './message/Message'
import SearchConvo from './searchconvo/SearchConvo'
import MessageNav from './messagenav/MessageNav'
import './Messages.scss'

const Messages = () => {

    return(
        <div className="messages-container">
            <SearchConvo />
            <MessageNav />
            <Message />
        </div>
    )
}

export default Messages