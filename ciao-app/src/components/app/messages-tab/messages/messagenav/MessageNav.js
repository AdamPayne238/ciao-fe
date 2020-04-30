import React from 'react'

//Styles
import './MessageNav.scss'

// import { NavLink, useLocation } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

//SVG
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'

const MessageNav = () => {

    return(
        <div className="message-nav-container">
          
                <NavLink to="/ciao/messages/all" activeClassName='active-sub'><a href="#">All</a></NavLink>
                <NavLink to="/ciao/messages/unread" activeClassName='active-sub'><a href="#">Unread</a></NavLink>
                <NavLink to="/ciao/messages/groups" activeClassName='active-sub'><a href="#">Groups</a></NavLink>

                <a href="#">
                <Icon
                    icon={ICONS.PLUS}
                    width={32}
                    height={32}
                    color="#BEBECA"
                />
                </a>
               
        </div>
    )
}

export default MessageNav