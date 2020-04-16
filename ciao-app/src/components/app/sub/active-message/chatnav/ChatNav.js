import React from 'react'
import EmptyProfilePic from '../../../../../images/empty-profile.png'

// Styles
import './ChatNav.scss'

//SVG
import Icon from '../../../../../global/Icon'
import { ICONS } from '../../../../../global/IconConstants'

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
            <Icon
                icon={ICONS.PHONE}
                width={32}
                height={32}
                color="#BEBECA"
            />
            <Icon
                icon={ICONS.VIDEO}
                width={32}
                height={32}
                color="#BEBECA"
            />
            <Icon
                icon={ICONS.DOTS}
                width={32}
                height={32}
                color="#BEBECA"
            />
            </div>



        </div>
    )
}

export default ChatNav