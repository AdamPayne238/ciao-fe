import React from 'react'

//Styles
import './MessageNav.scss'

//SVG
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'

const MessageNav = () => {

    return(
        <div className="message-nav-container">
            <nav>
                <a href="#">All</a>
                <a href="#">Unread</a>
                <a href="#">Groups</a>
                <a href="#">
                <Icon
                    icon={ICONS.PLUS}
                    width={32}
                    height={32}
                    color="#BEBECA"
                />
                </a>
                {/* <button><p>+</p></button> */}
            </nav>
        </div>
    )
}

export default MessageNav