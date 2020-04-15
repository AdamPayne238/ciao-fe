import React from 'react'

import './MessageNav.scss'


const MessageNav = () => {

    return(
        <div className="message-nav-container">
            <nav>
                <a href="#">All</a>
                <a href="#">Unread</a>
                <a href="#">Groups</a>
                <a href="#">+</a>
                {/* <button><p>+</p></button> */}
            </nav>
        </div>
    )
}

export default MessageNav