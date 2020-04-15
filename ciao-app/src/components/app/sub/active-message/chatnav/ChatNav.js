import React from 'react'
import EmptyProfilePic from '../../../../images/empty-profile.png'

// Styles
import './ChatNav.scss'

const ChatNav = () => {
    return(
        <div className="chat-nav-container">
            <h1>HEYYYYYYYYYYY</h1>
            <div className="nav-user">
                <img src={EmptyProfilePic}></img>
                <p>Name</p>
                <p>Active</p>
            </div>

            <div className="nav-buttons">
                <a></a>
                <a></a>
                <a></a>
            </div>



        </div>
    )
}

export default ChatNav