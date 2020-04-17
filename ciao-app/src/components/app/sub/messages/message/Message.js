import React from 'react'
import './Message.scss'

import EmptyProfilePic from '../../../../../images/empty-profile.png'

const Message = () => {
    var message = ["message1", "message2", "message3", "message4", "message5", "message6", "message7"]
    return(
      <div className="message-container">
        {message.map(() => 
        <div className="message-stack">

        <div className="message-stack-container">
          <div className="message-stack-img">
            <img src={EmptyProfilePic} />
          </div>
        
        <div className="message-img-name-container">
          <div className="message-stack-name">
            <p>
              Random User
            </p>
          </div>
          <div className="message-stack-preview">
            <p>
              recent message...
            </p>
          </div>
        </div>

          <div className="message-stack-time">
            <p>5 min</p>
          </div>

          </div>
          </div>
          )}
      </div>
    )
}

export default Message