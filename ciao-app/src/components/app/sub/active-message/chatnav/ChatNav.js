import React from 'react'
import EmptyProfilePic from '../../../../../images/empty-profile.png'

// Styles
import './ChatNav.scss'

const ChatNav = () => {
    return(
        <div className="chat-nav-container">

            <div className="chat-nav-img">
            <img src={EmptyProfilePic} />
            

            <div className="chat-nav-name-activity">
                <div>
                    <p>
                    Name
                    </p>
                </div>
                <div>
                    <p>
                    Active
                    </p>
                </div>
                </div>
                </div>

            <div className="nav-buttons">
                <a href="#">0</a>
                <a href="#">0</a>
                <a href="#">0</a>
            </div>



        </div>
    )
}

export default ChatNav