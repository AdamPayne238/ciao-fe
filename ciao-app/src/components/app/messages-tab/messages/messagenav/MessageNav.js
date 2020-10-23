import React from 'react'
import './MessageNav.scss'
import { NavLink } from 'react-router-dom'
import RequestChat from './request-chat/RequestChat'


const MessageNav = () => {

    return(
        <div className="message-nav-container">
          
                <NavLink to="/ciao/messages/all" activeClassName='active-sub'><a href="#">All</a></NavLink>
                <NavLink to="/ciao/messages/unread" activeClassName='active-sub'><a href="#">Unread</a></NavLink>
                <NavLink to="/ciao/messages/groups" activeClassName='active-sub'><a href="#">Groups</a></NavLink>
                <a href="#"><RequestChat /></a>
               
        </div>
    )
}

export default MessageNav