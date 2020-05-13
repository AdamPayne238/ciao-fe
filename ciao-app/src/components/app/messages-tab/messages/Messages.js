import React from 'react'
import Message from './message/Message'
import SearchConvo from './searchconvo/SearchConvo'
import MessageNav from './messagenav/MessageNav'
import './Messages.scss'

import { useLocation } from 'react-router-dom'

const Messages = () => {

    let { pathname } = useLocation()

    return(
        <>
            {pathname.includes('/ciao/messages') && (
                <div className="messages-container">
            
                    <SearchConvo />
                    <MessageNav />
                    <Message />
                </div>
            )}
        </>
         
     
    )
}

export default Messages